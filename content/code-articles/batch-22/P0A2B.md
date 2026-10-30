---
{"entryId": "generic-p0a2b", "code": "P0A2B", "title": "P0A2B: Motor A temperature is checked against the inverter after a long soak", "description": "Understand the GM P0A2B motor-temperature plausibility test and why out-of-range temperature faults inhibit it.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [286, 287]}], "authoringBatch": "batch-22"}
---

# P0A2B: Motor A temperature is checked against the inverter after a long soak

P0A2B compares motor A temperature with the average power-inverter-module temperature. This is an in-range rationality check: the sensor may report an electrically valid value while its relationship to the inverter temperatures is implausible.

## The soak is essential context

The documented comparison requires ignition-off time of at least 360 minutes. Both the motor-temperature value and inverter average must be at least −40°C. A difference greater than 28°C is the listed failure quantity, after a startup delay and sampling interval.

The continuation on the next physical page excludes the named motor and inverter out-of-range temperature faults. Those exclusions mean that an invalid reference temperature should not be treated as trustworthy evidence against motor A's sensor.

## Capture the startup temperatures together

A useful record includes the off-time history, motor A temperature and the inverter average at startup. Comparing a cold motor reading with an inverter value taken later under load does not reproduce the documented thermal relationship.

The table does not determine which temperature sensor is wrong or provide a sensor resistance curve. It also does not establish actual motor overheating; P0A2F handles a separate thermal condition. Applicability and any circuit tests must come from the matching motor-controller service information. Access to motor and inverter electronics requires professional high-voltage isolation and verification, not live probing based on the monitor thresholds.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 286](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=286). [GM PDF, page 287](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=287).
