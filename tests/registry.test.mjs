import test from 'node:test';
import assert from 'node:assert/strict';
import {validateDataset,isGenericAllocation,isManufacturerAllocation,canonicalCodeRoute,CODE_PATTERN} from '../scripts/validate-data.mjs';
import {createCheckCollector,reachableRoutes,validDate} from '../scripts/lib/audit-utils.mjs';
import {parseScannerCodes,directoryPages,pagePath,findCode,getGuide,codePath,searchParts,searchIndex,searchMakeManifests,codes,getIndexableRoutes,indexableCodeRoutes} from '../src/lib/cars.ts';
import {evaluateSeoGate} from '../scripts/lighthouse-seo-gate.mjs';
import {ads,allowedPlacements} from '../src/lib/ads.ts';

const row=manufacturer=>({path:'fixture/code-list.txt',line:1,blobSha:'a'.repeat(40),manufacturer,originalTitle:'Fixture circuit signal outside range'});
const record=(code='P1234',makeId='ford')=>({id:makeId+'-'+code.toLowerCase(),code,makeId,title:'Fixture circuit signal outside range',system:'powertrain',sourceId:'fixture-dataset',scope:makeId==='generic'?'generic':'manufacturer',status:'published_indexable',sourceRows:[row(makeId.toUpperCase())]});
function fixture(){return {codes:[record()],makes:[{id:'generic',name:'Generic OBD-II'},{id:'ford',name:'Ford'},{id:'lincoln',name:'Lincoln'},{id:'chevrolet',name:'Chevrolet',aliases:['Chevy']}],systems:[{id:'powertrain'}],sources:[{id:'fixture-dataset',url:'https://example.org/fixture',checkedOn:'2026-10-30',kind:'dataset'}],models:[],bulletins:[]};}
const validate=data=>validateDataset(data,{minimumCodes:0});
const fails=(data,name)=>assert.ok(validate(data).counters[name]?.failed>0,`Expected ${name} failure`);

test('a different title and code cannot turn copied diagnostic prose into a new guide',()=>{
 const data=fixture();data.sources.push({id:'oem',url:'https://example.org/manual',checkedOn:'2026-10-30',kind:'manufacturer'});
 data.models.push({id:'ford-example',makeId:'ford',slug:'example',sourceIds:['oem']});
 const guide={id:'first',slug:'first',title:'First diagnosis',makeId:'ford',modelIds:['ford-example'],sourceIds:['oem'],updatedOn:'2026-10-30',scope:[{label:'Vehicle',value:'Documented example'}],sections:[{id:'evidence',title:'Evidence',paragraphs:['A particular recorded condition must explain P1234 before selecting a repair.']}]};
 data.authoredGuides=[guide];assert.equal(validate(data).status,'passed');
 data.authoredGuides.push({...guide,id:'second',slug:'second',title:'Different code title',sections:[{...guide.sections[0],paragraphs:['A particular recorded condition must explain P1235 before selecting a repair.']}]});
 fails(data,'authored-guide-distinct-body');
});

test('one shared diagnostic article requires an evidenced model for every covered make',()=>{
 const data=fixture();data.sources.push({id:'oem',url:'https://example.org/manual',checkedOn:'2026-10-30',kind:'manufacturer'});
 data.models.push({id:'ford-example',makeId:'ford',slug:'example',sourceIds:['oem']},{id:'lincoln-example',makeId:'lincoln',slug:'example',sourceIds:['oem']});
 const guide={id:'shared',slug:'shared',makeId:'ford',makeIds:['ford','lincoln'],modelIds:['ford-example','lincoln-example'],sourceIds:['oem'],updatedOn:'2026-10-30',scope:[{label:'Vehicles',value:'Both documented applications'}],sections:[{id:'condition',title:'Condition',paragraphs:['A verified shared condition and one diagnostic path.']}]};
 data.authoredGuides=[guide];assert.equal(validate(data).status,'passed');
 guide.modelIds=['ford-example'];fails(data,'authored-guide-vehicle');
 guide.modelIds=['ford-example','lincoln-example'];guide.makeIds=['ford'];fails(data,'authored-guide-vehicle');
});

test('engine-scoped evidence does not require invented model associations',()=>{
 const data=fixture();data.sources.push({id:'oem',url:'https://example.org/manual',checkedOn:'2026-10-30',kind:'manufacturer'});
 data.authoredGuides=[{id:'engine-case',slug:'engine-case',makeId:'ford',modelIds:[],engineCodes:['EXAMPLE'],sourceIds:['oem'],updatedOn:'2026-10-30',scope:[{label:'Engine',value:'EXAMPLE only'}],sections:[{id:'condition',paragraphs:['A documented engine-scoped diagnostic case.']}]}];
 assert.equal(validate(data).status,'passed');data.authoredGuides[0].engineCodes=[];fails(data,'authored-guide-vehicle');
});

test('bulletin links must resolve to a guide covering the same models and make',()=>{
 const data=fixture();data.sources.push({id:'oem',url:'https://example.org/manual',checkedOn:'2026-10-30',kind:'manufacturer'});
 data.models.push({id:'ford-example',makeId:'ford',slug:'example',sourceIds:['oem']});
 data.authoredGuides=[{id:'case',slug:'case',makeId:'ford',modelIds:['ford-example'],sourceIds:['oem'],updatedOn:'2026-10-30',scope:[{label:'Vehicle',value:'Scoped example'}],sections:[{id:'condition',paragraphs:['A distinct documented condition.']}]}];
 data.bulletins=[{id:'bulletin',makeId:'ford',modelIds:['ford-example'],codes:['P1234'],sourceIds:['oem'],years:'2020',summary:'Scope',action:'Diagnosis',limitations:'Exact vehicle only',guideSlug:'case'}];
 assert.equal(validate(data).status,'passed');data.bulletins[0].guideSlug='missing';fails(data,'bulletin-guide-resolves');
});

test('complete reference retains one canonical route and verifiable source row',()=>{
 const data=fixture(),result=validate(data);assert.equal(result.status,'passed',JSON.stringify(result.failures));assert.equal(result.counts.indexableCanonicalCodes,1);assert.equal(canonicalCodeRoute(data.codes[0]),'/codes/ford/p1234/');
});
test('standard allocations distinguish generic and manufacturer blocks including P3 boundary',()=>{
 for(const code of ['P0300','P0A80','P2001','P3400','P3FFF','B0001','C0001','U0001','U3000'])assert.equal(isGenericAllocation(code),true,code);
 for(const code of ['P1234','P3000','P33FF','B1234','B2001','C1234','C3000','U1234','U2001'])assert.equal(isGenericAllocation(code),false,code);
 for(const code of ['P4000','P03G0','P030000','P030','p0300','xP0300'])assert.equal(CODE_PATTERN.test(code),false,code);
});
test('scanner parser supports hexadecimal letters and suffixes without inventing partial codes',()=>{
 assert.deepEqual(parseScannerCodes('Stored p0a80, pending P0300:00; U0100-87; duplicate P0300'),['P0A80','P0300','U0100']);
 assert.deepEqual(parseScannerCodes('XP0300 P030000 P4000 P03G0 not-a-code'),[]);
});
test('reserved B3/C3 allocations cannot publish as manufacturer references',()=>{
 for(const code of ['B3000','C3FFF'])assert.equal(isManufacturerAllocation(code),false);
 const data=fixture();data.codes=[{...record('B3000','ford'),system:'body'}];data.systems.push({id:'body'});fails(data,'code-assigned-allocation');
});
test('unknown codes return no mapping instead of falling back to another definition',()=>{
 assert.deepEqual(findCode('NOT-A-CODE'),[]);assert.deepEqual(findCode('P0300','nonexistent-make'),[]);
 const used=new Set(codes.map(c=>c.code));const unknown=Array.from({length:4096},(_,n)=>'B3'+n.toString(16).toUpperCase().padStart(3,'0')).find(code=>!used.has(code));assert.ok(unknown);assert.deepEqual(findCode(unknown),[]);
});
test('generic codes cannot be duplicated under manufacturer canonicals',()=>{
 const data=fixture();data.codes=[record('P0300','generic'),record('P0300','ford')];fails(data,'generic-canonical-make');fails(data,'generic-canonical-once');
});
test('generic reference cannot acquire an inferred brand list',()=>{
 const data=fixture();data.codes=[{...record('P0300','generic'),makeIds:['generic','ford']}];fails(data,'generic-no-brand-crossproduct');
});
test('duplicate identifiers and conflicting code routes are separate failures',()=>{
 const data=fixture();data.codes.push({...data.codes[0],title:'Different definition'});fails(data,'code-id-unique');fails(data,'code-route-unique');
 data.codes[1].id='other-id';assert.equal(validate(data).counters['code-id-unique'].failed,0);fails(data,'code-route-unique');
});
test('identical display under different manufacturer scopes may retain distinct meanings',()=>{
 const data=fixture();data.codes.push({...record('P1234','lincoln'),title:'A distinct manufacturer reference'});assert.equal(validate(data).status,'passed');assert.notEqual(canonicalCodeRoute(data.codes[0]),canonicalCodeRoute(data.codes[1]));
});
test('secondary manufacturer association requires its own upstream label',()=>{
 const data=fixture();data.codes[0].makeIds=['ford','lincoln'];fails(data,'shared-makes-have-upstream-labels');data.codes[0].sourceRows.push(row('LINCOLN'));assert.equal(validate(data).status,'passed');
});
test('a shared manufacturer alias cannot point to two conflicting canonical entries',()=>{
 const data=fixture();data.codes[0].makeIds=['ford','lincoln'];data.codes[0].sourceRows.push(row('LINCOLN'));data.codes.push(record('P1234','lincoln'));fails(data,'shared-code-unambiguous');
});
test('explicit manufacturer spelling aliases resolve evidence without corporate inheritance',()=>{
 const data=fixture();data.codes=[{...record('P1234','chevrolet'),sourceRows:[row('CHEVY')]}];assert.equal(validate(data).status,'passed');data.codes[0].sourceRows=[row('GENERAL MOTORS')];fails(data,'shared-makes-have-upstream-labels');
});
test('unresolved source IDs and malformed source-row provenance fail',()=>{
 const data=fixture();data.codes[0].sourceId='missing';fails(data,'code-source-exists');data.codes[0].sourceRows[0].line=0;data.codes[0].sourceRows[0].blobSha='guess';fails(data,'source-row-fields');
});
test('merged source catalog permits identical component records but rejects conflicts',()=>{
 const data=fixture();data.sourceInputs=[{filename:'component.json',records:structuredClone(data.sources)}];assert.equal(validate(data).status,'passed');data.sourceInputs[0].records[0].url='https://example.org/changed';fails(data,'source-catalog-consistent');
});
test('impossible dates and appliance leftovers are rejected',()=>{
 assert.equal(validDate('2026-02-31'),false);assert.equal(validDate('2024-02-29'),true);const data=fixture();data.sources[0].checkedOn='2026-02-31';data.codes[0].title='Washing machine draining fault';fails(data,'source-checked-date');fails(data,'no-appliance-residue');
});
test('noindex definitions are published but never count toward the dictionary inventory floor',()=>{
 const data=fixture();data.codes[0].status='published_noindex';const result=validateDataset(data,{minimumCodes:1});assert.equal(result.counts.noindexCodes,1);assert.equal(result.counts.indexableCanonicalCodes,0);assert.equal(result.counters['dictionary-inventory-floor'].failed,1);
 assert.deepEqual(indexableCodeRoutes([data.codes[0],record('P0300','generic')]),['/codes/generic/p0300/']);
});
test('directories and model hubs cannot satisfy the dictionary inventory floor',()=>{
 const data=fixture();data.models=Array.from({length:20},(_,n)=>({id:'ford-'+n,makeId:'ford',slug:'model-'+n,sourceIds:['fixture-dataset']}));const result=validateDataset(data,{minimumCodes:2});assert.equal(result.counts.indexableCanonicalCodes,1);assert.equal(result.counters['dictionary-inventory-floor'].failed,1);
});
test('model bulletins require primary evidence and matching manufacturer scope',()=>{
 const data=fixture();data.models=[{id:'ford-model',makeId:'ford',slug:'model',sourceIds:['fixture-dataset']}];data.bulletins=[{id:'bulletin',makeId:'lincoln',modelIds:['ford-model'],sourceIds:['fixture-dataset'],codes:['P1234'],years:'2020',summary:'Fixture condition',action:'Follow OEM instructions',limitations:'Exact engine and market only'}];fails(data,'bulletin-model-evidence');fails(data,'bulletin-primary-evidence');
 data.sources.push({id:'oem',url:'https://example.org/oem',kind:'manufacturer',checkedOn:'2026-10-30'});data.bulletins[0].makeId='ford';data.bulletins[0].sourceIds=['oem'];assert.equal(validate(data).status,'passed');
});
test('generic editorial profiles do not overwrite a manufacturer definition',()=>{
 const entry={...record('P0A80','ford'),title:'Synthetic manufacturer-specific label'};const guide=getGuide(entry);assert.equal(guide.meaning,entry.title);assert.ok(guide.limitations.some(text=>/model|vehicle|year/i.test(text)));
});
test('directory partitioning covers each entry once with at most100 per page',()=>{
 const entries=Array.from({length:205},(_,n)=>({id:String(n)}));const pages=directoryPages(entries,'/codes/');assert.deepEqual(pages.map(p=>p.entries.length),[100,100,5]);assert.deepEqual(pages.flatMap(p=>p.entries.map(e=>e.id)),entries.map(e=>e.id));assert.equal(pagePath('/codes/',1),'/codes/');assert.equal(pagePath('/codes/',3),'/codes/page/3/');
});
test('actual search parts preserve canonical definitions and every secondary make discovery',()=>{
 const byId=new Map(codes.map(c=>[c.id,c])),seen=new Set();
 for(const [partId,part] of searchParts){assert.ok(part.length>0&&part.length<=500);for(const record of part){assert.ok(!seen.has(record.id));seen.add(record.id);const code=byId.get(record.id);assert.equal(record.title,code.title);assert.equal(record.url,codePath(code));assert.ok(searchIndex.codes[record.code].includes(partId));for(const makeId of record.makeIds)assert.ok(searchMakeManifests.get(makeId)?.parts.some(p=>p.id===partId));}}
 assert.equal(seen.size,codes.length);
 const indexable=new Set(getIndexableRoutes());for(const entry of codes)assert.equal(indexable.has(codePath(entry)),entry.status==='published_indexable');assert.ok(!indexable.has('/search/'));
});
test('audit counters cap retained failures without losing the total',()=>{
 const audit=createCheckCollector(2);for(let n=0;n<10000;n++)audit.check('fixture',n%2===0,n);const result=audit.report();assert.equal(result.checks,10000);assert.equal(result.failed,5000);assert.equal(result.failures.length,2);assert.equal(result.omittedFailures,4998);assert.equal(result.counters.fixture.failed,5000);
});
test('reachability handles cycles and identifies a disconnected canonical page',()=>{
 const graph=new Map([['/',['/codes/']],['/codes/',['/','/codes/generic/p0300/']],['/codes/generic/p0300/',['/codes/']],['/orphan/',[]]]);const reached=reachableRoutes(graph);assert.equal(reached.size,3);assert.ok(!reached.has('/orphan/'));
});
test('intentional noindex exempts only crawlability from the SEO gate',()=>{
 const report={categories:{seo:{score:.9,auditRefs:[{id:'is-crawlable',weight:1},{id:'meta-description',weight:1}]}},audits:{'is-crawlable':{score:0},'meta-description':{score:1}}};assert.equal(evaluateSeoGate(report,{intentionalNoindex:true}).passed,true);assert.equal(evaluateSeoGate(report).passed,false);report.audits['meta-description'].score=0;assert.equal(evaluateSeoGate(report,{intentionalNoindex:true}).passed,false);
});
test('advertising remains disabled for every article length',()=>{
 assert.equal(ads.provider,'none');assert.equal(ads.enabled,false);assert.equal(ads.approved,false);assert.equal(ads.publisherId,'');for(const words of [0,100,600,1200,10000])assert.deepEqual(allowedPlacements(words),[]);
});
