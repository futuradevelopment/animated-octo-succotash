---
{"entryId": "generic-p20ea", "code": "P20EA", "title": "P20EA: Passat SCR relay fails its commanded-on transition", "description": "The 2016 CVCA monitor detects a closing delay of at least 0.3 second while the reductant relay should be on.", "status": "draft", "sourceReview": "checked", "scope": "Volkswagen Passat factory Generic Scan Tool manual, Edition 08.2018; CVCA ECM tables for 2015/2016 MY; coolant-pump codes P26F4–P26F7 use 2016 MY table.", "sourceIds": ["vw-passat-cvca-gst-2018"], "authoringBatch": "batch-44", "sourcePages": [{"sourceId": "vw-passat-cvca-gst-2018", "pages": [115, 231, 433, 434, 435]}]}
---

# P20EA: Passat SCR relay fails its commanded-on transition

P20EA is broadly described as reductant-control power relay de-energizing too early. In the Passat CVCA2016 model-year table, Volkswagen describes an SCR relay remaining open: the closing transition takes at least 0.3 second while the relay power state is on. The table separately lists 100 milliseconds of monitoring and a two-driving-cycle MIL schedule. Those values describe different parts of the monitor and should not be added together.

## Relay response when activation is requested

The 2015 table contains broader opening-and-closing delay wording and a zero-second monitoring entry. This article uses the clearer 2016 row for the transition explanation rather than blending the two model-year calibrations. Correct vehicle software and model-year applicability remain necessary.

The referenced system is reducing-agent delivery unit GX19 and its relay J963. Volkswagen's procedure checks power delivery and circuit integrity before the delivery-unit replacement branch. GX19 incorporates the reductant pump, return-flow pump, heater, temperature sensor, and reservoir sensor; the manual treats its internal components as a serviced assembly.

The diagnosis is a command-and-response problem in the SCR supply system, not direct proof of poor DEF quality or an empty tank. A workshop should document the relay command, actual transition behavior, supply findings, and related DTCs.

The complete procedure contains controlled electrical tests that require the correct wiring diagram and equipment. Owners should not bridge the relay to keep dosing active. Repair confirmation requires recurrence assessment and the appropriate readiness checks, with replacement based on the failed diagnostic branch rather than the presence of P20EA alone.

## Source and applicability

[Volkswagen factory manual, P20EA](https://vwts.ru/diag/engine-cvca-passat-b8-diagnostic-eng.pdf#page=115). Physical PDF pages 115, 231, 433, 434, 435. Volkswagen Passat factory Generic Scan Tool manual, Edition 08.2018; CVCA ECM tables for 2015/2016 MY; coolant-pump codes P26F4–P26F7 use 2016 MY table. This explains the documented monitor; it does not establish applicability to other vehicles.
