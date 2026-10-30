# Full-catalog code article research

Research snapshot: 2026-10-30. **The full 10,000+ article goal remains incomplete.** This document records the outstanding catalog scope and keeps written manuscripts separate from approved records and public pages.

## Completion means articles for the whole catalog

Three writing waves completed **3,000 original manuscripts across 30 writers**, with 100 per writer. The third wave adds 1,000 distinct codes, and fourth-wave source research is underway. The user has authorized continuing the same process toward 10,000; unassigned or planned work is not counted as completed. [Read the live manuscript inventory](../content/code-articles/README.md) for current file counts and review flags. These files are drafts, not connected to the public renderer. The full-catalog goal remains incomplete; writing, approval and publication are separate states.

The task is a useful, separately researched article at every canonical code destination, with a minimum of 10,000 articles. The current inventory has 11,786 canonical code/namespace entries and 10,043 distinct displayed code strings. Manufacturer namespaces can give the same displayed string different meanings. Aliases and model permutations must not inflate the total.

The 32 existing vehicle-case guides are separate published content. They link to 52 dictionary entries; a link, companion-code mention or source match does not make that entry a completed code article. The new article registry currently contains zero approved code-article records. This is a statement about the full-catalog authoring work, not a claim that the existing guides contain no useful research.

`npm run article:coverage` writes an inventory for every canonical entry and a summary. `npm run article:target` fails until the entire catalog is covered by approved records and the 10,000 minimum is met. The ordinary build remains available while editorial work is incomplete. Neither a successful build nor a structurally valid article record proves technical accuracy, publication, Google indexing or traffic.

## What the source audit found

All 11,786 dictionary entries use the same attributed community dataset. They contain code definitions and provenance, but no structured symptoms, causes, diagnostic tests, thresholds or model/year/engine evidence. Those missing facts cannot be recovered by expanding the title into paragraphs.

The audit found no malformed five-character codes or duplicate canonical IDs. Syntax checks do not independently validate every definition. The source labels also need review: all 112 Plymouth code/definition pairs occur in the Pontiac set, and 242 of 281 Chrysler pairs occur in the Chevrolet set. This overlap does not establish that every entry is wrong; it prevents treating a brand label as verified vehicle applicability.

A concrete collision illustrates the risk. The community Chevrolet label for P1684 describes a driver circuit, while the official [GM 2006 transmission monitor document](https://gsi.ext.gm.com/gmspo/mode6/pdf/2006/2006trans1_b%20.pdf) associates P1684 with a transmission-controller power-up thermistor condition. The missing year/module boundary matters. A generic procedure inferred from the brand and code alone would conceal that distinction.

The audit also groups 7,354 entries into 2,113 lexical families after normalizing bank, cylinder, channel and similar labels. Merely changing those labels in the same diagnostic prose would reproduce the content problem reported by the user. This is a similarity warning, not a finding that all members of a family require different underlying tests.

The compact audit, its methods and evidence URLs are in [source-corpus-audit.json](../reports/source-corpus-audit.json). Its large per-entry appendix is represented by the reproducible [article backlog](../reports/article-backlog/index.json).

## Primary-source acquisition and measured coverage

Six official Ford and GM documents were downloaded and inspected as an initial acquisition sample: three Ford gasoline/diesel operation summaries and three GM 2025 diagnostic-parameter files. Their 5,624 PDF pages contain 2,857 distinct five-character code mentions. Of those, 2,023 strings occur somewhere in the repository dictionary.

Research also acquired the official 1999 Ford PCED chart and description pages plus all 54 linked diagnostic pages. The [Ford acquisition catalog](../research/ford-pced-1999-catalog.json) records 355 application/navigation rows and 302 distinct code mentions, with verified target anchors. Its historical scope is preserved; no later-model compatibility is inferred.

The initial six PDFs and 56 Ford HTML documents provided candidates for **2,105 canonical entries** representing **2,104 distinct code strings**, leaving 9,681 entries without candidates in that initial acquired set. These were acquisition measurements, not completed-article counts.

The second writing wave adds six GM 2025 parameter files: 03B, 04A, 06A, 06B, 06C and 07A Part 1. At the end of that wave, the index contained **12 PDFs totaling 14,721 pages, plus 56 Ford HTML documents**. That snapshot matched **2,280 canonical entries / 2,279 distinct code strings**, with 9,506 canonical entries lacking a candidate in that acquired set. Each added PDF retains its hash, physical page numbers and document scope; no per-code vehicle fitment is inferred.

The third wave expands acquisition to historical GM hybrid and powertrain tables, official Nissan service manuals, historical Ford PCED diagnostic descriptions, manufacturer bulletins archived by NHTSA, and Ross-Tech original VAG diagnostic research. HTML claims retain exact row or revision locators, rather than invented PDF page numbers. Ross-Tech is explicitly labelled an independent diagnostic-tool publisher. NHTSA catalog summaries are discovery aids; the complete original bulletin controls vehicle scope and diagnosis. The source index and regenerated coverage report contain the current acquisition counts.

These numbers do not measure all manufacturer literature or establish sufficient evidence for an article. Codes can occur in inhibition lists, prerequisite tables or related-code notes rather than their own diagnostic description. Thirteen second-wave assignments were replaced after their candidate matches proved incidental or lacked a substantive monitor description; the replacement codes remained distinct from all existing assignments.

The [candidate index](../src/data/diagnostic-source-index.json) points to readable source-record parts that retain document URLs, hashes, scope and physical PDF page numbers or HTML navigation references. Ford source matches retain their document restrictions. Generic matches also retain document-specific scope instead of becoming universal instructions.

The [official GM 2025 application matrix](../research/gm-2025-application-matrix.json) supplies 74 rows and 63 distinct application tuples. Exact filenames establish file-level candidate makes for the sampled 03A and 04B documents; each code still requires section-level applicability review. The matrix prints `25OBDG047A Part 2.pdf`, while the download index uses `25OBDG07A Part 2.pdf`. That unresolved discrepancy prevents automatically assigning makes to the sampled 07A file. Corporate ownership is never a substitute for application evidence.

The [GM acquisition catalog](../research/gm-document-catalog.json) identifies 908 PDF URLs across public indexes. This includes application matrices and scaling documents, not 908 complete diagnostic manuals. Nine diagnostic PDFs from this GM catalog are now in the code-mention sample. The remaining catalog is a research queue, not reviewed evidence. Full copyrighted PDF text is not republished in this repository.

## Why bulk enrichment is not a substitute

The investigated OBDex enrichment is largely derived from the same definition source. Its archived [Wikipedia mapping script](https://github.com/foerbsnavi/OBDex/blob/main/tools/_archive/add_wikipedia_sources.mjs) selects component references by title pattern, while its [duplicate-text script](https://github.com/foerbsnavi/OBDex/blob/main/tools/_archive/fix_dup_small.mjs) builds text from fault-mode clauses. A citation to a component overview does not establish a particular code's ranked causes, cost or repair. Importing those fields would not address the user's objection to repetitive articles.

The [MechanicDB public repository](https://github.com/MechanicDB/MechanicDB-public) is a limited sample, not an available verified full-catalog replacement. No source investigated so far supplies independently supported diagnostic content for all entries. This is a measured evidence gap, not a conclusion that useful large-scale automotive publishing is impossible.

## Article evidence and authoring requirements

The existing canonical code URLs remain the intended article destinations. Research must establish the actual code meaning and namespace, explain documented monitor behavior, and provide findings that change the diagnostic direction. Vehicle-specific evidence belongs under its explicit model/year/engine/module boundary. Exact voltages, pin identities, thresholds, repair prices and failure likelihoods must not be invented.

An article can be useful by explaining documented monitor behavior and diagnostic distinctions even when the source does not establish a complete repair procedure. Unsupported symptoms, causes and repairs are omitted; they are not invented to fill template sections. Shared test methods are legitimate when their sources explicitly cover the related codes.

The proposed registry contract in [article-coverage.mjs](../scripts/article-coverage.mjs) requires separately authored sections, source-backed claim IDs, exact code and vehicle scope, recorded review and meaningful diagnostic decisions. It rejects unresolved claims and duplicate normalized article bodies. These checks validate the structure of a submitted record; they cannot replace editorial verification. The published dictionary renderer has not yet been converted to this future article format.

Work still required across the complete backlog:

1. Resolve ambiguous definitions, namespaces and fault subtypes against applicable primary material.
2. Acquire and review code-specific monitor, service and bulletin evidence, including model/year/module scope and document revisions.
3. Write each code article from its supported findings, with useful diagnostic decisions and explicitly bounded repair/verification guidance.
4. Review the claims and near-duplicate content, then integrate approved articles into the existing canonical page renderer.
5. Verify the rendered articles and full-catalog coverage before treating the task as complete.

This research and tracking work does **not** fulfill the article-writing request by itself. The outstanding set remains explicit in the backlog; it is not silently reduced to a small guide collection.

## Research data storage

The growing source registry, writing inventory and per-entry backlog are stored in readable parts. The source manifest records every source file and expected record count; the loader rejects missing counts and duplicate IDs. The backlog index lists ordered JSON Lines parts covering every canonical entry. This preserves the complete research data while avoiding multi-megabyte write requests. Article manuscripts remain separate Markdown files.

The [third-wave review summary](../reports/editorial-review-wave-03-summary.json) records 200 body reads and 40 deep source checks in two batches, plus integrated citation, provenance and wording corrections. Twenty-seven VAG family articles were shortened to remove repeated general cautions. These are bounded AI editorial checks, not human mechanic certification.
