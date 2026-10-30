---
{"entryId":"generic-p26bb","code":"P26BB","title":"P26BB: coolant bypass valve C cannot follow its position target","description":"P26BB compares commanded and actual coolant bypass valve C position during stable closed-loop control.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG04B diagnostic parameter file; the cited monitor is documented, but individual vehicle, engine and calibration applicability has not been established.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[847]}],"authoringBatch":"batch-08"}
---

# P26BB: coolant bypass valve C cannot follow its position target

P26BB is the position-tracking performance code for coolant bypass valve C. The documented threshold is an absolute target-to-actual position difference greater than 12 degrees. The source describes a slow or stuck part as the behavior this monitor is intended to detect.

## The target must be suitable for comparison

Closed-loop position control must be active and the desired-position gradient stable. Soft opening, soft closing and the anti-sticking routine must be inactive. Communication and position-sensor faults are exclusions. The monitor also requires valid run/crank, no cranking and an acceptable coolant-temperature enable condition.

The deviation must be present for eight seconds within a ten-second window. Reporting is Type B, two trips. These qualifications separate a sustained tracking failure from expected lag during a deliberately managed transition.

## What to review next

Compare target and actual position together, including the current control mode. A valve that has not reached a newly changing target is not automatically failing this stable-target monitor. Likewise, unreliable feedback must be resolved before treating a reported position error as proof of mechanical sticking.

Verification needs a completed tracking assessment under normal closed-loop conditions after the identified cause is addressed. The summary supports a position-response problem but does not establish the failed mechanical or electrical component, or justify opening a hot pressurized cooling system.

## Source and application limits

This explanation covers the cited 2025 GM monitor. Confirm the vehicle and calibration in its service information before applying these limits; inclusion in this file does not establish model compatibility. [GM diagnostic parameters, PDF page 847](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=847).
