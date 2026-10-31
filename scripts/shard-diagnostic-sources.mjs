import fs from 'node:fs/promises';
import path from 'node:path';
import {readDiagnosticSourceIndex} from './diagnostic-sources.mjs';
const filename=path.resolve('src/data/diagnostic-source-index.json');
const index=await readDiagnosticSourceIndex(filename),parts=[];let current=[],size=0;
for(const source of index.sources){
 const length=JSON.stringify(source,null,2).length;
 if(current.length&&size+length>180000){parts.push(current);current=[];size=0;}
 current.push(source);size+=length;
}
if(current.length)parts.push(current);
const directory=path.join(path.dirname(filename),'diagnostic-sources');await fs.mkdir(directory,{recursive:true});
const files=[];
for(let i=0;i<parts.length;i++){
 const name=`part-${String(i+1).padStart(3,'0')}.json`;files.push(`diagnostic-sources/${name}`);
 await fs.writeFile(path.join(directory,name),JSON.stringify(parts[i],null,2)+'\n');
}
const keep=new Set(files.map(file=>path.basename(file)));
for(const name of await fs.readdir(directory))if(/^part-\d+\.json$/.test(name)&&!keep.has(name))await fs.unlink(path.join(directory,name));
const {sources,sourceFiles,sourceCount,...metadata}=index;
await fs.writeFile(filename,JSON.stringify({...metadata,sourceCount:sources.length,sourceFiles:files},null,2)+'\n');
console.log(`Stored ${sources.length} source records in ${parts.length} readable parts.`);
