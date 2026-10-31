import {codeManuscripts,manuscriptPublication} from '../lib/code-manuscripts';
import {codePath,getCode} from '../lib/cars';
export function GET(){
 const articles=codeManuscripts.map(article=>({entryId:article.entryId,code:article.code,url:codePath(getCode(article.entryId)),sourceReview:article.sourceReview}));
 return new Response(JSON.stringify({release:manuscriptPublication.releaseId,count:articles.length,sourceReviewPending:articles.filter(article=>article.sourceReview==='needs-review').length,articles}),{headers:{'Content-Type':'application/json'}});
}
