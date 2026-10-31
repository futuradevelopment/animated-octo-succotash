---
{"entryId": "generic-p0b3c", "code": "P0B3C", "title": "P0B3C: Block-one voltage is scaled and compared with the whole pack", "description": "Understand the GM P0B3C voltage-sense rationality test and the validity conditions behind its pack comparison.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [222]}], "authoringBatch": "batch-22"}
---

# P0B3C: Block-one voltage is scaled and compared with the whole pack

P0B3C is the block-one voltage rationality monitor in this GM battery-controller document. It compares twenty times the block-one reading with the dedicated pack-voltage reading. This is a consistency assessment, not a direct instruction to replace the first battery module.

## A scaled difference is the deciding quantity

The absolute difference must exceed 70V. Because the block reading is multiplied before comparison, that 70V threshold is not an allowed voltage drop across one block. Treating it as a direct block-voltage specification would misread the calculation.

Block one's input must be valid, the controller must be in run mode and more than 200ms must have elapsed since contactor closure. Block-one circuit-limit and pack-voltage faults inhibit the test. The failure decision uses 160 samples out of 170 at 100ms intervals.

## Preserve independent measurements

Record block one and the dedicated pack-voltage sensor together, with validity and contactor timing. A pack total calculated by the scan tool from the same block inputs may not be the independent reference used by this monitor.

The source does not establish the physical location or cell composition of block one, nor identify which sensing path is inaccurate. A qualified high-voltage technician needs the matching battery diagram and service tests. Pack access must follow prescribed isolation and verification; the displayed block voltage is not evidence that the assembly is safe to handle.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 222](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=222).
