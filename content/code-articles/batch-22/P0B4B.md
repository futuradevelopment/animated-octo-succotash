---
{"entryId": "generic-p0b4b", "code": "P0B4B", "title": "P0B4B: Block-four plausibility includes a second comparison using block five", "description": "Read the GM P0B4B rationality equation and understand why its title does not describe the entire monitored input set.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [224]}], "authoringBatch": "batch-22"}
---

# P0B4B: Block-four plausibility includes a second comparison using block five

P0B4B is the block-four voltage rationality diagnosis in this GM battery table. Its failure condition uses both block four and block five, with each voltage multiplied by twenty and compared to the dedicated pack-voltage reading.

## The calculation has two required branches

The absolute difference for block four must exceed 70V, and the corresponding difference for block five must exceed 70V. This is not a direct block-four-to-block-five comparison. A technician needs all three readings to reconstruct the documented relationship.

Block four must be valid. Its circuit-limit faults, the specified pack-voltage faults and the controller-performance fault inhibit the check. Evaluation also requires run mode and more than 200ms since contactor closure. The decision uses 160 failing samples out of 170 at 100ms intervals.

## Preserve the independent pack reference

Record the dedicated pack-sensor value rather than assuming a displayed sum of block voltages is the same input. Keep block identities and contactor timing with the trace. Losing either neighboring channel would leave the source's AND condition unevaluated.

The table does not prove a defective battery block or disclose a shared sensing connection. Those questions require the actual battery diagram and service tests. Only trained high-voltage personnel should access the pack after prescribed isolation and verification; this arithmetic description does not provide an invasive testing procedure.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 224](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=224).
