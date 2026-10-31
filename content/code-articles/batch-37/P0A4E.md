---
{"entryId": "generic-p0a4e", "code": "P0A4E", "title": "P0A4E: Internal generator rotor-position sensor high input", "description": "The documented Mazda P0A4E procedure covers internal generator rotor-position sensor high input.", "status": "draft", "sourceReview": "checked", "scope": "Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; INTEGRATED STARTER GENERATOR (ISG). Verify exact vehicle specification; this is a Mazda application example.", "sourceIds": ["mazda3-2019-id140202300900"], "sourceLocators": [{"sourceId": "mazda3-2019-id140202300900", "locator": "DTC P0A4C:00, P0A4D:00 OR P0A4E:00 [INTEGRATED STARTER GENERATOR (ISG)]; id140202300900; detection conditions and diagnostic procedure"}], "authoringBatch": "batch-37"}
---

# P0A4E: Internal generator rotor-position sensor high input

P0A4E is the high-input code for the generator position-sensor circuit. Mazda's M Hybrid source specifies an internal ISG rotor rotation-angle signal of 4.5 V or more.

## An internal electrical limit, not a speed limit

The condition concerns the sensor signal voltage. It does not mean the generator is rotating too fast, and it does not identify an engine crankshaft-position sensor. Mazda distinguishes this high-input fault from the paired low-input and characteristic faults on the same page.

The stated possible cause is an ISG malfunction. The procedure first establishes whether the record is current or historical, rechecks after an ignition transition and uses the snapshot for a controlled repeatability assessment. Communication noise is identified as a possible reason for a displayed record, so a retained code and a repeatedly present fault are not equivalent evidence.

## Protective effects and repair boundaries

Hybrid supply is stopped and electrical loads rely on the 12-volt battery. I-stop, regeneration and motor assistance are inhibited, and continued operation can eventually deplete the conventional battery until the vehicle cannot be driven.

Professional diagnosis should retain the full originating ISG code and related records, then follow the appropriate generator and hybrid isolation procedure. The voltage threshold does not authorize internal probing or bypassing the sensor. Confirmation requires the prescribed recurrence check after a supported repair, rather than assuming restored features prove that the original electrical event is explained.

## Documented application

Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; INTEGRATED STARTER GENERATOR (ISG). Verify exact vehicle specification; this is a Mazda application example. [Mazda factory diagnostic page, mirrored by CHARM](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id140202300900.html).
