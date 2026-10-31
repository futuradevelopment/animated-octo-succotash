import fs from 'node:fs/promises';
import path from 'node:path';
import {readDiagnosticSourceIndex} from './diagnostic-sources.mjs';

const root=process.cwd();
const manifest=JSON.parse(await fs.readFile(path.join(root,'research/article-assignments/manifest.json'),'utf8'));
const publication=JSON.parse(await fs.readFile(path.join(root,'content/code-articles/publication.json'),'utf8'));
const publicationBatches=new Set(Array.isArray(publication.batches)?publication.batches:[]);
if(publication.schemaVersion!==1||!Array.isArray(publication.batches)||publicationBatches.size!==publication.batches.length||(!Number.isInteger(publication.expectedArticles)||publication.expectedArticles<0))throw new Error('Invalid publication manifest');
const sources=(await readDiagnosticSourceIndex(path.join(root,'src/data/diagnostic-source-index.json'))).sources;
const sourceMap=new Map(sources.map(source=>[source.id,source]));
const failures=[],warnings=[],articles=[],batches=[];
const bodies=new Map();
for(const batch of publicationBatches)if(!manifest.batches.some(item=>item.batch===batch))failures.push({batch,issue:'publication_batch_unassigned'});
const assignedEntries=new Set(),assignedCodes=new Set();
const exactCode=/^[PBCU][0-3][0-9A-F]{3}$/;
for(const batch of manifest.batches){
 const assignments=JSON.parse(await fs.readFile(path.join(root,batch.assignment),'utf8'));
 if(assignments.length!==batch.count)failures.push({batch:batch.batch,issue:'assignment_count_mismatch'});
 for(const item of assignments){
  if(assignedEntries.has(item.entryId)||assignedCodes.has(item.code))failures.push({batch:batch.batch,code:item.code,issue:'duplicate_assignment'});
  assignedEntries.add(item.entryId);assignedCodes.add(item.code);
 }
 const expected=new Map(assignments.map(item=>[item.code,item]));
 const filenames=await fs.readdir(path.join(root,batch.outputDirectory)).catch(error=>{if(error.code==='ENOENT')return [];throw error;});
 let written=0;
 for(const filename of filenames.filter(name=>name.endsWith('.md')&&exactCode.test(name.slice(0,-3)))){
  const code=filename.slice(0,-3),assignment=expected.get(code),relativePath=`${batch.outputDirectory}/${filename}`;
  if(!assignment){failures.push({file:relativePath,issue:'unassigned_code'});continue;}
  const text=await fs.readFile(path.join(root,relativePath),'utf8');
  const match=text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if(!match){failures.push({file:relativePath,issue:'invalid_frontmatter'});continue;}
  let metadata;try{metadata=JSON.parse(match[1]);}catch{failures.push({file:relativePath,issue:'frontmatter_not_json'});continue;}
  const body=match[2],issues=[];
  const wordCount=(body.replace(/https?:\/\/\S+/g,'').match(/\b[\w'-]+\b/g)||[]).length;
  if(metadata.code!==code||metadata.entryId!==assignment.entryId)issues.push('identity_mismatch');
  if(metadata.authoringBatch!==batch.batch)issues.push('batch_mismatch');
  if(!metadata.title?.includes(code)||!metadata.description?.trim())issues.push('missing_search_metadata');
  if(!/[.!?]$/.test(metadata.description?.trim()||''))issues.push('incomplete_search_description');
  // Authoring metadata remains independent of the explicit renderer selection.
  if(metadata.status!=='draft')issues.push('unexpected_authoring_status');
  if(!['checked','needs-review'].includes(metadata.sourceReview))issues.push('missing_source_review_state');
  if(!metadata.scope?.trim())issues.push('missing_scope');
  if(wordCount<150)issues.push('insufficient_written_content');
  if(!body.includes(code)||(body.match(/^## /gm)||[]).length<2)issues.push('missing_article_structure');
  if(!Array.isArray(metadata.sourceIds)||!metadata.sourceIds.length||metadata.sourceIds.some(id=>!sourceMap.has(id)))issues.push('unresolved_source');
  if(!metadata.sourcePages?.length&&!metadata.sourceLocators?.length)issues.push('missing_source_evidence');
  for(const evidence of metadata.sourcePages||[]){
   const source=sourceMap.get(evidence.sourceId);
   if(!source||!metadata.sourceIds?.includes(evidence.sourceId)||!Number.isInteger(source.pageCount)||!evidence.pages?.length||evidence.pages.some(page=>!Number.isInteger(page)||page<1||page>source.pageCount))issues.push('invalid_page_evidence');
  }
  for(const evidence of metadata.sourceLocators||[]){
   const source=sourceMap.get(evidence.sourceId);
   if(!source||!metadata.sourceIds?.includes(evidence.sourceId)||typeof evidence.locator!=='string'||!evidence.locator.trim())issues.push('invalid_locator_evidence');
  }
  if(!/https:\/\//.test(body))issues.push('missing_visible_source_link');
  const normalized=body.replace(/^#.*$/gm,'').replace(/https?:\/\/\S+/g,'URL').replace(/\b[PBCU][0-3][0-9A-F]{3}\b/g,'CODE').replace(/\s+/g,' ').trim().toLowerCase();
  if(bodies.has(normalized))issues.push(`duplicate_body:${bodies.get(normalized)}`);else bodies.set(normalized,relativePath);
  if(metadata.sourceReview==='needs-review')warnings.push({file:relativePath,issue:'source_review_pending'});
  failures.push(...issues.map(issue=>({file:relativePath,issue})));
  articles.push({code,entryId:metadata.entryId,batch:batch.batch,path:relativePath,title:metadata.title,wordCount,selectedForPublication:publicationBatches.has(batch.batch),sourceReview:metadata.sourceReview,sourceIds:metadata.sourceIds,sourcePages:metadata.sourcePages,sourceLocators:metadata.sourceLocators});written++;
 }
 batches.push({batch:batch.batch,assigned:assignments.length,written,missing:assignments.filter(item=>!articles.some(article=>article.entryId===item.entryId)).map(item=>item.code)});
}
const uniqueEntries=new Set(articles.map(article=>article.entryId));
if(uniqueEntries.size!==articles.length)failures.push({issue:'duplicate_assigned_entries'});
if(assignedEntries.size!==manifest.target)failures.push({issue:'manifest_target_mismatch'});
if(new Set(articles.map(article=>article.code)).size!==articles.length)failures.push({issue:'duplicate_written_codes'});
const selectedArticles=articles.filter(article=>article.selectedForPublication);
if(selectedArticles.length!==publication.expectedArticles)failures.push({issue:'publication_article_count_mismatch',expected:publication.expectedArticles,actual:selectedArticles.length});
const counts={assigned:manifest.target,written:articles.length,uniqueCodes:new Set(articles.map(article=>article.code)).size,sourceCheckedDrafts:articles.filter(article=>article.sourceReview==='checked').length,sourceReviewPending:articles.filter(article=>article.sourceReview==='needs-review').length,words:articles.reduce((sum,article)=>sum+article.wordCount,0),minimumWords:articles.length?Math.min(...articles.map(article=>article.wordCount)):0,maximumWords:articles.length?Math.max(...articles.map(article=>article.wordCount)):0,selectedForPublication:selectedArticles.length,notSelectedForPublication:articles.length-selectedArticles.length,selectedSourceChecked:selectedArticles.filter(article=>article.sourceReview==='checked').length,selectedSourceReviewPending:selectedArticles.filter(article=>article.sourceReview==='needs-review').length};
const waves=(manifest.waves||[]).map(wave=>{const rows=articles.filter(article=>wave.batches.includes(article.batch));return {wave:wave.wave,assigned:wave.target,written:rows.length,selectedForPublication:rows.filter(article=>article.selectedForPublication).length,notSelectedForPublication:rows.filter(article=>!article.selectedForPublication).length,uniqueCodes:new Set(rows.map(article=>article.code)).size,sourceCheckedDrafts:rows.filter(article=>article.sourceReview==='checked').length,sourceReviewPending:rows.filter(article=>article.sourceReview==='needs-review').length,words:rows.reduce((sum,article)=>sum+article.wordCount,0)};});
const report={checkedAt:new Date().toISOString(),status:failures.length?'failed':articles.length===manifest.target?'writing-complete':'in-progress',counts,publication:{manifest:'content/code-articles/publication.json',releaseId:publication.releaseId,expectedArticles:publication.expectedArticles,liveDeploymentVerification:'not-measured-by-this-report'},waves,batches,failures,warnings,limitations:['This report measures written manuscripts, metadata integrity and explicit renderer selection, not mechanical accuracy, human review, live publication, indexing or traffic. Source files retain draft authoring metadata independently of renderer selection.',`The overall 10,000+ code-article goal remains separate from these ${manifest.target.toLocaleString('en-US')} assigned manuscripts.`],articles};
const inventoryDirectory=path.join(root,'reports/written-articles');await fs.mkdir(inventoryDirectory,{recursive:true});
const articleFiles=[];
for(let offset=0;offset<articles.length;offset+=250){
 const name=`part-${String(articleFiles.length+1).padStart(3,'0')}.json`;
 await fs.writeFile(path.join(inventoryDirectory,name),JSON.stringify(articles.slice(offset,offset+250),null,2)+'\n');
 articleFiles.push(`written-articles/${name}`);
}
const keptParts=new Set(articleFiles.map(file=>path.basename(file)));
for(const name of await fs.readdir(inventoryDirectory))if(/^part-\d+\.json$/.test(name)&&!keptParts.has(name))await fs.unlink(path.join(inventoryDirectory,name));
const {articles:articleRecords,...reportSummary}=report;
await fs.writeFile(path.join(root,'reports/written-articles.json'),JSON.stringify({...reportSummary,articleFiles},null,2)+'\n');
console.log(JSON.stringify({status:report.status,counts,batches:batches.map(({batch,assigned,written})=>({batch,assigned,written})),failures:failures.slice(0,30)},null,2));
if(failures.length||(process.argv.includes('--require-complete')&&articles.length!==manifest.target))process.exitCode=1;
