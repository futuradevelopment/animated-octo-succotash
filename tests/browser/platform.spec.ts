import {test,expect} from '@playwright/test';
import {authoredGuides,guidePath,guidesForCode} from '../../src/lib/authored-guides';
import {codes,models,makes,codePath,modelPath,makePath,codesForMake,bulletinsForMake,getSource} from '../../src/lib/cars';

const generic=codes.find(entry=>entry.code==='P0A80'&&entry.scope==='generic')!;
const manufacturer=codes.find(entry=>entry.scope==='manufacturer')!;
const shared=codes.find(entry=>entry.scope==='manufacturer'&&(entry.makeIds?.length||0)>1)!;
const secondaryMake=shared.makeIds!.find(id=>id!==shared.makeId)!;
const model=models.find(item=>item.sourceIds.length>0);
const pagedMake=makes.find(make=>codesForMake(make.id).length>100)!;
const usedCodes=new Set(codes.map(entry=>entry.code));
const unknown=Array.from({length:4096},(_,n)=>'B3'+n.toString(16).toUpperCase().padStart(3,'0')).find(code=>!usedCodes.has(code))!;
const samples:[string,string][]=[['home','/'],['code-directory','/codes/'],['make',makePath(pagedMake.id)],['article',codePath(generic)],['manufacturer-article',codePath(manufacturer)],['search','/search/?q=P0A80'],...(model?[['model',modelPath(model)] as [string,string]]:[])];

for(const [name,url] of samples)test(`${name} remains readable at the configured device size`,async({page},testInfo)=>{
 const errors:string[]=[];page.on('pageerror',error=>errors.push(error.message));
 const response=await page.goto(url);expect(response?.status()).toBe(200);
 await expect(page.locator('h1')).toHaveCount(1);await expect(page.locator('main')).toBeVisible();
 if(name==='search')await expect(page.locator(`#search-results a[data-code-id="${generic.id}"]`)).toBeVisible();
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth+1)).toBe(true);
 expect(errors).toEqual([]);
 await page.screenshot({path:`reports/browser/${testInfo.project.name}-${name}.png`,fullPage:true});
 await page.screenshot({path:`reports/browser/${testInfo.project.name}-${name}.jpg`,type:'jpeg',quality:65,fullPage:false});
});

test('homepage scanner lookup finds P0A80 including its hexadecimal letter',async({page})=>{
 await page.goto('/');await page.locator('#home-query').fill('P0A80');await page.locator('form.hero-search button[type="submit"]').click();
 await expect(page).toHaveURL(/\/search\/\?q=P0A80/);const result=page.locator(`#search-results a[data-code-id="${generic.id}"]`);
 await expect(result).toHaveAttribute('href',codePath(generic));await result.click();await expect(page.locator('h1')).toContainText('P0A80');
 await expect(page.locator('[data-code-definition]')).toContainText(generic.title);
});

test('blank search downloads no lookup data until interaction',async({page})=>{
 const requests:string[]=[];page.on('request',request=>{if(request.url().includes('/search-data/'))requests.push(request.url());});
 await page.goto('/');await page.locator('.site-header').getByRole('link',{name:'Find a code',exact:true}).click();await expect(page).toHaveURL(/\/search\/$/);await expect(page.locator('#search-status')).toContainText('Enter a code');
 await expect(page.locator('#search-results a')).toHaveCount(0);expect(requests).toEqual([]);
 await page.locator('#query').fill('P0A80');await expect(page.locator(`#search-results a[data-code-id="${generic.id}"]`)).toBeVisible();
 expect(requests.some(url=>url.includes('/search-data/index.json'))).toBe(true);
 expect(requests.filter(url=>url.includes('/search-data/parts/')).length).toBeLessThanOrEqual(8);
});

test('secondary manufacturer filter opens the single shared canonical reference',async({page})=>{
 await page.goto('/search/');await page.locator('#make').selectOption(secondaryMake);await page.locator('#query').fill(shared.code);
 const result=page.locator(`#search-results a[data-code-id="${shared.id}"]`);await expect(result).toBeVisible();await expect(result).toHaveAttribute('href',codePath(shared));
 const ids=await page.locator('#search-results a[data-code-id]').evaluateAll(links=>links.map(link=>link.getAttribute('data-code-id')));expect(new Set(ids).size).toBe(ids.length);
 for(const names of await page.locator('#search-results a[data-make-ids]').evaluateAll(links=>links.map(link=>link.getAttribute('data-make-ids')!.split(' '))))expect(names).toContain(secondaryMake);
 await result.click();await expect(page).toHaveURL(new RegExp(codePath(shared).replaceAll('/','\\/')+'$'));
 await expect(page.locator('#applicability')).toContainText(makes.find(make=>make.id===secondaryMake)!.name);
});

test('generic and manufacturer references remain separate when filtering',async({page})=>{
 await page.goto('/search/?q=P0A80&make=generic');await expect(page.locator(`#search-results a[data-code-id="${generic.id}"]`)).toBeVisible();
 await page.locator('#make').selectOption(manufacturer.makeId);await expect(page.locator('#search-empty')).toBeVisible();await expect(page.locator('#search-results a')).toHaveCount(0);
 await page.locator('#query').fill(manufacturer.code);await expect(page.locator(`#search-results a[data-code-id="${manufacturer.id}"]`)).toBeVisible();
});

test('scanner suffix remains context and malformed extended code is not silently shortened',async({page})=>{
 await page.goto('/search/?q='+encodeURIComponent('P0A80:00 stored')+'&make=generic');await expect(page.locator(`#search-results a[data-code-id="${generic.id}"]`)).toBeVisible();await expect(page.locator('#search-hint')).toContainText('suffix');
 await page.locator('#query').fill('P0A8000');await expect(page.locator('#search-empty')).toBeVisible();await expect(page.locator('#search-results a')).toHaveCount(0);
});

test('unknown code does not acquire a fabricated result and clears cleanly',async({page})=>{
 await page.goto('/search/?q='+unknown);await expect(page.locator('#search-empty')).toBeVisible();await expect(page.locator('#search-results a')).toHaveCount(0);
 await page.locator('#clear-search').click();await expect(page.locator('#query')).toHaveValue('');await expect(page.locator('#make')).toHaveValue('');await expect(page.locator('#search-empty')).toBeHidden();await expect(page).toHaveURL(/\/search\/$/);
});

test('make directory pagination keeps canonical links and avoids repeated entries',async({page})=>{
 await page.goto(makePath(pagedMake.id));const first=await page.locator('.directory-grid [data-code-id]').evaluateAll(links=>links.map(link=>link.getAttribute('data-code-id')));expect(first).toHaveLength(100);
 await page.locator('nav.pagination a[rel="next"]').click();await expect(page).toHaveURL(new RegExp(makePath(pagedMake.id).replaceAll('/','\\/')+'page\\/2\\/$'));
 const second=await page.locator('.directory-grid [data-code-id]').evaluateAll(links=>links.map(link=>link.getAttribute('data-code-id')));expect(second.length).toBeGreaterThan(0);expect(second.length).toBeLessThanOrEqual(100);expect(second.some(id=>first.includes(id))).toBe(false);
 await expect(page.locator('nav.pagination a[aria-current="page"]')).toHaveText('2');
});

test('dictionary definition, scope, source and safety link work without JavaScript',async({browser,baseURL})=>{
 const context=await browser.newContext({javaScriptEnabled:false,baseURL});const page=await context.newPage();
 try{await page.goto(codePath(generic));await expect(page.locator('[data-code-definition]')).toContainText(generic.title);await expect(page.locator('article[data-reference-kind="dictionary"]')).toBeVisible();await expect(page.locator('#applicability')).toContainText('Generic OBD-II');await expect(page.locator('#applicability a[href="/safety/"]')).toBeVisible();await expect(page.locator('#first-check,#next-steps,.diagnostic-steps')).toHaveCount(0);await expect(page.locator('#sources')).toContainText(getSource(generic.sourceId).publisher);await expect(page.locator('#report')).toBeVisible();await expect(page.locator('[data-reference-limit]')).toContainText('definition, not a repair instruction');await page.goto('/search/');const fallback=page.locator('noscript a[href="/codes/"]');await expect(fallback).toBeVisible();await expect(fallback).toHaveText('paginated code directory');await fallback.click();await expect(page).toHaveURL(/\/codes\/$/);await expect(page.locator('.directory-grid [data-code-id]')).toHaveCount(100);}finally{await context.close();}
});

test('report and source fragment anchors resolve on a code page',async({page})=>{
 await page.goto(codePath(generic)+'#sources');await expect(page.locator('#sources')).toBeInViewport();await page.goto(codePath(generic)+'#report');await expect(page.locator('#report')).toBeInViewport();await expect(page.locator('#report a')).toHaveAttribute('href',/\/(about|contact|editorial-policy)\//);
});

test('unknown code and invented vehicle-code crossproducts return true404',async({page})=>{
 for(const route of [`/codes/generic/${unknown.toLowerCase()}/`,'/codes/unknown-make/p0300/','/models/ford/nonexistent-vehicle/p0300/']){const response=await page.goto(route);expect(response?.status(),route).toBe(404);await expect(page.locator('h1')).toBeVisible();await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content',/noindex/);}
});

test('320px and360px layouts keep cards, definitions, pagination and search in the viewport',async({page})=>{
 for(const width of [320,360]){await page.setViewportSize({width,height:800});for(const url of ['/',codePath(generic),codePath(shared),makePath(pagedMake.id)+'page/2/','/search/?q=P0A80']){await page.goto(url);if(url.includes('/search/'))await expect(page.locator('#search-results a').first()).toBeVisible();const layout=await page.evaluate(()=>({scrollWidth:document.documentElement.scrollWidth,viewport:document.documentElement.clientWidth,overflow:[...document.querySelectorAll('body *')].filter(e=>e.getBoundingClientRect().right>document.documentElement.clientWidth+1).slice(0,8).map(e=>({tag:e.tagName,cls:e.className,right:e.getBoundingClientRect().right}))}));expect(layout.scrollWidth,JSON.stringify({url,width,layout})).toBeLessThanOrEqual(layout.viewport+1);}}
});

test('clearing pending search removes busy state and prevents stale results',async({page})=>{
 let release!:()=>void;const pending=new Promise<void>(resolve=>{release=resolve;});await page.route('**/search-data/index.json',async route=>{await pending;await route.continue();});
 try{await page.goto('/search/');await page.locator('#query').fill('P0A80');await expect(page.locator('#search-results')).toHaveAttribute('aria-busy','true');await page.locator('#clear-search').click();await expect(page.locator('#search-results')).not.toHaveAttribute('aria-busy','true');release();await expect(page.locator('#search-results a')).toHaveCount(0);await expect(page.locator('#search-status')).toContainText('Enter a code');}finally{release();}
});

for(const makeId of ['audi','porsche'])test(`${makeId} manufacturer documents are discoverable from the homepage and code finder`,async({page},testInfo)=>{
 const make=makes.find(item=>item.id===makeId)!;
 const bulletin=bulletinsForMake(makeId).find(item=>item.modelIds.length>0)!;
 const scopedModel=models.find(item=>item.id===bulletin.modelIds[0])!;
 const source=getSource(bulletin.sourceIds[0]);
 await page.goto('/');
 const tile=page.locator(`.make-grid a[href="${makePath(makeId)}"]`);
 await expect(tile).toBeVisible();await expect(tile).toContainText(make.name);await tile.click();
 await expect(page.locator('h1')).toContainText(make.name);
 await expect(page.getByText('No matching references here yet.',{exact:true})).toHaveCount(0);
 const documentedCase=page.locator(`[data-bulletin-id="${bulletin.id}"]`);
 await expect(documentedCase).toBeVisible();await expect(documentedCase).toContainText(bulletin.codes.join(', '));await expect(documentedCase).toContainText(bulletin.limitations);
 await expect(documentedCase.getByRole('link',{name:source.title,exact:true})).toHaveAttribute('href',source.url);
 await page.screenshot({path:`reports/browser/${testInfo.project.name}-${makeId}.jpg`,type:'jpeg',quality:65,fullPage:false});
 await page.locator(`#model-documentation a[href="${modelPath(scopedModel)}"]`).click();
 await expect(page.locator('h1')).toContainText(scopedModel.name);await expect(page.locator('main')).toContainText(bulletin.codes[0]);
 await expect(page.locator(`main a[href="${source.url}"]`).first()).toBeVisible();
 const requests:string[]=[];page.on('request',request=>{if(request.url().includes('/search-data/'))requests.push(request.url());});
 await page.goto('/search/');await page.locator('#make').selectOption(makeId);
 await expect(page.locator('#search-status')).toHaveText(`${make.name} manufacturer documents are available.`);
 const documentationLink=page.locator(`#search-hint a[href="${makePath(makeId)}"]`);await expect(documentationLink).toBeVisible();
 await page.locator('#query').fill(bulletin.codes[0]);await page.locator('#code-search button[type="submit"]').click();
 await expect(page.locator('#search-status')).toHaveText(`${make.name} manufacturer documents are available.`);
 await expect(page.locator('#search-error')).toBeHidden();await expect(page.locator('#search-empty')).toBeHidden();await expect(page.locator('#search-results a')).toHaveCount(0);
 expect(requests.some(url=>url.includes(`/search-data/${makeId}.json`)||url.includes('/search-data/parts/'))).toBe(false);
 await documentationLink.click();await expect(page).toHaveURL(new RegExp(makePath(makeId).replaceAll('/','\\/')+'$'));
});


test('P0299 dictionary links to distinct vehicle-specific Audi and Porsche guides',async({page},testInfo)=>{
 const reference=codes.find(entry=>entry.code==='P0299'&&entry.scope==='generic')!;
 const reviewed=guidesForCode('P0299');
 expect(reviewed.map(guide=>guide.makeId).sort()).toEqual(['audi','porsche']);
 expect(new Set(reviewed.map(guide=>guide.sourceIds.join('|'))).size).toBe(2);
 for(const guide of reviewed){
  await page.goto(codePath(reference));
  const link=page.locator(`#reviewed-guides a[href="${guidePath(guide)}"]`);
  await expect(link).toBeVisible();await expect(link).toContainText(guide.title);await link.click();
  await expect(page.locator('h1')).toHaveText(guide.title);
  const article=page.locator('main');
  for(const scope of guide.scope)await expect(article).toContainText(scope.value);
  for(const id of guide.sourceIds)await expect(article.locator(`a[href="${getSource(id).url}"]`).first()).toBeVisible();
  for(const section of guide.sections){
   await expect(article.getByRole('heading',{name:section.title,exact:true})).toBeVisible();
   for(const paragraph of section.paragraphs||[])await expect(article).toContainText(paragraph);
   for(const row of section.table?.rows||[])for(const value of row)await expect(article).toContainText(value);
  }
  if(guide.makeId==='audi'){await expect(article).toContainText('CAEB');await expect(article).toContainText(/wastegate/i);}
  if(guide.makeId==='porsche'){await expect(article).toContainText(/2,?500/);await expect(article).toContainText('60%');}
  expect(await page.evaluate(()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth+1)).toBe(true);
  await page.screenshot({path:`reports/browser/${testInfo.project.name}-${guide.makeId}-guide.jpg`,type:'jpeg',quality:65,fullPage:true});
 }
 await page.goto(codePath(generic));await expect(page.locator('#reviewed-guides')).toHaveCount(0);
 expect(authoredGuides.length).toBeGreaterThanOrEqual(reviewed.length);
});
