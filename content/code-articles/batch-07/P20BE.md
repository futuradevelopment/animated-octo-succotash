---
{"entryId":"generic-p20be","code":"P20BE","title":"P20BE: line-heater performance checks resistance and delivered power","description":"P20BE evaluates reductant heater 2 resistance and power tracking while a nonzero heater command is active.","status":"draft","sourceReview":"checked","scope":"Documented 2025 GM diagnostic parameter monitor in 25OBDG04B.pdf; model, engine and calibration applicability require vehicle-specific confirmation.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[196]}],"authoringBatch":"batch-07"}
---

# P20BE: line-heater performance checks resistance and delivered power

P20BE is the performance code for reductant heater 2, which the reviewed GM table identifies as the line heater. It has two diagnostic branches: calculated electrical resistance outside its permitted range and measured power differing excessively from the requested power.

## Different quantities use different timing

Resistance is calculated from high-side minus low-side voltage divided by current. The published boundaries are 2.80 and 7.50 for that ratio, with an eight-second failure requirement. The separate power branch fails when actual and commanded power differ by more than 16.5 watts in either direction, using a ten-second requirement.

Thus performance can be unacceptable even when the heater still draws current. A continuity check alone does not establish correct operating resistance or delivered power, and the eight-second and ten-second branches should not be merged into one timeout.

## A command must exist

The heater 2 PWM command must exceed zero, the vehicle must be in an active power mode and controller-internal faults must be absent. The table explains that numerous temperature, heater, supply, communication and Run/Crank faults can set the heater command to zero. Those conditions can prevent this performance test from running.

Verification should establish a valid nonzero command before judging resistance and power agreement. No command because of an inhibitor is not a passed heater test. Reporting is Type A, one trip, with next-cycle recovery. The source does not establish the failed component or universal vehicle applicability; use the exact line-heater service procedure for diagnosis.

Source: [GM monitor, PDF page 196](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=196).
