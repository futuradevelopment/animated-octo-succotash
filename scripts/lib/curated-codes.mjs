import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {spawnSync} from 'node:child_process';
import {isDeepStrictEqual} from 'node:util';
import {loadCodeManuscripts} from './code-manuscripts.mjs';

const codePattern=/^[PBCU][0-3][0-9A-F]{3}$/;
const systemFor={P:'powertrain',B:'body',C:'chassis',U:'network'};
const manifestPath='src/data/curated-code-manifest.json';
const entriesPath='src/data/curated-dtc.json';
const sourcesPath='src/data/curated-sources.json';
const evidencePrefix='research/curated-code-evidence/';
const maxShardBytes=170000;
export const sha256=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
export const gitBlobSha=bytes=>crypto.createHash('sha1').update(`blob ${Buffer.byteLength(bytes)}\0`).update(bytes).digest('hex');
const json=(root,file,fallback)=>{const p=path.join(root,file);return fs.existsSync(p)?JSON.parse(fs.readFileSync(p,'utf8')):fallback;};
const serialized=value=>`${JSON.stringify(value,null,2)}\n`;
const nonempty=value=>typeof value==='string'&&Boolean(value.trim());
const requireThat=(condition,message)=>{if(!condition)throw new Error(message);};
const manufacturerCode=code=>codePattern.test(code)&&(/^(?:P1|[BCU][12])/.test(code)||(/^P3/.test(code)&&parseInt(code.slice(1),16)<0x3400));
const scopedPath=(root,relative)=>{
 requireThat(typeof relative==='string'&&!path.isAbsolute(relative)&&relative.split(/[\\/]/).every(p=>p&&p!=='.'&&p!=='..'),`Unsafe evidence path: ${relative}`);
 return path.join(root,relative);
};

export function readPdfPageCount(filename,run=spawnSync){
 const info=run('pdfinfo',[filename],{encoding:'utf8',timeout:20000});
 const count=info.stdout?.match(/^Pages:\s+(\d+)$/m);
 if(info.status===0&&count&&Number(count[1])>0)return {pageCount:Number(count[1]),pageCountReader:'pdfinfo'};
 // Some managed runtimes expose a pdfinfo binary without its shared library.
 // Read the actual PDF with pypdf instead of trusting a supplied catalog count.
 const script='import sys\nfrom pypdf import PdfReader\nprint(len(PdfReader(sys.argv[1]).pages))\n';
 const parsed=run(process.env.CODEX_PRIMARY_RUNTIME_PYTHON||'python',[ '-c',script,filename],{encoding:'utf8',timeout:20000});
 const value=Number(parsed.stdout?.trim());
 requireThat(parsed.status===0&&Number.isInteger(value)&&value>0,`Cannot verify downloaded PDF page count; working pdfinfo or Python pypdf is required: ${filename}`);
 return {pageCount:value,pageCountReader:'pypdf'};
}

function validateEntry(entry,makes){
 requireThat(manufacturerCode(entry.code),`Curated code outside manufacturer allocation: ${entry.code}`);
 requireThat(makes.has(entry.makeId)&&entry.makeId!=='generic',`Unknown curated manufacturer: ${entry.makeId}`);
 requireThat(entry.id===`${entry.makeId}-${entry.code.toLowerCase()}`,`Curated identity mismatch: ${entry.id}`);
 requireThat(entry.system===systemFor[entry.code[0]]&&entry.scope==='manufacturer',`Curated allocation mismatch: ${entry.id}`);
 requireThat(['published_noindex','published_indexable'].includes(entry.status)&&entry.verification==='primary-source-reference',`Curated publication/verification gate failed: ${entry.id}`);
 requireThat(nonempty(entry.definitionScope)&&nonempty(entry.title)&&entry.title.trim().length>=3,`Missing curated definition scope/title: ${entry.id}`);
 requireThat(!entry.makeIds||isDeepStrictEqual(entry.makeIds,[entry.makeId]),`Curated entry cannot borrow manufacturer aliases: ${entry.id}`);
 requireThat(Array.isArray(entry.sourceRows)&&entry.sourceRows.length===1,`Curated entry requires one durable evidence row: ${entry.id}`);
}

/** Read only durable, versioned proof. No dependency on a writer's local download cache. */
export function readCuratedBundle(root){
 const manifest=json(root,manifestPath,null);
 if(!manifest){
  requireThat(!fs.existsSync(path.join(root,entriesPath))&&!fs.existsSync(path.join(root,sourcesPath)),'Curated files exist without their manifest');
  return {entries:[],sources:[],manifest:{schemaVersion:1,entries:entriesPath,sources:sourcesPath,evidenceFiles:[]},proof:new Map()};
 }
 requireThat(manifest.schemaVersion===1&&manifest.entries===entriesPath&&manifest.sources===sourcesPath&&Array.isArray(manifest.evidenceFiles),'Invalid curated manifest');
 const entries=json(root,entriesPath,null),sources=json(root,sourcesPath,null),proof=new Map();
 requireThat(Array.isArray(entries)&&Array.isArray(sources),'Missing curated entries or source catalog');
 const sourceMap=new Map();
 for(const source of sources){
  requireThat(nonempty(source.id)&&!sourceMap.has(source.id),`Duplicate curated source: ${source.id}`);
  requireThat(source.kind==='manufacturer'&&nonempty(source.title)&&nonempty(source.publisher)&&/^https:\/\//.test(source.url)&&/^\d{4}-\d{2}-\d{2}$/.test(source.checkedOn),`Invalid curated source: ${source.id}`);
  sourceMap.set(source.id,source);
 }
 const paths=new Set();
 for(const file of manifest.evidenceFiles){
  requireThat(file.path.startsWith(evidencePrefix)&&!paths.has(file.path),`Duplicate/invalid curated proof file: ${file.path}`);paths.add(file.path);
  const bytes=fs.readFileSync(scopedPath(root,file.path));
  requireThat(bytes.length<=maxShardBytes&&sha256(bytes)===file.sha256&&gitBlobSha(bytes)===file.blobSha,`Curated evidence hash mismatch: ${file.path}`);
  requireThat(path.basename(file.path)===`${file.sha256}.jsonl`,`Curated evidence filename mismatch: ${file.path}`);
  const rows=bytes.toString('utf8').trimEnd().split('\n').map(line=>JSON.parse(line));
  requireThat(rows.length===file.records,`Curated evidence row count mismatch: ${file.path}`);
  rows.forEach((record,index)=>proof.set(`${file.path}:${index+1}`,{record,blobSha:file.blobSha}));
 }
 const makes=new Map(json(root,'src/data/makes.json',[]).map(make=>[make.id,make]));
 const publication=entries.some(entry=>entry.status==='published_indexable')?json(root,'content/code-articles/publication.json',null):null;
 let selectedManuscripts;
 const seenIds=new Set(),seenCodes=new Set(),usedProof=new Set(),usedSources=new Set();
 for(const entry of entries){
  validateEntry(entry,makes);
  requireThat(!seenIds.has(entry.id)&&!seenCodes.has(entry.code),`Duplicate curated code: ${entry.code}`);seenIds.add(entry.id);seenCodes.add(entry.code);
  const row=entry.sourceRows[0],key=`${row.path}:${row.line}`,saved=proof.get(key),record=saved?.record;
  requireThat(saved&&saved.blobSha===row.blobSha&&!usedProof.has(key),`Missing/shared curated proof row: ${entry.id}`);usedProof.add(key);
  requireThat(row.manufacturer===makes.get(entry.makeId).name&&row.originalTitle===entry.title,`Curated source row identity mismatch: ${entry.id}`);
  requireThat(record.schemaVersion===1&&record.entryId===entry.id&&record.code===entry.code&&record.makeId===entry.makeId&&record.definition===entry.title&&record.definitionScope===entry.definitionScope,`Curated proof definition mismatch: ${entry.id}`);
  if(entry.status==='published_indexable'){
   requireThat(publication?.schemaVersion===1&&Array.isArray(publication.batches)&&publication.batches.includes(record.authoringBatch),`Curated indexable entry is not selected for publication: ${entry.id}`);
   selectedManuscripts??=new Map(loadCodeManuscripts(root).articles.map(article=>[article.entryId,article]));
   const manuscript=selectedManuscripts.get(entry.id);
   requireThat(manuscript?.code===entry.code&&manuscript.authoringBatch===record.authoringBatch,`Curated indexable entry lacks its selected manuscript: ${entry.id}`);
  }
  requireThat(Array.isArray(record.evidence)&&record.evidence.length>0,`Missing curated evidence: ${entry.id}`);
  for(const evidence of record.evidence){
   const source=sourceMap.get(evidence.sourceId);usedSources.add(evidence.sourceId);
   requireThat(source&&source.url===evidence.url&&evidence.makeIds?.includes(entry.makeId)&&/^[a-f0-9]{64}$/.test(evidence.sha256)&&nonempty(evidence.scope),`Invalid curated evidence source: ${entry.id}`);
   requireThat(nonempty(evidence.locator)||(evidence.pages?.length&&evidence.pages.every(p=>Number.isInteger(p)&&p>0&&p<=evidence.pageCount)),`Invalid curated evidence locator: ${entry.id}`);
   requireThat(!('localEvidence' in evidence)&&!('localText' in evidence)&&!('localPdf' in evidence),`Local paths in durable evidence: ${entry.id}`);
  }
  requireThat(entry.sourceId===record.evidence[0].sourceId,`Curated primary source mismatch: ${entry.id}`);
 }
 requireThat(usedProof.size===proof.size&&usedSources.size===sources.length,'Orphaned curated evidence/source records');
 return {entries,sources,manifest,proof};
}

/** Importer appends verified curated entries without rewriting any community record. */
export function appendCuratedEntries(root,baseEntries){
 const {entries}=readCuratedBundle(root),ids=new Set(baseEntries.map(e=>e.id)),codes=new Set(baseEntries.map(e=>e.code));
 for(const entry of entries){
  requireThat(!ids.has(entry.id)&&!codes.has(entry.code),`Curated code conflicts with existing catalog: ${entry.code}`);
  ids.add(entry.id);codes.add(entry.code);
 }
 return [...baseEntries,...entries];
}

/** Explicit release preparation: selection permits promotion but never promotes implicitly on import. */
export function planCuratedPromotion({root,batches,releaseId,expectedCount}){
 requireThat(Array.isArray(batches)&&batches.length>0&&new Set(batches).size===batches.length&&batches.every(batch=>/^batch-\d{2}$/.test(batch)),'Specify unique explicit promotion --batches');
 requireThat(nonempty(releaseId),'Specify the exact promotion --release-id');
 requireThat(expectedCount===undefined||(Number.isInteger(expectedCount)&&expectedCount>=0),'Invalid expected curated promotion count');
 const publication=json(root,'content/code-articles/publication.json',null);
 requireThat(publication?.releaseId===releaseId,'Publication release ID does not match promotion target');
 requireThat(Array.isArray(publication.batches)&&batches.every(batch=>publication.batches.includes(batch)),'Cannot promote a batch not selected for publication');
 const bundle=readCuratedBundle(root),catalog=json(root,'src/data/dtc.json',null);
 requireThat(Array.isArray(catalog),'Missing canonical code catalog');
 const catalogById=new Map(catalog.map(entry=>[entry.id,entry]));
 requireThat(catalogById.size===catalog.length,'Duplicate canonical IDs during promotion');
 for(const entry of bundle.entries)requireThat(isDeepStrictEqual(catalogById.get(entry.id),entry),`Curated catalog differs before promotion: ${entry.id}`);
 const loaded=loadCodeManuscripts(root),selected=new Map(loaded.articles.map(article=>[article.entryId,article]));
 const targetBatches=new Set(batches),updates=new Map();let selectedCurated=0,alreadyIndexable=0;
 for(const entry of bundle.entries){
  const row=entry.sourceRows[0],record=bundle.proof.get(`${row.path}:${row.line}`).record;
  if(!targetBatches.has(record.authoringBatch))continue;
  const manuscript=selected.get(entry.id);
  requireThat(manuscript?.code===entry.code&&manuscript.authoringBatch===record.authoringBatch,`Promotion target lacks its selected manuscript: ${entry.id}`);
  selectedCurated++;
  if(entry.status==='published_indexable'){alreadyIndexable++;continue;}
  updates.set(entry.id,{...entry,status:'published_indexable'});
 }
 if(expectedCount!==undefined)requireThat(selectedCurated===expectedCount,`Expected ${expectedCount} selected curated records, found ${selectedCurated}`);
 const updatedEntries=bundle.entries.map(entry=>updates.get(entry.id)||entry),updatedCatalog=catalog.map(entry=>updates.get(entry.id)||entry);
 const writes=new Map();
 if(updates.size){writes.set(entriesPath,serialized(updatedEntries));writes.set('src/data/dtc.json',serialized(updatedCatalog));}
 const guardedFiles=['content/code-articles/publication.json',manifestPath,entriesPath,sourcesPath,'src/data/dtc.json',...bundle.manifest.evidenceFiles.map(file=>file.path)];
 const inputHashes=new Map(guardedFiles.map(relative=>[relative,sha256(fs.readFileSync(path.join(root,relative)))]));
 // Freeze every selected manuscript and source partition as well as the release selection.
 const sourceIndex=json(root,'src/data/diagnostic-source-index.json',{});
 for(const relative of ['src/data/diagnostic-source-index.json',...(sourceIndex.sourceFiles||[]).map(part=>`src/data/${part}`),...loaded.articles.map(article=>article.path)])inputHashes.set(relative,sha256(fs.readFileSync(path.join(root,relative))));
 return {root,writes,inputHashes,summary:{releaseId,batches,selectedArticles:loaded.articles.length,selectedCurated,newlyPromoted:updates.size,alreadyIndexable,curatedDraftsRemaining:updatedEntries.filter(entry=>entry.status==='published_noindex').length,unchangedCanonicalRecords:catalog.length-updates.size,publicationChanged:false,evidenceChanged:false,manuscriptsChanged:false,files:[...writes.keys()]}};
}

export function writeCuratedPromotion(plan){
 for(const [relative,expected] of plan.inputHashes)requireThat(sha256(fs.readFileSync(scopedPath(plan.root,relative)))===expected,`Promotion input changed since planning: ${relative}`);
 const staged=[];
 for(const [relative,body] of plan.writes){const target=scopedPath(plan.root,relative),temporary=`${target}.tmp-${process.pid}`;fs.writeFileSync(temporary,body);staged.push({target,temporary});}
 for(const {target,temporary} of staged)fs.renameSync(temporary,target);
 const bundle=readCuratedBundle(plan.root),catalog=json(plan.root,'src/data/dtc.json',[]),byId=new Map(catalog.map(entry=>[entry.id,entry]));
 for(const entry of bundle.entries)requireThat(isDeepStrictEqual(byId.get(entry.id),entry),`Curated catalog differs after promotion: ${entry.id}`);
 return plan.summary;
}

function sourceRecords(root,scratch,batches){
 const index=json(root,'src/data/diagnostic-source-index.json',{}),records=[...(index.sources||[])];
 for(const part of index.sourceFiles||[])records.push(...json(root,`src/data/${part}`,[]));
 for(const batch of batches)records.push(...json(scratch,`writer${batch.slice(-2)}/sources.json`,[]));
 const byId=new Map();
 for(const source of records){
  const prior=byId.get(source.id);
  requireThat(!prior||prior.url===source.url,`Conflicting diagnostic source URL: ${source.id}`);
  if(prior?.sha256&&source.sha256)requireThat(prior.sha256===source.sha256,`Conflicting diagnostic source hash: ${source.id}`);
  byId.set(source.id,{...prior,...source,makeIds:[...new Set([...(prior?.makeIds||[]),...(source.makeIds||[])])]});
 }
 return byId;
}

function readManuscript(root,batch,assignment){
 const file=`content/code-articles/${batch}/${assignment.code}.md`,text=fs.readFileSync(path.join(root,file),'utf8');
 const match=text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
 requireThat(match,`Invalid manuscript frontmatter: ${file}`);
 const metadata=JSON.parse(match[1]),body=match[2];
 requireThat(metadata.entryId===assignment.entryId&&metadata.code===assignment.code&&metadata.authoringBatch===batch&&metadata.status==='draft',`Manuscript identity mismatch: ${file}`);
 requireThat(['checked','needs-review'].includes(metadata.sourceReview)&&nonempty(metadata.scope)&&metadata.title?.includes(assignment.code)&&/[.!?]$/.test(metadata.description||''),`Incomplete manuscript metadata: ${file}`);
 requireThat((body.replace(/https?:\/\/\S+/g,'').match(/\b[\w'-]+\b/g)||[]).length>=150&&(body.match(/^## /gm)||[]).length>=2,`Incomplete manuscript body: ${file}`);
 for(const candidate of assignment.primaryCandidates||[]){
  requireThat(metadata.sourceIds?.includes(candidate.sourceId),`Manuscript omits claimed source: ${file}`);
  const pages=metadata.sourcePages?.find(e=>e.sourceId===candidate.sourceId)?.pages;
  const locator=metadata.sourceLocators?.find(e=>e.sourceId===candidate.sourceId)?.locator;
  requireThat((pages?.length||nonempty(locator))&&body.includes(candidate.url),`Manuscript omits source evidence/link: ${file}`);
 }
 return metadata;
}

function evidenceFor(candidate,assignment,sourceMap,cache){
 const source=sourceMap.get(candidate.sourceId);
 requireThat(source&&source.url===candidate.url&&source.makeIds?.includes(assignment.makeId),`Unresolved or wrong-manufacturer source: ${assignment.code}/${candidate.sourceId}`);
 requireThat(nonempty(source.title)&&nonempty(source.publisher)&&/^\d{4}-\d{2}-\d{2}$/.test(source.checkedOn),`Incomplete source catalog metadata: ${candidate.sourceId}`);
 const filename=candidate.localEvidence;
 requireThat(nonempty(filename)&&path.isAbsolute(filename),`Missing downloaded source: ${assignment.code}`);
 let file=cache.get(filename);
 if(!file){
  const bytes=fs.readFileSync(filename),isPdf=bytes.subarray(0,5).toString()==='%PDF-';
  file={sha256:sha256(bytes),isPdf};
  if(isPdf){
   Object.assign(file,readPdfPageCount(filename));
  }
  cache.set(filename,file);
 }
 requireThat(file.sha256===candidate.sha256&&(!source.sha256||source.sha256===file.sha256),`Downloaded source hash mismatch: ${assignment.code}`);
 const pages=[...new Set(candidate.pages||[candidate.page].filter(Boolean))].sort((a,b)=>a-b);
 if(pages.length)requireThat(file.isPdf&&pages.every(p=>Number.isInteger(p)&&p>0&&p<=file.pageCount),`Invalid downloaded PDF pages: ${assignment.code}`);
 requireThat(pages.length||nonempty(candidate.locator),`Missing source locator: ${assignment.code}`);
 if(source.pageCount!==undefined)requireThat(source.pageCount===file.pageCount,`Source catalog PDF page count mismatch: ${candidate.sourceId}`);
 const sourceId=`curated-${candidate.sourceId}`;
 const catalog={id:sourceId,title:source.title,publisher:source.publisher,url:source.url,checkedOn:source.checkedOn,kind:'manufacturer',scope:source.documentScope||candidate.scope};
 const proof={sourceId,diagnosticSourceId:candidate.sourceId,url:source.url,sha256:file.sha256,scope:candidate.scope,makeIds:source.makeIds,...(pages.length?{pages,pageCount:file.pageCount}:{}),...(nonempty(candidate.locator)?{locator:candidate.locator}:{})};
 return {catalog,proof};
}

/** Prepare all writes in memory. Authoring claims and downloads are inputs, never persisted verbatim. */
export function planCuratedIntegration({root,scratch,batches,expectedBatchSize=100}){
 requireThat(Array.isArray(batches)&&batches.length>0&&new Set(batches).size===batches.length&&batches.every(b=>/^batch-\d{2}$/.test(b)),'Specify unique explicit --batches');
 const publicationFile=path.join(root,'content/code-articles/publication.json'),publicationBytes=fs.readFileSync(publicationFile),publication=JSON.parse(publicationBytes);
 requireThat(batches.every(b=>!publication.batches.includes(b)),'Cannot curate a batch already selected for publication');
 const old=readCuratedBundle(root),allCodes=json(root,'src/data/dtc.json',[]),oldById=new Map(old.entries.map(e=>[e.id,e]));
 for(const entry of old.entries)requireThat(isDeepStrictEqual(allCodes.find(e=>e.id===entry.id),entry),`Existing curated catalog record changed: ${entry.id}`);
 const base=allCodes.filter(e=>!oldById.has(e.id)),existingCodes=new Set(base.map(e=>e.code));
 const makes=new Map(json(root,'src/data/makes.json',[]).map(m=>[m.id,m]));
 const claims=json(scratch,'reservations.json',{}),sourceMap=sourceRecords(root,scratch,batches),fileCache=new Map(),additions=[],newSources=new Map(),seenCodes=new Set();
 const assignmentManifest=json(root,'research/article-assignments/manifest.json',{batches:[]});
 const assignedElsewhere=new Set(assignmentManifest.batches.filter(b=>!batches.includes(b.batch)).flatMap(b=>json(root,b.assignment,[]).map(a=>a.code)));
 const alreadyWritten=new Set(json(scratch,'excluded-written-codes.json',[]));
 let checkedManuscripts=0;
 for(const batch of batches){
  const assignments=json(root,`research/article-assignments/${batch}.json`,null);
  requireThat(Array.isArray(assignments)&&assignments.length===expectedBatchSize,`Batch is not complete (${expectedBatchSize} assignments): ${batch}`);
  const filenames=fs.readdirSync(path.join(root,'content/code-articles',batch)).filter(name=>/^[PBCU][0-3][0-9A-F]{3}\.md$/.test(name));
  requireThat(filenames.length===expectedBatchSize,`Batch is not complete (${expectedBatchSize} manuscripts): ${batch}`);
  for(const assignment of assignments){
   requireThat(!seenCodes.has(assignment.code)&&!assignedElsewhere.has(assignment.code)&&!alreadyWritten.has(assignment.code),`Duplicate assigned/written code: ${assignment.code}`);seenCodes.add(assignment.code);
   readManuscript(root,batch,assignment);checkedManuscripts++;
   if(!assignment.newCanonical)continue;
   const prior=oldById.get(assignment.entryId);
   if(prior){requireThat(prior.code===assignment.code&&prior.title===assignment.dictionaryTitle&&prior.definitionScope===assignment.definitionScope,'Previously integrated curated assignment changed');continue;}
   const claim=claims[assignment.code];
   requireThat(claim?.batch===batch&&isDeepStrictEqual(claim.assignment,assignment),`Curated assignment must match its source-checked reservation: ${assignment.code}`);
   requireThat(!existingCodes.has(assignment.code),`Curated code already exists in catalog: ${assignment.code}`);existingCodes.add(assignment.code);
   requireThat(assignment.canonicalPath===`/codes/${assignment.makeId}/${assignment.code.toLowerCase()}/`&&nonempty(assignment.definitionScope),`Curated scope/path mismatch: ${assignment.code}`);
   requireThat(assignment.primaryCandidates?.length>0,`Missing primary evidence: ${assignment.code}`);
   const evidence=assignment.primaryCandidates.map(candidate=>evidenceFor(candidate,assignment,sourceMap,fileCache));
   for(const {catalog} of evidence){const priorSource=newSources.get(catalog.id)||old.sources.find(s=>s.id===catalog.id);requireThat(!priorSource||isDeepStrictEqual(priorSource,catalog),`Conflicting curated source catalog: ${catalog.id}`);newSources.set(catalog.id,catalog);}
   const entry={id:assignment.entryId,code:assignment.code,makeId:assignment.makeId,title:assignment.dictionaryTitle,system:systemFor[assignment.code[0]],sourceId:evidence[0].catalog.id,scope:'manufacturer',status:'published_noindex',verification:'primary-source-reference',definitionScope:assignment.definitionScope,sourceRows:[]};
   const record={schemaVersion:1,entryId:entry.id,code:entry.code,makeId:entry.makeId,definition:entry.title,definitionScope:entry.definitionScope,authoringBatch:batch,evidence:evidence.map(e=>e.proof)};
   additions.push({entry,record});
  }
 }
 additions.sort((a,b)=>a.entry.id.localeCompare(b.entry.id));
 const writes=new Map(),newFiles=[];
 let chunk=[],bytes=0;
 function finishChunk(){
  if(!chunk.length)return;
  const body=chunk.map(item=>JSON.stringify(item.record)+'\n').join(''),hash=sha256(body),file=`${evidencePrefix}${hash}.jsonl`,blobSha=gitBlobSha(body);
  newFiles.push({path:file,sha256:hash,blobSha,records:chunk.length});writes.set(file,body);
  chunk.forEach(({entry},index)=>{entry.sourceRows=[{path:file,line:index+1,blobSha,manufacturer:makes.get(entry.makeId)?.name,originalTitle:entry.title}];validateEntry(entry,makes);});
  chunk=[];bytes=0;
 }
 for(const item of additions){const size=Buffer.byteLength(JSON.stringify(item.record)+'\n');requireThat(size<=maxShardBytes,`Single evidence row too large: ${item.entry.id}`);if(bytes+size>maxShardBytes)finishChunk();chunk.push(item);bytes+=size;}finishChunk();
 const entries=[...old.entries,...additions.map(item=>item.entry)],sources=[...old.sources,...[...newSources.values()].filter(s=>!old.sources.some(p=>p.id===s.id))];
 const manifest={...old.manifest,evidenceFiles:[...old.manifest.evidenceFiles,...newFiles]};
 if(additions.length){
  writes.set(entriesPath,serialized(entries));writes.set(sourcesPath,serialized(sources));
  writes.set('src/data/dtc.json',serialized([...allCodes,...additions.map(item=>item.entry)]));writes.set(manifestPath,serialized(manifest));
 }
 return {root,writes,publicationBytes,publicationFile,summary:{batches,checkedManuscripts,newCanonicalEntries:additions.length,curatedEntries:entries.length,historicalEntries:base.length,newEvidenceShards:newFiles.length,selectedArticles:publication.expectedArticles,publicationChanged:false,files:[...writes.keys()]}};
}

export function writeCuratedPlan(plan){
 requireThat(fs.readFileSync(plan.publicationFile).equals(plan.publicationBytes),'Publication selection changed during curation');
 // The manifest is last, so an interrupted write never presents missing proof as complete.
 for(const [relative,body] of plan.writes){const target=scopedPath(plan.root,relative);fs.mkdirSync(path.dirname(target),{recursive:true});const tmp=`${target}.tmp-${process.pid}`;fs.writeFileSync(tmp,body);fs.renameSync(tmp,target);}
 requireThat(fs.readFileSync(plan.publicationFile).equals(plan.publicationBytes),'Curation must not change publication selection');
 readCuratedBundle(plan.root);
 return plan.summary;
}
