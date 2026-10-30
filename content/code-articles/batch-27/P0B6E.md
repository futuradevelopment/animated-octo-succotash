---
{"entryId":"generic-p0b6e","code":"P0B6E","title":"P0B6E: block 11 performance is a comparison diagnosis","description":"GM P0B6E compares blocks 11 and 12 with pack voltage and depends on the validity of the supporting inputs.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[228]}],"authoringBatch":"batch-27"}
---

# P0B6E: block 11 performance is a comparison diagnosis

The GM battery-controller description for P0B6E is block 11 voltage rationality. The generic circuit K performance title is broader; the source shows that the controller is evaluating agreement between block and pack measurements, not simply applying the low or high circuit threshold.

## What evidence produces the code

The absolute difference between twenty times block 11 voltage and pack voltage must exceed 70 V. The equivalent difference for block 12 must also exceed 70 V. A diagnosis based only on the first block's displayed voltage omits half of the published comparison.

The counter requires 160 failing samples out of 170 at 100 ms intervals. This longer observation requirement differs from the fifteen-of-twenty filter used for the direct range faults on the same page.

## Check whether the comparison could run

The table requires a valid block 11 signal, BPCM RUN mode and more than 200 ms after the contactors close. It also lists block-circuit and pack-voltage faults that inhibit the test. Preserve those faults because they affect whether a rationality result can be interpreted as an independent finding.

Review block 11, block 12 and total-pack readings together under an eligible operating state. The calculation does not identify which measurement is inaccurate or establish that a battery block has lost capacity. The applicable hybrid procedure is needed for physical diagnosis, with high-voltage work limited to appropriately trained service personnel.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 228](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=228).
