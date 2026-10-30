import fs from 'node:fs/promises';
// Durable job-log fallback when the account's Actions artifact quota is full.
// Only generated public-content screenshots and measured report summaries are emitted.
// Never emit environment variables, credentials, browser storage, or network headers.
const mode=process.argv[2];
if(mode==='browser'){
 for(const file of (await fs.readdir('reports/browser').catch(()=>[])).filter(f=>/^(desktop|mobile)-[a-z-]+\.jpg$/.test(f)).sort()){
  const bytes=await fs.readFile(`reports/browser/${file}`);
  console.log(`ERRHIVE_SCREENSHOT ${file} ${bytes.toString('base64')}`);
 }
}else if(mode==='performance'){
 const summary=await fs.readFile('reports/lighthouse/summary.json','utf8').catch(()=>null);
 if(summary)console.log('ERRHIVE_PERFORMANCE '+JSON.stringify(JSON.parse(summary)));
}
