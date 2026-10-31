---
{"entryId": "generic-p0cb3", "code": "P0CB3", "title": "P0CB3: Sensor O temperature must agree with the comparison average", "description": "P0CB3's GM monitor checks sensor O's relative plausibility using the other battery-temperature inputs.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [937]}], "authoringBatch": "batch-36"}
---

# P0CB3: Sensor O temperature must agree with the comparison average

P0CB3 concerns hybrid/EV battery temperature sensor O range/performance. The 2018 GM controller compares O with an average formed from other battery-temperature sensors. The relevant evidence is a discrepancy, not one isolated temperature value.

## A symmetric comparison

The listed criterion is an absolute difference above 25 °C. Fifty failures out of 67 samples, at 25-millisecond intervals, satisfy the documented evaluation. Type B, two-trip reporting is specified.

Because the calculation is absolute, O can fail by reading either too warm or too cold relative to the average. The monitor does not identify the direction in its code alone. It also excludes the designated circuit-low, circuit-high, erratic and battery-interface communication faults, so supporting input validity affects whether the comparison can run.

## Avoid choosing the wrong measurement as the reference

Preserve O and the other temperatures together. The DTC reports lack of agreement; it does not prove O is wrong while all comparison inputs are correct. The vehicle's procedure must evaluate the thermal and electrical evidence before assigning a component cause.

Verification after repair needs credible inputs, no inhibiting faults and a completed performance test. No repeat code during a blocked test is insufficient. Identify O's actual location from vehicle documentation, and use qualified high-voltage service for internal pack access. The table gives no direct probing procedure or universal sensor replacement instruction.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 937](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=937).
