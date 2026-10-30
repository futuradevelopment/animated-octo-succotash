import {site,sitemapShards} from '../lib/cars';
import {escapeXml} from '../lib/xml';
export function GET(){return new Response(`<?xml version="1.0" encoding="UTF-8"?><sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${sitemapShards.map(shard=>`<sitemap><loc>${escapeXml(`${site.url}/sitemaps/${shard.id}.xml`)}</loc></sitemap>`).join('')}</sitemapindex>`,{headers:{'Content-Type':'application/xml'}});}
