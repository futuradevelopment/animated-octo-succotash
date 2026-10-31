---
{"entryId": "generic-p2bf5", "code": "P2BF5", "title": "P2BF5: Warm exhaust shutter does not track its commanded opening", "description": "The documented Mazda P2BF5 procedure covers warm exhaust shutter does not track its commanded opening.", "status": "draft", "sourceReview": "checked", "scope": "Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-X). Verify exact vehicle specification; this is a Mazda application example.", "sourceIds": ["mazda3-2019-id0102u9203600"], "sourceLocators": [{"sourceId": "mazda3-2019-id0102u9203600", "locator": "DTC P2BF5:00 [PCM (SKYACTIV-X)]; id0102u9203600; detection conditions and diagnostic procedure"}], "authoringBatch": "batch-37"}
---

# P2BF5: Warm exhaust shutter does not track its commanded opening

P2BF5 concerns exhaust shutter valve control range/performance. Mazda's SKYACTIV-X PCM compares the measured valve angle with its calculated target and detects a sustained excessive difference in either direction.

## Warm-up and valid feedback are prerequisites

The source requires battery voltage above 8 V, a sufficiently warm exhaust shutter and absence of the specified position-sensor and actuator circuit faults. It does not publish the allowable angle difference or time. A cold observation or an invalid position signal should not be used as if it were a completed performance test.

Mazda limits intake air and stops EGR control after detection. The possible faults span the valve mechanism, its position sensor, their connections and both actuator-control conductors. An actuator unable to move and a sensor reporting the wrong movement can look similar to the PCM.

## Separate control from measurement

The procedure watches EX_SHUT_VLV_ACT for connection-related changes and checks power, signal, ground and the positive/negative control paths. It then inspects the valve and position sensor individually. This order supports a component decision based on evidence rather than the range/performance label alone.

Repeatability includes at least ten minutes of idling followed by ignition off. Professional verification must use that applicable warmed-system procedure and check for recurrence. Exhaust access and powered movement require appropriate precautions; a clear code immediately after erasure is not evidence that the warm tracking fault is resolved.

## Documented application

Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-X). Verify exact vehicle specification; this is a Mazda application example. [Mazda factory diagnostic page, mirrored by CHARM](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id0102u9203600.html).
