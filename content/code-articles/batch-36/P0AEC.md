---
{"entryId": "generic-p0aec", "code": "P0AEC", "title": "P0AEC: Temperature sensor D's changes exceed the stability test", "description": "GM's P0AEC monitor watches battery temperature sensor D for excessive signal variation over a short evaluation window.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [785]}], "authoringBatch": "batch-36"}
---

# P0AEC: Temperature sensor D's changes exceed the stability test

P0AEC concerns the hybrid/EV battery temperature sensor D circuit intermittently behaving erratically. In the 2018 GM monitor, a signal can fail because of its pattern of changes rather than because its final value is outside a temperature range.

## A reversal still contributes to the fault

The test integrates absolute changes in the signal within ten samples. Because magnitudes are accumulated, a value that jumps and returns can still produce a failing result. The documented integrated threshold is above 10; four of five evaluations must fail, with 100 milliseconds per sample.

GM permits the test only above 10.2 V system voltage and without the specified battery-interface communication faults. Its reporting classification is Type B, two trips. These conditions belong to this implementation and do not establish a universal sensor resistance specification.

## Interpreting an intermittent complaint

Save sensor D's time trace when possible. The value displayed after a warning disappears may omit the movement that triggered the code. The source names intermittent connection behavior as a possibility, but P0AEC alone cannot distinguish the sensor, sensing path or a particular connection.

Use the vehicle-specific mapping to identify channel D and its diagnostic procedure. Check that verification actually includes an eligible stability test, especially when related communication faults were also repaired. Physical inspection inside a traction battery requires qualified personnel; this table is a monitor description, not a pack-disassembly guide.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 785](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=785).
