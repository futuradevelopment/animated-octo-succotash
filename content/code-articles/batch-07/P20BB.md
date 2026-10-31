---
{"entryId":"generic-p20bb","code":"P20BB","title":"P20BB: heater 1 ground-short classification uses an off-state test","description":"P20BB identifies a reductant heater 1 short-to-ground condition after the controller evaluates the heater off state.","status":"draft","sourceReview":"checked","scope":"Documented 2025 GM diagnostic parameter monitor in 25OBDG04B.pdf; model, engine and calibration applicability require vehicle-specific confirmation.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[195]}],"authoringBatch":"batch-07"}
---

# P20BB: heater 1 ground-short classification uses an off-state test

P20BB is the low-circuit code for reductant heater 1, identified in the reviewed GM table as tank heater 1. The controller can notice trouble while heating, but the source says the specific control-circuit fault is pinpointed only when the heater is commanded off.

## Why the command can disappear

During an on-command, excessive low-side FET drain voltage or load current can trigger shutdown for diagnosis. The off-state branch then recognizes the ground-short signature using the measured high- and low-side ADC values. The published signature includes a high-side value between 0.506 and 0.601 volt and a zero low-side value.

Those are controller ADC criteria, not complete instructions for measuring accessible connector terminals. A heater that has been turned off after detection may be following the diagnostic strategy; its absent command is not by itself proof of an unrelated control failure.

## What to confirm

The test requires an active vehicle power mode and no specified controller-internal fault. It qualifies over 10 samples at 0.2 second each, or two seconds, with Type A, one-trip reporting. Recovery is listed for the next driving cycle.

Verification should distinguish the initial on-state warning from the off-state short classification and confirm the appropriate later-cycle result. The code does not identify which circuit segment is grounded or mandate replacement of the tank. Exact heater assignment, safe electrical access and repair decisions require the vehicle-specific procedure; this article covers only the documented 2025 GM monitor.

Source: [GM monitor, PDF page 195](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=195).
