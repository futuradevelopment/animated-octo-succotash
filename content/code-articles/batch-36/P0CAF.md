---
{"entryId": "generic-p0caf", "code": "P0CAF", "title": "P0CAF: Sensor N circuit low corresponds to a hot conversion", "description": "The GM P0CAF endpoint monitor detects low sensor N voltage through an extremely high calculated temperature.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [934]}], "authoringBatch": "batch-36"}
---

# P0CAF: Sensor N circuit low corresponds to a hot conversion

P0CAF names hybrid/EV battery temperature sensor N circuit low. The documented 2018 GM sensing circuit combines an NTC thermistor and a pull-up resistor. A high temperature lowers the sensed voltage, and a short to ground can produce a similar electrical response.

## Do not equate the code with measured pack heat

The monitor's listed threshold is calculated temperature above 160 °C. Eight failures among ten samples at 100-millisecond intervals satisfy the requirement. It runs with system voltage above 10.2 V and without the specified battery-interface communication faults. Reporting is Type B, two trips.

The threshold is part of a circuit diagnostic, not proof that the battery actually reached that temperature. It should not be treated as a permissible operating limit or a reason to dismiss other thermal warnings.

## Establish whether the input is credible

Preserve N's converted value and available signal information with the other thermal readings and fault statuses. The vehicle-specific procedure must distinguish actual heating from the low-voltage circuit mechanism. P0CAF alone cannot identify a failed sensor, wire or cooling component.

After a correction, confirm plausible N data while the endpoint monitor completes under eligible conditions. A cleared historical fault does not establish a passing test. Locate sensor N using the actual vehicle documentation. Internal battery access and electrical testing require trained high-voltage personnel and the manufacturer's safety process.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 934](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=934).
