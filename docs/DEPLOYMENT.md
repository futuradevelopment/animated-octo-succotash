# Cloudflare Pages deployment

Target repository: `futuradevelopment/animated-octo-succotash`.
Target public origin: `https://cars.errhive.com`.
This is a separate Pages project; the existing appliance site remains unchanged.

## Git build configuration

| Setting | Value |
| --- | --- |
| Production branch | `main` |
| Framework preset | Astro |
| Root directory | Repository root; leave blank |
| Build command | `npm run build` |
| Output directory | `dist` |
| `NODE_VERSION` | `24` |

`package.json` is at the repository root. No nested working-directory setting is required. The canonical origin, robots policy and sitemap already use the requested cars subdomain.

Create a new Pages project through Workers & Pages and connect this GitHub repository. After its deployment succeeds, add `cars.errhive.com` through the project's Custom domains section. Use the exact DNS record Cloudflare provides for that project; do not guess a Pages hostname or change the existing root-domain record. If the zone is managed in the same account, review the proposed subdomain record before activation. Verify the custom domain and HTTPS status after deployment.

## Build and launch gates

Run `npm run verify` before publishing. It checks the data contract and publication count, builds the static site, runs the Node regression suite and audits generated pages. `npm run reports` writes the actual inventory. CI uses that same build for desktop/mobile browser tests and repeated Lighthouse measurements.

The minimum counts distinct indexable code reference canonicals only. Manufacturer aliases, model hubs, directory pages and supporting pages do not increase the code-article count. The build also checks the complete output against Cloudflare Pages asset limits; search data and sitemap files count as assets too.

Do not redirect or republish the appliance site's URLs into this project. A preview deployment must be distinguished from a verified custom-domain deployment. Search Console submission and observed indexing are separate from successful hosting.
