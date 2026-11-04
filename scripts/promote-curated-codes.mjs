#!/usr/bin/env node
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {planCuratedPromotion,writeCuratedPromotion} from './lib/curated-codes.mjs';

const args=process.argv.slice(2),options={},allowed=new Set(['--root','--batches','--release-id','--expected-count','--write']);
for(let index=0;index<args.length;index++){
 const name=args[index];
 if(!allowed.has(name))throw new Error(`Unknown option: ${name}`);
 if(name==='--write'){options.write=true;continue;}
 if(!args[index+1]||args[index+1].startsWith('--'))throw new Error(`Missing value for ${name}`);
 options[name.slice(2)]=args[++index];
}
const root=path.resolve(options.root||path.join(path.dirname(fileURLToPath(import.meta.url)),'..'));
const plan=planCuratedPromotion({root,batches:options.batches?.split(',').filter(Boolean),releaseId:options['release-id'],expectedCount:options['expected-count']===undefined?undefined:Number(options['expected-count'])});
if(options.write)writeCuratedPromotion(plan);
console.log(JSON.stringify({mode:options.write?'written':'dry-run',...plan.summary},null,2));
