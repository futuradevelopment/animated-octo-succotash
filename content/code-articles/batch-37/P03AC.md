---
{"entryId": "generic-p03ac", "code": "P03AC", "title": "P03AC: Cylinder 3 pressure-sensor high signal", "description": "The documented Mazda P03AC procedure covers cylinder 3 pressure-sensor high signal.", "status": "draft", "sourceReview": "checked", "scope": "Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-X). Verify exact vehicle specification; this is a Mazda application example.", "sourceIds": ["mazda3-2019-id0102u9361100"], "sourceLocators": [{"sourceId": "mazda3-2019-id0102u9361100", "locator": "DTC P03AC:00 [PCM (SKYACTIV-X)]; id0102u9361100; detection conditions and diagnostic procedure"}], "authoringBatch": "batch-37"}
---

# P03AC: Cylinder 3 pressure-sensor high signal

P03AC is the cylinder 3 pressure-sensor high-input code on the documented SKYACTIV-X engine. The controller recognizes a signal above 4.84 V that persists for five seconds.

## Why the electrical direction matters

Mazda's high-input procedure targets a signal short to power and an open sensor ground. These differ from the supply-open and grounding branches used for the low-input code. A scan-tool value at the top of the electrical range should therefore guide circuit diagnosis before it is interpreted as a physical pressure extreme.

The manual also checks P0398, P03A2 and P03B6. If another cylinder has the same high-input family, it changes the route toward PCM-connection inspection. That pattern helps distinguish an isolated number 3 concern from a wider connection-related problem.

## Assess the sensor only with its circuit context

For an isolated fault, Mazda examines the number 3 connector and sensor resistance, then checks the PCM connection and relevant signal and ground paths. A later function test remains necessary where the procedure calls for it. Sensor replacement is supported by those results, not by the DTC label alone.

The PCM inhibits EGR and SPCCI, stops combustion feedback and retards ignition timing. Post-repair confirmation includes the specified self-test and pending-code inspection. These limits are the source's electrical criteria and should not be treated as a universal cylinder-pressure calibration.

## Documented application

Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-X). Verify exact vehicle specification; this is a Mazda application example. [Mazda factory diagnostic page, mirrored by CHARM](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id0102u9361100.html).
