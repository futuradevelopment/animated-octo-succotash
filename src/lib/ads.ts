export type AdProvider = 'none'|'adsense'|'infolinks'|'custom';
export const ads: {provider:AdProvider;enabled:boolean;approved:boolean;publisherId:string;placements:string[]} = {
 provider:'none',enabled:false,approved:false,publisherId:'',placements:['after-answer','article-middle','article-end','desktop-sidebar']
};
// Provider activation requires a separately reviewed adapter and real account details.
// No scripts, IDs, ECL preferences or provider approvals are inherited.
export function allowedPlacements(words:number):string[]{
 if(!ads.enabled||!ads.approved||ads.provider==='none'||!ads.publisherId)return [];
 return words<600?[]:words<1200?['article-end']:['article-middle','article-end'];
}
