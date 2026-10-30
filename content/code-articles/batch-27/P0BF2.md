---
{"entryId":"generic-p0bf2","code":"P0BF2","title":"P0BF2: motor B phase U performance checks the offset with power stage open","description":"GM P0BF2 is an offset-current test that requires the phase U low and high sensing faults to be inactive.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[296]}],"authoringBatch":"batch-27"}
---

# P0BF2: motor B phase U performance checks the offset with power stage open

P0BF2 is motor B phase U current-sensor range/performance in generic terminology. The cited GM controller implements this as an offset check, using the phase U offset-current report while the power stage is in its OPEN state.

## Offset is a separate diagnostic quantity

The published failure limit is offset above 30 A. The monitor uses 100 counts at a 2.08 ms rate, with 208 ms shown in the timing column. This should not be confused with the controller's running overcurrent test, which evaluates a different condition.

The wakeup signal must be on. The phase U direct low/high faults P0BF3 and P0BF4 must also be inactive before the performance check can evaluate its input. Preserve those dependencies when an offset code appears intermittent or is absent after clearing.

## Verify a usable channel before selecting a repair

A useful diagnostic record contains the offset value, controller power-stage state and associated range faults. Their relationship helps determine whether an apparently normal result reflects eligible testing or inhibited evaluation.

The table does not prescribe manual sensor zeroing or mandatory inverter replacement. OPEN is a controller status, not evidence that workshop high-voltage isolation has been completed. The correct vehicle procedure must identify the sensing path and safe checks. A trained hybrid technician should verify credible phase U behavior and the monitor result after addressing the actual cause.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 296](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=296).
