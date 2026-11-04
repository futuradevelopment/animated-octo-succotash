import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
import {planCuratedIntegration,writeCuratedPlan,readCuratedBundle,appendCuratedEntries,readPdfPageCount,planCuratedPromotion,writeCuratedPromotion,sha256,gitBlobSha} from '../scripts/lib/curated-codes.mjs';
import {validateDataset} from '../scripts/validate-data.mjs';

const repository=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const serialize=value=>JSON.stringify(value,null,2)+'\n';
function write(root,file,value){const p=path.join(root,file);fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,typeof value==='string'?value:serialize(value));}
function fixture(t,{batch='batch-46',code='P1ABC',makeId='ford',count=1}={}){
 const top=fs.mkdtempSync(path.join(os.tmpdir(),'curated-codes-'));t.after(()=>fs.rmSync(top,{recursive:true,force:true}));
 const root=path.join(top,'repo'),scratch=path.join(top,'research');fs.mkdirSync(root);fs.mkdirSync(scratch);
 const base=[{id:'generic-p0300',code:'P0300',makeId:'generic',title:'Historical unchanged title',system:'powertrain',sourceId:'community',scope:'generic',status:'published_indexable',verification:'community-reference',sourceRows:[{path:'data/code.txt',line:1,blobSha:'a'.repeat(40),manufacturer:'GENERIC',originalTitle:'Historical unchanged title'}],retained:{custom:'Keep this field and its ordering'}}];
 const makes=[{id:'generic',name:'Generic OBD-II'},{id:'ford',name:'Ford'},{id:'honda',name:'Honda'}];
 write(root,'src/data/dtc.json',base);write(root,'src/data/makes.json',makes);
 write(root,'src/data/diagnostic-source-index.json',{sources:[]});
 write(root,'research/article-assignments/manifest.json',{batches:[]});
 const publication={schemaVersion:1,releaseId:'code-articles-4000-20261031',batches:Array.from({length:40},(_,n)=>`batch-${String(n+1).padStart(2,'0')}`),expectedArticles:4000};
 write(root,'content/code-articles/publication.json',publication);
 write(scratch,'excluded-written-codes.json',['P0300']);
 const evidence=path.join(scratch,'factory.html');fs.writeFileSync(evidence,'<html><h1>Factory diagnostic fixture</h1><p>Exact scope, definition and monitor evidence.</p></html>');
 const hash=sha256(fs.readFileSync(evidence));
 const source={id:'factory',title:'Ford original factory procedure',publisher:'Ford Motor Company',url:'https://example.org/factory.html',documentScope:'Fixture system and calibration only.',makeIds:['ford'],checkedOn:'2026-11-02',sha256:hash};
 const assignments=Array.from({length:count},(_,n)=>{const c=n?'P1'+n.toString(16).toUpperCase().padStart(3,'0'):code;return {entryId:`${makeId}-${c.toLowerCase()}`,code:c,dictionaryTitle:'Documented circuit state',canonicalPath:`/codes/${makeId}/${c.toLowerCase()}/`,newCanonical:true,makeId,definitionScope:'Fixture Ford application only; confirm vehicle and module.',primaryCandidates:[{sourceId:'factory',url:source.url,scope:source.documentScope,localEvidence:evidence,sha256:hash,locator:'DTC detection logic and pinpoint test'}]};});
 const metadataFor=a=>({entryId:a.entryId,code:a.code,title:`${a.code}: Scoped circuit diagnosis`,description:'Documented evidence explains this scoped circuit condition.',status:'draft',sourceReview:'checked',scope:a.definitionScope,sourceIds:['factory'],sourceLocators:[{sourceId:'factory',locator:'DTC detection logic and pinpoint test'}],authoringBatch:batch});
 const body=a=>`# ${a.code}: Scoped circuit diagnosis\n\n## What the source establishes\n\n${Array.from({length:26},()=>`Documented ${a.code} evidence belongs to this exact diagnostic application.`).join(' ')}\n\n## Source and application\n\n[Factory procedure](${source.url})\n`;
 for(const a of assignments)write(root,`content/code-articles/${batch}/${a.code}.md`,`---\n${JSON.stringify(metadataFor(a))}\n---\n${body(a)}`);
 const claims=Object.fromEntries(assignments.map(a=>[a.code,{batch,assignment:a}]));
 write(root,`research/article-assignments/${batch}.json`,assignments);write(scratch,'reservations.json',claims);write(scratch,`writer${batch.slice(-2)}/sources.json`,[source]);
 const options={root,scratch,batches:[batch],expectedBatchSize:count};
 return {root,scratch,base,makes,publication,source,assignments,claims,options,evidence,batch,code,metadataFor,body};
}
function selectFixtureBatch(f){
 const releaseId='fixture-selected-release';
 write(f.root,'content/code-articles/publication.json',{schemaVersion:1,releaseId,batches:[f.batch],expectedArticles:f.assignments.length});
 write(f.root,'src/data/diagnostic-source-index.json',{sources:[f.source]});
 return {root:f.root,batches:[f.batch],releaseId,expectedCount:f.assignments.length};
}

test('dry-run prepares durable proof and leaves catalog/publication byte-for-byte unchanged',t=>{
 const f=fixture(t),before=fs.readFileSync(path.join(f.root,'src/data/dtc.json')),publication=fs.readFileSync(path.join(f.root,'content/code-articles/publication.json'));
 const plan=planCuratedIntegration(f.options);
 assert.equal(plan.summary.newCanonicalEntries,1);assert.equal(plan.summary.selectedArticles,4000);
 assert.deepEqual(fs.readFileSync(path.join(f.root,'src/data/dtc.json')),before);
 assert.deepEqual(fs.readFileSync(path.join(f.root,'content/code-articles/publication.json')),publication);
 assert.ok(!fs.existsSync(path.join(f.root,'src/data/curated-dtc.json')));
 const proof=[...plan.writes].find(([name])=>name.endsWith('.jsonl'));
 assert.ok(proof);assert.ok(!proof[1].includes(f.scratch));assert.ok(!proof[1].includes('localEvidence'));
});

test('write preserves every historical record, establishes real Git blob provenance and stays noindex',t=>{
 const f=fixture(t),publication=fs.readFileSync(path.join(f.root,'content/code-articles/publication.json'));
 writeCuratedPlan(planCuratedIntegration(f.options));
 const bundle=readCuratedBundle(f.root),all=JSON.parse(fs.readFileSync(path.join(f.root,'src/data/dtc.json'),'utf8'));
 assert.equal(JSON.stringify(all.slice(0,f.base.length)),JSON.stringify(f.base));
 assert.equal(bundle.entries[0].status,'published_noindex');assert.equal(bundle.entries[0].verification,'primary-source-reference');
 const row=bundle.entries[0].sourceRows[0],bytes=fs.readFileSync(path.join(f.root,row.path));
 assert.equal(row.blobSha,gitBlobSha(bytes));assert.equal(row.line,1);assert.equal(row.manufacturer,'Ford');
 const proof=JSON.parse(bytes.toString().trim());assert.equal(proof.evidence[0].sha256,sha256(fs.readFileSync(f.evidence)));
 assert.deepEqual(fs.readFileSync(path.join(f.root,'content/code-articles/publication.json')),publication);
 const result=validateDataset({codes:all,makes:f.makes,systems:['powertrain'],sources:[{id:'community',url:'https://example.org/community',kind:'dataset',checkedOn:'2026-11-02'},...bundle.sources]},{minimumCodes:0});
 assert.equal(result.status,'passed',JSON.stringify(result.failures));assert.equal(result.counts.noindexCodes,1);assert.equal(result.counts.indexableCanonicalCodes,1);
});

test('future import uses versioned evidence without local downloads and does not change base objects',t=>{
 const f=fixture(t);writeCuratedPlan(planCuratedIntegration(f.options));fs.rmSync(f.evidence);
 const before=serialize(f.base),result=appendCuratedEntries(f.root,f.base);
 assert.equal(result.length,2);assert.equal(serialize(f.base),before);assert.equal(result[0],f.base[0]);
 assert.equal(result[1].sourceId,'curated-factory');
});

test('same integration is idempotent',t=>{
 const f=fixture(t);writeCuratedPlan(planCuratedIntegration(f.options));
 const next=planCuratedIntegration(f.options);assert.equal(next.summary.newCanonicalEntries,0);assert.equal(next.writes.size,0);
});

test('partial batch cannot pass the production CLI completion gate',t=>{
 const f=fixture(t);
 assert.throws(()=>planCuratedIntegration({...f.options,expectedBatchSize:100}),/not complete/);
 const cli=spawnSync(process.execPath,[path.join(repository,'scripts/integrate-curated-codes.mjs'),'--root',f.root,'--scratch',f.scratch,'--batches',f.batch],{encoding:'utf8'});
 assert.notEqual(cli.status,0);assert.match(cli.stderr,/not complete/);
});

test('100 complete assignments pass default CLI dry-run without writing',t=>{
 const f=fixture(t,{count:100});
 const cli=spawnSync(process.execPath,[path.join(repository,'scripts/integrate-curated-codes.mjs'),'--root',f.root,'--scratch',f.scratch,'--batches',f.batch],{encoding:'utf8'});
 assert.equal(cli.status,0,cli.stderr);const result=JSON.parse(cli.stdout);assert.equal(result.mode,'dry-run');assert.equal(result.newCanonicalEntries,100);
 assert.ok(!fs.existsSync(path.join(f.root,'src/data/curated-dtc.json')));
});

test('duplicate historical display code cannot gain a new manufacturer page',t=>{
 const f=fixture(t,{code:'P0300'});assert.throws(()=>planCuratedIntegration(f.options),/Duplicate assigned\/written code/);
 const base=[...f.base,{...f.base[0],id:'honda-p1abc',code:'P1ABC',makeId:'honda'}];
 const g=fixture(t);write(g.root,'src/data/dtc.json',base);assert.throws(()=>planCuratedIntegration(g.options),/already exists in catalog/);
});

test('wrong maker, generic allocation, bad identity and absent definition scope are rejected',t=>{
 const wrong=fixture(t,{makeId:'honda'});assert.throws(()=>planCuratedIntegration(wrong.options),/wrong-manufacturer/);
 for(const [field,value,pattern] of [['code','B3001',/allocation/],['entryId','ford-wrong',/identity/],['definitionScope','',/scope/]]){
  const f=fixture(t),a=f.assignments[0];
  if(field==='code'){a.code=value;a.entryId='ford-b3001';a.canonicalPath='/codes/ford/b3001/';fs.renameSync(path.join(f.root,`content/code-articles/${f.batch}/P1ABC.md`),path.join(f.root,`content/code-articles/${f.batch}/B3001.md`));}
  else a[field]=value;
  write(f.root,`content/code-articles/${f.batch}/${a.code}.md`,`---\n${JSON.stringify({...f.metadataFor(a),scope:'Valid separate manuscript scope.'})}\n---\n${f.body(a)}`);
  write(f.root,`research/article-assignments/${f.batch}.json`,[a]);write(f.scratch,'reservations.json',{[a.code]:{batch:f.batch,assignment:a}});
  assert.throws(()=>planCuratedIntegration(f.options),pattern);
 }
});

test('missing download, changed bytes and unrelated source URL cannot become durable proof',t=>{
 const missing=fixture(t);fs.rmSync(missing.evidence);assert.throws(()=>planCuratedIntegration(missing.options),/ENOENT/);
 const changed=fixture(t);fs.appendFileSync(changed.evidence,'changed');assert.throws(()=>planCuratedIntegration(changed.options),/hash mismatch/);
 const mismatch=fixture(t);mismatch.source.url='https://example.org/unrelated';write(mismatch.scratch,'writer46/sources.json',[mismatch.source]);assert.throws(()=>planCuratedIntegration(mismatch.options),/Unresolved/);
});

test('PDF page citations cannot be attached to an HTML download',t=>{
 const f=fixture(t),a=f.assignments[0];a.primaryCandidates[0].pages=[1];
 write(f.root,`research/article-assignments/${f.batch}.json`,[a]);write(f.scratch,'reservations.json',{[a.code]:{batch:f.batch,assignment:a}});
 assert.throws(()=>planCuratedIntegration(f.options),/Invalid downloaded PDF pages/);
});

test('PDF page count uses the actual fallback reader when pdfinfo is unavailable',()=>{
 const calls=[];
 const result=readPdfPageCount('/fixture/factory.pdf',(command,args,options)=>{
  calls.push({command,args,options});
  return calls.length===1?{status:127,stderr:'libpoppler missing'}:{status:0,stdout:'218\n'};
 });
 assert.deepEqual(result,{pageCount:218,pageCountReader:'pypdf'});
 assert.equal(calls[0].command,'pdfinfo');assert.deepEqual(calls[0].args,['/fixture/factory.pdf']);
 assert.equal(calls[1].args.at(-1),'/fixture/factory.pdf');assert.match(calls[1].args[1],/PdfReader\(sys.argv\[1\]\)/);
 assert.throws(()=>readPdfPageCount('/fixture/factory.pdf',()=>({status:1,stdout:'0'})),/Cannot verify/);
});

test('source-checked claim and manuscript identity must both match',t=>{
 const f=fixture(t);f.claims[f.code].assignment.dictionaryTitle='Different source definition';write(f.scratch,'reservations.json',f.claims);
 assert.throws(()=>planCuratedIntegration(f.options),/must match/);
 const g=fixture(t),file=path.join(g.root,`content/code-articles/${g.batch}/${g.code}.md`);fs.writeFileSync(file,fs.readFileSync(file,'utf8').replace('"entryId":"ford-p1abc"','"entryId":"honda-p1abc"'));
 assert.throws(()=>planCuratedIntegration(g.options),/identity mismatch/);
});

test('published batches and concurrent publication changes prevent writes',t=>{
 const f=fixture(t);write(f.root,'content/code-articles/publication.json',{...f.publication,batches:[...f.publication.batches,f.batch]});assert.throws(()=>planCuratedIntegration(f.options),/already selected/);
 const g=fixture(t),plan=planCuratedIntegration(g.options);fs.appendFileSync(plan.publicationFile,'\n');assert.throws(()=>writeCuratedPlan(plan),/changed during/);
 assert.ok(!fs.existsSync(path.join(g.root,'src/data/curated-dtc.json')));
});

test('durable proof tampering, unselected indexable status and future dataset conflicts fail closed',t=>{
 const f=fixture(t);writeCuratedPlan(planCuratedIntegration(f.options));const bundle=readCuratedBundle(f.root);
 const evidence=path.join(f.root,bundle.entries[0].sourceRows[0].path);fs.appendFileSync(evidence,'\n');assert.throws(()=>readCuratedBundle(f.root),/hash mismatch/);
 const g=fixture(t);writeCuratedPlan(planCuratedIntegration(g.options));const saved=readCuratedBundle(g.root);
 assert.throws(()=>appendCuratedEntries(g.root,[...g.base,{id:'other-p1abc',code:'P1ABC'}]),/conflicts/);
 saved.entries[0].status='published_indexable';write(g.root,'src/data/curated-dtc.json',saved.entries);assert.throws(()=>readCuratedBundle(g.root),/not selected for publication/);
});

test('promotion rejects unselected batches, mismatched release IDs and incorrect expected counts',t=>{
 const f=fixture(t);writeCuratedPlan(planCuratedIntegration(f.options));
 assert.throws(()=>planCuratedPromotion({root:f.root,batches:[f.batch],releaseId:f.publication.releaseId}),/not selected/);
 const options=selectFixtureBatch(f);
 assert.throws(()=>planCuratedPromotion({...options,releaseId:'another-release'}),/release ID/);
 assert.throws(()=>planCuratedPromotion({...options,expectedCount:2}),/Expected 2/);
 assert.equal(readCuratedBundle(f.root).entries[0].status,'published_noindex');
});

test('selected promotion changes only statuses and preserves evidence, scopes and needs-review text',t=>{
 const f=fixture(t);writeCuratedPlan(planCuratedIntegration(f.options));
 const article=path.join(f.root,`content/code-articles/${f.batch}/${f.code}.md`);
 fs.writeFileSync(article,fs.readFileSync(article,'utf8').replace('"sourceReview":"checked"','"sourceReview":"needs-review"'));
 const options=selectFixtureBatch(f),before=readCuratedBundle(f.root),manuscriptBytes=fs.readFileSync(article),publicationBytes=fs.readFileSync(path.join(f.root,'content/code-articles/publication.json'));
 const proofBytes=fs.readFileSync(path.join(f.root,before.entries[0].sourceRows[0].path));
 const plan=planCuratedPromotion(options);
 assert.equal(plan.summary.selectedCurated,1);assert.equal(plan.summary.newlyPromoted,1);assert.equal(plan.writes.size,2);
 assert.equal(readCuratedBundle(f.root).entries[0].status,'published_noindex','dry-run must not promote');
 writeCuratedPromotion(plan);
 const after=readCuratedBundle(f.root),catalog=JSON.parse(fs.readFileSync(path.join(f.root,'src/data/dtc.json'),'utf8'));
 assert.deepEqual(after.entries[0],{...before.entries[0],status:'published_indexable'});
 assert.deepEqual(catalog,[...f.base,...after.entries]);
 assert.deepEqual(fs.readFileSync(path.join(f.root,after.entries[0].sourceRows[0].path)),proofBytes);
 assert.deepEqual(fs.readFileSync(article),manuscriptBytes);assert.deepEqual(fs.readFileSync(path.join(f.root,'content/code-articles/publication.json')),publicationBytes);
 const rerun=planCuratedPromotion(options);assert.equal(rerun.writes.size,0);assert.equal(rerun.summary.alreadyIndexable,1);
});

test('future import preserves explicitly promoted status and still validates the selected manuscript',t=>{
 const f=fixture(t);writeCuratedPlan(planCuratedIntegration(f.options));const options=selectFixtureBatch(f);writeCuratedPromotion(planCuratedPromotion(options));
 fs.rmSync(f.evidence);
 const imported=appendCuratedEntries(f.root,f.base);assert.equal(imported.at(-1).status,'published_indexable');assert.equal(imported[0],f.base[0]);
 write(f.root,'content/code-articles/publication.json',f.publication);
 assert.throws(()=>appendCuratedEntries(f.root,f.base),/not selected for publication/);
});

test('selected batch alone cannot promote an absent or mismatched manuscript',t=>{
 const f=fixture(t);writeCuratedPlan(planCuratedIntegration(f.options));const options=selectFixtureBatch(f);
 const article=path.join(f.root,`content/code-articles/${f.batch}/${f.code}.md`);fs.rmSync(article);
 assert.throws(()=>planCuratedPromotion(options),/empty published batch/);
 const g=fixture(t);writeCuratedPlan(planCuratedIntegration(g.options));const selected=selectFixtureBatch(g);
 const wrong=path.join(g.root,`content/code-articles/${g.batch}/${g.code}.md`);fs.writeFileSync(wrong,fs.readFileSync(wrong,'utf8').replace('"entryId":"ford-p1abc"','"entryId":"missing-p1abc"'));
 assert.throws(()=>planCuratedPromotion(selected),/unknown entryId/);
});

test('promotion leaves a separate unselected curated batch at noindex',t=>{
 const f=fixture(t);writeCuratedPlan(planCuratedIntegration(f.options));
 const a={...structuredClone(f.assignments[0]),entryId:'ford-p1abd',code:'P1ABD',canonicalPath:'/codes/ford/p1abd/'};
 const batch='batch-47',metadata={...f.metadataFor(a),authoringBatch:batch};
 write(f.root,`content/code-articles/${batch}/${a.code}.md`,`---\n${JSON.stringify(metadata)}\n---\n${f.body(a)}`);
 write(f.root,`research/article-assignments/${batch}.json`,[a]);write(f.scratch,'writer47/sources.json',[f.source]);
 write(f.scratch,'reservations.json',{...f.claims,[a.code]:{batch,assignment:a}});
 writeCuratedPlan(planCuratedIntegration({...f.options,batches:[batch]}));
 const options=selectFixtureBatch(f),plan=planCuratedPromotion(options);assert.equal(plan.summary.curatedDraftsRemaining,1);writeCuratedPromotion(plan);
 const entries=readCuratedBundle(f.root).entries;
 assert.equal(entries.find(entry=>entry.id===f.assignments[0].entryId).status,'published_indexable');
 assert.equal(entries.find(entry=>entry.id===a.entryId).status,'published_noindex');
});

test('promotion refuses changed manuscript or evidence inputs before writing',t=>{
 const f=fixture(t);writeCuratedPlan(planCuratedIntegration(f.options));const options=selectFixtureBatch(f),plan=planCuratedPromotion(options);
 fs.appendFileSync(path.join(f.root,`content/code-articles/${f.batch}/${f.code}.md`),'\nAn additional unreviewed sentence.\n');
 assert.throws(()=>writeCuratedPromotion(plan),/Promotion input changed/);assert.equal(readCuratedBundle(f.root).entries[0].status,'published_noindex');
 const g=fixture(t);writeCuratedPlan(planCuratedIntegration(g.options));const selected=selectFixtureBatch(g),next=planCuratedPromotion(selected),bundle=readCuratedBundle(g.root);
 fs.appendFileSync(path.join(g.root,bundle.entries[0].sourceRows[0].path),'\n');assert.throws(()=>writeCuratedPromotion(next),/Promotion input changed/);
 assert.equal(JSON.parse(fs.readFileSync(path.join(g.root,'src/data/curated-dtc.json'),'utf8'))[0].status,'published_noindex');
});

test('current real publication explicitly selects the 5000-article release and preserves historical catalog entries',()=>{
 const publication=JSON.parse(fs.readFileSync(path.join(repository,'content/code-articles/publication.json'),'utf8'));
 assert.equal(publication.expectedArticles,5000);assert.equal(publication.releaseId,'code-articles-5000-20261102');assert.deepEqual(publication.batches,Array.from({length:50},(_,n)=>`batch-${String(n+1).padStart(2,'0')}`));
 const original=spawnSync('git',['show','HEAD:src/data/dtc.json'],{cwd:repository,encoding:'utf8',maxBuffer:20*1024*1024});assert.equal(original.status,0,original.stderr);
 const historical=JSON.parse(original.stdout).filter(entry=>entry.verification!=='primary-source-reference');
 const actual=JSON.parse(fs.readFileSync(path.join(repository,'src/data/dtc.json'),'utf8')).filter(entry=>entry.verification!=='primary-source-reference');
 assert.equal(JSON.stringify(actual),JSON.stringify(historical));
});
