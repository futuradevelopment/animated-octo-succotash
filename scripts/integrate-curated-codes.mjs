#!/usr/bin/env node
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {planCuratedIntegration,writeCuratedPlan} from './lib/curated-codes.mjs';

const args=process.argv.slice(2),allowed=new Set(['--batches','--root','--scratch','--write']);
const options={};
for(let n=0;n<args.length;n++){
 const name=args[n];
 if(!allowed.has(name))throw new Error(`Unknown option: ${name}`);
 if(name==='--write'){options.write=true;continue;}
 if(!args[n+1]||args[n+1].startsWith('--'))throw new Error(`Missing value for ${name}`);
 options[name.slice(2)]=args[++n];
}
const root=path.resolve(options.root||path.join(path.dirname(fileURLToPath(import.meta.url)),'..'));
const scratch=path.resolve(options.scratch||path.join(root,'../wave5'));
const batches=options.batches?.split(',').filter(Boolean);
const plan=planCuratedIntegration({root,scratch,batches});
if(options.write)writeCuratedPlan(plan);
console.log(JSON.stringify({mode:options.write?'written':'dry-run',...plan.summary},null,2));
