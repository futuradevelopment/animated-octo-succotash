---
{"entryId":"generic-p0bf6","code":"P0BF6","title":"P0BF6: motor B phase V offset has a source phase-name discrepancy","description":"GM P0BF6 checks phase V current offset with the power stage open, while a strategy sentence names a different phase.","status":"draft","sourceReview":"needs-review","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[297]}],"authoringBatch":"batch-27"}
---

# P0BF6: motor B phase V offset has a source phase-name discrepancy

P0BF6 is the motor B phase V current-sensor performance diagnosis in generic terminology. In GM's table, the heading and measured quantity identify phase V offset current. The test is distinct from the direct low and high range checks for that channel.

## Follow the measured quantity and prerequisites

The offset threshold is greater than 30 A. Evaluation requires the wakeup signal on, power stage OPEN and P0BF7/P0BF8 inactive. GM lists 100 counts at a 2.08 ms rate for this performance check.

These conditions matter when comparing a fault with later data. An offset result is not equivalent to a running motor-current measurement, and direct range faults can prevent the performance check from producing a new result.

## Keep the documentation limitation visible

The strategy text says U-phase even though the row heading and malfunction quantity say V-phase. This article retains that discrepancy and does not infer a physical current-sensor mapping from the wording alone. Confirm the channel against the applicable vehicle and controller documentation.

The source does not prescribe a manual offset correction or identify a replacement component. The OPEN state is not proof of workshop high-voltage isolation. A trained hybrid technician must follow the proper circuit and safety procedures, then establish credible phase V data during eligible operation before declaring the problem resolved.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 297](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=297).
