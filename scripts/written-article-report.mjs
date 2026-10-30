import fs from 'node:fs/promises';
import path from 'node:path';
export async function readWrittenArticleReport(filename){
 const report=JSON.parse(await fs.readFile(filename,'utf8'));
 const articles=[...(report.articles||[])];
 for(const file of report.articleFiles||[])articles.push(...JSON.parse(await fs.readFile(path.resolve(path.dirname(filename),file),'utf8')));
 if(articles.length!==report.counts.written)throw new Error('Written article parts do not match reported total');
 return {...report,articles};
}
