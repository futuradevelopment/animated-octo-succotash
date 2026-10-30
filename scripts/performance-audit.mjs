import fs from 'node:fs/promises';
import lighthouse from 'lighthouse';
import {computeMedianRun} from 'lighthouse/core/lib/median-run.js';
import {launch} from 'chrome-launcher';
import {codes,models,makes,codePath,modelPath,makePath} from '../src/lib/cars.ts';
import {evaluateSeoGate} from './lighthouse-seo-gate.mjs';

const base=process.argv.find(a=>a.startsWith('--url='))?.slice(6)||'http://127.0.0.1:4321';
const article=codes.find(c=>c.code==='P0A80')||codes.find(c=>c.status==='published_indexable');
if(!article)throw new Error('No indexable code is available for the performance profile.');
const hub=models[0]?modelPath(models[0]):makePath((makes.find(m=>m.id!=='generic')||makes[0]).id);
const paths=['/',codePath(article),'/search/?q='+encodeURIComponent(article.code),hub];
await fs.mkdir('reports/lighthouse',{recursive:true});
const summary={measuredAt:new Date().toISOString(),base,status:'running',mode:'Production static build; advertising disabled',fieldMetrics:'Not measured. Field p75 LCP, INP and CLS require real-user data.',method:{samplesPerProfile:3,sequence:'Three consecutive runs for each route/device; no retries or discarded samples.',representative:'lighthouse/core/lib/median-run.js computeMedianRun',reference:'https://github.com/GoogleChrome/lighthouse/blob/main/docs/variability.md'},targets:{performance:95,accessibility:100,seo:100,'best-practices':100,lcpMs:2500,cls:.1},runs:[]};
function metrics(lhr,route){
 const scores=Object.fromEntries(Object.entries(lhr.categories).map(([key,value])=>[key,Math.round(value.score*100)]));
 const seo=evaluateSeoGate(lhr,{intentionalNoindex:route.startsWith('/search/'),target:100});
 const lcpMs=lhr.audits['largest-contentful-paint'].numericValue,cls=lhr.audits['cumulative-layout-shift'].numericValue;
 const passed=seo.passed&&scores.performance>=95&&scores.accessibility===100&&scores['best-practices']===100&&lcpMs<=2500&&cls<=.1;
 const failures=Object.entries(lhr.audits).filter(([,a])=>a.score!==null&&a.score<1&&a.scoreDisplayMode!=='informative').map(([id,a])=>({id,title:a.title,score:a.score,...(['color-contrast','link-name'].includes(id)?{nodes:(a.details?.items||[]).map(item=>({selector:item.node?.selector,snippet:item.node?.snippet,explanation:item.node?.explanation}))}:{})}));
 return {scores,lcpMs,cls,passed,seo,failures};
}
let chrome;
try{
 chrome=await launch({chromePath:process.env.CHROME_PATH,chromeFlags:['--headless','--no-sandbox','--disable-dev-shm-usage']});
 for(const route of paths)for(const device of ['mobile','desktop']){
  const options={port:chrome.port,output:'json',logLevel:'error',onlyCategories:['performance','accessibility','best-practices','seo'],...(device==='desktop'?{formFactor:'desktop',screenEmulation:{mobile:false,width:1440,height:900,deviceScaleFactor:1,disabled:false},throttling:{rttMs:40,throughputKbps:10240,cpuSlowdownMultiplier:1,requestLatencyMs:0,downloadThroughputKbps:0,uploadThroughputKbps:0}}:{})};
  const name=(route==='/'?'home':route.split('?')[0].replaceAll('/','-').replace(/^-|-$/g,''))+'-'+device;
  const samples=[],lhrs=[],record={route,device,status:'running',samples};
  summary.runs.push(record);
  for(let sample=1;sample<=3;sample++){
   const result=await lighthouse(new URL(route,base).href,options),lhr=result?.lhr;
   if(!lhr||lhr.runtimeError)throw new Error(`${route} ${device} sample ${sample}: ${lhr?.runtimeError?.message||'Lighthouse produced no result'}`);
   const reportFile=`reports/lighthouse/${name}-sample-${sample}.json`;
   await fs.writeFile(reportFile,JSON.stringify(lhr));
   lhrs.push(lhr);samples.push({sample,reportFile,...metrics(lhr,route)});
   console.log(JSON.stringify({route,device,...samples.at(-1)}));
   await fs.writeFile('reports/lighthouse/summary.json',JSON.stringify(summary,null,2)+'\n');
  }
  const representative=computeMedianRun(lhrs),index=lhrs.indexOf(representative);
  if(index<0)throw new Error('Lighthouse returned an unrecognized representative run.');
  Object.assign(record,{status:'complete',representativeSample:index+1,reportFile:samples[index].reportFile,...metrics(representative,route)});
  await fs.writeFile('reports/lighthouse/summary.json',JSON.stringify(summary,null,2)+'\n');
 }
 summary.status=summary.runs.length===8&&summary.runs.every(r=>r.passed)?'passed':'failed';
}catch(error){summary.status='blocked';summary.reason=error.message;console.error(error.message);}
finally{if(chrome)await chrome.kill();await fs.writeFile('reports/lighthouse/summary.json',JSON.stringify(summary,null,2)+'\n');}
process.exitCode=summary.status==='passed'?0:summary.status==='blocked'?2:1;
