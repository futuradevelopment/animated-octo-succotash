import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,mkdtempSync,mkdirSync,writeFileSync,rmSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {join} from 'node:path';
import {fileURLToPath} from 'node:url';
import {buildArticleCoverage,screenCodeArticle,REQUIRED_SECTION_KINDS} from '../scripts/article-coverage.mjs';

const entry=(id,code,makeId,scope='manufacturer')=>({id,code,makeId,scope,sourceId:'dictionary'});
const primary={id:'oem',kind:'manufacturer',url:'https://example.org/manual'};
function validArticle(entryId='ford-p1234',code='P1234'){
 return {entryId,title:`${code}: documented diagnostic case`,description:'A specifically evidenced diagnostic article.',reviewStatus:'approved',reviewedBy:'Editorial review fixture',reviewedOn:'2026-10-30',vehicleScope:{makeIds:['ford'],description:'Exact test-fixture model and engine'},
  sections:REQUIRED_SECTION_KINDS.map(kind=>({id:kind,kind,title:kind,paragraphs:[`Reviewed ${kind} findings for this exact diagnostic case.`],claimIds:[kind],...(kind==='diagnosis'?{decisions:[{finding:'Measured condition A',consequence:'Follow diagnostic branch A',claimIds:['diagnosis']},{finding:'Measured condition B',consequence:'Follow diagnostic branch B',claimIds:['diagnosis']}]}:{})})),
  claimEvidence:[{sourceId:'oem',locator:'Page 4, conditional diagnostic table',vehicleScope:{makeIds:['ford'],description:'Exact test-fixture model and engine'},codes:[code],claimIds:REQUIRED_SECTION_KINDS}]
 };
}

test('every canonical entry is tracked once and duplicate identifiers/routes are rejected',()=>{
 const entries=[entry('ford-p1234','P1234','ford'),entry('chevrolet-p1234','P1234','chevrolet')];
 const result=buildArticleCoverage({entries});assert.equal(result.backlog.length,2);assert.equal(result.summary.counts.distinctCodeStrings,1);
 assert.throws(()=>buildArticleCoverage({entries:[...entries,entries[0]]}),/Duplicate canonical/);
 assert.throws(()=>buildArticleCoverage({entries:[entries[0],{...entries[0],id:'another'}]}),/Duplicate canonical/);
});

test('guide matching respects manufacturer collisions and exact code suffixes',()=>{
 const entries=[entry('ford-p1234','P1234','ford'),entry('chevrolet-p1234','P1234','chevrolet'),entry('generic-p0300','P0300','generic','generic')];
 const guides=[{id:'ford-case',makeId:'ford',codes:['P1234']},{id:'extended',makeId:'toyota',codes:['P030000']}];
 const {backlog,summary}=buildArticleCoverage({entries,guides});
 assert.deepEqual(backlog.map(row=>row.relevantGuideIds),[['ford-case'],[],[]]);assert.equal(summary.counts.approvedCodeArticles,0);assert.equal(summary.target.met,false);
});

test('scoped primary-source mentions are candidates, never completed articles or corporate make inference',()=>{
 const entries=[entry('ford-p1234','P1234','ford'),entry('lincoln-p1234','P1234','lincoln'),entry('generic-p0300','P0300','generic','generic')];
 const sourceIndex={sources:[{id:'ford-document',makeIds:['ford'],documentScope:'One Ford engine family',codeMentions:[{code:'P1234',pages:[2]},{code:'P0300',pages:[3]},{code:'P030000',pages:[4]}]},{id:'unscoped-document',codeMentions:[{code:'P1234',pages:[2]}]}]};
 const {backlog,summary}=buildArticleCoverage({entries,sourceIndex});
 assert.deepEqual(backlog.map(row=>row.sourceCandidateIds),[['ford-document'],[],['ford-document']]);
 assert.equal(summary.counts.entriesWithSourceCandidates,2);assert.equal(summary.counts.approvedCodeArticles,0);assert.equal(summary.target.met,false);
});

test('monitor articles need evidenced distinctions without invented cause or repair sections',()=>{
 const e=entry('ford-p1234','P1234','ford');const article=validArticle();assert.equal(screenCodeArticle(article,e,[primary]).qualified,true);
 for(const mutate of [a=>a.sections=[],a=>a.claimEvidence=[],a=>a.claimEvidence[0].codes=['P1235'],a=>a.claimEvidence[0].vehicleScope.makeIds=['chevrolet'],a=>{const section=a.sections.find(section=>section.kind==='diagnosis');section.decisions=section.decisions.slice(0,1);},a=>a.sections[0].claimIds=['unsupported']]){
  const invalid=structuredClone(article);mutate(invalid);assert.equal(screenCodeArticle(invalid,e,[primary]).qualified,false);
 }
 assert.equal(screenCodeArticle(article,e,[{...primary,kind:'dataset'}]).qualified,false);
});

test('copied bodies or duplicate records cannot inflate approved article counts',()=>{
 const entries=[entry('ford-p1234','P1234','ford'),entry('ford-p1235','P1235','ford')];
 const a=validArticle(),b=validArticle('ford-p1235','P1235');
 const copied=buildArticleCoverage({entries,articles:[a,b],sources:[primary]});assert.equal(copied.summary.counts.approvedCodeArticles,0);assert.ok(copied.summary.articleIssues.every(issue=>issue.errors.includes('copied_article_body')));
 const duplicate=buildArticleCoverage({entries,articles:[a,a],sources:[primary]});assert.equal(duplicate.summary.counts.approvedCodeArticles,0);assert.equal(duplicate.summary.counts.rejectedArticleRecords,2);assert.ok(duplicate.summary.articleIssues[0].errors.includes('duplicate_article_entry'));
 const one=buildArticleCoverage({entries,articles:[a],sources:[primary]},{target:1});assert.equal(one.summary.counts.approvedCodeArticles,1);assert.equal(one.summary.target.minimumMet,true);assert.equal(one.summary.target.entireCatalogCovered,false);assert.equal(one.summary.target.met,false);
 const complete=buildArticleCoverage({entries:[entries[0]],articles:[a],sources:[primary]},{target:1});assert.equal(complete.summary.target.met,true);
});

test('10,000 approved records cannot satisfy the target while any canonical entry remains uncovered',()=>{
 const entries=Array.from({length:10001},(_,index)=>{const code=`P${index.toString(16).padStart(4,'0').toUpperCase()}`;return entry(`ford-${code.toLowerCase()}`,code,'ford');});
 const articles=entries.slice(0,10000).map((entry,index)=>{
  const article=validArticle(entry.id,entry.code);article.sections[0].paragraphs.push(`Independently authored fixture case number ${index}.`);return article;
 });
 const {summary}=buildArticleCoverage({entries,articles,sources:[primary]});
 assert.equal(summary.counts.approvedCodeArticles,10000);assert.equal(summary.counts.approvedDistinctCodeStrings,10000);assert.equal(summary.counts.remainingDistinctCodeStrings,1);assert.equal(summary.counts.remainingCatalogEntries,1);
 assert.equal(summary.target.minimumMet,true);assert.equal(summary.target.entireCatalogCovered,false);assert.equal(summary.target.met,false);
});

test('the complete repository corpus has one backlog row per canonical entry without treating guides as articles',()=>{
 const entries=JSON.parse(readFileSync(new URL('../src/data/dtc.json',import.meta.url),'utf8'));
 const guides=JSON.parse(readFileSync(new URL('../src/data/authored-guides.json',import.meta.url),'utf8'));
 const {backlog,summary}=buildArticleCoverage({entries,guides});
 assert.equal(backlog.length,entries.length);assert.equal(new Set(backlog.map(row=>row.entryId)).size,entries.length);assert.equal(new Set(backlog.map(row=>row.canonicalPath)).size,entries.length);assert.equal(new Set(backlog.map(row=>row.canonicalURL)).size,entries.length);assert.ok(backlog.every(row=>row.canonicalURL===`https://cars.errhive.com${row.canonicalPath}`));
 assert.equal(summary.counts.approvedCodeArticles,0);assert.equal(summary.counts.approvedDistinctCodeStrings,0);assert.equal(summary.counts.remainingDistinctCodeStrings,new Set(entries.map(entry=>entry.code)).size);assert.equal(summary.counts.scopedVehicleGuides,guides.length);assert.ok(summary.counts.entriesLinkedToScopedGuides>0);assert.equal(summary.target.minimumMet,false);assert.equal(summary.target.entireCatalogCovered,false);assert.equal(summary.target.met,false);
});

test('explicit target gate exits nonzero while ordinary coverage reporting succeeds',()=>{
 const root=mkdtempSync(join(process.cwd(),'.article-coverage-test-'));
 try{
  mkdirSync(join(root,'src/data'),{recursive:true});writeFileSync(join(root,'src/data/dtc.json'),JSON.stringify([entry('generic-p0300','P0300','generic','generic')]));
  const script=fileURLToPath(new URL('../scripts/article-coverage.mjs',import.meta.url));
  const report=spawnSync(process.execPath,[script],{cwd:root,encoding:'utf8'});assert.equal(report.status,0,report.stderr);
  const gate=spawnSync(process.execPath,[script,'--require-target'],{cwd:root,encoding:'utf8'});assert.equal(gate.status,2);assert.match(gate.stderr,/Article target not met: 0\/10000/);
  const summary=JSON.parse(readFileSync(join(root,'reports/article-coverage-summary.json'),'utf8'));assert.equal(summary.target.met,false);
 }finally{rmSync(root,{recursive:true,force:true});}
});
