import fs from 'node:fs/promises';
import {readWrittenArticleReport} from './written-article-report.mjs';
const report=await readWrittenArticleReport('reports/written-articles.json');
const c=report.counts,fmt=n=>n.toLocaleString('en-US');
const selected=c.selectedForPublication||0,unpublished=c.notSelectedForPublication??(c.written-selected);
const completed=report.waves.filter(w=>w.written===w.assigned).map(w=>w.wave);
let wave4Review;
try{wave4Review=JSON.parse(await fs.readFile('reports/editorial-review-wave-04-summary.json','utf8'));}catch(error){if(error.code!=='ENOENT')throw error;}
if(wave4Review){
 const bodies=new Set(wave4Review.bodySamples.map(sample=>sample.articlePath));
 const deep=new Set(wave4Review.deepSourceArticlePaths);
 if(bodies.size!==wave4Review.counts.uniqueBodySamples||deep.size!==wave4Review.counts.uniqueDeepSourceChecks||[...deep].some(path=>!bodies.has(path)))throw new Error('Wave 4 review sample counts do not match its recorded paths');
}
const reviewParagraph=prefix=>{
 if(!wave4Review)return '';
 const r=wave4Review.counts;
 const pending=wave4Review.pendingReports.length?` Pending review reports: ${wave4Review.pendingReports.join(', ')}.`:'';
 return `The [fourth-wave peer-review summary](${prefix}reports/editorial-review-wave-04-summary.json) records **${fmt(r.uniqueBodySamples)} distinct article bodies and ${fmt(r.uniqueDeepSourceChecks)} article-to-source checks** across batches 31–40. Deep checks are included in the body sample; they do not count unique source documents. ${fmt(r.additionalMetadataExcerptChecks)} metadata/excerpt checks and ${fmt(r.additionalCitationOnlyChecks)} citation-only checks are separate. The reviews recorded corrections across ${fmt(r.uniqueCorrectedArticles)} files, including ${fmt(r.sourceReviewReclassifications)} changes to needs-review that preserve unresolved definition or applicability gaps. Selection cutoffs and later samples are recorded in the summary. These bounded AI peer reviews do not certify every article, vehicle applicability, repairs or live publication.${pending}`;
};
const upsertReview=(text,paragraph)=>{
 const start='<!-- wave-04-peer-review:start -->',end='<!-- wave-04-peer-review:end -->';
 const block=`${start}\n${paragraph}\n${end}`;
 const a=text.indexOf(start),b=text.indexOf(end);
 if(a<0&&b<0)return `${text.trimEnd()}\n\n${block}\n`;
 if(a<0||b<a)throw new Error('Malformed wave 4 peer-review documentation markers');
 return text.slice(0,a)+block+text.slice(b+end.length);
};
const lines=[`# ${fmt(c.written)} code article manuscripts`,'',`**${fmt(c.written)} separately stored manuscripts for ${fmt(c.uniqueCodes)} distinct canonical codes**, from ${fmt(c.assigned)} current assignments. Completed writing waves: ${completed.join(', ')||'none'}. Each full wave assigns ten writers 100 new codes each. All assignments exclude previously assigned code strings.`,'',`The inventory counts ${fmt(c.words)} words including headings and source text, excluding URL targets. Each manuscript records a canonical identity, search metadata, exact evidence locators and its applicability limits.`,'',`**Renderer selection: ${fmt(selected)} manuscripts; ${fmt(unpublished)} remain unpublished drafts.** The explicit [publication manifest](publication.json) controls which texts appear on their existing canonical code pages. Source files retain their draft authoring metadata; publication selection is a separate state. These repository counts do not verify a live deployment. ${fmt(c.sourceCheckedDrafts)} have author source checks; ${fmt(c.sourceReviewPending)} retain explicit flags for unresolved source details. AI source checks are not independent mechanic certification.`,'','## Writing waves','','| Wave | Written / target | Selected for renderer | Source details needing review |','| --- | ---: | ---: | ---: |'];
for(const w of report.waves)lines.push(`| ${w.wave} | ${fmt(w.written)} / ${fmt(w.assigned)} | ${fmt(w.selectedForPublication||0)} | ${fmt(w.sourceReviewPending)} |`);
lines.push('','## Articles by writer','','| Writer / batch | Articles | Source details needing review |','| --- | ---: | ---: |');
for(const b of report.batches){const pending=report.articles.filter(a=>a.batch===b.batch&&a.sourceReview==='needs-review').length;lines.push(`| [${b.batch}](${b.batch}/) | ${b.written} / ${b.assigned} | ${pending} |`);}
lines.push('','## Read examples','','- [P0300: misfire pattern and monitor eligibility](batch-02/P0300.md)','- [P0401: EGR flow modelling and verification](batch-06/P0401.md)','- [P0012: cam timing error versus crank/cam alignment](batch-13/P0012.md)');
for(const [batch,code,label]of [['batch-22','P0218','sustained transmission heat'],['batch-23','P1000','Ford readiness monitors'],['batch-24','P1111','VAG lean control diagnosis'],['batch-25','P0127','Nissan intake-air temperature']])if(report.articles.some(a=>a.batch===batch&&a.code===code))lines.push(`- [${code}: ${label}](${batch}/${code}.md)`);
lines.push('','## Evidence and review','','Original articles use documented monitor behavior or scoped diagnostic cases. Manufacturer manuals, manufacturer communications hosted by NHTSA, and independent diagnostic-tool research retain their actual publishers and exact applicability. A file-level model list or a catalog tag does not prove per-code fitment. Historical calibrations are not universal repair specifications. No unsupported prices, failure probabilities, vehicle compatibility or replacement instructions are invented.','','The first two waves have separate recorded additional reviews. The [second-wave review summary](../../reports/editorial-review-wave-02-summary.json) identifies its sampled files, source checks and integrated wording corrections. The [third-wave review](../../reports/editorial-review-wave-03-summary.json) adds 200 body reads and 40 deep source checks across two further batches, with citation/provenance corrections and 27 concise family-article revisions. These bounded checks do not certify every article or extend to unreviewed later waves.','','`npm run articles:complete` validates assigned files and metadata and fails while writing is incomplete. The [writing inventory](../../reports/written-articles.json) records exact totals and review states. The [similarity report](../../reports/article-similarity.json) is a bounded text screen; check its recorded scope before applying its findings to newer files.','','The [10,000-article campaign](../../research/article-assignments/campaign.json) records the authorized continuation. Planned batches, source candidates, written manuscripts, approved records and published pages are separate counts.','');
if(wave4Review)lines.splice(lines.findIndex(line=>line.startsWith('`npm run articles:complete`')),0,reviewParagraph('../../'),'','The [fourth-wave similarity screen](../../reports/article-similarity-wave-04.json) compares the new drafts internally and against the first 3,000. Its recorded corpus, candidate limits and manual pair reviews define the scope; lexical similarity does not certify originality or factual accuracy.','');
await fs.writeFile('content/code-articles/README.md',lines.join('\n'));
const file='README.md';let text=await fs.readFile(file,'utf8');const start=text.indexOf('The writing inventory contains'),end=text.indexOf('\n\n',start);
if(start<0||end<0)throw new Error('Cannot find README writing inventory paragraph');
text=text.slice(0,start)+`The writing inventory contains **${fmt(c.written)} code-article manuscripts for ${fmt(c.uniqueCodes)} distinct codes**. Completed writing waves: ${completed.join(', ')||'none'}. The [manuscript index](content/code-articles/README.md) reports each wave and current progress toward 10,000. The publication manifest selects **${fmt(selected)}** for the canonical page renderer; **${fmt(unpublished)}** remain unpublished drafts. Renderer selection, verified live publication and the full-catalog review target are counted separately.`+text.slice(end);
if(wave4Review)text=upsertReview(text,reviewParagraph(''));
await fs.writeFile(file,text);
if(wave4Review){
 const qualityFile='docs/QUALITY_REPORT.md';
 const quality=await fs.readFile(qualityFile,'utf8');
 await fs.writeFile(qualityFile,upsertReview(quality,`## Independent review of writing wave 4\n\n${reviewParagraph('../')}`));
}
