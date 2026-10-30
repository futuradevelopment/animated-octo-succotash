import fs from 'node:fs/promises';
import path from 'node:path';

export const clean=value=>(value||'').replace(/\s+/g,' ').trim();
export function createCheckCollector(maxFailures=250){
 const failures=[],counters=new Map();let checks=0,failed=0;
 return {
  check(name,passed,detail){
   checks++;const counter=counters.get(name)||{checks:0,failed:0};counter.checks++;
   if(!passed){failed++;counter.failed++;if(failures.length<maxFailures&&counter.failed<=Math.min(maxFailures,25))failures.push({name,detail});}
   counters.set(name,counter);return Boolean(passed);
  },
  report(){return {checks,failed,failures,omittedFailures:Math.max(0,failed-failures.length),counters:Object.fromEntries(counters)};},
 };
}
export async function* walkFiles(directory){
 const handle=await fs.opendir(directory);
 for await(const entry of handle){
  const file=path.join(directory,entry.name);
  if(entry.isDirectory())yield* walkFiles(file);
  else if(entry.isFile())yield file;
 }
}
export function routeFromFile(file,dist){
 const rel=path.relative(dist,file).replaceAll(path.sep,'/');
 return rel==='index.html'?'/':rel==='404.html'?'/404.html':rel.endsWith('/index.html')?'/'+rel.slice(0,-10):'/'+rel;
}
export function fileForRoute(route,dist){return path.join(dist,route.replace(/^\//,''),route.endsWith('/')?'index.html':'');}
export function reachableRoutes(graph,start='/'){
 const reached=new Set([start]),queue=[start];
 for(let cursor=0;cursor<queue.length;cursor++){
  const route=queue[cursor];
  for(const next of graph.get(route)||[])if(!reached.has(next)){reached.add(next);queue.push(next);}
 }
 return reached;
}
export const flattenSchema=value=>Array.isArray(value)?value.flatMap(flattenSchema):value&&typeof value==='object'?[value,...flattenSchema(value['@graph']||[])]:[];
export function xmlLocations(xml){return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1].replaceAll('&amp;','&').replaceAll('&lt;','<').replaceAll('&gt;','>'));}
export function validDate(value){
 if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(value))return false;
 const parsed=new Date(value+'T00:00:00Z');return Number.isFinite(parsed.valueOf())&&parsed.toISOString().slice(0,10)===value;
}
