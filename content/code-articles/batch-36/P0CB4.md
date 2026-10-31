---
{"entryId": "generic-p0cb4", "code": "P0CB4", "title": "P0CB4: Sensor O circuit low is evaluated at the hot endpoint", "description": "GM's P0CB4 monitor checks low thermistor voltage by evaluating sensor O's converted temperature.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [938]}], "authoringBatch": "batch-36"}
---

# P0CB4: Sensor O circuit low is evaluated at the hot endpoint

P0CB4 identifies hybrid/EV battery temperature sensor O circuit low. In the 2018 GM implementation, the NTC thermistor's signal is pulled up on the sensing board. Falling voltage produces rising calculated temperature, and a short to ground can imitate that response.

## The endpoint is an electrical criterion

The documented failure threshold is above 160 °C converted temperature, with eight failures among ten samples at 100-millisecond intervals. The test needs system voltage above 10.2 V and no active fault from the designated battery-interface communication group. GM lists Type B, two trips.

The threshold does not prove actual pack temperature or define acceptable operation. Interpreting the “low” suffix as a cold battery would reverse the meaning of the sensor circuit.

## How to retain useful evidence

Keep O's temperature reading and related raw signal data where available alongside the other thermal measurements and warnings. A technician must use the applicable procedure to distinguish credible heating from the circuit mechanism described by GM. The DTC does not identify a particular defective wire, sensor or cooling part.

A successful recheck should show credible O data during a completed eligible endpoint test after repair. Clearing the code without running that test cannot confirm the result. Sensor O's physical position is vehicle-specific. Work within the traction-battery sensing system requires qualified high-voltage service and the prescribed safety precautions.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 938](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=938).
