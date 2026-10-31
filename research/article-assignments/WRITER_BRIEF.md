# Code articles: 1,000 manuscripts per writing wave

The user explicitly requested 10 writer agents, each writing 100 useful SEO articles. The overall project still aims to cover the full 10,000+ catalog. This assignment is actual writing, not another audit or plan. Write all 100 assigned articles to your owned directory. Keep working until done; checkpoint files in small batches. Do not stop at an outline, source list or a handful of examples.

Batches 01–30 are completed writing waves and are published. Batches 31–40 complete the fourth writing wave with 1,000 additional unpublished drafts. The next planned wave is batches 41–50; it has not started. The user authorized continuation in waves of ten writers with 100 articles each toward 10,000. Only evidence-backed assignments count; scheduled batch numbers are not written articles. Exclude every previously assigned code string. If a candidate proves to be only an incidental mention or a mismatched manufacturer definition, request a documented substitution from root; never pad an article around missing evidence. Root verifies replacement codes remain unassigned.

Repo: /workspace/scratch/dbf135311373/cars-production
Wave-four research and claims: /workspace/scratch/dbf135311373/wave4/WRITER_BRIEF.md
Assignment: research/article-assignments/batch-NN.json
Your output only: content/code-articles/batch-NN/*.md and batch-NN/research-notes.json
Never edit another batch, shared manifests, source data or the renderer. Do not spawn further agents (root is managing exactly 10 writers).

## Article format

One UTF-8 Markdown file named CODE.md (uppercase) per code. Start with JSON front matter between two lines containing only ---:

---
{"entryId":"generic-p0300","code":"P0300","title":"P0300: a specific accurate headline","description":"Accurate search description","status":"draft","sourceReview":"checked","scope":"Exact documented year, system and source limitations","sourceIds":["gm-2025-03a"],"sourcePages":[{"sourceId":"gm-2025-03a","pages":[123]}],"authoringBatch":"batch-NN"}
---

Use a complete concise sentence for the search description; never truncate a paragraph mid-sentence.

Then an actual English article, with a main heading and useful subsections. Aim about 200–350 words of substantive prose; use a different appropriate length if evidence warrants it, without filler. Include direct source links with physical PDF page fragments (#page=N). Retain limitations in the article itself. For HTML sources, use sourceLocators:[{sourceId,locator}] with the actual row, heading or revision. Do not invent PDF page numbers for HTML. Ross-Tech is an independent diagnostic-tool publisher; label it accurately and never imply an OEM instruction.

Write concrete meaning, what the controller detects, diagnostic interpretation/decisions, verification and applicability. Symptoms, likely causes and remedies are included only when sources support them. A monitor explainer can be useful without pretending to be a complete workshop repair procedure. Give at least two meaningful observations that change interpretation or the next diagnostic check, derived from the particular monitor. Do not fill sections with scan/inspect/clear/replace boilerplate. Explain differences from nearby codes only when verified.

The input includes source page extracts with page boundaries. The main code column was detected automatically and MUST be visually/textually checked. Read each assigned record's actual table, including conditions, threshold units and whether another code is merely an inhibiting fault. Consult the full local text/PDF when wrapping or multiple variants makes the first extract ambiguous. Use public primary-source web research to corroborate and fill gaps when needed. Existing source index and Ford PCED catalog offer additional evidence. A source match alone is not a verified diagnosis.

Use original explanations and factual data, not copied manual prose or entire diagnostic trees. Do not reproduce protected tables wholesale. Technical facts and independent reasoning should be carefully separated: do not portray an editorial inference as an OEM instruction.

## Non-negotiable quality

- Each article must contain code-specific technical substance and diagnostic distinctions. Do not use one article template that substitutes names, codes or numbers into the same paragraphs. Shared section headings are fine. A genuinely shared procedure must have actual source support and clearly state what the different code identifies.
- Do not invent model/engine compatibility, component locations, pinouts, voltages, failure likelihoods, repair prices, test results, exact part replacements or credentials.
- Primary GM tables cover different modules/calibrations. Their file-level model matrix is NOT proof that each code applies to every model in that file. Keep exact calibration limits bounded to the documented monitor. If applicability is unresolved, say so plainly and do not guess a make/model.
- For gm-2025-07a-2, the matrix's filename differs from the download index. You may explain the documented monitor with explicit file scope, but do not infer Corvette/model/engine applicability from that unresolved join.
- The community dictionary title may differ from the OEM monitor. Describe the difference rather than force-fitting or silently rewriting the dictionary. Some tables have apparent copy/paste errors; omit dubious values, check other primary sources or state the limitation.
- Brake, restraint, steering, high voltage and fuel pressure material should explain diagnostic evidence and suitable professional boundaries. Do not invent or provide hazardous probing/disassembly instructions.
- Drafts are not published articles. sourceReview=checked means you actually checked the source support; it is not human mechanic approval. If a claim cannot be verified, omit it. Mark sourceReview=needs-review only for a real unresolved issue and document it in research-notes.json; still write the useful supported article instead of an empty placeholder.
- No promises of ranking, indexing, guaranteed diagnosis, or safe driving based solely on a code.

## Completion

Verify exactly 100 unique assigned code files, parseable JSON metadata, each source page exists, meaningful distinct prose, and no unintended make inference. Send root count, word count range, unresolved issues and paths. You may use scripts to assemble explicitly authored per-code content and to validate files, but not a title-to-generic-prose generator. Root will integrate and review the results. Do not commit or publish.
