---
{"entryId": "generic-p2bf6", "code": "P2BF6", "title": "P2BF6: Exhaust shutter position signal electrically low", "description": "The documented Mazda P2BF6 procedure covers exhaust shutter position signal electrically low.", "status": "draft", "sourceReview": "checked", "scope": "Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-G). Verify exact vehicle specification; this is a Mazda application example.", "sourceIds": ["mazda3-2019-id0102t4168100"], "sourceLocators": [{"sourceId": "mazda3-2019-id0102t4168100", "locator": "DTC P2BF6:00 [PCM (SKYACTIV-G)]; id0102t4168100; detection conditions and diagnostic procedure"}], "authoringBatch": "batch-37"}
---

# P2BF6: Exhaust shutter position signal electrically low

P2BF6 identifies exhaust flow control valve position circuit low. Mazda calls the device the exhaust shutter valve and monitors the position sensor built into it.

## What the voltage means

The documented threshold is less than 0.107 V for five seconds with battery voltage at least 8 V. This electrical limit does not prove that the exhaust shutter is physically closed. A sensor without a valid supply, or a signal pulled toward ground, can report the same extreme regardless of the valve's actual position.

Mazda restricts engine torque as the fail-safe. Its possible causes include both valve and PCM connections, a grounded supply or signal, a short between signal and ground, and an open supply or signal circuit. The built-in sensor itself is considered after those paths.

## The useful diagnostic distinction

The workshop sequence separates a short to chassis ground from a short between sensor circuits. It also checks for an open, even though the code is labeled low. Consequently, continuity alone on one conductor is not a complete assessment of the sensor circuit.

The sensor's integrated location matters when a component fault is confirmed, but it does not justify replacing the shutter assembly before the wiring checks. Repair verification uses the specified key-on or running self-test and inspection for the same pending code. Exhaust components can be hot; use the exact service procedure for safe access and testing.

## Documented application

Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-G). Verify exact vehicle specification; this is a Mazda application example. [Mazda factory diagnostic page, mirrored by CHARM](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id0102t4168100.html).
