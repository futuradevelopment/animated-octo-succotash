import fs from 'node:fs/promises';
import path from 'node:path';

const root=process.cwd();
const manifest=JSON.parse(await fs.readFile(path.join(root,'research/article-assignments/manifest.json'),'utf8'));
const sources=JSON.parse(await fs.readFile(path.join(root,'src/data/diagnostic-source-index.json'),'utf8')).sources;
const sourceMap=new Map(sources.map(source=>[source.id,source]));
const failures=[],warnings=[],articles=[],batches=[];
const bodies=new Map();
const exactCode=/^[PBCU][0-3][0-9A-F]{3}$/;
for(const batch of manifest.batches){
 const assignments=JSON.parse(await fs.readFile(path.join(root,batch.assignment),'utf8'));
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
  if(metadata.status!=='draft')issues.push('unexpected_publication_status');
  if(!['checked','needs-review'].includes(metadata.sourceReview))issues.push('missing_source_review_state');
  if(!metadata.scope?.trim())issues.push('missing_scope');
  if(wordCount<150)issues.push('insufficient_written_content');
  if(!body.includes(code)||(body.match(/^## /gm)||[]).length<2)issues.push('missing_article_structure');
  if(!Array.isArray(metadata.sourceIds)||!metadata.sourceIds.length||metadata.sourceIds.some(id=>!sourceMap.has(id)))issues.push('unresolved_source');
  if(!Array.isArray(metadata.sourcePages)||!metadata.sourcePages.length)issues.push('missing_page_evidence');
  for(const evidence of metadata.sourcePages||[]){
   const source=sourceMap.get(evidence.sourceId);
   if(!source||!metadata.sourceIds?.includes(evidence.sourceId)||!evidence.pages?.length||evidence.pages.some(page=>!Number.isInteger(page)||page<1||(source.pageCount&&page>source.pageCount)))issues.push('invalid_page_evidence');
  }
  if(!/https:\/\//.test(body))issues.push('missing_visible_source_link');
  const normalized=body.replace(/^#.*$/gm,'').replace(/https?:\/\/\S+/g,'URL').replace(/\b[PBCU][0-3][0-9A-F]{3}\b/g,'CODE').replace(/\s+/g,' ').trim().toLowerCase();
  if(bodies.has(normalized))issues.push(`duplicate_body:${bodies.get(normalized)}`);else bodies.set(normalized,relativePath);
  if(metadata.sourceReview==='needs-review')warnings.push({file:relativePath,issue:'source_review_pending'});
  failures.push(...issues.map(issue=>({file:relativePath,issue})));
  articles.push({code,entryId:metadata.entryId,batch:batch.batch,path:relativePath,title:metadata.title,wordCount,sourceReview:metadata.sourceReview,sourceIds:metadata.sourceIds,sourcePages:metadata.sourcePages});written++;
 }
 batches.push({batch:batch.batch,assigned:assignments.length,written,missing:assignments.filter(item=>!articles.some(article=>article.entryId===item.entryId)).map(item=>item.code)});
}
const uniqueEntries=new Set(articles.map(article=>article.entryId));
if(uniqueEntries.size!==articles.length)failures.push({issue:'duplicate_assigned_entries'});
const counts={assigned:manifest.target,written:articles.length,uniqueCodes:new Set(articles.map(article=>article.code)).size,sourceCheckedDrafts:articles.filter(article=>article.sourceReview==='checked').length,sourceReviewPending:articles.filter(article=>article.sourceReview==='needs-review').length,words:articles.reduce((sum,article)=>sum+article.wordCount,0),minimumWords:articles.length?Math.min(...articles.map(article=>article.wordCount)):0,maximumWords:articles.length?Math.max(...articles.map(article=>article.wordCount)):0,publishedByThisBatch:0};
const report={checkedAt:new Date().toISOString(),status:failures.length?'failed':articles.length===manifest.target?'writing-complete':'in-progress',counts,batches,failures,warnings,limitations:['This report measures written drafts and metadata integrity, not mechanical accuracy, human review, live publication, indexing or traffic.','The overall 10,000+ code-article goal remains separate from this 1,000-article writing assignment.'],articles};
await fs.writeFile(path.join(root,'reports/written-articles.json'),JSON.stringify(report,null,2)+'\n');
console.log(JSON.stringify({status:report.status,counts,batches:batches.map(({batch,assigned,written})=>({batch,assigned,written})),failures:failures.slice(0,30)},null,2));
if(failures.length||(process.argv.includes('--require-complete')&&articles.length!==manifest.target))process.exitCode=1;
