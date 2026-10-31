import {loadCodeManuscripts} from '../../scripts/lib/code-manuscripts.mjs';
import {createSatteriMarkdownProcessor} from '@astrojs/markdown-satteri';

export interface ManuscriptSource {id:string;title:string;publisher:string;url:string}
export interface CodeManuscript {
 entryId:string;code:string;title:string;description:string;status:string;
 sourceReview:'checked'|'needs-review';scope:string;sourceIds:string[];
 sourcePages?:{sourceId:string;pages:number[]}[];sourceLocators?:{sourceId:string;locator:string}[];
 authoringBatch:string;path:string;body:string;markdown:string;sources:ManuscriptSource[];
}
const loaded=loadCodeManuscripts();
export const codeManuscripts=loaded.articles as CodeManuscript[];
export const publicationStats=loaded.stats as {total:number;sourceChecked:number;sourceReviewPending:number;batches:number};
export const manuscriptPublication=loaded.publication as {schemaVersion:number;releaseId:string;expectedArticles:number;batches:string[]};
const byEntry=new Map(codeManuscripts.map(manuscript=>[manuscript.entryId,manuscript]));
export const manuscriptForEntry=(entryId:string):CodeManuscript|undefined=>byEntry.get(entryId);
let processor:ReturnType<typeof createSatteriMarkdownProcessor>|undefined;
export async function renderManuscript(manuscript:CodeManuscript){
 processor??=createSatteriMarkdownProcessor({syntaxHighlight:false,smartypants:false,mdastPlugins:[{
  name:'manuscript-safe-markdown',
  html(node){return {type:'text',value:node.value};},
  link(node){if(!/^(https?:\/\/|\/(?!\/)|#)/i.test(node.url))throw new Error('Unsupported manuscript link protocol');},
  image(){throw new Error('Manuscript images require a separate reviewed asset path');}
 }]});
 const result=await (await processor).render(manuscript.markdown);
 // Avoid collisions with the surrounding definition, source and feedback panels.
 let html=result.code.replace(/(<h[2-6]\b[^>]*\bid=")([^"]+)(")/g,'$1article-$2$3');
 const headings=result.metadata.headings.map(heading=>({...heading,slug:`article-${heading.slug}`}));
 html=html.replace(/href="#([^"]+)"/g,(match,slug)=>headings.some(heading=>heading.slug===`article-${slug}`)?`href="#article-${slug}"`:match);
 return {html,headings};
}
