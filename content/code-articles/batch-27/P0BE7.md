---
{"entryId":"generic-p0be7","code":"P0BE7","title":"P0BE7: motor A phase U low is checked with PWM output disabled","description":"GM P0BE7 is a phase U current-sensor electrical-range check, distinct from the inverter overcurrent monitor.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[284]}],"authoringBatch":"batch-27"}
---

# P0BE7: motor A phase U low is checked with PWM output disabled

P0BE7 identifies the low-range branch of motor A phase U current sensing in GM's hybrid table. The source evaluates the sensor's reported current value, rather than declaring that the motor is drawing a particular physical current during normal operation.

## Pay attention to the disabled-output state

The published criterion is a phase U sensor output below −700 A. The wakeup signal must be on and PWMOutputEnable must be FALSE. That state is essential context: the row is an electrical-range check with output disabled, not a loaded-motor overcurrent test.

GM requires ten qualifying counts among fifteen at a 2.08 ms rate. The two-trip classification is separate from that filtering. Keep the original fault status and controller state when comparing the event with subsequent scan data.

## Understand the linked offset monitor

P0BE6 tests phase U offset only when the direct low and high faults are inactive. A stored P0BE7 can therefore affect which performance checks are available. Clearing the code without restoring credible signal behavior does not establish that the channel is healthy.

The source provides no universal pin voltage, current-injection test or sensor replacement instruction. A qualified hybrid technician must follow the vehicle-specific circuit procedure. The numerical current limit must not be reproduced physically, and disabled PWM is not proof that the inverter is safely isolated for access.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 284](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=284).
