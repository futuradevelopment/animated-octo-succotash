import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {parseHTML} from 'linkedom';
import * as cars from '../src/lib/cars.ts';
import {authoredGuides,guidePath,guidesForCode,guideMakes} from '../src/lib/authored-guides.ts';
import {ads} from '../src/lib/ads.ts';
import {validateDataset,MINIMUM_DICTIONARY_ENTRIES} from './validate-data.mjs';
import {clean,createCheckCollector,walkFiles,routeFromFile,fileForRoute,reachableRoutes,flattenSchema,xmlLocations} from './lib/audit-utils.mjs';

export async function audit(root=process.cwd()){
 const dist=path.join(root,'dist'),collector=createCheckCollector(),check=collector.check;
 const validation=validateDataset(cars);check('data-integrity',validation.status==='passed',validation.failures);
 const {site,codes,models,sources,codePath,modelPath,getIndexableRoutes}=cars;
 const codeByRoute=new Map(codes.map(entry=>[codePath(entry),entry])),codeById=new Map(codes.map(entry=>[entry.id,entry]));
 const modelByRoute=new Map(models.map(model=>[modelPath(model),model])),sourceById=new Map(sources.map(source=>[source.id,source]));
 const guideByRoute=new Map(authoredGuides.map(guide=>[guidePath(guide),guide]));
 const expectedIndexable=new Set(getIndexableRoutes()),expectedCodes=new Set(codes.filter(entry=>entry.status==='published_indexable').map(codePath));
 check('dictionary-output-inventory-floor',expectedCodes.size>=MINIMUM_DICTIONARY_ENTRIES,{minimum:MINIMUM_DICTIONARY_ENTRIES,actual:expectedCodes.size});
 check('search-intentionally-noindex',!expectedIndexable.has('/search/'),'/search/');
 const files=new Set(),htmlFiles=[];for await(const file of walkFiles(dist)){files.add(file);if(file.endsWith('.html'))htmlFiles.push(file);}
 check('html-generated',htmlFiles.length>0,htmlFiles.length);check('real-not-found-document',files.has(path.join(dist,'404.html')),'Static-host HTTP status still requires the CI browser/deployment check.');
 // Retain only small page metadata and the link graph. Each DOM becomes unreachable
 // after its iteration; successes are counters, never one JSON object per check.
 const pages=new Map(),graph=new Map(),titles=new Map(),descriptions=new Map(),canonicalOwners=new Map(),crossFragments=[];
 let codePages=0,maxHtmlBytes=0,maxInlineBytes=0;
 for(const file of htmlFiles){
  const route=routeFromFile(file,dist),html=await fs.readFile(file,'utf8'),{document}=parseHTML(html);
  const robots=document.querySelector('meta[name="robots"]')?.getAttribute('content')||'',noindex=/\bnoindex\b/i.test(robots);
  const title=clean(document.querySelector('title')?.textContent),description=clean(document.querySelector('meta[name="description"]')?.getAttribute('content'));
  const canonical=document.querySelector('link[rel="canonical"]')?.getAttribute('href');
  const ids=new Set([...document.querySelectorAll('[id]')].map(element=>element.id)),links=new Set();
  pages.set(route,{noindex,ids});graph.set(route,links);
  check('title',title.length>0,{route});check('description',description.length>0,{route});
  check('unique-title',!titles.has(title),{route,duplicateOf:titles.get(title)});titles.set(title,route);
  check('unique-description',!descriptions.has(description),{route,duplicateOf:descriptions.get(description)});descriptions.set(description,route);
  check('single-heading',document.querySelectorAll('h1').length===1,route);check('main-landmark',document.querySelectorAll('main').length===1,route);
  check('us-language',document.documentElement.getAttribute('lang')==='en-US',route);check('mobile-viewport',Boolean(document.querySelector('meta[name="viewport"]')),route);
  check('canonical-single',document.querySelectorAll('link[rel="canonical"]').length===1,route);
  let canonicalURL;try{canonicalURL=new URL(canonical);}catch{}
  check('canonical-origin',canonicalURL?.origin===site.url&&!canonicalURL.search&&!canonicalURL.hash,{route,canonical});
  check('canonical-path',route==='/404.html'||canonicalURL?.pathname===route,{route,canonical});
  check('unique-canonical',canonical&&!canonicalOwners.has(canonical),{route,canonical,duplicateOf:canonicalOwners.get(canonical)});canonicalOwners.set(canonical,route);
  check('indexing-state',route==='/404.html'?noindex:noindex===!expectedIndexable.has(route),{route,noindex,expectedIndexable:expectedIndexable.has(route)});
  check('no-appliance-site-residue',!/(?:everydaycostlab|everyday cost lab|data-ecl-|eclAds|\/appliances\/|washing-machines|independent appliance)/i.test(html),route);
  if(ads.provider==='none')check('no-active-advertising',![...document.querySelectorAll('script[src],iframe[src]')].some(e=>/doubleclick|googlesyndication|adsbygoogle|infolinks|adsterra|highperformanceformat/i.test(e.getAttribute('src')||'')),route);
  const bytes=Buffer.byteLength(html);maxHtmlBytes=Math.max(maxHtmlBytes,bytes);check('html-budget',bytes<200*1024,{route,bytes,limit:200*1024});
  const inlineJS=[...document.querySelectorAll('script:not([src])')].filter(e=>e.getAttribute('type')!=='application/ld+json').map(e=>e.textContent).join('');
  const inlineBytes=Buffer.byteLength(inlineJS);maxInlineBytes=Math.max(maxInlineBytes,inlineBytes);check('inline-script-budget',inlineBytes<24*1024,{route,bytes:inlineBytes});
  check('inline-css-budget',Buffer.byteLength([...document.querySelectorAll('style')].map(e=>e.textContent).join(''))<64*1024,route);
  check('unique-html-ids',ids.size===document.querySelectorAll('[id]').length,route);
  for(const img of document.querySelectorAll('img')){check('image-alt',img.hasAttribute('alt'),{route,src:img.getAttribute('src')});check('image-dimensions',img.hasAttribute('width')&&img.hasAttribute('height'),{route,src:img.getAttribute('src')});}
  const schema=[];for(const script of document.querySelectorAll('script[type="application/ld+json"]')){try{schema.push(...flattenSchema(JSON.parse(script.textContent)));}catch(error){check('structured-data-json',false,{route,message:error.message});}}
  check('website-schema',schema.some(s=>s['@type']==='WebSite'),route);check('organization-schema',schema.some(s=>s['@type']==='Organization'),route);
  if(route!=='/'&&route!=='/404.html'){
   const breadcrumb=schema.find(s=>s['@type']==='BreadcrumbList'),items=breadcrumb?.itemListElement||[];
   check('breadcrumb-schema',items.length>=2,route);check('breadcrumb-order',items.every((item,i)=>item.position===i+1&&item.name&&typeof item.item==='string'&&item.item.startsWith(site.url+'/')),route);
  }
  const mainText=clean(document.querySelector('main')?.textContent),sourceLinks=new Set([...document.querySelectorAll('a[href]')].map(a=>a.getAttribute('href')));
  const entry=codeByRoute.get(route);
  if(entry){
   codePages++;
   check('code-definition-static',mainText.includes(clean(entry.title)),route);
   const definition=document.querySelector('[data-code-definition]');check('code-definition-marked',Boolean(definition)&&clean(definition.textContent).includes(clean(entry.title)),route);
   check('code-identity-static',mainText.includes(entry.code),route);
   check('code-source-visible',sourceLinks.has(sourceById.get(entry.sourceId)?.url),route);
   check('code-dictionary-label',Boolean(document.querySelector('article[data-reference-kind="dictionary"]'))&&/code dictionary/i.test(mainText),route);
   check('code-defined-term-schema',schema.some(s=>s['@type']==='DefinedTerm'&&s.termCode===entry.code&&s.name===entry.title),route);
   check('code-not-repair-schema',!schema.some(s=>['Article','TechArticle','HowTo'].includes(s['@type'])),route);
   check('code-no-template-diagnosis',document.querySelectorAll('#first-check,#next-steps,.diagnostic-steps').length===0,route);
   check('code-definition-boundary',/definition, not a repair instruction/i.test(document.querySelector('[data-reference-limit]')?.textContent||''),route);
   check('code-safety-link',sourceLinks.has('/safety/'),route);
   const scopeText=clean(document.querySelector('#applicability')?.textContent);
   check('code-scope-static',Boolean(scopeText)&&(entry.scope==='generic'?/generic obd-ii/i.test(scopeText):(entry.makeIds||[entry.makeId]).every(id=>scopeText.includes(cars.getMake(id).name))),route);
   const applicableGuides=guidesForCode(entry.code).filter(guide=>entry.scope==='generic'||guideMakes(guide).some(id=>(entry.makeIds||[entry.makeId]).includes(id)));
   check('code-reviewed-guide-links',applicableGuides.every(guide=>sourceLinks.has(guidePath(guide))),route);
   check('source-and-report-anchors',ids.has('sources')&&ids.has('report'),route);
   check('reference-attribution-visible',sourceById.get(entry.sourceId)?.kind!=='dataset'||/community/i.test(mainText),route);
  }
  if(/^\/codes\/[^/]+\/[^/]+\/$/.test(route)&&!/^\/codes\/page\/\d+\/$/.test(route))check('no-invented-code-pages',Boolean(entry),route);
  const authoredGuide=guideByRoute.get(route);
  if(authoredGuide){
   check('authored-guide-article-schema',schema.some(s=>['Article','TechArticle'].includes(s['@type'])),route);
   check('authored-guide-sources-visible',authoredGuide.sourceIds.every(id=>sourceLinks.has(sourceById.get(id)?.url)),route);
   check('authored-guide-scope-visible',authoredGuide.scope.length>0&&authoredGuide.scope.every(item=>mainText.includes(clean(item.value))),route);
   check('authored-guide-substance-visible',authoredGuide.sections.length>0&&authoredGuide.sections.every(section=>{
    const content=[...(section.paragraphs||[]),...(section.bullets||[]),...(section.table?.rows.flat()||[])];
    return content.length>0&&mainText.includes(clean(section.title))&&content.every(text=>mainText.includes(clean(text)));
   }),route);
  }
  const model=modelByRoute.get(route);
  if(model){
   check('model-existence-source-visible',model.sourceIds.every(id=>sourceLinks.has(sourceById.get(id)?.url)),route);
   for(const bulletin of cars.bulletinsForModel(model.id)){
    check('model-bulletin-scope-visible',mainText.includes(clean(bulletin.years))&&mainText.includes(clean(bulletin.limitations)),{route,bulletin:bulletin.id});
    check('model-bulletin-primary-source-visible',bulletin.sourceIds.every(id=>sourceLinks.has(sourceById.get(id)?.url)),{route,bulletin:bulletin.id});
   }
  }
  for(const element of document.querySelectorAll('a[href],img[src],script[src],link[rel="stylesheet"][href]')){
   const raw=element.getAttribute(element.hasAttribute('href')?'href':'src');if(!raw||/^(mailto:|tel:|data:)/i.test(raw))continue;
   let target;try{target=new URL(raw,site.url+route);}catch{check('valid-url',false,{route,url:raw});continue;}
   check('no-javascript-links',target.protocol!=='javascript:',{route,url:raw});if(target.origin!==site.url)continue;
   const targetFile=fileForRoute(target.pathname,dist),isPage=targetFile.endsWith('.html');
   check('internal-target',files.has(targetFile),{route,target:target.pathname});
   if(isPage){links.add(target.pathname);if(target.hash){let fragment;try{fragment=decodeURIComponent(target.hash.slice(1));}catch{check('fragment-encoding',false,{route,target:target.href});continue;}if(target.pathname===route)check('fragment-target',ids.has(fragment),{route,target:target.hash});else crossFragments.push({from:route,target:target.pathname,fragment});}}
   if(target.pathname==='/search/'&&target.searchParams.has('make'))check('search-make-query-valid',cars.makes.some(m=>m.id===target.searchParams.get('make')),{route,url:raw});
   const id=element.getAttribute('data-code-id');if(id){const linked=codeById.get(id);check('code-link-canonical',linked&&target.pathname===codePath(linked)&&!target.search&&!target.hash,{route,id,url:raw});const owner=route.match(/^\/makes\/([^/]+)\/(?:page\/\d+\/)?$/)?.[1];if(owner)check('make-directory-code-scope',linked&&(linked.makeIds||[linked.makeId]).includes(owner),{route,id,owner});}
  }
  const directoryMake=route.match(/^\/makes\/([^/]+)\/(?:page\/\d+\/)?$/)?.[1];
  if(directoryMake)for(const input of document.querySelectorAll('form[action="/search/"] input[name="make"]'))check('make-search-form-scope',input.getAttribute('value')===directoryMake,route);
 }
 for(const {from,target,fragment} of crossFragments)check('fragment-target',pages.get(target)?.ids.has(fragment),{route:from,target:target+'#'+fragment});
 const reached=reachableRoutes(graph);
 for(const route of expectedIndexable){check('expected-page',pages.has(route),route);check('no-orphan-page',reached.has(route),route);}
 check('code-page-count',codePages===codes.length,{generated:codePages,expected:codes.length});
 for(const entry of cars.allCodes)if(!codeById.has(entry.id))check('unpublished-not-generated',!pages.has(codePath(entry)),entry.id);
 const sitemapXML=await fs.readFile(path.join(dist,'sitemap.xml'),'utf8'),shardURLs=xmlLocations(sitemapXML),sitemapRoutes=new Set();
 check('sitemap-index',/<sitemapindex\b/.test(sitemapXML),'/sitemap.xml');
 check('sitemap-shards-unique',new Set(shardURLs).size===shardURLs.length,shardURLs.length);
 for(const url of shardURLs){
  let target;try{target=new URL(url);}catch{check('sitemap-shard-url',false,url);continue;}
  check('sitemap-shard-origin',target.origin===site.url&&!target.search&&!target.hash,url);
  const file=fileForRoute(target.pathname,dist);if(!check('sitemap-shard-exists',files.has(file),url))continue;
  const xml=await fs.readFile(file,'utf8'),urls=xmlLocations(xml);check('sitemap-shard-bounded',urls.length>0&&urls.length<=5000,{url,count:urls.length});
  for(const location of urls){
   let parsed;try{parsed=new URL(location);}catch{check('sitemap-url-valid',false,location);continue;}
   const route=parsed.pathname;check('sitemap-unique',!sitemapRoutes.has(route),route);sitemapRoutes.add(route);
   check('sitemap-canonical',parsed.origin===site.url&&!parsed.search&&!parsed.hash&&expectedIndexable.has(route),location);
   check('sitemap-no-noindex',pages.get(route)?.noindex===false,route);
  }
 }
 check('sitemap-complete',sitemapRoutes.size===expectedIndexable.size,{actual:sitemapRoutes.size,expected:expectedIndexable.size});
 for(const route of expectedIndexable)check('sitemap-route-present',sitemapRoutes.has(route),route);
 const robots=await fs.readFile(path.join(dist,'robots.txt'),'utf8');check('robots-sitemap',robots.includes(`Sitemap: ${site.url}/sitemap.xml`),'Canonical sitemap index declaration');
 const searchIndex=JSON.parse(await fs.readFile(path.join(dist,'search-data/index.json'),'utf8')),seenSearch=new Set(),actualCodeParts=new Map();let searchRecords=0,maxSearchPartBytes=0;
 check('search-index-version',searchIndex.version===1,'v1');
 for(const [partId,partInfo] of Object.entries(searchIndex.parts||{})){
  const file=fileForRoute(partInfo.url,dist);if(!check('search-part-exists',files.has(file),partId))continue;
  const text=await fs.readFile(file,'utf8'),part=JSON.parse(text);maxSearchPartBytes=Math.max(maxSearchPartBytes,Buffer.byteLength(text));
  if(!check('search-part-bounded',Array.isArray(part)&&part.length>0&&part.length<=500,{partId,count:part.length}))continue;
  check('search-part-make-labels',JSON.stringify([...new Set(part.flatMap(record=>record.makeIds||[]))].sort())===JSON.stringify([...(partInfo.makeIds||[])].sort()),partId);
  for(const record of part){
   searchRecords++;const entry=codeById.get(record.id);
   check('search-id-unique',!seenSearch.has(record.id),record.id);seenSearch.add(record.id);
   check('search-exact-definition',entry&&record.title===entry.title&&record.code===entry.code&&record.url===codePath(entry)&&record.makeId===entry.makeId&&record.system===entry.system,record.id);
   const expectedMakes=entry?[...new Set([entry.makeId,...(entry.makeIds||[])])].sort():[];
   check('search-shared-makes',JSON.stringify([...(record.makeIds||[])].sort())===JSON.stringify(expectedMakes),record.id);
   check('search-code-index',searchIndex.codes?.[record.code]?.includes(partId),record.id);
   if(!actualCodeParts.has(record.code))actualCodeParts.set(record.code,new Set());actualCodeParts.get(record.code).add(partId);
   check('search-target-exists',pages.has(record.url),record.id);
  }
 }
 check('search-complete',seenSearch.size===codes.length&&codes.every(entry=>seenSearch.has(entry.id)),{expected:codes.length,actual:seenSearch.size});
 for(const [code,parts] of Object.entries(searchIndex.codes||{})){
  check('search-code-index-exact',JSON.stringify([...parts].sort())===JSON.stringify([...(actualCodeParts.get(code)||[])].sort()),code);
  for(const partId of parts)check('search-code-part-exists',Boolean(searchIndex.parts?.[partId]),{code,partId});
 }
 for(const [makeId,expected] of cars.searchMakeManifests){
  const file=path.join(dist,'search-data',makeId+'.json');if(!check('search-make-manifest-exists',files.has(file),makeId))continue;
  const manifest=JSON.parse(await fs.readFile(file,'utf8'));
  check('search-make-manifest-correct',JSON.stringify(manifest)===JSON.stringify(expected),makeId);
 }
 if(files.has(path.join(dist,'_redirects'))){const redirects=await fs.readFile(path.join(dist,'_redirects'),'utf8');check('no-spa-fallback',!/^\s*\/\*\s+\/index\.html\s+200\s*$/m.test(redirects),'Unknown codes must serve a404.');}
 const result=collector.report(),report={checkedAt:new Date().toISOString(),status:result.failed?'failed':'passed',htmlPages:pages.size,indexablePages:expectedIndexable.size,indexableCanonicalCodePages:expectedCodes.size,codePages,searchRecords,maxHtmlBytes,maxInlineBytes,maxSearchPartBytes,...result,memoryStrategy:'One HTML DOM and one search shard at a time; retain routes, IDs, link graph and small uniqueness maps. Successes are aggregate counters; failure details capped at250.',limitations:['Static checks do not establish deployment HTTP status,DNS/TLS,indexation,field Core Web Vitals or source factual accuracy.','A community definition and manufacturer association do not prove model/year/engine applicability.']};
 await fs.mkdir(path.join(root,'reports'),{recursive:true});await fs.writeFile(path.join(root,'reports/static-audit.json'),JSON.stringify(report,null,2)+'\n');return report;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href){try{const report=await audit();console.log(JSON.stringify(report,null,2));process.exitCode=report.status==='passed'?0:1;}catch(error){console.error(error);process.exitCode=1;}}
