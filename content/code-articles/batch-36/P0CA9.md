---
{"entryId": "generic-p0ca9", "code": "P0CA9", "title": "P0CA9: Sensor M temperature differs from the battery comparison average", "description": "The GM P0CA9 performance check tests sensor M's agreement with other battery-temperature sensors.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [929]}], "authoringBatch": "batch-36"}
---

# P0CA9: Sensor M temperature differs from the battery comparison average

P0CA9 is hybrid/EV battery temperature sensor M range/performance. GM's 2018 HPC2/BSM monitor compares M with an average of other temperature sensors, rather than judging M only against an extreme hot or cold endpoint.

## Either direction can fail

The absolute temperature difference must exceed 25 °C for 50 of 67 samples, sampled every 25 milliseconds, to meet the documented criterion. The table assigns Type B, two-trip reporting.

Specified sensor circuit-low, circuit-high, intermittent/erratic and battery-interface communication faults inhibit this comparison. Accordingly, a stable-looking M value is not sufficient proof of a sound measurement, and the absence of a repeat code while other faults block the test is inconclusive.

## A paired record is more useful than one reading

Preserve M's value and the other temperature inputs at the same time. That establishes whether M is warmer or colder than the average and the size of the discrepancy. The code itself establishes disagreement; it does not establish which measurement is correct or diagnose the whole pack as overheated.

Use the vehicle-specific thermal and sensing procedure to resolve that disagreement. Verify both credible input data and completion of the enabled comparison after repair. The letter M does not identify a universal sensor position. Internal high-voltage battery access and circuit work require qualified service; this table does not provide a disassembly or probing procedure.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 929](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=929).
