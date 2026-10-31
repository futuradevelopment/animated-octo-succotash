---
{"entryId": "generic-p0b4d", "code": "P0B4D", "title": "P0B4D: Block-four high sensing is a single-channel upper-limit test", "description": "Read the GM P0B4D voltage-sense monitor without importing the neighboring low-limit test’s paired condition.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [224]}], "authoringBatch": "batch-22"}
---

# P0B4D: Block-four high sensing is a single-channel upper-limit test

P0B4D is the upper-limit diagnostic for block-four voltage sensing. The cited GM threshold is a block-four indication above 23V. This entry evaluates the named channel directly; it does not require block five to be high at the same time.

## The opposite fault has different logic

The adjacent P0B4C low-limit monitor uses a pair of low readings. Copying that pair requirement into P0B4D would change the documented high-limit test. Here the prerequisites are battery-controller run mode, an accepted low-voltage supply and no controller-performance fault.

The failure decision counts 15 qualifying samples within 20 at 100ms intervals. An isolated high sample may be worth retaining, but it is not the entire controller decision.

## Distinguish a sensing limit from overcharge proof

Save the exact block-four reading, its status, the pack reference and other voltage-sensing codes. The upper-limit code does not independently identify a charging-control failure or prove a damaged physical block. Its physical location also cannot be inferred from the number alone.

The correct battery diagram and service tests are needed before choosing a repair. A trained high-voltage technician must use prescribed isolation and verification for any pack access. Do not increase battery voltage to reproduce this calibration threshold, and do not treat the scanner's reading as a direct safety measurement.

The dedicated pack reading and this block input are different measurements.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 224](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=224).
