# Batch 49 research and author review

Completed on 2026-11-02: **100 separately authored English manuscripts**, 28,467 inventory words, 270–304 words each. All are draft authoring files. This batch has not been selected for publication.

## Scope and evidence

The batch uses Honda factory advanced-diagnostic and troubleshooting PDFs mirrored in the Laboratory B third-generation Insight collection: https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/ . The mirror's collection label is not proof of per-code model-year, VIN or software applicability. Every manuscript states this limitation. Honda owns the underlying service information; Laboratory B is the mirror, not a manufacturer publication domain.

I read the complete extracted diagnostic text for every selected source before writing its article. Each article is individual synthesis of its code-specific monitor, decision tree or service boundary. No unreviewed code mention, prerequisite-only code or copied family template was counted. Out of 127 eligible P1 code leads, 112 distinct source PDFs were downloaded. P144A was rejected by the shared reservation tool because another writer had already reserved it; it is absent from this batch. Surplus B/C/U source leads were handed to writer 47 and were not claimed here.

Each of the 100 selected codes is a manufacturer-range code absent from the entire existing imported catalog and the 4,500 previously written code strings. Exact Honda identities were reserved atomically using the shared claim tool. The assignment objects exactly match their reservation objects. Root integration owns the durable canonical evidence and publication state.

The source records in `wave5/writer49/sources.json` contain exact original PDF URLs, SHA-256 hashes, page counts verified with pypdf, and code-specific page arrays. Downloaded originals and text extracts remain under `wave5/writer49/`. Citations use physical PDF page numbers. Public web-open could not access the index, but direct HTTPS downloads succeeded; the actual downloaded bytes, not search snippets, were read.

## Source discrepancies retained

**85 articles have author source checks; 15 retain needs-review flags.** Flagged codes: P100B, P100C, P170F, P172A, P1A55, P1A64, P1A65, P1A89, P1D1D, P1D64, P1D72, P1D8A, P1DA8, P1DD9, P1E25.

- P100B: 80% normal-duty description versus 40%/60% threshold wording.
- P100C: EVTM versus EVTD signal-name inconsistency.
- P170F: introductory communication sentence omits the negation present in the threshold.
- P172A: OFF/LOCK narrative versus ON-mode enable/confirmation context.
- P1A55: commanded/target prose versus target/estimated table heading.
- P1A64 and P1A65: inconsistent direction of the internal abnormality report.
- P1A89: high-voltage measurement versus sensor-output terminology is not resolved by the excerpt.
- P1D1D: generic “exceeds” prose conflicts with its explicit low-signal threshold.
- P1D64: 5.5-second duration table versus 3.5-second threshold.
- P1D72: the source equates a 1°F temperature difference with 1°C.
- P1D8A: malformed/ambiguous current inequalities and a double-negative expression.
- P1DA8: V2M-to-12V comparison quantity/scaling is not explained.
- P1DD9: one-cycle table versus two-cycle diagnosis details.
- P1E25: voltage measurement and ON-mode wording paired with an ohmic continuity limit.

These points are disclosed in the relevant bodies; questionable thresholds or procedures are not silently corrected into repair instructions.

## Visual follow-up and correction

Seven physical pages across six PDFs were rendered and visually inspected: P100B page 1; P1D64 page 1; P1D72 page 1; P1E25 page 2; P1E41 page 1; P1E42 pages 1–2. The first four confirmed the discrepancies were printed in the original pages, rather than text-extraction artifacts.

The P1E41 and P1E42 flowcharts resolved what looked like ambiguous duplicate YES branches in extracted prose: isolated relay faults and companion valve/FET faults take different branches. Both manuscripts were rewritten to explain the actual priority, and their provisional review flags were removed. This visual check was bounded to these pages; it does not claim visual examination of every source page.

A wording correction in P1D11 explicitly groups the entire current-limit expression within the absolute-value operation. This preserves the printed formula instead of implying a different sign convention.

## Validation and limitations

Local validation found 100 files, 100 unique assigned codes, 100 source records, 100 matching reservations, correct PDF hashes and page counts, valid JSON metadata, at least two subheadings, visible HTTPS citations and 200–350-word bounds. No metadata, identity, source-file or page-count failures were found. The report is `wave5/writer49/validation.json`.

These are AI author checks, not independent mechanic certification or an exhaustive live-vehicle verification. Exact source applicability must be confirmed before using a diagnostic procedure. High-voltage, braking, restraint-system and shift-control work is explicitly confined to qualified service using the full current manufacturer precautions. The batch does not change the publication manifest, existing canonical data, global source index or live website.
