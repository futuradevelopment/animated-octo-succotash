---
{"entryId":"generic-p0b8c","code":"P0B8C","title":"P0B8C: block 17 plausibility requires a block 18 comparison","description":"GM P0B8C monitors sustained block-to-pack disagreement across two channels, rather than a single electrical limit.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[231]}],"authoringBatch":"batch-27"}
---

# P0B8C: block 17 plausibility requires a block 18 comparison

P0B8C is assigned to block 17 voltage rationality in the GM hybrid parameter document. Its generic voltage-sense Q range/performance wording leaves out the relationships that make the diagnosis useful. The actual test compares block measurements with a separate pack-voltage report.

## Two comparisons, one qualified condition

The controller checks the absolute difference between twenty times block 17 voltage and pack voltage. A difference greater than 70 V must occur together with the same excessive difference for block 18. That conjunction is part of the row, not an optional comparison added by a repair guide.

The monitor requires 160 failures within 170 samples at 100 ms intervals. A brief mismatch is therefore different from the sustained sample pattern used to mature this code.

## Recognize when rationality is unavailable

GM requires valid block 17 input, RUN mode, the specified low-voltage supply window and more than 200 ms after contactor closure. Several block-circuit and pack-voltage faults inhibit the calculation. Their status helps explain why a later scan may not contain a new performance result.

Preserve block 17, block 18 and total-pack readings together. The source does not decide whether the underlying problem is in a sensing path or actual battery condition. Diagnosis and verification require the correct hybrid service procedure, and the calculation must never be used as an improvised instruction for high-voltage probing.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 231](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=231).
