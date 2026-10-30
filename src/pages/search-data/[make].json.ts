import {searchMakeManifests} from '../../lib/cars';
export function getStaticPaths(){return [...searchMakeManifests].map(([make,manifest])=>({params:{make},props:{manifest}}));}
export function GET({props}:{props:{manifest:unknown}}){return new Response(JSON.stringify(props.manifest),{headers:{'Content-Type':'application/json','X-Robots-Tag':'noindex'}});}
