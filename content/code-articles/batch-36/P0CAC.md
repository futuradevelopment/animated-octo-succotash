---
{"entryId": "generic-p0cac", "code": "P0CAC", "title": "P0CAC: Sensor M temperature data changes erratically", "description": "P0CAC in the GM hybrid table is a temporal stability check of battery temperature sensor M.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [932]}], "authoringBatch": "batch-36"}
---

# P0CAC: Sensor M temperature data changes erratically

P0CAC means hybrid/EV battery temperature sensor M circuit intermittent/erratic. Its 2018 GM monitor judges the changing signal over time. It does not directly determine whether the battery's actual thermal condition is above a safe operating limit.

## What triggers the diagnostic

GM accumulates absolute changes in the signal over ten samples and compares the integrated value with a threshold above 10. Four failures out of five evaluations, sampled every 100 milliseconds, meet the listed failure requirement. Reporting is Type B, two trips.

The source also requires system voltage above 10.2 V and absence of the specified battery-interface communication faults. Those prerequisites distinguish an eligible stability assessment from a period when the controller cannot rely on the data source.

## Interpreting an unstable measurement

An intermittent connection can produce this behavior, according to GM. A trace showing jumps is relevant evidence, but it does not reveal which connection is responsible. Conversely, a steady reading obtained later does not eliminate the intermittent problem that was recorded earlier.

Preserve M's time history and any associated fault status before clearing. Use the actual vehicle documentation to identify channel M and the appropriate diagnostic route. Following repair, confirm credible stable input during a completed eligible test. Internal traction-battery sensing components are a qualified high-voltage service task; the table supplies no universal connector location, probing limits or component replacement rule.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 932](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=932).
