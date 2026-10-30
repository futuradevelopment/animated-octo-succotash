---
{"entryId":"generic-p0ba5","code":"P0BA5","title":"P0BA5: Block 22 rationality depends on valid pack sensing","description":"P0BA5 compares block 22 scaled voltage with the pack reading in the cited 2009 GM monitor, with fault and contactor-state prerequisites.","status":"draft","sourceReview":"checked","scope":"09OBDG13 2-Mode Hybrid Diagnostics — 2009 Diagnostic Parameters, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2009-13-2-mode-hybrid"],"sourcePages":[{"sourceId":"gm-2009-13-2-mode-hybrid","pages":[270]}],"authoringBatch":"batch-28"}
---

# P0BA5: Block 22 rationality depends on valid pack sensing

P0BA5 monitors block 22 voltage rationality in the cited 2009 GM battery-controller table. It asks whether the block's scaled measurement agrees with battery-pack voltage, rather than whether the block is simply too low or too high.

## Read the comparison in the right units

GM multiplies the block 22 reading by 22 and takes its absolute difference from pack voltage. A result above 70 volts qualifies as a failure. The 70-volt quantity belongs to that scaled error; applying it directly to a single cell would misread the diagnostic.

The row specifies 50 failures in 60 samples, with a 100-millisecond frequency. Preserve the repeated measurement behavior, not only one snapshot at the time a warning was noticed.

## Establish a trustworthy comparison

Block 22 sensor input must be valid. Its low/high circuit codes and the listed pack-sensing faults inhibit this rationality test. Evaluation also requires the controller in RUN, a 9–18 volt support supply and more than 200 milliseconds since contactor closure.

If either reference is invalid, the rationality finding cannot be treated as a clean comparison of two trustworthy measurements. A workshop should identify the active prerequisites and compare the recorded block and pack values before considering replacement work. The table gives no universal pack layout or physical location for channel V. High-voltage access and confirmation belong to the vehicle-specific professional procedure.

## Source and applicability

09OBDG13 2-Mode Hybrid Diagnostics — 2009 Diagnostic Parameters, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 270](https://gsi.ext.gm.com/gmspo/mode6/pdf/2009/09OBDG13%202-Mode%20Hybrid%20Diagnostics.pdf#page=270).
