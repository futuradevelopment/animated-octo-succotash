---
{"entryId":"generic-p0be8","code":"P0BE8","title":"P0BE8: motor A phase U high is a sensing-range result","description":"GM P0BE8 evaluates a high phase U sensor report while PWM output is disabled, not the separate running overcurrent condition.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[284]}],"authoringBatch":"batch-27"}
---

# P0BE8: motor A phase U high is a sensing-range result

GM assigns P0BE8 to the high-range check of motor A phase U current sensing. The generic circuit-high title should be interpreted with the controller state in the source. It is not interchangeable with a code for excessive current during inverter operation.

## Reconstruct the range check

The sensor's reported phase U value must exceed 700 A. Evaluation requires the wakeup signal on and PWMOutputEnable set to FALSE. A diagnostic record should retain that state alongside the reported value, rather than assuming the number represents actual running motor current.

The row uses ten qualifying counts within fifteen at a 2.08 ms rate and lists two-trip reporting. These are calibration detection details, not instructions to reproduce the threshold using workshop equipment.

## Preserve the dependency on this fault

The phase U offset monitor P0BE6 is inhibited while P0BE8 or its low counterpart is active. That relationship can explain why a separate performance fault is absent even though the current-sensing channel is not behaving normally.

The table does not establish which connection or internal component caused the high report. Vehicle-specific service information is required for safe signal identification and diagnosis. A disabled PWM command does not constitute high-voltage isolation. A trained technician should verify credible readings and eligible monitor operation after repair, rather than relying only on erased fault memory.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 284](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=284).
