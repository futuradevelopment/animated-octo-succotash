---
{"entryId": "generic-p0bce", "code": "P0BCE", "title": "P0BCE: ISG U-phase temperature-sensor low input", "description": "The documented Mazda P0BCE procedure covers iSG U-phase temperature-sensor low input.", "status": "draft", "sourceReview": "checked", "scope": "Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; INTEGRATED STARTER GENERATOR (ISG). Verify exact vehicle specification; this is a Mazda application example.", "sourceIds": ["mazda3-2019-id140202300300"], "sourceLocators": [{"sourceId": "mazda3-2019-id140202300300", "locator": "DTC P0BCD:00, P0BCE:00, P0BCF:00, P0DF4:00, P0DF5:00, P0DF6:00, P0DF7:00, P0DF8:00, P0DF9:00, P1BD0:00, P1BD1:00, P1BD2:00, P1BD3:00, P1BD4:00, P1BD5:00, P1BD6:00, P1BD7:00 OR P1BD8:00  [INTEGRATED STARTER GENERATOR (ISG)]; id140202300300; detection conditions and diagnostic procedure"}], "authoringBatch": "batch-37"}
---

# P0BCE: ISG U-phase temperature-sensor low input

P0BCE generally identifies generator inverter temperature sensor A circuit low. Mazda's M Hybrid ISG maps this code specifically to its internal U-phase FET temperature sensor.

## A sensor-limit fault is not a temperature diagnosis

The documented trigger is an input of 1.44 V or less for half a second. This electrical limit does not establish that the inverter is physically cold or that it has overheated. The same source separately identifies characteristic and high-input faults for that phase and corresponding codes for the other phases.

The component is internal to the ISG, and the factory cause list identifies an ISG malfunction. The diagnostic sequence nevertheless distinguishes present from historical records, rechecks after an ignition transition and assesses recurrence under the original operating conditions. Communication noise is noted as a possible influence on a displayed record.

## Effects of losing trustworthy temperature information

Hybrid supply is stopped, leaving vehicle loads on the 12-volt battery, while i-stop, regeneration and motor assistance are inhibited. Mazda warns that continued operation can deplete that battery and prevent further driving.

Professional confirmation should retain the U-phase identity and any companion temperature-sensor codes. The voltage criterion is not an instruction to probe the internal FET circuitry or substitute a resistor. Use the exact ISG service procedure and safe data collection to establish recurrence before a supported assembly-level repair decision.

## Documented application

Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; INTEGRATED STARTER GENERATOR (ISG). Verify exact vehicle specification; this is a Mazda application example. [Mazda factory diagnostic page, mirrored by CHARM](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id140202300300.html).
