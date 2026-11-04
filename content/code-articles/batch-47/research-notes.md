# Batch 47 research and authoring record

Completed on 2026-11-02. This batch contains 100 draft articles: 50 based on Ford monitor documentation and 50 based on Honda factory diagnostic extracts. The reservation-derived assignment file contains 85 new manufacturer-specific canonical candidates and 15 existing canonical identities. No publication status, production files, sitemap, global source index or global article manifest was edited by this writer.

## Source work performed

The Ford evidence comprises three original manufacturer PDFs: the 172-page 2024–2025 gasoline OBD summary, the 235-page 2010 gasoline OBD summary revised April 6, 2009, and the 218-physical-page HEV/PHEV summary. Relevant complete monitor sections, their operating conditions, surrounding architecture and applicability were read before reservation and writing. A mention in a prerequisite list, a bare fault matrix or a source-title lead was not accepted as sufficient support. The HEV PDF has appendix pages beyond its printed 207-page footer; all recorded page numbers use the actual physical PDF index.

Honda evidence comprises 50 complete original factory procedure PDFs obtained from the Laboratory B third-generation Insight archive. The archive listing supplied discovery leads only. Every selected PDF was downloaded, read in full and hashed before the corresponding code was reserved. Advanced-diagnostics sheets were read through conditions, fail-safe, causes and diagnosis details; troubleshooting procedures were read through every supplied branch. The site's directory label establishes archive context, not a model-year range or VIN fitment. Articles explicitly retain the module, suffix and equipment restrictions shown by each extract.

The official Ford 2024–2025 PDF also opened through the web reader. The Ford 2010 reader request timed out; the complete locally downloaded original PDF remained available for inspection. Honda source URLs identify the original factory-document mirrors, not an independent aftermarket code dictionary. Source records describe that hosting relationship explicitly.

Selected original pages were visually checked after text extraction: Ford 2024–2025 physical pages 62, 86 and 87; Ford HEV physical page 185; Ford 2010 physical pages 197 and 215; Honda U12AA pages 1–2, B12D4 page 3, B1413 page 2 and B1415 page 2. Other prepared rendered images were not all visually reviewed and are not counted as a visual audit. The integration curator independently reported full source comparisons and rendered checks for the B2800, C1022 and C1111 late sample; that review belongs to the curator's separate record.

## Writing and scope decisions

Articles were individually composed in twelve writing blocks. The helper function only serialized supplied prose, frontmatter and citations; it did not generate paragraphs from a shared title-replacement template. Closely related faults use their actual distinctions: circuit polarity, monitor timing, failure threshold, network route, reporting module, operating prerequisites, component isolation, side or equipment configuration. Factory repair branches are conditional on their preceding tests. No prices, universal replacement promises or invented resistance/voltage thresholds were added.

Steering, braking, SRS, hybrid-power and fuel-tank work is framed for qualified service. The articles omit hazardous connector-bridging instructions and improvised road confirmation maneuvers. Documented electrical limits are presented as the source's specific values, not specifications for all vehicles bearing the same five-character code.

The source review status is an authoring evidence check, not certification by a human mechanic or confirmation of every vehicle's applicability. All articles remain drafts. Eighteen articles retain `needs-review` because the underlying factory text contains an unresolved ambiguity or conflict; the article explains the limitation rather than silently correcting the source.

## Retained source issues

| Code | Reason retained for review |
| --- | --- |
| P1015 | The source duplicates a lower-than-expected pressure description across related faults while giving different error limits. |
| P1016 | The related 3/5 inHg distinction does not resolve the duplicated direction label in the source. |
| P139B | A near-zero EGR-flow row uses a greater-than 0.5 g/s expression. |
| P139C | The related EGR-flow row has the same near-zero versus inequality conflict. |
| P144C | Dual-path purge threshold ranges require vehicle-specific clarification. |
| U2111 | The ETB B section's sensor labels conflict with the neighboring sensor-C context. |
| U2112 | The paired ETB B entry retains that sensor-label ambiguity. |
| P2BEF | The stated rich fuel-trim check has an inequality/sign ambiguity. |
| P1A1E | A generic less-than-one-second duration conflicts with the stated 1.3-second contactor threshold. |
| P175A | A generic less-than-one-second duration differs from the three-second control-board temperature threshold. |
| P1A0C | A generic less-than-one-second duration differs from the 25-second engine-start-response condition. |
| C1111 | The right parking-brake actuator circuit list mixes right-positive and left-negative labels. |
| U1205 | The duration summary gives two seconds, while the detailed abnormal-data threshold gives 500 milliseconds. |
| U12AA | The summary says MIL off; the later setting description says MIL on. |
| B1038 | The immobilizer-authentication title is followed by a transmitter table naming the VSA module. |
| B12D4 | The last output test's 1.72 V transition wording is unclear. |
| B1413 | The roof-antenna branch changes a telematics connector reference from D 2P to C 4P without explaining the change. |
| B1415 | Repeated ground-continuity checks at the stated same terminal select different parts without a clear intervening isolation change. |

## Validation completed

The writer's validation script checked all 100 manuscript identities against the atomic reservations and the exact final assignment array. All codes are unique within the batch and absent from the 4,500 earlier written codes. The 85 new codes were also verified absent from the original remaining catalogue, and all use permitted manufacturer namespaces. The 15 existing identities remain unchanged.

All JSON frontmatter parses; every article has draft status, a complete sentence description, at least two substantive subheadings, a visible HTTPS source and matching source metadata. Original prose excluding headings and the source/scope section ranges from 201 to 251 words. Full visible articles range from 262 to 320 words. There are 82 checked articles and 18 with retained review flags.

All 53 source IDs are used. For every assignment, the original evidence file exists, its SHA-256 matches both the assignment and source record, its physical PDF count matches the metadata, its cited pages are in bounds and its exact code appears on those evidence pages. PyMuPDF supplied page counts because the environment's pdfinfo executable could not load its Poppler library.

There are no exact duplicate article bodies. The highest normalized five-word-shingle Jaccard similarity within this batch is 0.0521, between U1204 and U1600, which share a PCM/motor-controller relationship but distinguish EP-CAN versus F-CAN and one-cycle versus two-cycle confirmation. No 14-word normalized phrase from the authored main prose matches the cited source-page text after one circuit-description sentence was rephrased. These mechanical checks supplement, rather than replace, the source reading and individual drafting.

The full validation inventory and final file hashes are in `wave5/writer47/validation.json`; source records are in `wave5/writer47/sources.json`. Exact assignments are in `research/article-assignments/batch-47.json`. Original PDFs, extracted text, reading aids and authoring scripts remain in the writer's evidence workspace for the integration process.
