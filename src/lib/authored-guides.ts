import {existsSync,readFileSync} from 'node:fs';
import {join} from 'node:path';

export interface AuthoredGuideSection {
 id:string;
 title:string;
 paragraphs?:string[];
 bullets?:string[];
 table?:{columns:string[];rows:string[][]};
}
export interface AuthoredGuide {
 id:string;
 slug:string;
 title:string;
 description:string;
 makeId:string;
 modelIds:string[];
 codes:string[];
 updatedOn:string;
 sourceIds:string[];
 summary:string;
 scope:{label:string;value:string}[];
 sections:AuthoredGuideSection[];
}

const file=join(process.cwd(),'src/data/authored-guides.json');
export const authoredGuides:AuthoredGuide[]=existsSync(file)?JSON.parse(readFileSync(file,'utf8')):[];
export const guidePath=(guide:AuthoredGuide)=>`/guides/${guide.slug}/`;
export const guidesForCode=(code:string)=>authoredGuides.filter(guide=>guide.codes.includes(code.toUpperCase()));
