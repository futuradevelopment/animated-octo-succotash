---
{"entryId": "generic-p0cbb", "code": "P0CBB", "title": "P0CBB: Sensor P temperature signal is unstable", "description": "P0CBB describes intermittent or erratic sensor P data in GM's short-window battery temperature stability test.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [944]}], "authoringBatch": "batch-36"}
---

# P0CBB: Sensor P temperature signal is unstable

P0CBB concerns hybrid/EV battery temperature sensor P circuit intermittent/erratic. In GM's 2018 HPC2/BSM table, the diagnostic evaluates accumulated changes in the signal, so it can fail without a permanently high or low temperature reading.

## Read the accumulated result correctly

The calculation integrates absolute changes over ten samples. GM lists a threshold above 10 for that quantity and four failed evaluations out of five at 100-millisecond intervals. The number is not presented as a standalone overtemperature limit. Reporting is Type B, two trips.

The controller needs system voltage above 10.2 V and no active battery-interface communication fault in the designated group. Without eligible communication, a lack of a new instability result cannot be treated as proof that P's signal is sound.

## What follows from the code

The source notes that an intermittent connection can create erratic readings. That supports investigating signal continuity through the applicable procedure, but it does not identify a guaranteed failed part. Preserve the time trace; a later normal value may simply show that the intermittent condition is absent at that moment.

Confirm sensor P's actual mapping rather than inferring a physical location from its letter. After repair, verify an enabled stability test with credible data and retain its outcome. Internal battery diagnosis requires qualified high-voltage service. This monitor description contains no safe probing method or pack-disassembly instructions.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 944](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=944).
