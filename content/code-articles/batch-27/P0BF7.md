---
{"entryId":"generic-p0bf7","code":"P0BF7","title":"P0BF7: motor B phase V low is evaluated with PWM output disabled","description":"GM P0BF7 concerns the phase V sensor low-range branch and must be distinguished from running current protection.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[297]}],"authoringBatch":"batch-27"}
---

# P0BF7: motor B phase V low is evaluated with PWM output disabled

P0BF7 identifies motor B phase V current-sensor circuit low in the GM hybrid parameter table. The important finding is an out-of-range sensor report under a defined controller state. It does not alone establish the magnitude or direction of physical motor current.

## Recover the monitor conditions

The published threshold is phase V sensor output below −700 A. The wakeup signal must be on while PWMOutputEnable is FALSE. A diagnostic record should preserve that disabled-output state with the reported value rather than interpret the number as an ordinary driving measurement.

The failure filter is ten qualifying counts out of fifteen at a 2.08 ms rate. Two-trip reporting is listed separately. These details distinguish the calibrated monitor result from one isolated live-data update.

## Understand the effect on other checks

The phase V offset monitor is inhibited while P0BF7 or P0BF8 is active. No new offset code does not necessarily indicate a normal phase V sensor when a direct range problem remains.

The source does not supply a universal connector test, part replacement or safe current-injection method. A qualified hybrid technician must use the correct vehicle procedure to identify the signal and verify measurement integrity. Output disable is not confirmed high-voltage isolation. After repair, credible sensing and eligible monitor operation provide stronger evidence than merely clearing the code memory.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 297](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=297).
