---
{"entryId":"generic-p0bef","code":"P0BEF","title":"P0BEF: motor A phase W low describes an out-of-range sensor report","description":"GM P0BEF evaluates the phase W current-sensing low branch with PWM output disabled.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[285]}],"authoringBatch":"batch-27"}
---

# P0BEF: motor A phase W low describes an out-of-range sensor report

The GM row for P0BEF is motor A phase W current-sensor circuit low. Its threshold concerns the controller's reported sensor output, so the code should not be reduced to a claim that actual motor current flowed in a particular direction at an extreme magnitude.

## Reconstruct the electrical-range check

The reported phase W value must be below −700 A. The controller must be awake with PWMOutputEnable FALSE. This disabled-output condition is part of the source and distinguishes the range fault from running current protection.

The filter requires ten qualifying counts within fifteen at a 2.08 ms rate. The two-trip classification is a separate reporting detail. Record those conditions with the fault's status when comparing it with later live-data observations.

## Recognize the linked performance dependency

The phase W offset monitor P0BEE is inhibited while P0BEF or P0BF0 is active. Therefore, the absence of a separate performance code does not prove the current channel is accurate when a direct range fault remains.

The parameter table does not publish a universal connector voltage, sensor replacement or current-injection test. A qualified hybrid technician should establish the actual sensing path using the vehicle's circuit information. PWM disable does not confirm safe high-voltage isolation. Verification should show restored credible readings and an eligible monitor result, not merely erased fault memory.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 285](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=285).
