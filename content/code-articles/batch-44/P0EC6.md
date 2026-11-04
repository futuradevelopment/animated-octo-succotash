---
{"entryId": "generic-p0ec6", "code": "P0EC6", "title": "P0EC6: MX-30 A/C relay remains on after an off command", "description": "Mazda's A/C relay monitor compares commanded-off state with continued operation.", "status": "draft", "sourceReview": "checked", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0EC6:00 [PCM (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300202035000"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300202035000", "locator": "id300202035000; DTC P0EC6:00 [PCM (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P0EC6: MX-30 A/C relay remains on after an off command

P0EC6 is generically described as an air-conditioning power-supply relay control-circuit fault. For the cited MX-30 electric system, Mazda specifies the opposite-state mismatch: the PCM commands the A/C relay off but detects that it continues operating. The chart gives no numeric electrical threshold or detection timer.

## Relay feedback after the off command

A relay that remains active can have more than one explanation. Mazda lists the A/C relay itself, the PCM connector or terminals, open or grounded control wiring, a short to supply, and the PCM. The sequence checks the relay and connector before moving through those circuit categories. The code therefore does not prove welded contacts, and it does not directly diagnose the compressor's internal motor or temperature sensor.

Save the snapshot before clearing the record. The useful electrical question for the technician is whether actual relay behavior follows the commanded state, and if not, which part of the relay and control path prevents it. The complete wiring information and relay inspection section are needed to answer that safely; this DTC page alone does not supply terminal assignments.

After a defect is repaired, Mazda reassesses the same pending code under the relevant recorded conditions. A recurrence leads through CAN communication diagnosis and repetition of the sequence. Only a continuing fault with communication normal reaches the PCM replacement branch. A final scan checks other DTCs.

Do not bypass the relay or assume that an off command guarantees a de-energized circuit. This monitor exists because command and operation may disagree. Work near the EV power and compressor system requires the appropriate professional safety procedure.

## Source and applicability

[Mazda factory procedure, P0EC6](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300202035000.html). id300202035000; DTC P0EC6:00 [PCM (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0EC6:00 [PCM (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
