---
{"entryId":"generic-p0b5a","code":"P0B5A","title":"P0B5A: battery block 7 plausibility depends on the pack-voltage comparison","description":"GM P0B5A compares block 7 and its neighbor with total pack voltage; the comparison requires valid supporting measurements.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[225,226]}],"authoringBatch":"batch-27"}
---

# P0B5A: battery block 7 plausibility depends on the pack-voltage comparison

P0B5A is the block 7 rationality diagnosis in this GM battery-controller table. A generic scanner may call it voltage-sense circuit G performance. Here, performance means disagreement between measurements, rather than a simple reading above or below an electrical limit.

## Follow both sides of the comparison

The controller scales block 7 voltage by twenty and compares it with pack voltage. Its absolute difference must exceed 70 V, and the same comparison for block 8 must also exceed 70 V. Both conditions belong to the published failure rule. The multiplication is a monitor calculation, not an instruction to apply voltage to a connector.

The evaluation accumulates 160 failures within 170 samples taken at 100 ms intervals. This differs substantially from the shorter counting rule used for the neighboring low and high circuit codes. A brief unusual reading therefore does not, by itself, reconstruct this performance finding.

## Establish that the comparison was usable

The table requires valid block 7 input, RUN mode, adequate low-voltage supply and time after the contactors close. Block-circuit and pack-voltage faults also inhibit the rationality check. Preserve those related faults and the simultaneous block/pack readings before judging which measurement is wrong.

An implausible comparison does not establish that block 7 requires replacement. Resolving the measurement path and actual battery condition requires the applicable hybrid service procedure and trained high-voltage personnel.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 225](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=225) · [GM PDF, physical page 226](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=226).
