import fs from 'node:fs/promises';
import path from 'node:path';

// Keep source records in readable parts as the research corpus grows.
// Inline sources remain supported for older snapshots and small fixtures.
export async function readDiagnosticSourceIndex(filename){
 const index=JSON.parse(await fs.readFile(filename,'utf8'));
 const sources=[...(index.sources||[])];
 for(const relative of index.sourceFiles||[]){
  const records=JSON.parse(await fs.readFile(path.resolve(path.dirname(filename),relative),'utf8'));
  if(!Array.isArray(records))throw new Error(`Source part must contain an array: ${relative}`);
  sources.push(...records);
 }
 const ids=sources.map(source=>source.id);
 if(ids.some(id=>!id)||new Set(ids).size!==ids.length)throw new Error('Source index contains missing or duplicate IDs');
 if(index.sourceCount!==undefined&&index.sourceCount!==sources.length)throw new Error('Source part count does not match manifest');
 return {...index,sources};
}
