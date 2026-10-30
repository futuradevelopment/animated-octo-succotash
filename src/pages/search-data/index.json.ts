import {searchIndex} from '../../lib/cars';
export function GET(){return new Response(JSON.stringify(searchIndex),{headers:{'Content-Type':'application/json','X-Robots-Tag':'noindex'}});}
