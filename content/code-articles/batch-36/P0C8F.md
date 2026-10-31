---
{"entryId": "generic-p0c8f", "code": "P0C8F", "title": "P0C8F: Sensor J circuit low can appear as extremely high temperature", "description": "The GM P0C8F monitor uses a thermistor input whose low voltage converts to a very high displayed battery temperature.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [918]}], "authoringBatch": "batch-36"}
---

# P0C8F: Sensor J circuit low can appear as extremely high temperature

P0C8F means hybrid/EV battery temperature sensor J circuit low. In the 2018 GM design, a negative-temperature-coefficient thermistor works with a pull-up resistor on the sensing board. Low signal voltage corresponds to a high converted temperature; a short to ground can create the same direction of response.

## Why “low” and “hot” can appear together

The monitor fails when converted temperature exceeds 160 °C for eight samples out of ten, with 100 milliseconds between samples. System voltage must exceed 10.2 V and the specified battery-interface communication faults must be absent. Reporting is Type B, two trips.

The 160 °C value is the documented circuit-monitor threshold, not a recommended operating temperature. The code alone cannot establish whether the displayed extreme represents actual thermal conditions or an electrical fault.

## The next distinction matters

Preserve channel J's raw/converted data where available and compare it with the other temperature evidence and warnings. Do not interpret the “low” suffix as a cold battery. Use the vehicle-specific procedure to distinguish sensor-circuit behavior from real heating without assuming either conclusion.

A useful repair confirmation includes a credible J reading and completion of the enabled circuit test. A cleared history code is insufficient. Physical access to pack temperature sensors is a qualified high-voltage service task; this article provides no internal probing or disassembly instructions.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 918](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=918).
