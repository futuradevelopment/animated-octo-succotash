---
{"entryId":"generic-p02eb","code":"P02EB","title":"P02EB: excessive current through the diesel throttle motor","description":"P02EB monitors diesel throttle motor current in this GM implementation.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG04B diagnostic parameter tables; the cited monitor only. Vehicle, engine and calibration applicability must be confirmed separately.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[1169]}],"authoringBatch":"batch-06"}
---

# P02EB: excessive current through the diesel throttle motor

P02EB monitors diesel throttle motor current in this GM implementation. A hardware-reported H-bridge current above 5.5 A is the documented failure threshold.

## What the current result establishes

The strategy lists a shunt across the load and internal motor faults as examples of conditions that can create excessive current. These are examples, not a ranked list of causes or a conclusion that the motor must be replaced.

The driver must be on for this assessment. That distinguishes an excessive-current finding from a high-resistance open-load check performed with the driver off. Keep the commanded motor state with the current evidence so that those two tests are not confused.

## Monitor prerequisites and follow-up

The test is calibration-enabled, runs outside cranking and requires powertrain-relay voltage above 11 V. Hardware status must be determinate, and the table includes a motor-current fault-status gate. The failure filter is 240 counts out of 300 on a 12.5 ms function task, with Type A reporting.

Verification should address the current response during an eligible driven period and confirm that the hardware no longer reports the excessive-current condition. The 5.5 A figure is specific to this monitor, not a general specification for every intake actuator. The table supplies no safe direct-power procedure, pinout or instruction to bypass current protection; use the applicable service diagnosis.

## Source and applicability

2025 GM 25OBDG04B diagnostic parameter tables; the cited monitor only. Vehicle, engine and calibration applicability must be confirmed separately. These tables describe detection logic, not a complete repair procedure or a component replacement verdict. [gm-2025-04b, PDF page 1169](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1169).
