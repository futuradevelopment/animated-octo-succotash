# Manufacturer model evidence

Checked 2026-10-30. This addition contains **32 model hubs across 16 makes**, **26 scoped bulletin records**, and **27 primary sources**. Every model has a named OEM application record; no model/code article cross product was generated.

`src/data/models.json`, `bulletins.json` and `oem-sources.json` are JSON arrays using the agreed core contract. Source kind is `manufacturer`: NHTSA hosts the OEM documents but does not become their author or grant an open-content license. Manufacturer source IDs use the `oem-` prefix.

## What a hub establishes

The `years` field identifies the evidence covered by this hub, not every year the model existed. A model hub lists only bulletins that explicitly include its ID. Bulletin engine, production, VIN, market and symptom conditions are part of applicability, not optional refinements.

| Make | Model hubs | Evidence boundary |
| --- | --- | --- |
| Audi | A3, A4, A8 | Separate engine/VIN-scoped crankcase, underboost and breather bulletins. |
| Porsche | Macan, Cayenne, Panamera | Historical Turbo, early camshaft and later EVAP-analysis records remain separate. |
| Toyota | Camry, Avalon | The reviewed V6 high-load bulletin only. |
| Ford | F-150 | Engine and branch-specific production cutoff retained. |
| Chevrolet | Colorado, Silverado, Suburban, Tahoe | Separate lean/calibration and airbox/catalyst sources. |
| GMC | Canyon, Sierra, Yukon | Source rows preserved separately from Chevrolet. |
| Honda | CR-V | Trim, VIN and prerequisite-repair restrictions. |
| Acura | MDX, TLX | Hybrid/V6 and VIN restrictions remain visible. |
| Lexus | RX450h | Replacement bulletin's scope retained. |
| Volkswagen | Golf, Jetta, Atlas | Diesel and gasoline evidence remain separate. |
| BMW | X6 xDrive50i | Native DME codes, engine/platform and build limits. |
| Kia | Soul | Engine-replacement prerequisite and engine table. |
| Hyundai | Elantra GT, Veloster | Certain campaign-eligible vehicles only. |
| Jeep | Renegade | Engine, build dates and market restriction. |
| Dodge | Challenger | Scoped engine/year calibration evidence. |
| Ram | 1500, 2500, 3500 | Separate gasoline/eTorque and diesel sources. |

Nissan's broad EVAP guidance and Mercedes' engine-scoped guidance deliberately have empty `modelIds`. The core must not attach them automatically to all models of those makes. Audi, Hyundai, Porsche and Ram have independently sourced OEM model/bulletin hubs even though no usable community dictionary rows are published for those makes. The original Audi cause-list file remains excluded; Porsche was absent from the imported dictionary. These limitations must not hide the supported brands from navigation or imply that generic definitions apply to every model.

Raw codes retain manufacturer suffixes and namespaces. Toyota's extended codes, Mercedes P012800, BMW native codes and Ram's suffixed misfire codes are not silently converted into five-character generic codes. A matching canonical code may link to a general definition; that link does not broaden the bulletin's vehicle applicability.

## Owner guidance and editorial limits

The Ford bulletin also cites the exact [2018 F-150 warning-lamp manual](https://www.fordservicecontent.com/Ford_Content/vdirsnet/OwnerManual/Home/Content?ProcUid=G1940437&Uid=G1940435&buildtype=web&countryCode=USA&div=f&languageCode=en&moidRef=G539493&userMarket=usa&vFilteringEnabled=False&variantid=4640). Nissan's own bulletin explicitly supplies its cap check. Other actions ask the owner to preserve information and obtain scoped professional diagnosis; they do not reproduce internal repair procedures.

There are no owner instructions for fuel-pressure testing, smoke testing, energized probing, timing adjustment, emissions-system removal or module flashing. A DTC is not presented as a confirmed failed part. Warranty extensions, campaigns and recalls remain distinct; historical coverage wording is not a current eligibility promise.

Toyota's newer cold-start Rev2 and Audi's broad fuel-quality source were excluded from production because their direct PDF retrieval/full revised procedure review was incomplete. They remain research candidates. The Ram diesel bulletin was subsequently opened and reviewed directly before inclusion. The Kia table and BMW scope were also checked visually because flattened PDF tables can misassign rows.

## Popular-model priority signal

The research queue uses actual OEM US sales as one transparent priority signal. It does **not** claim measured search volume, failure frequency, installed fleet size or guaranteed traffic. Calendar 2025 sales do not mean only model-year2025 vehicles.

| OEM-reported 2025 total | Units | Primary release |
| --- | ---: | --- |
| Toyota brand | 2,147,811 | [Toyota year-end release](https://pressroom.toyota.com/toyota-motor-north-america-reports-2025-u-s-sales-results/) |
| Ford brand | 2,097,256 | [Ford annual table](https://s205.q4cdn.com/882619693/files/doc_news/2026/Jan/06/Ford-U-S-Q4-2025-Sales-Release.pdf) |
| Chevrolet brand | 1,829,235 | [GM US deliveries](https://investor.gm.com/static-files/23adce96-ea26-4a6e-82dd-68a0042df51c) |
| Honda brand | 1,297,144 | [American Honda year-end release](https://acuranews.com/en-US/releases/release-cf005034e20eb27505fd8e6bbb00c075-american-honda-rides-record-sales-of-light-trucks-and-electrified-models-to-post-sales-increase-in-2025) |

These support prioritizing further research into Toyota, Ford, Chevrolet and Honda, alongside other high-volume brands. The comparison is approximate: Ford includes heavy trucks and Chevrolet includes commercial/medium-duty vehicles. F-Series, Silverado and Ram pickup-family totals must not be relabeled as F-150, Silverado 1500 or one engine variant. Older models may still have substantial repair interest that new sales do not measure.

The separate research evidence file contains ten OEM source groups, 17 brand/category totals and 55 selected model volumes, with reporting-period caveats. BMW uses its stated reporting-year boundary; Mercedes reports rounded retail counts. VW/Audi US primary-sales verification remains a documented gap. None of the sales rows creates diagnostic applicability.

## Checks completed

- All model, bulletin and source IDs are unique; every source reference resolves.
- Each bulletin's listed model IDs share its make ID, and each model has an explicit bulletin.
- Conservative per-source prose counts across model summaries, bulletin fields and source titles/publishers remain below 200 words; source budgets are checked before adding new records.
- Shared GM source budgets include both brand records together. No copied manual passages, invented repair durations or fabricated VINs were added.
- Full application build/integration checks remain the core owner's responsibility after source merging.

## Audi and Porsche coverage

The added manufacturer sources are listed in RESEARCH_SOURCES.md and linked from each model and make hub. Audi uses the later reviewed CAEB revision 2031245/6, limiting the A4 underboost case to 2009–2010. The superseded /5 revision is retained only as a historical comparison in the authored guide; its Q5 association is not published as an applicable repair case. Separate A3/A4 VIN and engine limits and A8 4.0 TFSI scope remain. Porsche retains distinct model generations; the 2015 Macan document is not extrapolated to the present day. Its 2022 EVAP document is an evidence request, not a repair instruction. These additions create two make hubs and six model hubs, not new generic-code copies.
