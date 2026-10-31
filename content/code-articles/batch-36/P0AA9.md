---
{"entryId": "generic-p0aa9", "code": "P0AA9", "title": "P0AA9: Isolation sensor voltage is below its permitted range", "description": "The GM P0AA9 example monitors a low isolation-sensor reading with the active bias switch commanded open.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [758]}], "authoringBatch": "batch-36"}
---

# P0AA9: Isolation sensor voltage is below its permitted range

For P0AA9, the 2018 GM hybrid table monitors the first battery voltage isolation sensor for an out-of-range low reading. The documented threshold is below 5 V with the active isolation bias switch commanded open.

## Sensor range is the specific finding

The row requires 320 failed samples out of 400, with each sample 12.5 milliseconds apart. Its listed five-second evaluation and Type B, two-trip classification describe how this implementation recognizes a sustained low reading rather than a single fluctuation.

An isolation sensor measures a high-voltage system quantity, but this DTC's wording remains a **sensor-circuit** finding. It does not give an insulation resistance, identify the location of leakage or prove which pack component needs replacement. Treating “low” as “low state of charge” would also misread the monitored quantity.

## Decisions supported by the table

First establish the bias-switch state and whether the low reading persisted during an eligible test. Then compare the associated isolation measurements and any circuit or performance faults. A low value seen during a different commanded test state is not automatically the same condition.

After an appropriate repair, the relevant confirmation is an in-range sensor result when the specified diagnostic runs, together with the vehicle's prescribed isolation verification. A historical code clear alone cannot provide that evidence. Physical measurement and access to the isolation circuit should be left to a technician trained and equipped for that vehicle's high-voltage system.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 758](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=758).
