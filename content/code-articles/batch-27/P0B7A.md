---
{"entryId":"generic-p0b7a","code":"P0B7A","title":"P0B7A: block 13 high-voltage sensing needs repeated evidence","description":"GM P0B7A evaluates repeated block 13 readings above its high limit, separately from paired low and plausibility faults.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[229]}],"authoringBatch":"batch-27"}
---

# P0B7A: block 13 high-voltage sensing needs repeated evidence

P0B7A is block 13 measurement out of range high in the GM source. Its generic voltage-sense M description identifies a reported electrical channel. It does not establish that a physical battery block is overcharged or that the entire battery should be replaced.

## The published detection rule

The controller looks for block 13 above 23 V and counts fifteen failures in twenty samples. Samples are taken at 100 ms intervals. That filtered condition is more specific than seeing one high-looking number during a live-data refresh.

The source lists a two-trip Type B classification. This reporting rule is separate from the sample counter; it is not a guarantee that a warning will extinguish after two starts or after a predetermined driving distance.

## Keep related tests separate

P0B79 on the same page uses low readings from two neighboring blocks. P0B78 uses scaled comparisons against pack voltage. Neither rule should be substituted for the direct high threshold associated with P0B7A.

An eligible test requires BPCM RUN mode, the stated low-voltage supply range and P0A1F inactive. Preserve block 13 data and companion faults when evaluating an intermittent report. If the controller cannot run its monitor, the absence of a fresh code proves little. A qualified hybrid technician must use the correct vehicle procedure to separate inaccurate sensing from an actual battery condition.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 229](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=229).
