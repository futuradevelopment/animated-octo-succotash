import {site,sitemapShards} from '../../lib/cars';
import {escapeXml} from '../../lib/xml';
export function getStaticPaths(){return sitemapShards.map(shard=>({params:{part:shard.id},props:{routes:shard.routes}}));}
export function GET({props}:{props:{routes:string[]}}){return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${props.routes.map(route=>`<url><loc>${escapeXml(site.url+route)}</loc></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml'}});}
