import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

// Only the generated output beside this repository's package.json is removed.
const root=fileURLToPath(new URL('../',import.meta.url));
const manifest=JSON.parse(fs.readFileSync(path.join(root,'package.json'),'utf8'));
if(manifest.name!=='errhive-cars')throw new Error('Unexpected build-output root');
fs.rmSync(path.join(root,'dist'),{recursive:true,force:true});
console.log('Removed prior generated dist output before the production build.');
