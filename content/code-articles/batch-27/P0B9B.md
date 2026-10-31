---
{"entryId":"generic-p0b9b","code":"P0B9B","title":"P0B9B: the final block rationality rule has no extra neighboring channel","description":"GM P0B9B compares block 20 with pack voltage using a single scaled comparison, unlike earlier paired block tests.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[233]}],"authoringBatch":"batch-27"}
---

# P0B9B: the final block rationality rule has no extra neighboring channel

P0B9B is block 20 voltage rationality in the GM battery-controller table. The generic description calls it voltage-sense circuit T range/performance. This final-block entry has an important difference from several preceding block monitors.

## Do not invent a block 21 condition

The row compares twenty times block 20 voltage with total pack voltage. An absolute difference greater than 70 V is the published failure criterion. Unlike earlier rationality rows that join two neighboring comparisons, this row contains only the block 20 calculation.

GM still requires 160 failures among 170 samples, taken at 100 ms intervals. Therefore, the single comparison remains a sustained plausibility test, not a direct low/high range check or a battery-capacity measurement.

## Establish usable data

The block 20 input must be valid, RUN mode must be present, and the contactors must have been closed for more than 200 ms. The listed block 20 low/high codes and pack-voltage faults inhibit evaluation. Their status matters when deciding whether a later absence of P0B9B indicates successful testing.

Compare block 20 and pack-voltage reports under the same eligible conditions. The source does not state which measurement is inaccurate or prescribe replacing the final battery block. Exact vehicle service information is needed for that decision. Keep high-voltage access and physical testing within the applicable hybrid safety procedure and trained professional service.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 233](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=233).
