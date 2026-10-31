---
{"entryId": "generic-p0cb9", "code": "P0CB9", "title": "P0CB9: Sensor P's low circuit voltage becomes an extreme hot reading", "description": "GM's P0CB9 monitor evaluates the hot endpoint created by a low-voltage NTC sensor P signal.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [942]}], "authoringBatch": "batch-36"}
---

# P0CB9: Sensor P's low circuit voltage becomes an extreme hot reading

P0CB9 concerns hybrid/EV battery temperature sensor P circuit low. The 2018 GM table describes an NTC thermistor with a pull-up resistor. High temperature lowers the sensed voltage, while a short to ground can create the same electrical direction.

## An extreme display needs interpretation

The failure threshold is converted temperature above 160 °C. Eight failures out of ten samples at 100-millisecond intervals meet the monitor's criterion. It requires system voltage above 10.2 V and absence of the designated battery-interface communication faults. Reporting is Type B, two trips.

That endpoint belongs to a circuit check. It is not a safe operating limit and does not, by itself, prove that the battery reached the displayed temperature. Conversely, an electrical-code label does not justify ignoring independent evidence of overheating.

## Preserve both electrical and thermal context

Record P's signal or converted value, the other temperature measurements and associated warnings. The vehicle-specific diagnostic must determine whether the extreme is credible and identify any sensing-path fault. P0CB9 alone cannot select a replacement sensor or cooling component.

After repair, confirm credible P data and completion of the eligible endpoint monitor. A cleared code alone is not evidence of a sound input. Establish P's actual mapping from the correct vehicle information before physical inspection. Internal battery electrical work requires qualified high-voltage service and the manufacturer's safety procedure.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 942](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=942).
