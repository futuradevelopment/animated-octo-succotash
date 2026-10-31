import {existsSync,readFileSync} from 'node:fs';
import {join} from 'node:path';
import {authoredGuides,guidePath} from './authored-guides.ts';
import {codeManuscripts,manuscriptForEntry} from './code-manuscripts.ts';
export {authoredGuides};
export type PublicationState='published_indexable'|'published_noindex';
export type SystemId='powertrain'|'body'|'chassis'|'network';
export interface Make {id:string;name:string;region:string;aliases?:string[]}
export interface CodeEntry {id:string;code:string;makeId:string;makeIds?:string[];title:string;system:SystemId;sourceId:string;scope:'generic'|'manufacturer';status:PublicationState;sourceRows?:unknown[];definitions?:{title:string;context?:string;sourceId?:string}[]}
export interface VehicleModel {id:string;makeId:string;name:string;slug:string;years:string;summary:string;sourceIds:string[]}
export interface Source {id:string;title:string;publisher:string;url:string;license?:string;checkedOn:string;kind:'dataset'|'manufacturer'|'public-agency'}
export interface DiagnosticGuide {summary:string;meaning:string;firstCheck:string;urgency:'check'|'service'|'stop';urgencyLabel:string;safety:string[];steps:{title:string;body:string}[];nextSteps:string[];limitations:string[];sourceIds:string[]}
export interface System {id:SystemId;name:string;description:string;letter:string}
export interface Bulletin {id:string;title:string;makeId:string;modelIds:string[];codes:string[];years:string;engine?:string;summary:string;action:string;limitations:string;sourceIds:string[];url?:string;guideSlug?:string}
export interface SearchRecord {id:string;code:string;title:string;url:string;makeId:string;makeIds:string[];system:SystemId;articleTitle?:string;articleDescription?:string;articleScope?:string;sourceReview?:string}
interface GuideProfiles {systems?:Partial<Record<SystemId,Partial<DiagnosticGuide>>>;codes?:Record<string,Partial<DiagnosticGuide>>}
export const site={name:'ErrHive Cars',url:'https://cars.errhive.com',domain:'cars.errhive.com',tagline:'Read the code. Understand the next step.',description:'Independent automotive diagnostic-code references with clear source attribution, vehicle context, and safe next steps.'};
export const PAGE_SIZE=100,SEARCH_PART_SIZE=500;
export const systems:System[]=[
{id:'powertrain',name:'Powertrain',letter:'P',description:'Engine, transmission and powertrain diagnostic references. Exact vehicle and module context still matters.'},
{id:'body',name:'Body',letter:'B',description:'Body-system diagnostic references. Confirm the reporting module and vehicle-specific definition.'},
{id:'chassis',name:'Chassis',letter:'C',description:'Chassis-system diagnostic references. Read the vehicle warnings before deciding whether to continue.'},
{id:'network',name:'Network',letter:'U',description:'Communication and network diagnostic references. A communication code does not identify a failed module by itself.'}];
// Build-time only: read each versioned input once; no filesystem runtime on the public site.
function readJson<T>(name:string,fallback:T):T{const file=join(process.cwd(),'src/data',name);return existsSync(file)?JSON.parse(readFileSync(file,'utf8')) as T:fallback;}
export const allCodes=readJson<CodeEntry[]>('dtc.json',[]);
export const makes=readJson<Make[]>('makes.json',[]);
export const models=readJson<VehicleModel[]>('models.json',[]);
export const bulletins=readJson<Bulletin[]>('bulletins.json',[]);
export const sources=[...readJson<Source[]>('dataset-sources.json',[]),...readJson<Source[]>('oem-sources.json',[]),...readJson<Source[]>('editorial-sources.json',[])];
const guideProfiles=readJson<GuideProfiles>('diagnostic-guides.json',{});
export const codes=allCodes.filter(entry=>entry.status==='published_indexable'||entry.status==='published_noindex').sort((a,b)=>a.code.localeCompare(b.code)||a.makeId.localeCompare(b.makeId));
export const indexableCodes=codes.filter(entry=>entry.status==='published_indexable');
const makeMap=new Map(makes.map(make=>[make.id,make])),sourceMap=new Map(sources.map(source=>[source.id,source])),systemMap=new Map<string,System>(systems.map(system=>[system.id,system])),codeMap=new Map(codes.map(entry=>[entry.id,entry]));
const makeCodes=new Map<string,CodeEntry[]>(),systemCodes=new Map<string,CodeEntry[]>(),makeModels=new Map<string,VehicleModel[]>(),codeNumberMap=new Map<string,CodeEntry[]>(),modelBulletins=new Map<string,Bulletin[]>(),makeBulletins=new Map<string,Bulletin[]>(),prefixCodes=new Map<string,CodeEntry[]>(),makeSystemCodes=new Map<string,CodeEntry[]>();
const prefixPositions=new Map<string,number>();
export const codePath=(entry:CodeEntry)=>`/codes/${entry.makeId}/${entry.code.toLowerCase()}/`;
export const makePath=(id:string|Make)=>`/makes/${typeof id==='string'?id:id.id}/`;
export const modelPath=(model:VehicleModel)=>`/models/${model.makeId}/${model.slug}/`;
export const systemPath=(id:string)=>`/systems/${id}/`;
export const indexableCodeRoutes=(entries:CodeEntry[])=>entries.filter(entry=>entry.status==='published_indexable').map(codePath);
export const pagePath=(base:string,page:number)=>page===1?base:`${base}page/${page}/`;
function append<T>(map:Map<string,T[]>,key:string,value:T){const list=map.get(key);if(list)list.push(value);else map.set(key,[value]);}
const routesSeen=new Set<string>();
for(const entry of codes){const route=codePath(entry);if(routesSeen.has(route))throw new Error(`Conflicting canonical code route: ${route}`);routesSeen.add(route);for(const id of new Set([entry.makeId,...(entry.makeIds||[])]))append(makeCodes,id,entry);append(systemCodes,entry.system,entry);append(codeNumberMap,entry.code.toUpperCase(),entry);const prefixKey=entry.makeId+'\u0000'+entry.code.slice(0,3);prefixPositions.set(entry.id,prefixCodes.get(prefixKey)?.length||0);append(prefixCodes,prefixKey,entry);append(makeSystemCodes,entry.makeId+'\u0000'+entry.system,entry);}
for(const model of models)append(makeModels,model.makeId,model);
for(const bulletin of bulletins){append(makeBulletins,bulletin.makeId,bulletin);for(const id of bulletin.modelIds||[])append(modelBulletins,id,bulletin);}
export const activeMakes=makes.filter(make=>makeCodes.has(make.id)||makeModels.has(make.id));
function required<T>(value:T|undefined,label:string):T{if(value===undefined)throw new Error(`Missing ${label}`);return value;}
export const getMake=(id:string)=>required(makeMap.get(id),`make ${id}`);
export const getSource=(id:string)=>required(sourceMap.get(id),`source ${id}`);
export const getSystem=(id:string)=>required(systemMap.get(id),`system ${id}`);
export const getCode=(id:string)=>required(codeMap.get(id),`code ${id}`);
export const codesForMake=(id:string)=>makeCodes.get(id)||[];
export const codesForSystem=(id:string)=>systemCodes.get(id)||[];
export const modelsForMake=(id:string)=>makeModels.get(id)||[];
export const bulletinsForModel=(id:string)=>modelBulletins.get(id)||[];
export const bulletinsForMake=(id:string)=>makeBulletins.get(id)||[];
export const findCode=(code:string,makeId?:string)=>(codeNumberMap.get(code.toUpperCase())||[]).filter(entry=>!makeId||entry.makeId===makeId||entry.makeIds?.includes(makeId));
export function parseScannerCodes(value:string):string[]{const found=new Set<string>();for(const match of value.matchAll(/(?:^|[^A-Z0-9])([PBCU][0-3][0-9A-F]{3})(?:[:-][0-9A-F]{2})?(?=$|[^A-Z0-9])/gi))found.add(match[1].toUpperCase());return [...found];}
export function getRelatedCodes(entry:CodeEntry,limit=6):CodeEntry[]{
 if(limit<=0)return [];
 const prefix=prefixCodes.get(entry.makeId+'\u0000'+entry.code.slice(0,3))||[],position=prefixPositions.get(entry.id)||0,result:CodeEntry[]=[],seen=new Set([entry.id]);
 for(const list of [codeNumberMap.get(entry.code)||[],prefix.slice(Math.max(0,position-limit),position+limit+1),(makeSystemCodes.get(entry.makeId+'\u0000'+entry.system)||[]).slice(0,limit+1)])for(const candidate of list){if(seen.has(candidate.id))continue;seen.add(candidate.id);result.push(candidate);if(result.length>=limit)return result;}
 return result;
}
export function getGuide(entry:CodeEntry):DiagnosticGuide{
 const source=sourceMap.get(entry.sourceId);
 const fallback:DiagnosticGuide={summary:`The cited ${source?.kind==='dataset'?'community code reference':'source'} lists ${entry.code} as ${entry.title}. Confirm the vehicle and reporting module before using this label.`,meaning:entry.title,firstCheck:'Save the complete scan report, including the reporting module, code suffix, status, and any freeze-frame data. Record the vehicle year, model, and powertrain.',urgency:'check',urgencyLabel:'Confirm the vehicle context',safety:['Follow the vehicle’s warning messages and owner manual. A reference entry alone cannot establish that it is safe to drive.','Do not erase codes or disconnect the battery simply to remove a warning; preserve the diagnostic evidence first.'],steps:[{title:'Record the complete display',body:'Keep the exact code and module name. Different modules and vehicles can use different diagnostic definitions.'},{title:'Confirm the applicable instructions',body:'Compare the result with manufacturer documentation for the exact vehicle. Give the original scan report to a qualified technician when that documentation is unavailable.'}],nextSteps:['Record when the warning appeared and any symptoms that occurred at the same time.','Use the relevant manufacturer diagnostic procedure before replacing a component.'],limitations:['This entry is a code reference, not proof that a particular component has failed.','A listed manufacturer association does not establish model, year, engine, or market compatibility.'],sourceIds:[entry.sourceId]};
 const systemProfile=guideProfiles.systems?.[entry.system]||{},exact=guideProfiles.codes?.[entry.id]||(entry.scope==='generic'?guideProfiles.codes?.[entry.code]:undefined)||{};
 return {...fallback,...systemProfile,...exact,meaning:exact.meaning||entry.title,sourceIds:[...new Set([entry.sourceId,...(systemProfile.sourceIds||[]),...(exact.sourceIds||[])])]};
}
export const featuredCodes=['P0300','P0420','P0171','P0455','P0A80','U0100'].flatMap(code=>{const match=(codeNumberMap.get(code)||[]).find(entry=>entry.scope==='generic'&&entry.status==='published_indexable');return match?[match]:[];});
if(!featuredCodes.length)featuredCodes.push(...indexableCodes.slice(0,6));
export const statistics=Object.freeze({articles:codeManuscripts.length,codeArticles:codeManuscripts.length,guides:authoredGuides.length,codes:indexableCodes.length,uniqueCodes:new Set(indexableCodes.map(entry=>entry.code)).size,manufacturers:activeMakes.filter(make=>make.id!=='generic').length,models:models.length,sourceUrls:new Set(sources.map(source=>source.url)).size});
export interface DirectoryPage{basePath:string;page:number;totalPages:number;total:number;entries:CodeEntry[];make?:Make;system?:System}
export function directoryPages(entries:CodeEntry[],basePath:string,context:{make?:Make;system?:System}={}):DirectoryPage[]{const totalPages=Math.max(1,Math.ceil(entries.length/PAGE_SIZE));return Array.from({length:totalPages},(_,index)=>({basePath,page:index+1,totalPages,total:entries.length,entries:entries.slice(index*PAGE_SIZE,(index+1)*PAGE_SIZE),...context}));}
export const allDirectoryPages=directoryPages(codes,'/codes/');
export const articleCodes=codes.filter(entry=>manuscriptForEntry(entry.id));
export const articleDirectoryPages=directoryPages(articleCodes,'/articles/');
export const makeDirectoryPages=activeMakes.flatMap(make=>directoryPages(codesForMake(make.id),makePath(make.id),{make}));
export const systemDirectoryPages=systems.filter(system=>systemCodes.has(system.id)).flatMap(system=>directoryPages(codesForSystem(system.id),systemPath(system.id),{system}));
const informationPaths=['/about/','/editorial-policy/','/research-methodology/','/safety/','/privacy/','/terms/','/contact/','/sources/','/tools/','/guides/','/reference/error-code-types/'];
const indexableRoutes=[...new Set(['/',...informationPaths,'/makes/','/systems/','/models/',...allDirectoryPages.map(page=>pagePath(page.basePath,page.page)),...articleDirectoryPages.map(page=>pagePath(page.basePath,page.page)),...makeDirectoryPages.map(page=>pagePath(page.basePath,page.page)),...systemDirectoryPages.map(page=>pagePath(page.basePath,page.page)),...indexableCodeRoutes(codes),...models.map(modelPath),...authoredGuides.map(guidePath)])];
export const getIndexableRoutes=()=>indexableRoutes;
export const sitemapShards=Array.from({length:Math.ceil(indexableRoutes.length/5000)},(_,index)=>({id:String(index+1),routes:indexableRoutes.slice(index*5000,(index+1)*5000)}));
export const searchParts=new Map<string,SearchRecord[]>();
export const searchMakeManifests=new Map<string,{version:number;makeId:string;parts:{id:string;url:string;count:number}[]}>();
const partsForCode:Record<string,string[]>={},partDetails:Record<string,{url:string;makeIds:string[]}>={},primaryMakeCodes=new Map<string,CodeEntry[]>();
for(const entry of codes)append(primaryMakeCodes,entry.makeId,entry);
for(const [makeId,entries] of primaryMakeCodes)for(let offset=0;offset<entries.length;offset+=SEARCH_PART_SIZE){
 const id=`${makeId}-${Math.floor(offset/SEARCH_PART_SIZE)+1}`,part=entries.slice(offset,offset+SEARCH_PART_SIZE).map(entry=>({id:entry.id,code:entry.code,title:entry.title,url:codePath(entry),makeId:entry.makeId,makeIds:[...new Set([entry.makeId,...(entry.makeIds||[])])],system:entry.system,...(manuscriptForEntry(entry.id)?{articleTitle:manuscriptForEntry(entry.id)!.title,articleDescription:manuscriptForEntry(entry.id)!.description,articleScope:manuscriptForEntry(entry.id)!.scope,sourceReview:manuscriptForEntry(entry.id)!.sourceReview}:{})}));
 searchParts.set(id,part);const associated=[...new Set(part.flatMap(entry=>entry.makeIds))];partDetails[id]={url:`/search-data/parts/${id}.json`,makeIds:associated};
 for(const make of associated){let manifest=searchMakeManifests.get(make);if(!manifest){manifest={version:1,makeId:make,parts:[]};searchMakeManifests.set(make,manifest);}manifest.parts.push({id,url:partDetails[id].url,count:part.length});}
 for(const entry of part){const values=partsForCode[entry.code]||(partsForCode[entry.code]=[]);if(!values.includes(id))values.push(id);}
}
export const searchIndex=Object.freeze({version:1,codes:partsForCode,parts:partDetails,makes:activeMakes.map(make=>({id:make.id,name:make.name,count:codesForMake(make.id).length,url:`/search-data/${make.id}.json`}))});
