---
{"entryId":"generic-p0bee","code":"P0BEE","title":"P0BEE: motor A phase W performance concerns current offset","description":"GM P0BEE checks phase W offset with the power stage open; the source contains a conflicting phase-name sentence.","status":"draft","sourceReview":"needs-review","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[285]}],"authoringBatch":"batch-27"}
---

# P0BEE: motor A phase W performance concerns current offset

P0BEE is the phase W current-sensor range/performance code for motor A in generic descriptions. In the GM table, the component heading and malfunction quantity define a phase W offset check. The measured offset is evaluated separately from direct low and high circuit faults.

## Use the offset-specific conditions

The published limit is phase W offset above 30 A. The wakeup signal must be on, the power stage must be OPEN, and P0BEF/P0BF0 must be inactive. The row lists 100 counts at a 2.08 ms rate, with 208 ms in the timing field.

This is not the same as excessive motor current while driving. Preserve the offset report and controller state when deciding whether the code reflects a valid performance evaluation or whether another circuit fault blocks the test.

## Retain the source inconsistency

The strategy sentence refers to U-phase, although the row heading and actual quantity identify W-phase. This summary does not silently change the manual or infer a physical sensor location. Confirm exact channel mapping against the vehicle's applicable controller information.

The source provides no manual adjustment or mandatory replacement. Its OPEN state is not proof of high-voltage isolation for workshop access. A trained hybrid technician must follow the correct safety and diagnostic procedure, then demonstrate credible phase W sensing under eligible conditions.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 285](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=285).
