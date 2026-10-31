---
{"entryId":"generic-p0bfe","code":"P0BFE","title":"P0BFE: motor B correlation uses the three phase-current reports together","description":"GM P0BFE checks a combined-current relationship with the main relay closed and cannot identify one faulty phase by itself.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[296]}],"authoringBatch":"batch-27"}
---

# P0BFE: motor B correlation uses the three phase-current reports together

P0BFE is the motor B U-V-W current-sensor correlation monitor in the cited GM document. The controller evaluates the relationship among three current measurements rather than applying the direct low/high threshold of a single sensing channel.

## Reconstruct the combined finding

GM prints a sum of the three phase currents greater than 75 A as the malfunction criterion. The row does not provide an absolute-value notation, and this article does not extend it into an unprinted negative-current rule. Exact signal conventions belong to the applicable controller information.

The main relay must be closed and the wakeup signal on. The filter requires eight qualifying counts within ten, with a task-rate range in the timing field. This differs from the disabled-PWM state used by individual sensor-range tests.

## Keep the phase records together

Retain U, V and W readings from the same operating period, together with relay state and related faults. A correlation diagnosis cannot be reconstructed from one phase value captured later, and it does not directly tell a workshop which sensor or connection is responsible.

The source is a monitor summary, not a motor-replacement instruction or a safe physical testing method. Vehicle-specific hybrid circuit information must guide diagnosis and verification. A qualified technician must establish high-voltage isolation independently before access; a relay status observed in scan data is not a substitute for the service safety procedure.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 296](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=296).
