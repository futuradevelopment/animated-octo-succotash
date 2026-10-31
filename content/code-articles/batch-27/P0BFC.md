---
{"entryId":"generic-p0bfc","code":"P0BFC","title":"P0BFC: motor B phase W high is a sensor-range finding","description":"GM P0BFC checks a high phase W report while PWM is disabled, independently of motor overcurrent protection.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[297]}],"authoringBatch":"batch-27"}
---

# P0BFC: motor B phase W high is a sensor-range finding

GM identifies P0BFC as the high-range current-sensor circuit fault for motor B phase W. The monitor evaluates an out-of-range report under a defined controller command state. It should not automatically be presented as a proven physical overcurrent event.

## What qualifies the high report

The published threshold is phase W sensor output above 700 A. The wakeup signal must be on, with PWMOutputEnable FALSE. A technician should retain that state when interpreting the current value rather than compare it directly with an unrelated running-motor observation.

The row uses ten qualifying counts out of fifteen at a 2.08 ms interval. These are internal detection parameters and are not an instruction to inject or generate that current during a workshop test.

## Follow the dependency to the offset check

P0BFA, the phase W offset monitor, requires this high fault and its low counterpart to be inactive. If a range fault remains active, no new offset result may simply reflect inhibition.

The document provides no universal pinout or mandatory inverter replacement. Physical diagnosis must use the applicable hybrid vehicle procedure to identify the signal and verify measurement integrity. Output disable does not establish safe electrical isolation. A trained technician should confirm credible phase W data and the appropriate monitor outcome after repair, without treating erased codes as sufficient proof.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 297](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=297).
