import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {loadCodeManuscripts} from '../scripts/lib/code-manuscripts.mjs';
import {codeManuscripts,manuscriptForEntry,publicationStats,renderManuscript} from '../src/lib/code-manuscripts.ts';
import {codes,codePath,getIndexableRoutes} from '../src/lib/cars.ts';
import {parseHTML} from 'linkedom';

test('the selected release contains 4,000 distinct articles on existing canonical routes',()=>{
 assert.equal(codeManuscripts.length,4000);
 assert.equal(new Set(codeManuscripts.map(article=>article.entryId)).size,4000);
 assert.equal(new Set(codeManuscripts.map(article=>article.code)).size,4000);
 const entries=new Map(codes.map(entry=>[entry.id,entry])),indexable=new Set(getIndexableRoutes());
 for(const article of codeManuscripts){
  const entry=entries.get(article.entryId);assert.ok(entry,article.entryId);
  assert.equal(entry.code,article.code);assert.equal(manuscriptForEntry(entry.id),article);
  assert.ok(indexable.has(codePath(entry)),article.entryId);
 }
 assert.equal(publicationStats.sourceChecked,3420);
 assert.equal(publicationStats.sourceReviewPending,580);
});

test('a manufacturer article is never assigned to a different make sharing its code',()=>{
 const entries=new Map(codes.map(entry=>[entry.id,entry]));let alternateDefinitions=0;
 for(const article of codeManuscripts){
  if(entries.get(article.entryId).scope!=='manufacturer')continue;
  for(const other of codes.filter(entry=>entry.code===article.code&&entry.id!==article.entryId)){
   alternateDefinitions++;assert.equal(manuscriptForEntry(other.id),undefined,`${article.entryId} leaked to ${other.id}`);
  }
 }
 assert.ok(alternateDefinitions>0,'Fixture must exercise shared code strings across makes');
 assert.equal(manuscriptForEntry('ford-p1000')?.code,'P1000');
 assert.equal(manuscriptForEntry('P1000'),undefined);
 assert.equal(manuscriptForEntry('generic-b0012'),undefined);
});

test('Markdown publication removes only the duplicate title and preserves evidence links',async()=>{
 const article=manuscriptForEntry('generic-c0502');assert.ok(article);
 const {html}=await renderManuscript(article),document=parseHTML(`<main>${html}</main>`).document;
 assert.equal(document.querySelectorAll('h1').length,0);
 assert.ok(document.querySelectorAll('h2').length>=2);
 assert.match(document.querySelector('main').textContent,/C0502/);
 const links=[...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href'));
 assert.ok(links.some(href=>/#page=38$/.test(href)),links.join('\n'));
 assert.equal(article.sourceReview,'needs-review');
});

function publicationFixture(run){
 const root=fs.mkdtempSync(path.join(process.cwd(),'.test-manuscript-publication-'));
 const metadata={entryId:'ford-p1000',code:'P1000',title:'P1000: Ford readiness example',description:'A scoped readiness explanation.',status:'draft',sourceReview:'checked',scope:'Ford test documentation only.',sourceIds:['fixture-source'],sourceLocators:[{sourceId:'fixture-source',locator:'P1000 diagnostic row'}],authoringBatch:'batch-01'};
 const writeJSON=(name,value)=>{fs.mkdirSync(path.dirname(path.join(root,name)),{recursive:true});fs.writeFileSync(path.join(root,name),JSON.stringify(value));};
 const writeArticle=(changes={},batch='batch-01')=>{
  const data={...metadata,...changes};const name=`content/code-articles/${batch}/P1000.md`;
  fs.mkdirSync(path.dirname(path.join(root,name)),{recursive:true});
  fs.writeFileSync(path.join(root,name),`---\n${JSON.stringify(data)}\n---\n# ${data.title}\n\n## Meaning\nP1000 records the documented readiness condition.\n\n## Evidence\n[Exact diagnostic row](https://example.org/manual#p1000).\n`);
 };
 writeJSON('content/code-articles/publication.json',{schemaVersion:1,expectedArticles:1,batches:['batch-01']});
 writeJSON('src/data/dtc.json',[{id:'ford-p1000',code:'P1000',makeId:'ford',scope:'manufacturer',status:'published_indexable'}]);
 writeJSON('src/data/diagnostic-source-index.json',{sources:[{id:'fixture-source',title:'Fixture manual',publisher:'Fixture manufacturer',url:'https://example.org/manual'}]});
 writeArticle();
 try{return run({root,metadata,writeJSON,writeArticle});}finally{fs.rmSync(root,{recursive:true,force:true});}
}

test('a later draft batch stays out of publication even when its content is invalid',()=>publicationFixture(({root})=>{
 fs.mkdirSync(path.join(root,'content/code-articles/batch-02'));
 fs.writeFileSync(path.join(root,'content/code-articles/batch-02/P1001.md'),'Unreviewed unfinished draft.');
 const result=loadCodeManuscripts(root);assert.equal(result.articles.length,1);assert.equal(result.articles[0].entryId,'ford-p1000');
}));

test('publication fails when an article identity does not match its canonical entry',()=>publicationFixture(({root,writeArticle})=>{
 writeArticle({entryId:'volkswagen-p1000'});assert.throws(()=>loadCodeManuscripts(root),/unknown entryId/);
 writeArticle({code:'P1001'});assert.throws(()=>loadCodeManuscripts(root),/identity mismatch/);
}));

test('publication fails on missing source, applicability scope or review state',()=>publicationFixture(({root,writeArticle})=>{
 writeArticle({sourceIds:['missing-source']});assert.throws(()=>loadCodeManuscripts(root),/unknown or invalid source/);
 writeArticle({scope:' '});assert.throws(()=>loadCodeManuscripts(root),/applicability scope/);
 writeArticle({sourceReview:'certified'});assert.throws(()=>loadCodeManuscripts(root),/source-review state/);
}));

test('publication fails instead of silently omitting an expected manuscript',()=>publicationFixture(({root,writeJSON})=>{
 writeJSON('content/code-articles/publication.json',{schemaVersion:1,expectedArticles:2,batches:['batch-01']});
 assert.throws(()=>loadCodeManuscripts(root),/expected 2 articles, found 1/);
}));

test('duplicate selected code identities cannot produce two publication records',()=>publicationFixture(({root,writeJSON,writeArticle})=>{
 writeJSON('content/code-articles/publication.json',{schemaVersion:1,expectedArticles:2,batches:['batch-01','batch-02']});
 writeArticle({authoringBatch:'batch-02'},'batch-02');
 assert.throws(()=>loadCodeManuscripts(root),/duplicate published identity/);
}));
