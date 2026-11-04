# Batch 48 research and authoring notes

Completed 2026-11-02: **100 separately authored manuscripts**, 28,827 inventory words, 276–306 words each including headings and source text. All retain draft authoring metadata. **61 author source checks; 39 explicitly need source review.** These are AI author checks, not independent mechanic certification.

## Evidence scope

The writer read the selected code-specific monitor rows in four complete manufacturer manuals hosted on the VWTS mirror. The selection is 35 Volkswagen CRUA/DEJA entries, 35 Audi CREC entries, 15 Volkswagen CGFA hybrid entries and 15 Audi CPNA/CPNB entries. PDF-page references use physical pages, including front matter, rather than the printed workshop page numbers. Full downloaded originals have recorded SHA-256 hashes and verified page counts: 436, 997, 709 and 659 respectively.

The source pool excluded every one of the previous 4,500 assigned code strings. The central reservation mechanism accepted 100 unique identities. The batch contains 25 existing canonical identities and 75 manufacturer-code candidates absent from the imported catalog. Their exact namespaces, scoped definitions and primary evidence are in the assignment records. Candidate registration does not publish articles or authorize indexing. P154A was already reserved elsewhere and was replaced with the source-read U013C entry before authoring.

Every selected monitor row was read, including the identified P13D9, P12A1/P12A2 and P21F4–P21F7 continuation pages. Referenced component procedures were read selectively: V188, QX1/G28, N489, V488, J891, J808, N421, G247, ignition coils and CAN terminal-resistance procedures. This is not a claim that every page of all four manuals was read or that every linked procedure received a full mechanical review.

## Preserved source issues

- CRUA/DEJA pressure rows copy sensor-one labels into other-cylinder headings; some temperature qualifiers use ambiguous and/or wording. The affected manuscripts retain review flags.
- P146D/P146F/P148B/P148C retain the J891/J880 connector-reference inconsistency. P148C additionally preserves the printed conductance unit “Sec” without silently converting it to siemens.
- P199C/P199D/P199E call the component a coolant pump but link to N489 coolant-valve diagnosis. No substitute component identity was invented.
- Audi CREC J808 general-description text uses turbocharger/wastegate language while the actual DTC rows describe supercharger bypass control. The P10A0–P10A8 manuscripts retain this mismatch and use the actual monitor facts rather than reproducing the conflicting hardware explanation.
- P0149 retains the duplicated strict/non-strict thirty-volt boundary. P12A1/P12A2/P12A4 and P21F4–P21F7 preserve unavailable eligibility fields instead of fabricating a complete drive cycle.
- U0141/U0431 preserve the module-A versus BCM2 labeling difference. P2AB4 retains its uncertain bank-two/N316 component mapping.
- CGFA P30A2 retains the unexplained below-two-percent branch with an inactive brake-light switch.
- CPNA/CPNB P016A distinguishes the title from its fuel-cut feedback strategy; P148F and P310E retain conflicting valve references; P310E does not invent a unit for 0.8; U1026 preserves the missing-signal title versus error-message strategy discrepancy.

Review-pending codes: P0149, P016A, P10A0, P10A1, P10A2, P10A3, P10A4, P10A5, P10A6, P10A7, P10A8, P12A1, P12A2, P12A4, P13D0, P13D3, P13D6, P13D9, P13E1, P13E2, P13E3, P146D, P146F, P148B, P148C, P148F, P199C, P199D, P199E, P21F4, P21F5, P21F6, P21F7, P2AB4, P30A2, P310E, U0141, U0431, U1026.

## Checks actually performed

All 100 files passed the local identity, reservation, metadata, heading, sentence-ending, 200–350-word and source-page-range checks. The four complete PDF page counts were verified with `/usr/bin/pdfinfo`. Two original table pages were rendered and visually checked: CRUA physical page 110 (P148B/P148C and neighboring pump rows) and CREC physical page 434 (P25EA/P25EB). The images confirmed the P148C unit problem and the distinction between P25EA's greater-than-49-second qualification and 0.5-second monitor, plus P25EB's off-state 2–3 V criterion.

A bounded comparison of the 100 bodies removed headings/source footers and normalized code strings and numbers. Across 4,950 pairs, there were no exact normalized duplicates and no five-word Jaccard similarity at or above 0.30; highest was 0.0360. This screen does not certify originality and does not replace the parent project's cross-corpus comparison.

No global publication manifest, source index, catalog or live deployment was changed by this writer. Final assignment records match the accepted reservations exactly. Root integration and peer review remain separate steps.
