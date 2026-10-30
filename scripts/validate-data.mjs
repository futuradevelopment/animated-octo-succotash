import fs from 'node:fs/promises';
import path from 'node:path';
import {pathToFileURL} from 'node:url';
import {isDeepStrictEqual} from 'node:util';
import {createCheckCollector,validDate} from './lib/audit-utils.mjs';

export const CODE_PATTERN=/^[PBCU][0-3][0-9A-F]{3}$/;
export const MINIMUM_CANONICAL_CODES=10000;
const slug=/^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const normalize=value=>String(value||'').toLowerCase().replace(/[^a-z0-9]/g,'');
export const canonicalCodeRoute=entry=>`/codes/${entry.makeId}/${entry.code.toLowerCase()}/`;
export function isGenericAllocation(code){
 if(!CODE_PATTERN.test(code))return false;
 return /^[PBCU]0/.test(code)||/^P2/.test(code)||/^U3/.test(code)||(/^P3/.test(code)&&parseInt(code.slice(1),16)>=0x3400);
}
export function isManufacturerAllocation(code){return CODE_PATTERN.test(code)&&(/^(?:P1|[BCU][12])/.test(code)||(/^P3/.test(code)&&parseInt(code.slice(1),16)<0x3400));}
export function validateDataset(data,{minimumCodes=MINIMUM_CANONICAL_CODES}={}){
 const collector=createCheckCollector(),check=collector.check;
 const codes=data.allCodes||data.codes||[],makes=data.makes||[],models=data.models||[],sources=data.sources||[],systems=data.systems||[],bulletins=data.bulletins||[];
 const sourceById=new Map(),makeById=new Map(),modelById=new Map(),systemIds=new Set(systems.map(s=>typeof s==='string'?s:s.id));
 const ids=new Set(),routes=new Set(),genericCodes=new Set(),indexableRoutes=new Set(),makeAliases=new Map(),discoveryOwners=new Map();
 function unique(records,name,target){for(const record of records){check(`${name}-unique-id`,Boolean(record.id)&&!target.has(record.id),record.id);target.set(record.id,record);}}
 unique(sources,'source',sourceById);unique(makes,'make',makeById);unique(models,'model',modelById);
 for(const input of data.sourceInputs||[]){
  const seen=new Set();for(const source of input.records){check('source-input-unique-id',!seen.has(source.id),{file:input.filename,id:source.id});seen.add(source.id);check('source-catalog-consistent',isDeepStrictEqual(sourceById.get(source.id),source),{file:input.filename,id:source.id});}
 }
 for(const make of makes){
  check('make-slug',slug.test(make.id),make.id);
  for(const label of [make.id,make.name,...(make.aliases||[])]){
   const alias=normalize(label);if(!alias)continue;
   check('make-alias-unambiguous',!makeAliases.has(alias)||makeAliases.get(alias)===make.id,{alias,make:make.id,other:makeAliases.get(alias)});
   makeAliases.set(alias,make.id);
  }
 }
 for(const source of sources){
  let url;try{url=new URL(source.url);}catch{}
  check('source-url',url?.protocol==='https:',source.id);
  check('source-checked-date',validDate(source.checkedOn),source.id);
  check('source-kind',['dataset','manufacturer','public-agency'].includes(source.kind),source.id);
 }
 const makeCounts={},systemCounts={};let noindex=0,shared=0;
 for(const entry of codes){
  const route=canonicalCodeRoute(entry),makeIds=entry.makeIds||[entry.makeId];
  check('code-id-unique',Boolean(entry.id)&&!ids.has(entry.id),entry.id);ids.add(entry.id);
  check('code-pattern',CODE_PATTERN.test(entry.code),entry.id);
  check('code-route-unique',!routes.has(route),{id:entry.id,route});routes.add(route);
  check('code-make-exists',makeById.has(entry.makeId),entry.id);
  check('code-system-exists',systemIds.has(entry.system),entry.id);
  check('code-system-prefix',({P:'powertrain',B:'body',C:'chassis',U:'network'})[entry.code?.[0]]===entry.system,entry.id);
  check('code-source-exists',sourceById.has(entry.sourceId),entry.id);
  check('code-title',typeof entry.title==='string'&&entry.title.trim().length>=3&&!/^(?:unknown|reserved|unassigned|not used|n\/?a|tbd|manufacturer controlled)\b/i.test(entry.title),entry.id);
  check('no-appliance-residue',!/(?:washing machine|dishwasher|tumble dryer|refrigerator|microwave oven|everydaycostlab)/i.test(entry.title||''),entry.id);
  check('code-status',['published_indexable','published_noindex'].includes(entry.status),entry.id);
  const generic=isGenericAllocation(entry.code);
  check('code-assigned-allocation',generic||isManufacturerAllocation(entry.code),entry.id);
  check('code-allocation-scope',entry.scope===(generic?'generic':'manufacturer'),entry.id);
  check('generic-canonical-make',generic?entry.makeId==='generic':entry.makeId!=='generic',entry.id);
  if(generic){check('generic-canonical-once',!genericCodes.has(entry.code),entry.id);genericCodes.add(entry.code);check('generic-no-brand-crossproduct',!entry.makeIds||entry.makeIds.every(id=>id==='generic'),entry.id);}
  check('shared-makes-unique',new Set(makeIds).size===makeIds.length,entry.id);
  check('shared-makes-exist',makeIds.every(id=>makeById.has(id)),entry.id);
  check('canonical-make-in-shared-list',makeIds.includes(entry.makeId),entry.id);
  for(const makeId of makeIds){const key=makeId+':'+entry.code;check('shared-code-unambiguous',!discoveryOwners.has(key),{id:entry.id,key,other:discoveryOwners.get(key)});discoveryOwners.set(key,entry.id);}
  if(makeIds.length>1)shared++;
  const rows=entry.sourceRows||[];
  check('code-row-provenance',rows.length>0,entry.id);
  const evidencedMakes=new Set();
  for(const row of rows){
   check('source-row-fields',typeof row.path==='string'&&!row.path.includes('..')&&Number.isInteger(row.line)&&row.line>0&&/^[a-f0-9]{40}$/i.test(row.blobSha||'')&&typeof row.originalTitle==='string'&&row.originalTitle.trim().length>0&&typeof row.manufacturer==='string',{id:entry.id,path:row.path,line:row.line});
   const resolved=makeAliases.get(normalize(row.manufacturer));if(resolved)evidencedMakes.add(resolved);
  }
  if(!generic)check('shared-makes-have-upstream-labels',makeIds.every(id=>evidencedMakes.has(id)),{id:entry.id,makeIds,evidenced:[...evidencedMakes]});
  if(data.getGuide){const guide=data.getGuide(entry);check('guide-sources-resolve',guide.sourceIds.length>0&&guide.sourceIds.every(id=>sourceById.has(id)),entry.id);check('guide-safe-context',guide.safety.length>0&&guide.limitations.length>0,entry.id);}
  if(entry.status==='published_indexable'){indexableRoutes.add(route);makeCounts[entry.makeId]=(makeCounts[entry.makeId]||0)+1;systemCounts[entry.system]=(systemCounts[entry.system]||0)+1;}else noindex++;
 }
 for(const model of models){
  check('model-make-exists',makeById.has(model.makeId)&&model.makeId!=='generic',model.id);
  check('model-slug',slug.test(model.slug||''),model.id);
  check('model-existence-evidence',Array.isArray(model.sourceIds)&&model.sourceIds.length>0,model.id);
  for(const id of model.sourceIds||[])check('model-source-exists',sourceById.has(id),{model:model.id,source:id});
  // A sales/existence source supports a model hub, never a model/code diagnostic claim.
  for(const bulletin of model.bulletins||[]){
   const evidence=bulletin.sourceIds||[bulletin.sourceId].filter(Boolean);
   check('model-bulletin-source',evidence.length>0&&evidence.every(id=>sourceById.has(id)),model.id);
   check('model-bulletin-scope',Boolean(bulletin.applicability||bulletin.scope),model.id);
  }
 }
 const bulletinIds=new Set();
 for(const bulletin of bulletins){
  check('bulletin-id-unique',Boolean(bulletin.id)&&!bulletinIds.has(bulletin.id),bulletin.id);bulletinIds.add(bulletin.id);
  check('bulletin-make-exists',makeById.has(bulletin.makeId)&&bulletin.makeId!=='generic',bulletin.id);
  check('bulletin-model-evidence',Array.isArray(bulletin.modelIds)&&bulletin.modelIds.every(id=>modelById.get(id)?.makeId===bulletin.makeId),bulletin.id);
  check('bulletin-primary-evidence',Array.isArray(bulletin.sourceIds)&&bulletin.sourceIds.length>0&&bulletin.sourceIds.every(id=>['manufacturer','public-agency'].includes(sourceById.get(id)?.kind)),bulletin.id);
  check('bulletin-scope-visible',Boolean(bulletin.years&&bulletin.limitations&&bulletin.summary&&bulletin.action),bulletin.id);
  check('bulletin-code-list',Array.isArray(bulletin.codes)&&bulletin.codes.length>0&&bulletin.codes.every(code=>typeof code==='string'&&code.trim()),bulletin.id);
 }
 check('canonical-code-launch-target',indexableRoutes.size>=minimumCodes,{minimum:minimumCodes,actual:indexableRoutes.size,scope:'Unique indexable code routes only. Directories, model hubs, aliases and noindex pages do not count.'});
 const result=collector.report();
 return {status:result.failed?'failed':'passed',counts:{codes:codes.length,indexableCanonicalCodes:indexableRoutes.size,genericCodes:genericCodes.size,manufacturerCodes:codes.length-genericCodes.size,sharedManufacturerReferences:shared,noindexCodes:noindex,makes:makes.length,models:models.length,sources:sources.length,systems:systems.length},canonicalCodesByMake:makeCounts,canonicalCodesBySystem:systemCounts,...result};
}
export async function validateData(root=process.cwd()){
 const data=await import('../src/lib/cars.ts');
 const sourceInputs=[];
 for(const filename of ['dataset-sources.json','oem-sources.json','editorial-sources.json']){
  try{sourceInputs.push({filename,records:JSON.parse(await fs.readFile(path.join(root,'src/data',filename),'utf8'))});}catch(error){if(error.code!=='ENOENT')throw error;}
 }
 const catalog=sourceInputs.flatMap(input=>input.records);
 const report={checkedAt:new Date().toISOString(),...validateDataset({...data,sources:catalog,sourceInputs}),scope:'Structural/provenance consistency and canonical publication gates. Community definitions are not OEM-verified diagnoses. Passing does not establish source accuracy, model applicability, deployment or indexing.'};
 await fs.mkdir(path.join(root,'reports'),{recursive:true});await fs.writeFile(path.join(root,'reports/data-validation.json'),JSON.stringify(report,null,2)+'\n');return report;
}
if(process.argv[1]&&import.meta.url===pathToFileURL(path.resolve(process.argv[1])).href){
 try{const report=await validateData();console.log(JSON.stringify({status:report.status,counts:report.counts,checks:report.checks,failed:report.failed,failures:report.failures.slice(0,12),omittedFailures:Math.max(0,report.failed-12)},null,2));process.exitCode=report.status==='passed'?0:1;}catch(error){console.error(error);process.exitCode=1;}
}
