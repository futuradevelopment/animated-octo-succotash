# Batch 50 research notes

Completed 2026-11-02: 100 original English manuscripts covering 100 distinct Nissan manufacturer-specific DTC base codes. All are draft manuscripts; this writer did not publish, commit, edit the global article manifest, or change the canonical DTC catalog. The 100 new canonical assignments require the parent integration process.

## Sources and reading method

Eight Nissan Ariya FE0 factory-manual chapters reproduced by niariya.com support the final selection: VCM, front motor inverter, rear motor inverter, 91 kWh battery LBC, on-board charger, body control, thermal management, and VDC brake control. These are factory procedures on a third-party mirror, not a claim that the mirror is Nissan's own website. Downloaded original HTML bytes are retained in the writer50 scratch directory. Each source record and assignment includes the original HTML SHA-256 and precise code-section locators; each manuscript includes a visible HTTPS source link and a bounded equipment/suffix scope.

Complete code-specific detection tables, possible causes, fail-safe descriptions, confirmation procedures, and diagnostic flows were read before the corresponding manuscript was authored. Shared preconditioning text was read and reused as common context. Sources were extracted from HTML with section boundaries and table text retained. No numerical value was invented from an unavailable waveform or missing branch graphic. Separate linked component procedures were not all downloaded, and manuscripts defer to those procedures where their specifications are needed. Mirror-inserted year labels do not establish universal 2023–2026 or per-VIN applicability.

The source list is in `wave5/writer50/sources.json`. It contains eight HTML sources and no PDF page-count claims. The original 66 kWh battery chapter was downloaded during discovery but does not support any final batch-50 manuscript. Multiple suffixes of one base code are grouped into one article, preserving differences in monitored conditions and responses.

## Selection and writing checks

Candidate codes were checked against the existing catalog and previously written codes, then claimed through the shared atomic reservation tool. The final 100 assignment objects exactly match the batch-50 reservations. Three attempted candidates already reserved elsewhere were skipped; a near-duplicate compressor-interlock candidate was also avoided. No claimed source evidence was substituted after writing.

Each manuscript has JSON frontmatter, a complete-sentence description, at least two substantive subheadings, source IDs and locators, a visible source link, and draft status. Main prose is 201–260 words per article, totaling 21,839 words, excluding headings, metadata, and the repeated Source and scope footer. The first 48 manuscripts were expanded with source-specific context after the parent's word-count review. The parent's U1327 editorial removal was preserved.

The technical writing distinguishes current and historical DTCs, suffix-specific behavior, and diagnostic priority. It does not claim that a DTC alone proves a failed component, reproduce dangerous high-voltage bypass instructions, or invent repair costs. Battery, high-voltage, brake, and moving-body-component work is bounded to appropriate professional procedures. Source checks and bounded peer reviews are not independent mechanic certification of every article.

## Explicit source-review limitations

93 manuscripts are marked `checked`; seven remain `needs-review`, with the limitation visible in the article:

- P15A9: the -24 detection table includes 70 V in the triggering range, while a diagnostic branch uses 70 V or less. The equality boundary is unresolved.
- P1B01: the extracted -62 cell-comparison branches do not retain explicit inequality labels. No module-selection formula is presented as a repair instruction.
- P1B20: the -11 relay-control procedure's repair branch contains an unexplained battery-current-sensor parenthetical. The -87 CPLC communication variant remains separately described.
- P1C50: the CAN-controller heading conflicts with a detection condition based on internal charger temperature.
- P1C64: the -38 frequency-error criterion appears beneath an AC-overvoltage heading; -17 voltage and -38 frequency remain distinct.
- P30E5: the scan heading mentions a coolant pump while the detection and diagnostic procedure concern the rear traction-motor oil pump.
- U1C02: a later optional-equipment branch points to its own step number in the reproduced procedure. No corrected destination is invented.

A peer review also noted a backward/looping step reference in C105D's source connector check. The article does not reproduce that jump or depend on its destination. C10B4's source heading contains an obvious spelling error; its CONSULT label and detection table consistently specify overheating, which is how the article and canonical definition describe it.

## Validation and review evidence

`wave5/writer50/validation.json` records the exact 100 article hashes, individual main-prose counts, unique-code count, source-byte hash matches, exact assignment/reservation equality, distinct full bodies, frontmatter checks, and the seven review flags. All checks passed with no errors. Parent and peer review covered selected complete bodies and deeper source comparisons; these were bounded samples, not a claim that an independent reviewer audited every source and manuscript. The completed files are ready for parent integration, which owns canonical records, durable evidence packaging, global validation, and any publication decision.
