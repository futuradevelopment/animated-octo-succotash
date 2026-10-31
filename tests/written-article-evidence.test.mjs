import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';

const checker=fileURLToPath(new URL('../scripts/check-written-articles.mjs',import.meta.url));
function screen(evidence,source){
 const root=fs.mkdtempSync(path.join(os.tmpdir(),'errhive-evidence-'));
 try{
  for(const dir of ['research/article-assignments','src/data','content/code-articles/batch-test','reports'])fs.mkdirSync(path.join(root,dir),{recursive:true});
  const write=(p,x)=>fs.writeFileSync(path.join(root,p),JSON.stringify(x));
  write('research/article-assignments/manifest.json',{target:1,batches:[{batch:'batch-test',count:1,assignment:'research/article-assignments/batch-test.json',outputDirectory:'content/code-articles/batch-test'}]});
  write('research/article-assignments/batch-test.json',[{code:'P1000',entryId:'ford-p1000'}]);
  // Evidence screening is independent of publication; these fixtures stay drafts.
  write('content/code-articles/publication.json',{schemaVersion:1,expectedArticles:0,batches:[]});
  write('src/data/diagnostic-source-index.json',{sources:[{id:'test-source',...source}]});
  const metadata={code:'P1000',entryId:'ford-p1000',authoringBatch:'batch-test',title:'P1000: evidence fixture',description:'A complete test description.',status:'draft',sourceReview:'checked',scope:'Test document only.',sourceIds:['test-source'],...evidence};
  const body='# P1000 evidence fixture\n\n## Meaning\n'+Array(90).fill('fixture').join(' ')+'\n\n## Evidence\n'+Array(90).fill('record').join(' ')+'\nhttps://example.com/manual\n';
  fs.writeFileSync(path.join(root,'content/code-articles/batch-test/P1000.md'),'---\n'+JSON.stringify(metadata)+'\n---\n'+body);
  const result=spawnSync(process.execPath,[checker,'--require-complete'],{cwd:root,encoding:'utf8'});
  assert.ok(fs.existsSync(path.join(root,'reports/written-articles.json')),result.stderr||result.stdout);
  const report=JSON.parse(fs.readFileSync(path.join(root,'reports/written-articles.json'),'utf8'));
  assert.equal(report.counts.selectedForPublication,0);
  return {status:result.status,issues:report.failures.map(x=>x.issue)};
 }finally{fs.rmSync(root,{recursive:true,force:true});}
}
test('HTML evidence uses an actual section locator without invented PDF pages',()=>{
 assert.equal(screen({sourceLocators:[{sourceId:'test-source',locator:'P1000 description row, revision 12'}]},{}).status,0);
});
test('HTML sources cannot satisfy evidence by claiming page one',()=>{
 assert.ok(screen({sourcePages:[{sourceId:'test-source',pages:[1]}]},{}).issues.includes('invalid_page_evidence'));
});
test('PDF evidence respects physical page bounds',()=>{
 assert.equal(screen({sourcePages:[{sourceId:'test-source',pages:[2]}]},{pageCount:2}).status,0);
 assert.ok(screen({sourcePages:[{sourceId:'test-source',pages:[3]}]},{pageCount:2}).issues.includes('invalid_page_evidence'));
});
test('HTML locators must name a known cited source and a nonempty section',()=>{
 assert.ok(screen({sourceLocators:[{sourceId:'unknown',locator:'row'}]},{}).issues.includes('invalid_locator_evidence'));
 assert.ok(screen({sourceLocators:[{sourceId:'test-source',locator:' '}]},{}).issues.includes('invalid_locator_evidence'));
});
