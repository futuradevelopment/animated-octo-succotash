---
{"entryId":"generic-p0ba1","code":"P0BA1","title":"P0BA1: Block 21 low logic also observes its neighbor","description":"GM’s 2009 P0BA1 low-voltage check can be triggered by block 21 or block 20, so the adjacent reading matters.","status":"draft","sourceReview":"checked","scope":"09OBDG13 2-Mode Hybrid Diagnostics — 2009 Diagnostic Parameters, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2009-13-2-mode-hybrid"],"sourcePages":[{"sourceId":"gm-2009-13-2-mode-hybrid","pages":[269]}],"authoringBatch":"batch-28"}
---

# P0BA1: Block 21 low logic also observes its neighbor

P0BA1 is labelled block 21 voltage measurement out of range low in this 2009 GM table. The important detail is that its printed condition includes either block 21 or block 20 below 2 volts. That neighboring-input condition changes what the code can establish about a particular sensing point.

## Keep both values in the evidence

A scan report showing only block 21 loses information needed to interpret this monitor. If block 20 is the low report, treating P0BA1 as proof of an isolated block 21 defect skips the actual OR condition. The table does not establish whether the underlying problem is the battery, a sensing connection or another measurement-path defect.

The fault qualifies after eight failed samples out of ten, sampled every 100 milliseconds. The listed 0.8-second accumulation is therefore more specific than an instantaneous low reading.

## Match the controller state

The battery controller must be in RUN and the low-voltage supply must lie between 9 and 18 volts. Those conditions should accompany the recorded block values. A retest performed without the required supply or operating state does not reproduce the documented check.

The code's U channel label must be matched to the correct vehicle documentation; the historical block numbering is not a universal physical-cell map. Have a qualified high-voltage technician establish the actual sensing path before considering battery work. No resistance limit, connector pin or replacement decision is supplied by this monitor table.

## Source and applicability

09OBDG13 2-Mode Hybrid Diagnostics — 2009 Diagnostic Parameters, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 269](https://gsi.ext.gm.com/gmspo/mode6/pdf/2009/09OBDG13%202-Mode%20Hybrid%20Diagnostics.pdf#page=269).
