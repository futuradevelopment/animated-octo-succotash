---
{"entryId": "generic-p03ab", "code": "P03AB", "title": "P03AB: Cylinder 3 pressure-sensor signal remains too low", "description": "The documented Mazda P03AB procedure covers cylinder 3 pressure-sensor signal remains too low.", "status": "draft", "sourceReview": "checked", "scope": "Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-X). Verify exact vehicle specification; this is a Mazda application example.", "sourceIds": ["mazda3-2019-id0102u9361000"], "sourceLocators": [{"sourceId": "mazda3-2019-id0102u9361000", "locator": "DTC P03AB:00 [PCM (SKYACTIV-X)]; id0102u9361000; detection conditions and diagnostic procedure"}], "authoringBatch": "batch-37"}
---

# P03AB: Cylinder 3 pressure-sensor signal remains too low

P03AB describes low input from cylinder pressure sensor number 3. Mazda's SKYACTIV-X threshold is 0.29 V or less for a five-second period.

## The circuit can fail in several ways

A supply or signal wire grounded externally, a short between signal and sensor ground, or an open supply or signal path can all produce this electrical condition. Connector trouble and the sensor itself are also listed. The code does not establish that cylinder 3 has low mechanical compression.

Mazda considers the broader sensor pattern first. Companion low-input codes P0397, P03A1 or P03B5 redirect the flow toward PCM-connection inspection. If number 3 is the isolated channel, the procedure includes its connector and sensor-resistance checks before continuing through the other circuit branches.

## What successful testing must establish

The circuit needs a valid supply and signal path as well as freedom from unwanted grounding. Mazda also calls for a sensor function inspection; electrical continuity alone cannot prove that the pressure signal works correctly.

EGR and SPCCI are inhibited, combustion feedback is stopped and ignition is retarded when the fault is detected. These control changes are consequences of losing dependable pressure information. Verification uses the factory key-on or running self-test and checks for a recurring pending DTC. Retain the number 3 assignment and all companion codes so an intermittent wider connection problem is not mistaken for a single failed sensor.

## Documented application

Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-X). Verify exact vehicle specification; this is a Mazda application example. [Mazda factory diagnostic page, mirrored by CHARM](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id0102u9361000.html).
