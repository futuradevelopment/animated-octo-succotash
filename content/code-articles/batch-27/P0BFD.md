---
{"entryId":"generic-p0bfd","code":"P0BFD","title":"P0BFD: motor A phase-current correlation is different from one high sensor","description":"GM P0BFD evaluates the combined three-phase current report with the main relay closed, rather than a single-channel range limit.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[284]}],"authoringBatch":"batch-27"}
---

# P0BFD: motor A phase-current correlation is different from one high sensor

P0BFD is the motor A U-V-W current-sensor correlation diagnosis in GM's table. The monitor is intended to identify an electrical sensing failure through the relationship among the three phase-current reports. It is distinct from the low or high range checks for an individual phase.

## Read the combined-current criterion literally

The source prints the sum of the three phase currents greater than 75 A as the failure criterion. It does not show an absolute-value operator in that row, so this summary does not invent a symmetric negative threshold or an alternative calculation.

The main relay must be closed and the wakeup signal on. GM uses eight qualifying counts among ten, with a task-rate range printed in the timing column. These conditions differ from individual range checks performed with PWM output disabled.

## Preserve the three-channel evidence

A useful record includes all three phase readings, relay state and companion circuit faults. One high-looking phase value cannot, by itself, demonstrate the correlation calculation. Conversely, a correlation code does not identify which phase sensor is inaccurate.

The table supplies no universal connector test or required motor replacement. A trained hybrid technician must establish the actual sensing configuration and diagnostic procedure for the vehicle. The main-relay state is operating information, not a safe-access instruction; physical inverter work requires independently verified high-voltage isolation and the correct service precautions.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 284](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=284).
