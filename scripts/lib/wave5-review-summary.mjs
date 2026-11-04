import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {isDeepStrictEqual} from 'node:util';

export const wave5SummaryPath='reports/editorial-review-wave-05-summary.json';
const historicalPath='reports/editorial-review-wave-05-root.json';
const resumedPath='reports/editorial-review-wave-05-resumed.json';
const batch46Path='reports/editorial-review-wave-05-batch46.json';
const lateSamplePath='reports/editorial-review-wave-05-late-sample.json';
const nissanLatePath='reports/editorial-review-wave-05-nissan-late.json';
const hash=bytes=>crypto.createHash('sha256').update(bytes).digest('hex');
const validHash=value=>typeof value==='string'&&/^[a-f0-9]{64}$/.test(value);
const ensure=(condition,message)=>{if(!condition)throw new Error(message);};
const sortPaths=(a,b)=>a.articlePath.localeCompare(b.articlePath);

/** Reconcile recorded reviews against the current files; never performs a new editorial review. */
export function buildWave5ReviewSummary(root=process.cwd()){
 const reportPaths=[historicalPath,resumedPath,batch46Path];
 if(fs.existsSync(path.join(root,lateSamplePath)))reportPaths.push(lateSamplePath);
 if(fs.existsSync(path.join(root,nissanLatePath)))reportPaths.push(nissanLatePath);
 const reports=new Map(reportPaths.map(file=>{
  const bytes=fs.readFileSync(path.join(root,file));return [file,{data:JSON.parse(bytes),sha256:hash(bytes)}];
 }));
 const historical=reports.get(historicalPath).data,resumed=reports.get(resumedPath).data,peer=reports.get(batch46Path).data;
 const late=reports.get(lateSamplePath)?.data;
 const nissanLate=reports.get(nissanLatePath)?.data;
 ensure(historical.wave===5&&resumed.wave===5&&peer.batch==='batch-46','Unexpected wave or batch in wave 5 review inputs');
 if(late)ensure(late.wave===5,'Unexpected wave in optional late review');
 if(nissanLate)ensure(nissanLate.wave===undefined||nissanLate.wave===5,'Unexpected wave in optional Nissan late review');
 const groups=[
  {file:historicalPath,items:historical.items,bodyCount:historical.articleCount,deepCount:historical.deepSourceComparisons,
   allowedBatches:new Set(['41','42','43','44','45']),depthKey:'reviewDepth',hashKey:'sha256After',deepDepth:'full-body-and-cited-primary-pages'},
  {file:resumedPath,items:resumed.items,bodyCount:resumed.bodySamples,deepCount:resumed.deepSourceComparisons,
   allowedBatches:new Set(['47','48','49','50']),depthKey:'reviewDepth',hashKey:'sha256',deepDepth:'full-body-and-primary-source'},
  {file:batch46Path,items:peer.articles,bodyCount:peer.counts?.distinctFullBodyReads,deepCount:peer.counts?.articleToSourceComparisons,
   allowedBatches:new Set(['46']),depthKey:'reviewLevel',hashKey:'fileSha256',deepDepth:'full-body-and-source-comparison'},
 ];
 if(late)groups.push({file:lateSamplePath,items:late.items,bodyCount:late.bodySamples,deepCount:late.deepSourceComparisons,
  allowedBatches:new Set(['47']),depthKey:'reviewDepth',hashKey:'sha256',deepDepth:'full-body-and-primary-source'});
 if(nissanLate)groups.push({file:nissanLatePath,items:nissanLate.items,bodyCount:nissanLate.bodySamples,deepCount:nissanLate.deepSourceComparisons,
  allowedBatches:new Set(['50']),depthKey:'reviewDepth',hashKey:'sha256',deepDepth:'deep-source',bodyDepth:'body-only'});
 const bodySamples=[],sourceReports=[],seen=new Set(),stale=[];
 for(const group of groups){
  ensure(Array.isArray(group.items)&&Number.isInteger(group.bodyCount)&&group.items.length===group.bodyCount,`Recorded body count does not match paths: ${group.file}`);
  const deep=group.items.filter(item=>item[group.depthKey]===group.deepDepth);
  ensure(Number.isInteger(group.deepCount)&&deep.length===group.deepCount,`Recorded source-comparison count does not match paths: ${group.file}`);
  for(const item of group.items){
   const match=String(item.path).match(/^content\/code-articles\/batch-(\d{2})\/([PBCU][0-3][0-9A-F]{3})\.md$/);
   ensure(match&&group.allowedBatches.has(match[1])&&match[2]===item.code,`Review path/code outside its recorded scope: ${item.path}`);
   ensure(!seen.has(item.path),`Duplicate reviewed manuscript path: ${item.path}`);seen.add(item.path);
   ensure([group.deepDepth,group.bodyDepth||'full-body-only'].includes(item[group.depthKey]),`Unrecognized review depth: ${item.path}`);
   ensure(validHash(item[group.hashKey]),`Missing reviewed manuscript hash: ${item.path}`);
   const bytes=fs.readFileSync(path.join(root,item.path)),actual=hash(bytes);
   if(actual!==item[group.hashKey])stale.push({path:item.path,report:group.file,recorded:item[group.hashKey],current:actual});
   if(item.bodySha256!==undefined){
    const body=bytes.toString('utf8').match(/^---\r?\n[\s\S]*?\r?\n---\r?\n([\s\S]*)$/)?.[1];
    ensure(validHash(item.bodySha256)&&body!==undefined,`Invalid peer-review body hash/structure: ${item.path}`);
    if(hash(body)!==item.bodySha256&&!stale.some(entry=>entry.path===item.path))stale.push({path:item.path,report:group.file,reason:'body-hash-mismatch'});
   }
   bodySamples.push({articlePath:item.path,code:item.code,batch:`batch-${match[1]}`,reviewReport:group.file,reviewDepth:item[group.depthKey],sha256:item[group.hashKey],deepSourceCheck:item[group.depthKey]===group.deepDepth});
  }
  sourceReports.push({path:group.file,sha256:reports.get(group.file).sha256,bodySamples:group.items.length,deepSourceComparisons:deep.length});
 }
 ensure(!stale.length,`Wave 5 review hashes are stale; re-review changed text and update its original report before summarizing: ${JSON.stringify(stale)}`);
 bodySamples.sort(sortPaths);
 const deepSourceArticlePaths=bodySamples.filter(item=>item.deepSourceCheck).map(item=>item.articlePath);
 const historicalCorrections=historical.items.filter(item=>item.sha256Before!==item.sha256After);
 ensure(historicalCorrections.every(item=>validHash(item.sha256Before)&&validHash(item.sha256After)),'Invalid historical correction hash');
 ensure(Number.isInteger(historical.corrections)&&historicalCorrections.length===historical.corrections,'Recorded historical correction count does not match changed hashes');
 ensure(Array.isArray(resumed.corrections),'Resumed review corrections must be an explicit list');
 const resumedCorrectionPaths=new Set();
 for(const correction of resumed.corrections){
  ensure(resumed.items.some(item=>item.path===correction.path)&&!resumedCorrectionPaths.has(correction.path),`Missing/duplicate resumed correction path: ${correction.path}`);resumedCorrectionPaths.add(correction.path);
  ensure(correction.type==='editorial',`Unmapped resumed correction type: ${correction.path}`);
  ensure(validHash(correction.beforeSha256)&&validHash(correction.afterSha256)&&correction.beforeSha256!==correction.afterSha256&&typeof correction.change==='string'&&correction.change.trim(),`Invalid resumed correction record: ${correction.path}`);
 }
 const lateCorrections=late?.corrections||[];
 ensure(Array.isArray(lateCorrections),'Late review corrections must be an explicit list');
 const lateCorrectionPaths=new Set();
 for(const correction of lateCorrections){
  ensure(late.items.some(item=>item.path===correction.path)&&!lateCorrectionPaths.has(correction.path),`Missing/duplicate late correction path: ${correction.path}`);lateCorrectionPaths.add(correction.path);
  ensure(validHash(correction.beforeSha256)&&validHash(correction.afterSha256)&&correction.beforeSha256!==correction.afterSha256&&typeof correction.change==='string'&&correction.change.trim(),`Invalid late correction record: ${correction.path}`);
 }
 const nissanLateCorrections=nissanLate?.corrections||[];
 ensure(Array.isArray(nissanLateCorrections),'Nissan late corrections must be an explicit list');
 const nissanCorrectionPaths=new Set();
 for(const correction of nissanLateCorrections){
  ensure(nissanLate.items.some(item=>item.path===correction.path)&&!nissanCorrectionPaths.has(correction.path),`Missing/duplicate Nissan late correction path: ${correction.path}`);nissanCorrectionPaths.add(correction.path);
  ensure(validHash(correction.beforeSha256)&&validHash(correction.afterSha256)&&correction.beforeSha256!==correction.afterSha256&&typeof correction.change==='string'&&correction.change.trim(),`Invalid Nissan late correction record: ${correction.path}`);
 }
 if(nissanLate){
  const sourceDocuments=new Set();
  for(const item of nissanLate.items.filter(item=>item.reviewDepth==='deep-source')){
   const evidence=item.evidence;
   ensure(evidence&&typeof evidence.sourceId==='string'&&validHash(evidence.sourceSha256)&&/^https:\/\//.test(evidence.sourceUrl),`Missing Nissan source-comparison evidence: ${item.path}`);
   sourceDocuments.add(`${evidence.sourceId}\0${evidence.sourceSha256}`);
  }
  ensure(sourceDocuments.size===nissanLate.distinctSourceDocuments,'Recorded Nissan late distinct-source count is inconsistent');
 }
 const structural=historical.structuralFinding;
 ensure(structural?.batch==='batch-44'&&Number.isInteger(structural.affectedArticles)&&structural.affectedArticles>=0&&structural.independentBodyReviewCountUnchanged===true,'Invalid historical heading-only correction record');
 ensure(peer.counts.manuscriptsChanged===0&&peer.counts.correctionsRequested===0,'Batch 46 now records corrections; update the summary mapping before counting them');
 const peerSourceIds=new Set(peer.articles.filter(item=>item.sourceComparison).map(item=>`${item.sourceComparison.sourceId}\0${item.sourceComparison.url}`));
 ensure(peerSourceIds.size===peer.counts.distinctComparedSourceDocuments,'Recorded batch 46 distinct-source count is inconsistent');
 const counts={sourceReports:sourceReports.length,uniqueBodySamples:bodySamples.length,uniqueDeepSourceChecks:deepSourceArticlePaths.length,bodyOnlySamples:bodySamples.length-deepSourceArticlePaths.length,historicalProseCorrections:historicalCorrections.length,resumedEditorialCorrections:resumed.corrections.length,lateSampleCorrections:lateCorrections.length+nissanLateCorrections.length,headingOnlyStructuralFixes:structural.affectedArticles};
 return {
  schemaVersion:1,wave:5,generatedAt:new Date().toISOString(),status:'recorded-reviews-current-hashes-verified',counts,sourceReports,
  sampleScope:'Bounded AI peer/root reviews of selected article bodies across writer batches 41–50. Source comparisons are a subset of those body reads, not additional articles or a count of distinct source documents.',
  currentHashVerification:{algorithm:'sha256',filesCompared:bodySamples.length,filesMatched:bodySamples.length,staleFiles:[],meaning:'The current manuscript bytes match the versions recorded by their reviewers. Hash matching does not itself evaluate technical claims.'},
  bodySamples,deepSourceArticlePaths,
  corrections:{
   historicalProse:{report:historicalPath,count:historicalCorrections.length,items:historicalCorrections.map(item=>({path:item.path,beforeSha256:item.sha256Before,afterSha256:item.sha256After,change:item.correction||item.finding}))},
   resumedEditorial:{report:resumedPath,count:resumed.corrections.length,items:resumed.corrections.map(item=>({...item})),meaning:'Recorded editorial corrections are historical events; any later expansion is covered only when the current file hash is updated after re-review in its source report.'},
   ...(late?{lateSample:{report:lateSamplePath,count:lateCorrections.length,items:lateCorrections.map(item=>({...item})),selectionReason:late.selectionReason||late.scope}}:{}),
   ...(nissanLate?{nissanLateSample:{report:nissanLatePath,count:nissanLateCorrections.length,items:nissanLateCorrections.map(item=>({...item})),selectionReason:'Additional independent review of late Nissan brake manuscripts in batch 50.'}}:{}),
   headingOnlyStructural:{report:historicalPath,batch:structural.batch,reportedAffectedArticles:structural.affectedArticles,finding:structural.finding,addsIndependentBodyReads:false,verificationLimit:'The source report records an aggregate of heading-only changes, not a per-file list or a new independent reading of all affected bodies.'},
  },
  similarityReport:'reports/article-similarity-wave-05.json',fullCorpusCertification:false,
  limitations:[
   'The summary reconciles existing review records and current manuscript hashes; it does not repeat the underlying editorial or source reviews.',
   'Only the exact listed body samples and the separately listed source comparisons are covered. Unreviewed articles and unexamined claims are not certified.',
   'The historical source checks are carried forward from their original report. Historical local source paths may be unavailable; the summary does not claim new source downloads or reinspection.',
   'Source scopes, unresolved-review flags and each input report\'s limits remain applicable. AI review is not independent mechanic certification, vehicle testing or a guaranteed repair outcome.',
   'Heading-only structural fixes are separate from prose corrections and do not increase the independent full-body sample count.',
   'The separate similarity report has its own corpus snapshot, candidate retrieval limits and manual pair reviews. Lexical screening does not establish originality or factual accuracy.',
   'Neither review counts nor matching hashes establish publication, search indexing, traffic, or full-corpus accuracy. Later manuscript changes require renewed review and updated hashes.',
  ],
 };
}

/** Optional documentation input; reject a stale saved summary instead of repeating its claims. */
export function readCurrentWave5ReviewSummary(root=process.cwd()){
 const filename=path.join(root,wave5SummaryPath);
 if(!fs.existsSync(filename))return null;
 const saved=JSON.parse(fs.readFileSync(filename,'utf8')),current=buildWave5ReviewSummary(root);
 ensure(saved.schemaVersion===1&&saved.wave===5&&saved.fullCorpusCertification===false,'Invalid saved wave 5 review summary');
 for(const key of ['counts','sourceReports','bodySamples','deepSourceArticlePaths','corrections'])ensure(isDeepStrictEqual(saved[key],current[key]),`Saved wave 5 review summary is stale (${key}); rerun scripts/write-wave-05-review-summary.mjs`);
 return saved;
}
