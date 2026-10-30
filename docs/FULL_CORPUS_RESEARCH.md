# Full-catalog code article research

Research snapshot: 2026-10-30. **The requested articles have not been completed.** This change records the entire outstanding scope and corrects the earlier completion counter. It does not publish new diagnostic articles.

## Completion means articles for the whole catalog

A subsequent writing assignment completed the first **1,000 original article manuscripts across 10 writers**. A second wave assigns another 1,000 distinct codes to ten more writers, excluding every first-wave code. [Read the manuscript index](../content/code-articles/README.md) and the measured per-wave [writing inventory](../reports/written-articles.json). These files retain source-review flags and are not yet connected to the public renderer. The earlier full-catalog goal remains incomplete; draft writing is reported separately from approved records and publication.

The task is a useful, separately researched article at every canonical code destination, with a minimum of 10,000 articles. The current inventory has 11,786 canonical code/namespace entries and 10,043 distinct displayed code strings. Manufacturer namespaces can give the same displayed string different meanings. Aliases and model permutations must not inflate the total.

The 32 existing vehicle-case guides are separate published content. They link to 52 dictionary entries; a link, companion-code mention or source match does not make that entry a completed code article. The new article registry currently contains zero approved code-article records. This is a statement about the full-catalog authoring work, not a claim that the existing guides contain no useful research.

`npm run article:coverage` writes an inventory for every canonical entry and a summary. `npm run article:target` fails until the entire catalog is covered by approved records and the 10,000 minimum is met. The ordinary build remains available while editorial work is incomplete. Neither a successful build nor a structurally valid article record proves technical accuracy, publication, Google indexing or traffic.

## What the source audit found

All 11,786 dictionary entries use the same attributed community dataset. They contain code definitions and provenance, but no structured symptoms, causes, diagnostic tests, thresholds or model/year/engine evidence. Those missing facts cannot be recovered by expanding the title into paragraphs.

The audit found no malformed five-character codes or duplicate canonical IDs. Syntax checks do not independently validate every definition. The source labels also need review: all 112 Plymouth code/definition pairs occur in the Pontiac set, and 242 of 281 Chrysler pairs occur in the Chevrolet set. This overlap does not establish that every entry is wrong; it prevents treating a brand label as verified vehicle applicability.

A concrete collision illustrates the risk. The community Chevrolet label for P1684 describes a driver circuit, while the official [GM 2006 transmission monitor document](https://gsi.ext.gm.com/gmspo/mode6/pdf/2006/2006trans1_b%20.pdf) associates P1684 with a transmission-controller power-up thermistor condition. The missing year/module boundary matters. A generic procedure inferred from the brand and code alone would conceal that distinction.

The audit also groups 7,354 entries into 2,113 lexical families after normalizing bank, cylinder, channel and similar labels. Merely changing those labels in the same diagnostic prose would reproduce the content problem reported by the user. This is a similarity warning, not a finding that all members of a family require different underlying tests.

The compact audit, its methods and evidence URLs are in [source-corpus-audit.json](../reports/source-corpus-audit.json). Its large per-entry appendix is represented by the reproducible [article backlog](../reports/article-backlog.jsonl).

## Primary-source acquisition and measured coverage

Six official Ford and GM documents were downloaded and inspected as an initial acquisition sample: three Ford gasoline/diesel operation summaries and three GM 2025 diagnostic-parameter files. Their 5,624 PDF pages contain 2,857 distinct five-character code mentions. Of those, 2,023 strings occur somewhere in the repository dictionary.

Research also acquired the official 1999 Ford PCED chart and description pages plus all 54 linked diagnostic pages. The [Ford acquisition catalog](../research/ford-pced-1999-catalog.json) records 355 application/navigation rows and 302 distinct code mentions, with verified target anchors. Its historical scope is preserved; no later-model compatibility is inferred.

The initial six PDFs and 56 Ford HTML documents provided candidates for **2,105 canonical entries** representing **2,104 distinct code strings**, leaving 9,681 entries without candidates in that initial acquired set. These were acquisition measurements, not completed-article counts.

The second writing wave adds six GM 2025 parameter files: 03B, 04A, 06A, 06B, 06C and 07A Part 1. The current index therefore contains **12 PDFs totaling 14,721 pages, plus 56 Ford HTML documents**. The expanded candidate index matches **2,280 canonical entries / 2,279 distinct code strings**, with 9,506 canonical entries still lacking a candidate in this acquired set. Each added PDF retains its hash, physical page numbers and document scope; no per-code vehicle fitment is inferred.

These numbers do not measure all manufacturer literature or establish sufficient evidence for an article. Codes can occur in inhibition lists, prerequisite tables or related-code notes rather than their own diagnostic description. Four second-wave assignments were replaced after their candidate matches proved incidental; the replacement codes remained distinct from all existing assignments.

The [candidate index](../src/data/diagnostic-source-index.json) retains document URLs, hashes, scope and physical PDF page numbers or HTML navigation references. Ford source matches retain their document restrictions. Generic matches also retain document-specific scope instead of becoming universal instructions.

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
