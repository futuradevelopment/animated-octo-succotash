---
{"entryId": "generic-p0cb5", "code": "P0CB5", "title": "P0CB5: Sensor O circuit high can mimic extreme cold", "description": "The GM P0CB5 monitor detects a high-voltage sensor O input converted into a very low temperature.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [939]}], "authoringBatch": "batch-36"}
---

# P0CB5: Sensor O circuit high can mimic extreme cold

P0CB5 means hybrid/EV battery temperature sensor O circuit high. GM's 2018 NTC sensor circuit uses a pull-up resistor on the sensing board. A cold thermistor or an open sensing path increases voltage and lowers the calculated temperature.

## Read the fault and temperature together

The failure criterion is a converted temperature below −69 °C. Eight failed samples among ten at 100-millisecond intervals meet the requirement. System voltage must exceed 10.2 V, with the specified battery-interface communication faults absent. The table lists Type B, two-trip reporting.

This high-circuit fault therefore differs from an overheating conclusion. An extreme cold display can be electrical evidence, but the DTC alone does not establish the actual thermal condition or prove that the sensor itself has failed.

## The appropriate distinction

Compare O's value with the available thermal context and preserve related fault status. GM's mention of an open circuit describes one mechanism; the vehicle-specific circuit procedure is still needed to locate and identify the defect. Do not replace a temperature-related component solely because the display is implausible.

After repair, verify credible O data while the circuit monitor executes under eligible conditions. A momentary normal reading does not settle an intermittent concern. Map sensor O using the actual vehicle documentation. Internal pack access requires qualified high-voltage personnel; this explanation provides no direct testing or disassembly method.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 939](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=939).
