---
{"entryId":"generic-p0ba0","code":"P0BA0","title":"P0BA0: Block 21 must agree with the pack comparison","description":"The 2009 GM P0BA0 monitor compares scaled block 21 voltage with pack voltage after checking sensor validity and contactor timing.","status":"draft","sourceReview":"checked","scope":"09OBDG13 2-Mode Hybrid Diagnostics — 2009 Diagnostic Parameters, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2009-13-2-mode-hybrid"],"sourcePages":[{"sourceId":"gm-2009-13-2-mode-hybrid","pages":[269]}],"authoringBatch":"batch-28"}
---

# P0BA0: Block 21 must agree with the pack comparison

In the cited 2009 GM two-mode hybrid table, P0BA0 is a rationality check for block 21 voltage. The controller compares that block's reading with the pack measurement; it is not simply checking whether block 21 falls below a fixed low-voltage limit.

## Understand the scaled comparison

The documented calculation multiplies block 21 voltage by 22 and compares the result with battery-pack voltage. An absolute difference above 70 volts is the failure condition. This figure is the error in a scaled comparison, not an allowable 70-volt imbalance between two individual cells.

The monitor uses 50 failed samples within 60 observations at 100-millisecond intervals. Its reported five-second failure accumulation therefore belongs to a repeated comparison, not a single unusually loaded instant.

## Check the references before blaming the block

The block 21 input must be valid. Listed block low/high and pack-voltage faults inhibit the test, and more than 200 milliseconds must have elapsed since the contactors closed. The battery controller must be in RUN, with the 12-volt supply between 9 and 18 volts.

These requirements make pack-measurement validity and contactor-state history part of interpreting P0BA0. A technician should retain both compared readings and the inhibiting faults rather than replace a block from this code alone. The source does not establish a physical location or a universal pack design. High-voltage battery diagnosis requires the corresponding trained service procedure.

## Source and applicability

09OBDG13 2-Mode Hybrid Diagnostics — 2009 Diagnostic Parameters, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 269](https://gsi.ext.gm.com/gmspo/mode6/pdf/2009/09OBDG13%202-Mode%20Hybrid%20Diagnostics.pdf#page=269).
