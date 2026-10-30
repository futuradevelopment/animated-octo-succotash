# ErrHive Cars

Automotive diagnostic-code reference for **https://cars.errhive.com**, adapted from the existing ErrHive Astro infrastructure into `futuradevelopment/animated-octo-succotash`.

## Published content in this repository

The writing assignment is complete: **1,000 code-article manuscripts by 10 writers, 100 each**. [Read the manuscripts and writing inventory](content/code-articles/README.md). Drafts are counted separately from published content and the full-catalog completion target.

**The 10,000-code-article task is not complete.** The 32 case guides below are separate from the canonical dictionary pages. [Full-corpus research status](docs/FULL_CORPUS_RESEARCH.md) records the evidence gap and source candidates.

| Content | Count |
| --- | ---: |
| Distinct canonical code reference pages | 11,786 |
| Generic OBD-II definitions | 9,249 |
| Manufacturer-specific reference definitions | 2,537 |
| Distinct displayed DTC strings | 10,043 |
| Model context hubs | 46 |
| Scoped manufacturer bulletin records | 26 |
| Individually authored diagnostic case guides | 32 |

These are **dictionary entries**, not 11,786 diagnostic articles. Dictionary pages contain the definition, scope and source without repeated repair instructions; separately authored case guides have their own vehicle-specific evidence and diagnostic branches. The MIT-licensed community dictionary is pinned and retains source-row evidence. Obvious contaminated, reserved, malformed and conflicting records are excluded. Manufacturer documents provide separately attributed model-specific context. See [data provenance](docs/DATA_PROVENANCE.md), [model research](docs/MODEL_RESEARCH.md), and [data licensing](DATA_LICENSE.md).

Audi and Porsche are discoverable through scoped manufacturer documents and model hubs; their coverage does not imply a complete brand-specific code dictionary.

One generic definition has one canonical URL. Shared manufacturer definitions retain every supported discovery label without generating duplicates. Model pages state documented years, engine restrictions and bulletin limits; the site does not fabricate model × code combinations. Featured makes and codes are editorial selections, not measured search-volume rankings.

## Run and verify

Node 24 is used in CI and recommended for Cloudflare Pages.

```sh
npm ci
npm run dev
npm run verify
npm run reports
```

`verify` runs Astro diagnostics, source validation, a production build, Node regression tests and the streaming static-output audit. The dictionary-size check preserves at least 10,000 imported reference entries; it does not satisfy the user's article target. `npm run article:coverage` tracks the whole code catalog; `npm run article:target` fails until every canonical entry has a separately authored code-article record passing its review/evidence requirements and the total reaches at least 10,000. Generated counts are written to `reports/content-inventory.json`; the sitemap includes eligible supporting URLs separately.

Browser checks run with `npm run test:browser`. Performance checks use three sequential Lighthouse samples for every route/device profile and the official representative-run calculation; all samples remain available. CI builds once and reuses that output. Reports and screenshot evidence are also written to job logs when artifact uploads are unavailable.

## Architecture

- Astro static pages, shared CSS and no client framework on code articles.
- One build-time registry with precomputed manufacturer, system, model and code indexes.
- Crawlable directory pagination, at most 100 code cards per page.
- Search downloads deterministic 500-record shards on demand. Opening an empty search page does not fetch the full dataset.
- Sitemap index with shards of at most 5,000 URLs.
- Complete output and asset-size checks against the Cloudflare Pages deployment budget.
- Ads disabled; no accounts, tracking SDK or invented contact address.

Data ingestion is reproducible with `node scripts/import-dtc.mjs` from the retained vendor snapshot. Root-owned editorial contexts are generated with `python scripts/build-editorial-profiles.py`. Review all evidence and generated changes before publishing; successful schema checks do not prove technical correctness or vehicle compatibility.

## Deployment

Cloudflare Pages: production branch **main**, repository root, build **npm run build**, output **dist**, `NODE_VERSION=24`. Add **cars.errhive.com** to the new project's custom domains after the first deployment. The original **errhive.com** appliance project is separate.

See [deployment instructions](docs/DEPLOYMENT.md), [reuse manifest](docs/REUSE_MANIFEST.md), and [quality report](docs/QUALITY_REPORT.md). DNS activation, HTTPS, public deployment and Google indexing must each be verified separately; source and build counts do not establish traffic or rankings.
