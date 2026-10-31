---
{"entryId": "generic-p0aa7", "code": "P0AA7", "title": "P0AA7: The battery isolation measurement switch is being checked", "description": "P0AA7 in the GM hybrid table checks whether switching a known resistance changes the isolation-sensor readings as expected.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [756]}], "authoringBatch": "batch-36"}
---

# P0AA7: The battery isolation measurement switch is being checked

P0AA7 is a hybrid/EV battery voltage isolation sensor circuit code. The 2018 GM HPC2/BSM implementation uses an active isolation bias switch to add a known resistance to the measurement circuit. It compares both isolation-sensor readings with that switch commanded on and off.

## A self-check of the measuring circuit

The controller combines the squared changes of the two readings. A result below 5 volts squared fails the documented response criterion. This is a test of the switch and sensing arrangement's response, not a direct statement that the entire traction battery has a particular insulation resistance.

The test requires all contactors to have been open for eight seconds and Run/Crank to be false. It also excludes specified isolation-sensor faults, including P0AA8, P0AA9 and P0AAA. Those conditions matter: an operating-state mismatch or a blocked test cannot be treated as a successful isolation check.

## What changes the next decision

Check whether P0AA7 is the primary current fault or accompanies a sensor-range fault that affects the measurement. Then determine whether the intended shutdown-state test actually executed. The source's Type B, two-trip classification is a reporting rule, not permission to ignore a battery-system warning.

Any physical isolation testing belongs to a qualified high-voltage technician using the vehicle procedure. Do not infer an accessible test point, apply external resistance or manipulate the bias switch from this explanatory table. It does not provide those service instructions.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 756](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=756).
