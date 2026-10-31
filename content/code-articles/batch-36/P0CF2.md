---
{"entryId": "generic-p0cf2", "code": "P0CF2", "title": "P0CF2: Electronics coolant temperature changes erratically", "description": "GM's P0CF2 example sums successive coolant-temperature changes to identify an unstable electronics-cooling sensor signal.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [950]}], "authoringBatch": "batch-36"}
---

# P0CF2: Electronics coolant temperature changes erratically

P0CF2 identifies the hybrid/EV electronics coolant temperature sensor A circuit as intermittent or erratic. The 2018 GM 18OBDG02 monitor evaluates the signal's “string length”: the total absolute movement between successive readings.

## A variation threshold is not an operating temperature limit

The table compares four consecutive samples, spaced 250 milliseconds apart, and lists a string-length threshold above 95 °C. That value describes accumulated change, not a coolant temperature at which the code automatically sets. A signal can move up and down substantially without ending 95 degrees hotter.

Five failed evaluations out of seven are required in this implementation, with a stated seven-second evaluation and system voltage above 10.2 V. Reporting is Type B, two trips. Other GM documents can use different calibration values; do not combine their thresholds with this row.

## What changes the diagnostic approach

Save a temperature trace covering the event rather than relying on a single reading after the signal settles. A stable but inaccurate value is a different observation from the rapid variation monitored here. The code does not by itself establish failed coolant circulation or identify a particular sensor connection.

Use vehicle-specific information to identify the measured electronics-cooling circuit. Following a correction, confirm that the signal is credible and stable through the appropriate enabled test. Work around hybrid electronics and their cooling components requires the applicable service precautions, and this summary provides no high-voltage access procedure.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 950](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=950).
