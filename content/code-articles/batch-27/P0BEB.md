---
{"entryId":"generic-p0beb","code":"P0BEB","title":"P0BEB: motor A phase V low is evaluated with output disabled","description":"GM P0BEB checks a low phase V sensor report under a disabled-PWM condition, rather than measuring running overcurrent.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[285]}],"authoringBatch":"batch-27"}
---

# P0BEB: motor A phase V low is evaluated with output disabled

P0BEB is the low-range circuit monitor for motor A phase V current sensing in the GM document. The source uses the reported phase V value and a specific inverter command state. A generic low description alone does not explain that context.

## Identify the range condition

The threshold is a phase V current-sensor output below −700 A. The controller wakeup signal must be on and PWMOutputEnable must be FALSE. Those prerequisites distinguish this electrical-range test from a protection monitor evaluating current while the motor is driven.

The fault filter is ten qualifying counts out of fifteen at a 2.08 ms rate. GM lists two-trip reporting. Retain the controller state and original fault status with the signal value, because an unrelated later operating point may not reproduce the same check.

## Understand why other results may be absent

The phase V offset test is inhibited while P0BEB or P0BEC is active. Therefore, no offset code does not necessarily indicate a healthy phase V channel; the direct range fault may have prevented its evaluation.

The source does not identify a connector pin, prescribe a replacement or authorize injecting current to recreate the limit. A trained hybrid technician must use the actual circuit procedure to establish measurement integrity and verify recovery. Disabled PWM is an operating state, not proof that high-voltage circuits are safe for physical access.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 285](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=285).
