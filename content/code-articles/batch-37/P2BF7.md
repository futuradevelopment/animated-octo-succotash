---
{"entryId": "generic-p2bf7", "code": "P2BF7", "title": "P2BF7: Exhaust shutter position signal electrically high", "description": "The documented Mazda P2BF7 procedure covers exhaust shutter position signal electrically high.", "status": "draft", "sourceReview": "checked", "scope": "Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-G). Verify exact vehicle specification; this is a Mazda application example.", "sourceIds": ["mazda3-2019-id0102t4168200"], "sourceLocators": [{"sourceId": "mazda3-2019-id0102t4168200", "locator": "DTC P2BF7:00 [PCM (SKYACTIV-G)]; id0102t4168200; detection conditions and diagnostic procedure"}], "authoringBatch": "batch-37"}
---

# P2BF7: Exhaust shutter position signal electrically high

P2BF7 describes an exhaust flow control valve position circuit high condition. In Mazda's SKYACTIV-G procedure, the position sensor is built into the exhaust shutter valve.

## High input is not proof of an open valve

The PCM detects a signal above 4.94 V for five seconds while battery voltage is at least 8 V. This is an electrical plausibility limit. It should not be interpreted as a confirmed physical valve angle or as evidence of excessive exhaust pressure.

The high-input cause list includes a supply circuit shorted to power, a short between the sensor supply and signal, and an open sensor ground. That ground-open branch is especially important: a high reading can result from losing the reference path rather than adding an external voltage to the signal conductor.

## Follow the high-input branch

Mazda checks the valve and PCM connections, the supply path, cross-circuit faults and ground continuity before evaluating the internal position sensor. The engine-torque restriction listed as fail-safe can explain a change in performance, but it does not identify which of these electrical paths failed.

Confirmation includes the appropriate key-on or running self-test and a pending-code inspection. If an internal sensor fault is established, its integration into the shutter affects the service decision. The DTC alone is not sufficient evidence for an assembly replacement, and exhaust access requires the factory procedure and hot-component precautions.

## Documented application

Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-G). Verify exact vehicle specification; this is a Mazda application example. [Mazda factory diagnostic page, mirrored by CHARM](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id0102t4168200.html).
