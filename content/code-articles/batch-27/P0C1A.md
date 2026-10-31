---
{"entryId":"generic-p0c1a","code":"P0C1A","title":"P0C1A: motor B torque performance needs the failed branch identified","description":"GM P0C1A includes current, checksum, communication and torque-consistency checks with different operating prerequisites.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[304,305]}],"authoringBatch":"batch-27"}
---

# P0C1A: motor B torque performance needs the failed branch identified

P0C1A is the motor B torque-delivered performance diagnosis in the cited GM controller. Its source entry contains multiple torque-security branches. The code therefore does not identify one mechanical defect or independently prove that the motor must be replaced.

## Separate data integrity from current evidence

The first branch evaluates the sum of three phase currents against the stated 75 A threshold and persistence requirement. Another checks a calculated checksum against a saved value. A third monitors the SPI rolling count and its update timing.

Those findings have different diagnostic implications. A current-correlation problem is not equivalent to a stale communication counter or a changed checksum. Preserve any available failure detail, related codes and controller data before clearing memory.

## Match the state for torque comparisons

Further branches compare DC-current behavior with command and motor speed, and compare calculated or reported torque quantities. The source distinguishes an active power stage from three-phase short and open states. A value collected in a different state cannot automatically reproduce the same security check.

The parameter summary does not supply a universal repair sequence or an instruction to force the inverter through those states. The exact vehicle procedure must identify the relevant branch, safe diagnostic method and verification requirements. Physical inverter or motor work requires qualified hybrid personnel and proper high-voltage isolation. Clearing P0C1A without establishing normal operation of the applicable check is not repair confirmation.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 304](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=304) · [GM PDF, physical page 305](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=305).
