import {readFileSync,readdirSync} from 'node:fs';
import {join,resolve,dirname} from 'node:path';

const readJson=(filename)=>JSON.parse(readFileSync(filename,'utf8'));
const requireValue=(condition,message)=>{if(!condition)throw new Error(`Code manuscript publication: ${message}`);};

// Only the explicit release allowlist is published. New writing batches remain drafts.
// Keep this independent of src/lib/cars.ts so it can also validate build inputs.
export function loadCodeManuscripts(root=process.cwd()){
 const publication=readJson(join(root,'content/code-articles/publication.json'));
 requireValue(publication.schemaVersion===1,'unsupported publication schema');
 requireValue(Array.isArray(publication.batches)&&publication.batches.length>0,'missing publication batches');
 requireValue(new Set(publication.batches).size===publication.batches.length,'duplicate publication batch');
 requireValue(Number.isInteger(publication.expectedArticles)&&publication.expectedArticles>0,'invalid expected article count');
 const entries=readJson(join(root,'src/data/dtc.json'));
 const entryMap=new Map(entries.map(entry=>[entry.id,entry]));
 const sourceIndexPath=join(root,'src/data/diagnostic-source-index.json');
 const sourceIndex=readJson(sourceIndexPath);
 const sourceRecords=[...(sourceIndex.sources||[])];
 for(const relative of sourceIndex.sourceFiles||[]){
  const filename=resolve(dirname(sourceIndexPath),relative);
  requireValue(filename.startsWith(dirname(sourceIndexPath)+'/'),'source partition leaves data directory');
  const part=readJson(filename);requireValue(Array.isArray(part),'source partition is not an array');sourceRecords.push(...part);
 }
 const sourceMap=new Map(sourceRecords.map(source=>[source.id,source]));
 requireValue(sourceMap.size===sourceRecords.length,'duplicate diagnostic source ID');
 const articles=[],seenEntries=new Set(),seenCodes=new Set();
 for(const batch of publication.batches){
  requireValue(/^batch-\d{2}$/.test(batch),`invalid batch name ${batch}`);
  const directory=join(root,'content/code-articles',batch);
  const files=readdirSync(directory).filter(filename=>/^[PBCU][0-3][0-9A-F]{3}\.md$/.test(filename)).sort();
  requireValue(files.length>0,`empty published batch ${batch}`);
  for(const filename of files){
   const relativePath=`content/code-articles/${batch}/${filename}`;
   const text=readFileSync(join(root,relativePath),'utf8');
   const match=text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
   requireValue(match,`invalid frontmatter in ${relativePath}`);
   let metadata;try{metadata=JSON.parse(match[1]);}catch{throw new Error(`Code manuscript publication: invalid JSON metadata in ${relativePath}`);}
   const entry=entryMap.get(metadata.entryId);
   requireValue(entry,`unknown entryId ${metadata.entryId}`);
   requireValue(entry.code===metadata.code&&filename===`${metadata.code}.md`,`code identity mismatch in ${relativePath}`);
   requireValue(entry.status==='published_indexable'||entry.status==='published_noindex',`unpublished canonical entry ${entry.id}`);
   requireValue(metadata.authoringBatch===batch,`batch mismatch in ${relativePath}`);
   requireValue(!seenEntries.has(metadata.entryId)&&!seenCodes.has(metadata.code),`duplicate published identity ${metadata.entryId}`);
   requireValue(typeof metadata.title==='string'&&metadata.title.includes(metadata.code)&&typeof metadata.description==='string'&&metadata.description.trim(),`missing article metadata in ${relativePath}`);
   requireValue(typeof metadata.scope==='string'&&metadata.scope.trim(),`missing applicability scope in ${relativePath}`);
   requireValue(['checked','needs-review'].includes(metadata.sourceReview),`invalid source-review state in ${relativePath}`);
   requireValue(Array.isArray(metadata.sourceIds)&&metadata.sourceIds.length>0,`missing sources in ${relativePath}`);
   const sources=metadata.sourceIds.map(id=>{
    const source=sourceMap.get(id);requireValue(source&&/^https:\/\//.test(source.url),`unknown or invalid source ${id} in ${relativePath}`);
    return {id:source.id,title:source.title,publisher:source.publisher,url:source.url};
   });
   const body=match[2].trim();
   requireValue(/^#\s+[^\n]+\n/.test(body),`missing opening H1 in ${relativePath}`);
   const markdown=body.replace(/^#\s+[^\n]+\n+/,'');
   requireValue(!/^#\s+/m.test(markdown),`additional H1 in ${relativePath}`);
   requireValue(markdown.includes(metadata.code)&&(markdown.match(/^##\s+/gm)||[]).length>=2,`missing manuscript body in ${relativePath}`);
   seenEntries.add(metadata.entryId);seenCodes.add(metadata.code);
   articles.push({...metadata,path:relativePath,body,markdown,sources});
  }
 }
 requireValue(articles.length===publication.expectedArticles,`expected ${publication.expectedArticles} articles, found ${articles.length}`);
 const stats=Object.freeze({total:articles.length,sourceChecked:articles.filter(article=>article.sourceReview==='checked').length,sourceReviewPending:articles.filter(article=>article.sourceReview==='needs-review').length,batches:publication.batches.length});
 return {articles,publication,stats};
}
