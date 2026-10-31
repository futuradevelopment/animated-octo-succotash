---
{"entryId": "generic-p0cab", "code": "P0CAB", "title": "P0CAB: Sensor M circuit high creates a cold endpoint reading", "description": "The GM P0CAB monitor detects sensor M at its high-voltage, very-low-temperature end of the circuit range.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [931]}], "authoringBatch": "batch-36"}
---

# P0CAB: Sensor M circuit high creates a cold endpoint reading

P0CAB concerns hybrid/EV battery temperature sensor M circuit high. GM's 2018 table uses an NTC thermistor with a sensing-board pull-up resistor. An open circuit can raise sensed voltage and drive the calculated temperature toward an extreme cold value.

## The displayed temperature and fault label are compatible

The documented failure threshold is below −69 °C. Eight failed samples out of ten, spaced 100 milliseconds apart, satisfy the evaluation. The monitor requires system voltage above 10.2 V and no active battery-interface communication fault from the specified group. Reporting is Type B, two trips.

Thus, “high” describes the circuit response, not a high battery temperature. A code reader's short label can hide that distinction. The threshold is an endpoint criterion for this monitor, not a universal thermal specification.

## Evidence before assigning a cause

Compare M's reported temperature with the other available thermal evidence and retain fault timing. GM's open-circuit explanation is a possible mechanism; it does not locate a fault or prove the sensor itself needs replacement. Use the actual vehicle's circuit diagnostic to separate those possibilities.

Verification should show credible M data while the relevant monitor executes. A reset without an eligible test adds little evidence. Sensor M must be mapped using vehicle-specific documentation before physical work, and internal pack sensing circuits require qualified high-voltage service rather than improvised direct testing.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 931](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=931).
