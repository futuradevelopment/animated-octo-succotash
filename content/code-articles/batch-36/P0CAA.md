---
{"entryId": "generic-p0caa", "code": "P0CAA", "title": "P0CAA: Sensor M's low signal can look excessively hot", "description": "GM's P0CAA monitor uses an NTC circuit whose low voltage converts to a high battery-temperature value.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [930]}], "authoringBatch": "batch-36"}
---

# P0CAA: Sensor M's low signal can look excessively hot

P0CAA means hybrid/EV battery temperature sensor M circuit low. In the 2018 GM design, a sensing-board pull-up and NTC thermistor create an inverse relationship: lower sensed voltage becomes a higher calculated temperature.

## The circuit-monitor endpoint

The row fails when the converted temperature exceeds 160 °C for eight of ten samples at 100-millisecond intervals. System voltage must exceed 10.2 V and the defined battery-interface communication faults must be absent. GM specifies Type B, two-trip reporting.

A short to ground can create the same low-voltage direction as a very hot sensor, according to the source. The code cannot decide between physical temperature and electrical behavior without additional evidence. Nor is 160 °C a recommended battery operating limit.

## What must remain separate

Do not translate “circuit low” into “battery too cold.” Record M's value, companion faults and the available thermal measurements. The applicable procedure must determine whether the extreme reading is credible and locate any circuit problem; the DTC does not identify a guaranteed replacement part.

After a correction, confirm plausible M data through an enabled endpoint test, along with the vehicle's required system checks. Clearing memory alone does not demonstrate that result. Establish M's actual location from the proper vehicle information. Physical access to internal battery temperature circuits is a qualified high-voltage service task.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 930](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=930).
