---
{"entryId":"generic-p0b6b","code":"P0B6B","title":"P0B6B: block 10 high sensing uses a direct range threshold","description":"GM P0B6B detects repeated high block 10 measurements; the cited threshold is specific to the documented controller.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[227]}],"authoringBatch":"batch-27"}
---

# P0B6B: block 10 high sensing uses a direct range threshold

P0B6B is the high-range diagnosis for block 10 voltage measurement. A scan tool may describe the channel as voltage sense J. In the GM source, this is a direct range test rather than a calculation of battery capacity or an instruction to replace a battery module.

## What distinguishes this branch

The failure threshold is a block 10 reading above 23 V. The controller needs fifteen failures out of twenty samples, with a 100 ms sample interval. The repeated-sample requirement matters when comparing a stored fault with a brief observation on a live-data screen.

Unlike the neighboring low code, this high branch has no requirement that block 11 also be below a limit. Unlike the rationality code, it does not require a scaled comparison with total pack voltage. Keep those three diagnostic paths separate when reviewing a group of battery codes.

## Confirm a meaningful retest

BPCM RUN mode, a low-voltage supply from 9 to 18 V and absence of active P0A1F are prerequisites. If those conditions are not met, a code-free scan may simply mean the monitor has not evaluated the channel.

Save block 10 data and accompanying faults before clearing anything. The distinction between actual battery voltage and inaccurate sensing requires vehicle-specific service information. The published 23 V criterion is a historical calibration example and must not be transferred to an unrelated pack or used for direct high-voltage experimentation.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 227](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=227).
