#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {buildWave5ReviewSummary,wave5SummaryPath} from './lib/wave5-review-summary.mjs';

let root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..'),checkOnly=false;
const args=process.argv.slice(2);
for(let index=0;index<args.length;index++){
 if(args[index]==='--check'){checkOnly=true;continue;}
 if(args[index]==='--root'&&args[index+1]&&!args[index+1].startsWith('--')){root=path.resolve(args[++index]);continue;}
 throw new Error(`Unknown option or missing value: ${args[index]}`);
}
const summary=buildWave5ReviewSummary(root);
if(!checkOnly){
 const filename=path.join(root,wave5SummaryPath),temporary=`${filename}.tmp-${process.pid}`;
 fs.mkdirSync(path.dirname(filename),{recursive:true});fs.writeFileSync(temporary,JSON.stringify(summary,null,2)+'\n');fs.renameSync(temporary,filename);
}
console.log(JSON.stringify({mode:checkOnly?'check-only':'written',path:wave5SummaryPath,status:summary.status,counts:summary.counts},null,2));
