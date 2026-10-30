import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';

export const ARTICLE_TARGET=10000;
// Unsupported symptoms, causes or repairs must be omitted, not invented to fill
// a fixed template. A useful monitor-focused article can explain evidenced
// diagnostic distinctions and its limitations without claiming a complete fix.
export const REQUIRED_SECTION_KINDS=['meaning','diagnosis','limitations'];
const present=value=>typeof value==='string'&&value.trim().length>0;
const validDate=value=>/^\d{4}-\d{2}-\d{2}$/.test(value||'')&&!Number.isNaN(Date.parse(value))&&new Date(value).toISOString().slice(0,10)===value;
const exactCode=value=>String(value||'').trim().toUpperCase();
const makeIds=record=>record.makeIds?.length?record.makeIds:[record.makeId].filter(Boolean);
const route=entry=>`/codes/${entry.makeId}/${entry.code.toLowerCase()}/`;
const unique=values=>[...new Set(values)].sort();
const normalizedBody=article=>(article.sections||[]).flatMap(section=>[
 ...(section.paragraphs||[]),...(section.bullets||[]),
 ...(section.decisions||[]).flatMap(decision=>[decision.finding,decision.consequence])
]).join(' ').replace(/\b[PBCU][0-3][0-9A-F]{3,5}\b/gi,'CODE').toLowerCase().replace(/\s+/g,' ').trim();

/**
 * Future code-article records are separate from model-case guides.
 * Contract: entryId, title, description, reviewStatus:"approved", reviewedOn,
 * reviewedBy, vehicleScope:{makeIds,description}, and sections containing
 * {id,kind,paragraphs,claimIds}. A diagnosis section also needs at least two
 * distinct decisions {finding,consequence,claimIds}. claimEvidence records use
 * {sourceId,locator,vehicleScope:{makeIds,description},codes,claimIds}.
 * All claims must resolve to a primary source and exact code/scope. These checks
 * establish data completeness, never factual truth or successful publication.
 */
export function screenCodeArticle(article,entry,sources=[]){
 const errors=[];
 const check=(condition,message)=>{if(!condition)errors.push(message);};
 const sourceMap=new Map(sources.map(source=>[source.id,source]));
 check(article.reviewStatus==='approved','not_approved');
 check(present(article.reviewedBy),'missing_review_actor');
 check(validDate(article.reviewedOn),'missing_review_date');
 check(present(article.title)&&article.title.includes(entry.code),'title_missing_exact_code');
 check(present(article.description),'missing_description');
 const scope=article.vehicleScope;
 const validScope=value=>Array.isArray(value?.makeIds)&&value.makeIds.length>0&&value.makeIds.every(id=>present(id)&&id!=='generic')&&present(value.description);
 check(validScope(scope),'missing_explicit_vehicle_scope');
 if(entry.scope!=='generic')check(validScope(scope)&&scope.makeIds.some(id=>makeIds(entry).includes(id)),'article_make_mismatch');
 const sections=Array.isArray(article.sections)?article.sections:[];
 check(REQUIRED_SECTION_KINDS.every(kind=>sections.some(section=>section.kind===kind)),'missing_substantive_section_kind');
 check(new Set(sections.map(section=>section.id)).size===sections.length&&sections.every(section=>present(section.id)),'invalid_section_identity');
 check(sections.length>0&&sections.every(section=>present(section.title)&&Array.isArray(section.paragraphs)&&section.paragraphs.some(present)&&Array.isArray(section.claimIds)&&section.claimIds.length>0&&section.claimIds.every(present)),'section_without_prose_or_claims');
 const decisions=sections.filter(section=>section.kind==='diagnosis').flatMap(section=>section.decisions||[]);
 check(decisions.length>=2&&decisions.every(decision=>present(decision.finding)&&present(decision.consequence)&&Array.isArray(decision.claimIds)&&decision.claimIds.length>0&&decision.claimIds.every(present))&&new Set(decisions.map(decision=>decision.finding?.trim().toLowerCase())).size>=2&&new Set(decisions.map(decision=>decision.consequence?.trim().toLowerCase())).size>=2,'missing_distinct_diagnostic_decisions');
 const evidence=Array.isArray(article.claimEvidence)?article.claimEvidence:[];
 const evidencedClaims=new Set();
 check(evidence.length>0,'missing_claim_evidence');
 for(const item of evidence){
  const source=sourceMap.get(item.sourceId);
  const primary=source&&['manufacturer','public-agency'].includes(source.kind)&&/^https:\/\//.test(source.url||'');
  const matchesCode=Array.isArray(item.codes)&&item.codes.some(code=>exactCode(code)===exactCode(entry.code));
  const matchesScope=validScope(item.vehicleScope)&&validScope(scope)&&item.vehicleScope.makeIds.every(id=>scope.makeIds.includes(id))&&(entry.scope==='generic'||item.vehicleScope.makeIds.some(id=>makeIds(entry).includes(id)));
  const valid=primary&&present(item.locator)&&matchesCode&&matchesScope&&Array.isArray(item.claimIds)&&item.claimIds.length>0&&item.claimIds.every(present);
  check(valid,'invalid_claim_evidence');
  if(valid)for(const claimId of item.claimIds)evidencedClaims.add(claimId);
 }
 const usedClaims=sections.flatMap(section=>[...(section.claimIds||[]),...(section.decisions||[]).flatMap(decision=>decision.claimIds||[])]);
 check(usedClaims.length>0&&usedClaims.every(claimId=>evidencedClaims.has(claimId)),'unevidenced_claim');
 check(Boolean(normalizedBody(article)),'empty_article_body');
 return {qualified:errors.length===0,errors:unique(errors)};
}

export function buildArticleCoverage({entries=[],guides=[],sourceIndex={},articles=[],sources=[]},{target=ARTICLE_TARGET}={}){
 if(!Number.isInteger(target)||target<1)throw new Error('Article target must be a positive integer');
 const entryMap=new Map(),routes=new Set();
 for(const entry of entries){
  if(!present(entry.id)||!present(entry.code)||!present(entry.makeId)||!present(entry.sourceId))throw new Error('Incomplete canonical entry');
  if(entryMap.has(entry.id)||routes.has(route(entry)))throw new Error(`Duplicate canonical entry: ${entry.id}`);
  entryMap.set(entry.id,entry);routes.add(route(entry));
 }
 const candidateSources=Array.isArray(sourceIndex)?sourceIndex:sourceIndex.sources||[];
 const candidateMap=new Map(),candidatesByCode=new Map();
 for(const source of candidateSources){
  if(!present(source.id)||candidateMap.has(source.id))throw new Error(`Duplicate or missing candidate source ID: ${source.id}`);
  candidateMap.set(source.id,source);
  for(const code of unique((source.codeMentions||[]).map(mention=>exactCode(mention.code)))){
   if(!code)continue;
   const list=candidatesByCode.get(code)||[];list.push(source);candidatesByCode.set(code,list);
  }
 }
 const guidesByCode=new Map();
 for(const guide of guides)for(const code of unique((guide.codes||[]).map(exactCode))){const list=guidesByCode.get(code)||[];list.push(guide);guidesByCode.set(code,list);}
 const articlesByEntry=new Map(),bodyOwners=new Map();
 const articleIssues=[];
 for(const article of articles){
  if(!entryMap.has(article.entryId)){articleIssues.push({entryId:article.entryId||null,errors:['unknown_entry']});continue;}
  const list=articlesByEntry.get(article.entryId)||[];list.push(article);articlesByEntry.set(article.entryId,list);
  const body=normalizedBody(article);if(body){const owners=bodyOwners.get(body)||new Set();owners.add(article.entryId);bodyOwners.set(body,owners);}
 }
 const backlog=[];
 for(const entry of entries){
  const entryMakes=makeIds(entry);
  const relevantGuideIds=unique((guidesByCode.get(exactCode(entry.code))||[]).filter(guide=>entry.scope==='generic'||makeIds(guide).some(id=>entryMakes.includes(id))).map(guide=>guide.id));
  // A generic code can have scoped candidate documents. This is not an assertion
  // that the documented vehicle, definition or diagnostic path is universal.
  const sourceCandidateIds=unique((candidatesByCode.get(exactCode(entry.code))||[]).filter(source=>entry.scope==='generic'||(source.makeIds||[]).some(id=>entryMakes.includes(id))).map(source=>source.id));
  const records=articlesByEntry.get(entry.id)||[];
  let screening={qualified:false,errors:[]};
  if(records.length===1){
   screening=screenCodeArticle(records[0],entry,sources);
   if((bodyOwners.get(normalizedBody(records[0]))?.size||0)>1)screening={qualified:false,errors:unique([...screening.errors,'copied_article_body'])};
  }else if(records.length>1)screening={qualified:false,errors:['duplicate_article_entry']};
  if(records.length&&!screening.qualified)articleIssues.push({entryId:entry.id,errors:screening.errors});
  backlog.push({entryId:entry.id,code:entry.code,makeIds:unique(entryMakes),canonicalPath:route(entry),canonicalURL:`https://cars.errhive.com${route(entry)}`,dictionarySourceId:entry.sourceId,relevantGuideIds,sourceCandidateIds,researchStatus:sourceCandidateIds.length?'source_candidate':'needs_research',approvedArticle:screening.qualified,articleRecordPresent:records.length>0,...(records.length&&!screening.qualified?{articleIssues:screening.errors}:{})});
 }
 const approvedRows=backlog.filter(row=>row.approvedArticle);
 const approved=approvedRows.length;
 const distinctCodeStrings=new Set(entries.map(entry=>exactCode(entry.code))).size;
 const approvedDistinctCodeStrings=new Set(approvedRows.map(row=>exactCode(row.code))).size;
 const minimumMet=approved>=target;
 const entireCatalogCovered=approved===entries.length;
 const candidateRows=backlog.filter(row=>row.sourceCandidateIds.length>0);
 const guideRows=backlog.filter(row=>row.relevantGuideIds.length>0);
 const summary={
  target:{minimumReviewedCodeArticles:target,scope:'Every existing canonical code entry needs one separately authored and reviewed article, and the approved total must also meet the minimum. Make aliases, dictionary definitions, source mentions and links to vehicle-case guides do not add completed articles.',minimumMet,entireCatalogCovered,met:minimumMet&&entireCatalogCovered},
  counts:{canonicalEntries:entries.length,distinctCodeStrings,trackedEntries:backlog.length,approvedCodeArticles:approved,approvedDistinctCodeStrings,remainingDistinctCodeStrings:distinctCodeStrings-approvedDistinctCodeStrings,remainingToMinimum:Math.max(0,target-approved),remainingCatalogEntries:entries.length-approved,scopedVehicleGuides:guides.length,entriesLinkedToScopedGuides:guideRows.length,entriesWithSourceCandidates:candidateRows.length,distinctCodesWithSourceCandidates:new Set(candidateRows.map(row=>row.code)).size,entriesNeedingResearch:backlog.filter(row=>row.researchStatus==='needs_research').length,candidateDocuments:candidateSources.length,submittedArticleRecords:articles.length,rejectedArticleRecords:articles.length-approved},
  candidateCatalog:candidateSources.map(source=>({id:source.id,url:source.url,publisher:source.publisher,title:source.title,documentScope:source.documentScope,makeIds:source.makeIds||[],reviewStatus:'candidate',uniqueCodeMentions:new Set((source.codeMentions||[]).map(item=>exactCode(item.code))).size})),
  articleIssues,
  limitations:[
   'A candidate is an exact code-string mention in a scoped document, not a confirmed definition, diagnosis, cause or repair.',
   'Manufacturer candidates require explicit make labels; corporate ownership and filename similarity never infer applicability.',
   'Generic code candidates retain document-specific scope; they do not establish universal model or engine compatibility.',
   'Approved article records require recorded review and complete claim evidence. Structural screening cannot verify factual accuracy or live publication.',
   'Existing model-case guides remain separate content. Linking one to a code does not create a separately authored code article.'
  ]
 };
 return {summary,backlog};
}

async function readOptional(filename,fallback){try{return JSON.parse(await fs.readFile(filename,'utf8'));}catch(error){if(error.code==='ENOENT')return fallback;throw error;}}
export async function writeArticleCoverage(root=process.cwd()){
 const data=path.join(root,'src/data');
 const [entries,guides,sourceIndex,articles,...sourceLists]=await Promise.all([
  readOptional(path.join(data,'dtc.json'),[]),readOptional(path.join(data,'authored-guides.json'),[]),
  readOptional(path.join(data,'diagnostic-source-index.json'),{}),readOptional(path.join(data,'code-articles.json'),[]),
  ...['dataset-sources.json','oem-sources.json','editorial-sources.json'].map(name=>readOptional(path.join(data,name),[]))
 ]);
 if(!entries.length)throw new Error('Cannot create a complete backlog without the canonical code catalog');
 const {summary,backlog}=buildArticleCoverage({entries,guides,sourceIndex,articles,sources:sourceLists.flat()});
 const output=path.join(root,'reports');await fs.mkdir(output,{recursive:true});
 await fs.writeFile(path.join(output,'article-coverage-summary.json'),JSON.stringify(summary,null,2)+'\n');
 await fs.writeFile(path.join(output,'article-backlog.jsonl'),backlog.map(row=>JSON.stringify(row)).join('\n')+'\n');
 return summary;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href){
 try{
  const summary=await writeArticleCoverage();console.log(JSON.stringify({target:summary.target,counts:summary.counts},null,2));
  if(process.argv.includes('--require-target')&&!summary.target.met){console.error(`Article target not met: ${summary.counts.approvedCodeArticles}/${summary.target.minimumReviewedCodeArticles} approved canonical code-article records; ${summary.counts.remainingCatalogEntries} canonical entries still need approved articles.`);process.exitCode=2;}
 }catch(error){console.error(error);process.exitCode=1;}
}
