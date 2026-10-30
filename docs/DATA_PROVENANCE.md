# DTC reference data provenance

Checked 2026-10-30. These are **community reference definitions**, not 11,786 individually researched repair guides or OEM-verified vehicle diagnoses. Publication status controls routing/indexability; it is not a verification claim. Every imported record also carries `verification: "community-reference"` and a visible dataset source.

## Imported source and immutable snapshot

- Repository: [Wal33D/dtc-database](https://github.com/Wal33D/dtc-database).
- Pinned commit: [`04c43d72e7db7197658b6f72fe582c5076d9eee8`](https://github.com/Wal33D/dtc-database/tree/04c43d72e7db7197658b6f72fe582c5076d9eee8).
- Declared license: MIT, copyright 2024 Wal33D (Waleed Judah). Full notice is retained in `DATA_LICENSE.md` and `vendor/wal33d-dtc-database/LICENSE`.
- All 37 upstream text files are preserved unchanged under `vendor/wal33d-dtc-database/data/source-data/`. `manifest.json` records each Git blob SHA. The importer verifies the original Git SHA-1 object hash before parsing any file.
- Each retained definition has its source ID and `sourceRows` containing file path, one-based line, Git blob SHA, original manufacturer label and original title. The source record supplies the pinned commit and exact repository URL. The original row can be opened as `https://github.com/Wal33D/dtc-database/blob/<commit>/<path>#L<line>`.
- No OBDex causes, probabilities, repair estimates, repair times or generated descriptions are imported.

The repository does not supply OEM manuals, model years, engines or market applicability for its source rows. Its [provenance inquiry](https://github.com/Wal33D/dtc-database/issues/1) remained unanswered when checked. The declared license and preserved lineage make reuse auditable; neither establishes technical truth for every manufacturer label. Known concrete contamination is excluded below. Remaining manufacturer labels are explicitly source labels, not proof for any particular vehicle.

## Exact counts and what they mean

The machine-readable ledger, including every excluded row and reason, is `docs/data-import-ledger.json`.

| Measure | Count |
|---|---:|
| Raw nonempty source rows | 18,826 |
| Excluded source rows | 3,528 |
| Retained source rows / source-supported make-code pairs | 15,298 |
| Canonical reference entries | 11,786 |
| Generic allocation reference entries | 9,249 |
| Manufacturer allocation reference entries | 2,537 |
| Canonical entries shared by multiple upstream marque labels | 1,026 |
| Source rows consolidated into existing canonical entries | 3,512 |

Counts refer to unique eligible canonical pages after cleaning. They do not count aliases, related model links, search results or repeated generic code definitions once per marque. Distinct display-code count is separately reported in the ledger because manufacturer-specific codes can have different meanings under different source labels.

The source database's current 18,805-row builder result differs from the raw 18,826 rows: upstream silently ignores a malformed code and uses first-wins behavior for repeated manufacturer/code pairs. We parse the raw files instead, record all omissions, and withhold conflicting definitions.

## Screening and canonicalization

1. Require the five-character OBD-shaped pattern `[PBCU][0-3][0-9A-F]{3}`. Hexadecimal A–F suffixes are valid format characters; ordinary four-digit decimal-only validation would incorrectly discard them.
2. Screen the generic bucket to P0, P2, B0, C0, U0, U3 and P3400–P3FFF allocation ranges. Manufacturer candidates must occupy P1, B1/B2, C1/C2, U1/U2 or P3000–P33FF. B3/C3 and generic-file rows in manufacturer allocations are withheld. This is a structural allocation screen, **not an individual code-assignment check against the licensed SAE Digital Annex**. It does not mean every generic code is implemented by every vehicle.
3. Exclude reserved/unassigned/placeholder titles, code-range headers mistaken for definitions, bare fragments such as `Driver 4`, and nonspecific `Transmission system problems` placeholders. Remove source lines that concatenate unrelated alternator/MAP, coolant/IAT or IAT/EGR definitions without an application scope.
4. Exclude the entire `OTHER` bucket because it supplies no manufacturer identity. Exclude the Infiniti file because it is an exact copy of the Honda file, including Honda-associated VTEC entries. Exclude the redundant GM file because it duplicates GMC. This does not infer Chevrolet or any other marque applicability from GM/GMC membership.
5. Exclude the Audi file: its rows are lists of possible causes, rather than definitions, and it contains malformed `PP2002`. No diagnosis is synthesized from those lists.
6. Withhold all 17 same-manufacturer/code groups with differing normalized definitions, including Acura/Honda P1753 and Ford/Lincoln/Mercury P1519. No first-listed meaning is silently selected. The conflict groups and both original rows remain in the exclusion ledger.
7. Group a code plus matching title fact into one canonical definition. Case, spacing and cosmetic punctuation are normalized for grouping; explicit electrical polarity is preserved. All 129 candidate groups containing cosmetic title variants were inspected; 119 remain after the additional contamination exclusions. No fuzzy semantic merging or inferred model expansion is used. The original spelling of every retained source row remains available.
8. Select the canonical URL owner from the actual supported make IDs using this stable priority: Chevrolet, Honda, Ford, Toyota, Volkswagen, BMW, Mercedes-Benz, Nissan, Hyundai, Kia, Jeep, Ram, GMC, Subaru, Mazda, Lexus, Acura; then remaining labels alphabetically. Generic definitions remain under `generic`. `makeIds` preserves every actual upstream label sharing the definition. This preference gives major marques the shared URL before first publication; it neither creates a new entry nor adds vehicle applicability. The canonical owner is an administrative routing choice, not an assertion that the definition originated with that marque. Every `(makeId, code)` primary route and every source-supported discovery alias is unique. The exact priority IDs are recorded in the import ledger.

| Exclusion reason | Source rows |
|---|---:|
| Unscoped OTHER bucket | 2,620 |
| GM file duplicates GMC | 402 |
| Generic bucket outside accepted standard allocation | 157 |
| Audi cause-list file | 128 |
| Infiniti file copies Honda | 95 |
| Conflicting same-brand definitions | 34 |
| Ambiguous fragments | 29 |
| Nonspecific system-problem placeholders | 21 |
| Concatenated unscoped definitions | 18 |
| Reserved/unassigned placeholders | 14 |
| Brand row in standard/reserved allocation | 7 |
| Code-range headers | 2 |
| Malformed code/row | 1 |

## Make and model scope

The `Make.region` field describes marque origin, not dataset applicability or supported vehicle markets. `Chevy` and `Mercedes` are explicit source-label aliases for Chevrolet and Mercedes-Benz. The generic collection uses the requested `Generic OBD-II` label and has no inferred manufacturer list.

Audi, Hyundai, Porsche and Ram have make records for separately sourced model/bulletin navigation, but **zero manufacturer-specific imported dataset entries**. The excluded Audi cause-list file is not republished as a definition dictionary; Porsche is absent from the imported dictionary. Their independently reviewed manufacturer documents support the published model/case hubs and remain discoverable through the homepage, make directory and search picker. Model hubs and OEM bulletin evidence are maintained separately. Linking a model hub to a generic definition creates no new definition and establishes no diagnosis. Absence from this community dataset also does not establish that a marque cannot report a code.

No source title is expanded into a list of guessed parts to replace. General safety or diagnostic-process guidance must be clearly distinguished from code-specific OEM procedures. Reset durations, costs, cause likelihoods, severity ratings and model/engine applicability require separate evidence.

## Alternative datasets and bounded cross-checks

These sources were inspected for feasibility; none is imported here.

- [mytrile/obd-trouble-codes](https://github.com/mytrile/obd-trouble-codes), MIT: 3,070 unique records in the downloaded JSON. Its JSON field names encode the apparent first CSV row, and it lacks manufacturer scope. Only 549 code IDs overlap the upstream Wal33D generic bucket; 35 labels match exactly after basic normalization and 514 differ in wording. This is not a clean supplementary brand dataset, and a code-ID overlap is not technical verification.
- [AutoDiag2/database](https://github.com/autodiag2/database/tree/11e73fd6d105a071fa472f426d23225344921a19), pinned commit `11e73fd6d105a071fa472f426d23225344921a19`: 27,967 DTC YAML paths across 30 complete child trees, comprising 10,947 SAE/generic files and 17,020 files in 29 marque folders. There are 16,583 distinct code filenames. Raw counts include reserved B0000 and malformed Land Rover P15O9. P0171, P0300 and P0420 definitions match the Wal33D generic labels, allowing punctuation differences. Samples have a bare `obdcodex` evidence label, blank diagnosis fields and no model/year mapping. Database/content licenses are ODbL-1.0/DbCL-1.0; tooling is GPL-3.0-or-later. No AutoDiag data or code is mixed into this MIT import.
- [OBDex](https://github.com/foerbsnavi/OBDex): its [maintainer](https://github.com/foerbsnavi/OBDex/issues/8#issuecomment-5382292912) identifies Wal33D as the source of imported code IDs and English titles. Thus those titles are not independent corroboration. Original enrichment is declared CC0, but sample causes, probabilities and costs do not establish vehicle-specific evidence. Automated component Wikipedia links are not code-specific source validation.
- [lucasveneno/dtc](https://github.com/lucasveneno/dtc): the inspected tree contains non-DTC signal names among endpoint files and imports the same Wal33D binary. A sampled P0420 endpoint had no usable title or source evidence. Its larger headline count is not an eligible canonical reference-page count.

The bounded sample comparisons establish that some high-interest labels agree across repositories. They do not justify calling the complete import independently verified. Original upstream provenance, current SAE assignments and exact vehicle applicability remain limitations.

## Reproduction and maintenance

Run from the repository root:

```sh
node scripts/import-dtc.mjs
```

The offline script reads the pinned vendor snapshot, validates all blob hashes, regenerates `src/data/dtc.json`, `src/data/makes.json`, `src/data/dataset-sources.json` and `docs/data-import-ledger.json`, then checks row accounting and primary/discovery route uniqueness. It makes no network calls and requires no credentials. A repeated run must produce byte-identical generated files.

Any upstream refresh needs a new pinned manifest, retained license, repeated contamination/conflict review and regenerated count ledger. Never raise the publication count by duplicating a generic definition across makes/models or by retaining reserved placeholders. This document describes the current import policy; later individually researched OEM guidance should retain its own evidence and scope.
