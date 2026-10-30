---
{"entryId":"generic-p0bf8","code":"P0BF8","title":"P0BF8: motor B phase V high is tested with PWM disabled","description":"GM P0BF8 is a current-sensor high-range fault whose controller-state prerequisite separates it from running overcurrent.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[297]}],"authoringBatch":"batch-27"}
---

# P0BF8: motor B phase V high is tested with PWM disabled

P0BF8 is the high-range branch for motor B phase V current sensing in the GM table. The source evaluates a sensor report with output disabled. The code alone should not be described as proof that the motor physically carried the reported extreme current during driving.

## Keep the signal and state together

GM's criterion is phase V sensor output greater than 700 A. The wakeup signal must be on and PWMOutputEnable FALSE. Those prerequisites are important parts of the finding, not optional context that can be discarded from a diagnostic record.

The monitor requires ten qualifying counts among fifteen at a 2.08 ms rate. The source's two-trip classification concerns reporting and is separate from this short within-test filter.

## Check which dependent tests were available

The phase V offset monitor requires P0BF8 and P0BF7 to be inactive. An absent performance code can therefore mean the direct range fault prevented evaluation. It does not necessarily establish accurate phase V sensing.

Preserve the range-fault status, reported current and controller state before clearing codes. The source does not identify a specific damaged component or supply universal connector measurements. A trained hybrid technician must use the correct vehicle procedure to verify the sensing path. Output disable does not prove high-voltage isolation, and the numerical current threshold must not be recreated by improvised physical testing.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 297](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=297).
