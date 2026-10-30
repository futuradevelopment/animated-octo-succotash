import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {readDiagnosticSourceIndex} from '../scripts/diagnostic-sources.mjs';
async function fixture(run){const dir=await fs.mkdtemp(path.join(os.tmpdir(),'errhive-sources-'));try{await run(dir);}finally{await fs.rm(dir,{recursive:true,force:true});}}
test('source parts preserve record identity and physical page counts',()=>fixture(async dir=>{
 await fs.writeFile(path.join(dir,'index.json'),JSON.stringify({sourceCount:2,sources:[{id:'inline',pageCount:1}],sourceFiles:['part.json']}));
 await fs.writeFile(path.join(dir,'part.json'),JSON.stringify([{id:'part',pageCount:172}]));
 const result=await readDiagnosticSourceIndex(path.join(dir,'index.json'));
 assert.deepEqual(result.sources,[{id:'inline',pageCount:1},{id:'part',pageCount:172}]);
}));
test('missing or duplicate source records cannot silently lower the source inventory',()=>fixture(async dir=>{
 await fs.writeFile(path.join(dir,'index.json'),JSON.stringify({sourceCount:2,sourceFiles:['part.json']}));
 await fs.writeFile(path.join(dir,'part.json'),JSON.stringify([{id:'one'}]));
 await assert.rejects(readDiagnosticSourceIndex(path.join(dir,'index.json')),/count/);
 await fs.writeFile(path.join(dir,'part.json'),JSON.stringify([{id:'same'},{id:'same'}]));
 await assert.rejects(readDiagnosticSourceIndex(path.join(dir,'index.json')),/duplicate/);
}));
