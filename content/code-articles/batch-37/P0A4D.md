---
{"entryId": "generic-p0a4d", "code": "P0A4D", "title": "P0A4D: Internal generator rotor-position sensor low input", "description": "The documented Mazda P0A4D procedure covers internal generator rotor-position sensor low input.", "status": "draft", "sourceReview": "checked", "scope": "Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; INTEGRATED STARTER GENERATOR (ISG). Verify exact vehicle specification; this is a Mazda application example.", "sourceIds": ["mazda3-2019-id140202300900"], "sourceLocators": [{"sourceId": "mazda3-2019-id140202300900", "locator": "DTC P0A4C:00, P0A4D:00 OR P0A4E:00 [INTEGRATED STARTER GENERATOR (ISG)]; id140202300900; detection conditions and diagnostic procedure"}], "authoringBatch": "batch-37"}
---

# P0A4D: Internal generator rotor-position sensor low input

P0A4D identifies generator position-sensor circuit low. Mazda's M Hybrid ISG page locates the sensor internally and gives a rotor-angle signal threshold of 0.5 V or less.

## Keep the internal sensor distinct from engine speed sensing

This is the ISG's rotor rotation-angle sensor, not the engine crankshaft sensor. The page groups P0A4D with P0A4C for a characteristic fault and P0A4E for high input, but each has a separate detection condition. A low-input record should not be turned into the other codes' converter or high-voltage diagnosis.

Mazda lists an ISG malfunction as the possible cause and uses a present-versus-past fault assessment. It rechecks after an ignition transition and considers repeatability against the original snapshot. The source also notes that communication noise can produce a displayed record, making persistence relevant before an assembly conclusion.

## Why the vehicle may lose several features

The response stops hybrid battery supply, leaving vehicle loads on the 12-volt battery, and inhibits i-stop, regeneration and motor assistance. Continued operation can deplete the conventional battery and stop the vehicle.

This internal sensor threshold is diagnostic information, not an instruction to probe inside the generator. Qualified hybrid service must confirm the originating ISG record and its recurrence under the proper procedure. Preserve rotor-related and communication evidence before clearing memory or selecting a replacement unit.

## Documented application

Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; INTEGRATED STARTER GENERATOR (ISG). Verify exact vehicle specification; this is a Mazda application example. [Mazda factory diagnostic page, mirrored by CHARM](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id140202300900.html).
