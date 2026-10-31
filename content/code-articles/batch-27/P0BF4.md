---
{"entryId":"generic-p0bf4","code":"P0BF4","title":"P0BF4: motor B phase U high must be interpreted in the disabled-output state","description":"GM P0BF4 detects a high current-sensor report while PWM is disabled, separately from actual motor overcurrent protection.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[296]}],"authoringBatch":"batch-27"}
---

# P0BF4: motor B phase U high must be interpreted in the disabled-output state

P0BF4 is the high-range circuit monitor for motor B phase U current sensing in the cited GM document. It evaluates the reported sensor value under an output-disabled condition. The code is not a stand-alone proof of a physical overcurrent event during motor operation.

## Establish the specific threshold and state

The sensor output must exceed 700 A. GM requires the wakeup signal on and PWMOutputEnable FALSE. Those conditions belong with the captured value when a technician interprets the fault.

Ten qualifying counts among fifteen are needed at a 2.08 ms interval. These are internal detection parameters; they should not be converted into an external current-injection test or assumed to apply to unrelated inverter hardware.

## Retain the offset-test dependency

The source allows the phase U offset monitor only when P0BF4 and its low counterpart are inactive. An absent performance code may therefore reflect inhibition while the high-range fault remains, rather than establish a healthy measurement channel.

Save the associated fault status and controller data before clearing memory. The table does not identify a defective wire or require replacing the inverter. The actual hybrid service procedure must guide safe diagnosis and verification. Disabled PWM does not prove the high-voltage system is isolated; trained personnel must establish safe access independently and confirm credible sensing after repair.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 296](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=296).
