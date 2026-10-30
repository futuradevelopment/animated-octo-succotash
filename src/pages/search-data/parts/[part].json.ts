import {searchParts} from '../../../lib/cars';
export function getStaticPaths(){return [...searchParts].map(([part,records])=>({params:{part},props:{records}}));}
export function GET({props}:{props:{records:unknown}}){return new Response(JSON.stringify(props.records),{headers:{'Content-Type':'application/json','X-Robots-Tag':'noindex'}});}
