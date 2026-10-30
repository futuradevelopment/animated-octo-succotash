export interface GuideSearchItem {
 makeIds:readonly string[];
 codes:readonly string[];
 text:string;
}

// A full scanner suffix must not silently match another display.
export function normalizeGuideQuery(value:string):string {
 return value.normalize('NFKD').replace(/[\u0300-\u036f]/g,'').toLowerCase()
  .replace(/\b([pbcu])\s+([0-3][0-9a-f]{3}(?:[0-9a-f]{2})?)\b/g,'$1$2')
  .replace(/\b([pbcu][0-3][0-9a-f]{3})[:\-]([0-9a-f]{2})\b/g,'$1$2')
  .replace(/[^a-z0-9]+/g,' ').trim().replace(/\s+/g,' ');
}

export function matchesGuide(item:GuideSearchItem,query:string,makeId=''):boolean {
 if(makeId&&!item.makeIds.includes(makeId))return false;
 const terms=normalizeGuideQuery(query).split(' ').filter(Boolean);
 const text=normalizeGuideQuery(item.text);
 const codes=new Set(item.codes.map(normalizeGuideQuery));
 return terms.every(term=>/^[pbcu][0-3][0-9a-f]{3}(?:[0-9a-f]{2})?$/.test(term)
  ?codes.has(term)
  :text.includes(term)||text.replace(/\s/g,'').includes(term));
}
