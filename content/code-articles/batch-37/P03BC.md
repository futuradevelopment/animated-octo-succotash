---
{"entryId": "generic-p03bc", "code": "P03BC", "title": "P03BC: Cylinder 4 abnormal-combustion information and sensor reliability", "description": "The documented Mazda P03BC procedure covers cylinder 4 abnormal-combustion information and sensor reliability.", "status": "draft", "sourceReview": "needs-review", "scope": "Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-X). Verify exact vehicle specification; this is a Mazda application example.", "sourceIds": ["mazda3-2019-id0102u9202800"], "sourceLocators": [{"sourceId": "mazda3-2019-id0102u9202800", "locator": "DTC P039E:00, P03A8:00, P03B2:00 OR P03BC:00 [PCM (SKYACTIV-X)]; id0102u9202800; detection conditions and diagnostic procedure"}], "authoringBatch": "batch-37"}
---

# P03BC: Cylinder 4 abnormal-combustion information and sensor reliability

P03BC is Mazda's SKYACTIV-X cylinder 4 abnormal-combustion code. It indicates that the pressure-based combustion information fails a reliability check, not that one specific cylinder component has already been diagnosed.

## Read the monitor conditions

The source describes a persistent unreliable combustion value or abnormal cylinder-pressure signal. It requires operation in the appropriate control region, with no misfire or fuel cut and with specified pressure-sensor function and circuit faults absent. A normal-looking instantaneous reading after the event does not necessarily reproduce those conditions.

Possible causes include wiring and connector faults, a pressure sensor that is malfunctioning or poorly insulated, incorrect injection timing and injector trouble. The manual also considers insufficient compression and coolant leakage into the combustion chamber. The same code can therefore require either signal diagnosis or investigation of a real combustion disturbance.

## What a supported conclusion needs

The factory flow uses cylinder-pressure data during connector assessment, then checks the sensor circuits and sensor before the injection and mechanical branches. For cylinder 4, retain the actual supporting observation rather than replacing a part because the code mentions pressure.

EGR and SPCCI are inhibited, combustion feedback stops and ignition timing is retarded. Professional verification follows the specified running sequence and recurrence inspection after repair. The source has typographical defects in its related-misfire list; this explanation does not silently turn those strings into authoritative DTC references.

## Documented application

Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-X). Verify exact vehicle specification; this is a Mazda application example. [Mazda factory diagnostic page, mirrored by CHARM](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id0102u9202800.html).
