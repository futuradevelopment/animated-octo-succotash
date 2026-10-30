---
{"entryId":"generic-p0bf0","code":"P0BF0","title":"P0BF0: motor A phase W high is a circuit-range diagnosis","description":"GM P0BF0 uses a high sensor-output threshold while PWM is disabled, independently of the motor overcurrent monitor.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[285]}],"authoringBatch":"batch-27"}
---

# P0BF0: motor A phase W high is a circuit-range diagnosis

P0BF0 is the high-range current-sensing branch for motor A phase W in the GM document. The generic circuit-high title identifies the channel, while the source clarifies that the check is made with PWM output disabled.

## Distinguish reported current from running current

The published criterion is phase W sensor output greater than 700 A. The wakeup signal must be on and PWMOutputEnable must be FALSE. A technician should keep that controller state with the reported value rather than immediately treating the number as physical motor current during drive operation.

GM uses ten qualifying counts among fifteen at a 2.08 ms rate. These detection values are not a procedure for deliberately reproducing the limit with external equipment.

## Check the related monitor availability

The phase W offset test requires P0BF0 and P0BEF to be inactive. If the high-range fault remains active, a missing offset fault may indicate a blocked performance test rather than a normal channel.

The source alone does not determine the failed component or provide a connector map. Safe diagnosis must use the actual hybrid vehicle's circuit information, and an output-disable state must not be mistaken for confirmed high-voltage isolation. After repair, a qualified technician should establish credible phase W data under the relevant operating state instead of relying solely on a cleared code list.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 285](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=285).
