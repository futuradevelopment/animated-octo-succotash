import {test,expect} from '@playwright/test';
import {parseHTML} from 'linkedom';
import {manuscriptForEntry,renderManuscript} from '../../src/lib/code-manuscripts';
import {getCode,codePath,site} from '../../src/lib/cars';

// All article content and source context must be delivered in the static response.
test.use({javaScriptEnabled:false});
const normalize=(value:string|null|undefined)=>(value||'').replace(/\s+/g,' ').trim();
const samples=[
 ['checked-generic','generic-c0001'],
 ['source-review-pending','generic-c0502'],
 ['ford-readiness','ford-p1000'],
 ['volkswagen-source-scope','volkswagen-p1111'],
] as const;

for(const [name,entryId] of samples)test(`${name} publishes the complete code article without JavaScript`,async({page},testInfo)=>{
 const article=manuscriptForEntry(entryId)!;expect(article).toBeTruthy();
 const entry=getCode(entryId),route=codePath(entry),response=await page.goto(route);
 expect(response?.status()).toBe(200);
 await expect(page.locator('h1')).toHaveCount(1);await expect(page.locator('h1')).toHaveText(article.title);
 await expect(page.locator('meta[name="description"]')).toHaveAttribute('content',article.description);
 await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href',site.url+route);
 await expect(page.locator(`article[data-code-manuscript="${entryId}"]`)).toHaveAttribute('data-source-review',article.sourceReview);
 await expect(page.locator('[data-manuscript-scope]')).toContainText(article.scope);
 const body=page.locator('[data-manuscript-body]');await expect(body).toBeVisible();await expect(body.locator('h1')).toHaveCount(0);
 const {html}=await renderManuscript(article),expected=parseHTML(`<main>${html}</main>`).document.querySelector('main')!;
 expect(normalize(await body.textContent())).toBe(normalize(expected.textContent));
 for(const link of expected.querySelectorAll('a[href]')){
  const href=link.getAttribute('href')!;
  expect(await body.locator('a[href]').evaluateAll(links=>links.map(a=>a.getAttribute('href')))).toContain(href);
 }
 await expect(page.locator('[data-code-definition]')).toContainText(entry.title);
 await expect(page.locator('#sources')).toBeVisible();await expect(page.locator('#applicability a[href="/safety/"]')).toBeVisible();
 if(article.sourceReview==='needs-review')await expect(page.locator('[data-source-review-note]')).toBeVisible();
 else await expect(page.locator('[data-source-review-note]')).toHaveCount(0);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth<=document.documentElement.clientWidth+1)).toBe(true);
 await page.screenshot({path:`reports/browser/${testInfo.project.name}-manuscript-${name}.jpg`,type:'jpeg',quality:70,fullPage:true});
});

test('a manuscript does not appear on another manufacturer’s same-number dictionary page',async({page})=>{
 const chevrolet=manuscriptForEntry('chevrolet-p1133')!;expect(chevrolet).toBeTruthy();
 await page.goto(codePath(getCode(chevrolet.entryId)));await expect(page.locator('[data-code-manuscript]')).toHaveAttribute('data-code-manuscript',chevrolet.entryId);
 await page.goto(codePath(getCode('ford-p1133')));
 await expect(page.locator('article[data-reference-kind="dictionary"]')).toBeVisible();
 await expect(page.locator('[data-code-manuscript],[data-manuscript-body]')).toHaveCount(0);
 await expect(page.locator('[data-code-definition]')).toContainText(getCode('ford-p1133').title);
});
