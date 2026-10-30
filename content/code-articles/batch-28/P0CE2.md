---
{"entryId":"generic-p0ce2","code":"P0CE2","title":"P0CE2: Coolant-valve drive 1 low is tested in reverse motion","description":"GM P0CE2 checks the battery coolant-valve motor driver’s low-state fault while the valve is moving in the specified direction.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[559]}],"authoringBatch":"batch-28"}
---

# P0CE2: Coolant-valve drive 1 low is tested in reverse motion

P0CE2 is the low-circuit diagnostic for motor drive 1 of the battery-pack coolant control valve in this GM table. The controller observes the driver's electrical state. It is not simply a report that the valve failed to reach a requested coolant-routing position.

## Motion direction is part of eligibility

For this low-state check, the valve must be moving in the reverse direction and system voltage must exceed 10.2 volts. A stationary valve or a test in the opposite direction does not recreate the specified condition. Preserve the command direction along with the electrical status when interpreting the record.

The monitor requires 90 failing observations out of 100 samples at 6.25-millisecond intervals. The sampled fault is the driver state reported LOW, rather than a measured coolant temperature or flow rate.

## Separate control circuitry from position feedback

The neighboring valve-position diagnostics assess command tracking and sensor feedback through different comparisons. Their presence does not justify treating P0CE2 as the same mechanical failure. The applicable service procedure must establish whether the electrical report reflects wiring, driver circuitry or another supported cause.

The document does not provide a universal pinout or a mandatory valve replacement. A qualified technician should identify the actual valve/control system before testing it. Investigation around battery cooling and high-voltage components requires the proper vehicle precautions; this monitor is diagnostic evidence, not an instruction to operate the valve manually.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 559](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=559).
