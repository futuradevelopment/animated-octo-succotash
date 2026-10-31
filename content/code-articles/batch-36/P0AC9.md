---
{"entryId": "generic-p0ac9", "code": "P0AC9", "title": "P0AC9: Sensor B's intermittent temperature signal", "description": "P0AC9 concerns repeated changes in battery temperature sensor B and can remain relevant when a current snapshot looks normal.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [768]}], "authoringBatch": "batch-36"}
---

# P0AC9: Sensor B's intermittent temperature signal

P0AC9 is the hybrid/EV battery temperature sensor B intermittent/erratic code. In GM's 2018 table, the diagnostic examines movement in the sensor signal over time, not whether the battery is simply hot or cold.

## Why an average can conceal the problem

The controller integrates the absolute signal changes across ten samples. A rising value followed by an equal fall still adds movement; it does not disappear from this calculation. The documented threshold is above 10 for that integrated quantity. Four failed evaluations out of five, sampled every 100 milliseconds, meet the reporting requirement.

The test requires system voltage above 10.2 V and excludes the specified battery-interface loss-of-communication faults. Those conditions help separate usable sensor data from a missing data source. The table uses Type B, two-trip reporting.

## What to retain for diagnosis

Keep a trace for channel B and the communication context around the event. A normal average or a single plausible temperature is weaker evidence than the sequence the controller assessed. An intermittent connection is a source-supported possibility, but the code cannot identify which connection or component is defective.

Use vehicle-specific information to map sensor B before any physical work. After repair, confirm that its signal remains stable during an eligible diagnostic evaluation. This monitor does not authorize opening the high-voltage battery or testing internal circuits without trained personnel and the required safety process.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 768](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=768).
