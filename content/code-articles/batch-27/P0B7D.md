---
{"entryId":"generic-p0b7d","code":"P0B7D","title":"P0B7D: block 14 rationality extends across two source pages","description":"GM P0B7D compares blocks 14 and 15 with pack voltage; the continuation contains important monitor prerequisites.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[229,230]}],"authoringBatch":"batch-27"}
---

# P0B7D: block 14 rationality extends across two source pages

The cited GM manual assigns P0B7D to block 14 voltage rationality. The generic circuit N performance label does not show the complete logic, which spans a physical page break. Both the failure calculation and its continued enable conditions matter.

## Recover the whole comparison

Twenty times block 14 voltage is compared with pack voltage, and the absolute difference must exceed 70 V. The continuation adds the same requirement for block 15. The table joins the comparisons with AND, so a single-channel observation cannot reconstruct the full finding.

The counter calls for 160 failures among 170 samples, with samples every 100 ms. This is distinct from the shorter counter for direct low or high block-voltage faults.

## Establish trustworthy inputs first

Block 14 input must be valid. BPCM RUN mode, the stated 12 V supply window and more than 200 ms after contactor closure are also required. Active block 14 low/high codes and the listed pack-sensing faults inhibit rationality evaluation.

These dependencies are useful when a code does not return immediately after clearing: the monitor may be ineligible rather than repaired. Compare block 14, block 15 and pack-voltage evidence under the same conditions. The source does not determine which signal is inaccurate or identify a required replacement part. Physical investigation of the high-voltage battery requires the actual vehicle's safety procedure and trained personnel.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 229](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=229) · [GM PDF, physical page 230](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=230).
