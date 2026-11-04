---
{"entryId": "generic-p20fd", "code": "P20FD", "title": "P20FD: Passat reductant backflow-pump circuit high", "description": "The CVCA monitor evaluates a low-side short-to-supply indication while the ECM power stage is on.", "status": "draft", "sourceReview": "checked", "scope": "Volkswagen Passat factory Generic Scan Tool manual, Edition 08.2018; CVCA ECM tables for 2015/2016 MY; coolant-pump codes P26F4–P26F7 use 2016 MY table.", "sourceIds": ["vw-passat-cvca-gst-2018"], "authoringBatch": "batch-44", "sourcePages": [{"sourceId": "vw-passat-cvca-gst-2018", "pages": [116, 232, 433, 434, 435]}]}
---

# P20FD: Passat reductant backflow-pump circuit high

For P20FD, Volkswagen's Passat CVCA tables describe a low-side reductant backflow-pump circuit shorted to battery supply. The output driver's diagnostic signal is evaluated with the ECM power stage on. The listed monitoring interval is 2,000 milliseconds and the MIL schedule is two driving cycles.

## High backflow-pump control signal

That on-state condition distinguishes this fault from the pump's off-state open-circuit and low-circuit checks. It is not a statement that reductant pressure is too high or that the tank is overfilled. The row supplies no explicit voltage or current threshold, so the diagnostic should remain tied to the driver's fault indication rather than an invented meter reading.

Volkswagen refers diagnosis to delivery unit GX19. Its internal return-flow pump V561 is part of an assembly that also incorporates the main delivery pump, heater, and sensing components. The shared procedure checks the supply and harness before reaching replacement; circuit high can still require a wiring repair rather than an internal pump decision.

Useful evidence includes the commanded power-stage state, other SCR circuit faults, and the location of a verified short or connection defect. The component's normal pressure specification is not the pass/fail value for this electrical monitor.

Testing should follow the actual vehicle wiring diagram and service precautions. Do not bridge pump or relay terminals or force the pump to operate against an unresolved electrical fault. The workshop should record the failed branch and confirm that P20FD does not recur after repair, including any readiness work required by the manual.

## Source and applicability

[Volkswagen factory manual, P20FD](https://vwts.ru/diag/engine-cvca-passat-b8-diagnostic-eng.pdf#page=116). Physical PDF pages 116, 232, 433, 434, 435. Volkswagen Passat factory Generic Scan Tool manual, Edition 08.2018; CVCA ECM tables for 2015/2016 MY; coolant-pump codes P26F4–P26F7 use 2016 MY table. This explains the documented monitor; it does not establish applicability to other vehicles.
