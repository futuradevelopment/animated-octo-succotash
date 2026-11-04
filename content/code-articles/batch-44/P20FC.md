---
{"entryId": "generic-p20fc", "code": "P20FC", "title": "P20FC: Passat reductant backflow-pump circuit low", "description": "Volkswagen checks a low-side short-to-ground diagnostic while the pump power stage is off.", "status": "draft", "sourceReview": "checked", "scope": "Volkswagen Passat factory Generic Scan Tool manual, Edition 08.2018; CVCA ECM tables for 2015/2016 MY; coolant-pump codes P26F4–P26F7 use 2016 MY table.", "sourceIds": ["vw-passat-cvca-gst-2018"], "authoringBatch": "batch-44", "sourcePages": [{"sourceId": "vw-passat-cvca-gst-2018", "pages": [116, 232, 433, 434, 435]}]}
---

# P20FC: Passat reductant backflow-pump circuit low

Volkswagen's Passat CVCA P20FC row describes a low-side short to ground in the reductant backflow-pump control circuit. The fault information comes from the output driver's diagnostic signal while the ECM power stage is off. Its monitoring period is 2,000 milliseconds, with a two-driving-cycle MIL schedule. These details appear in the 2015 and 2016 tables.

## Low backflow-pump control signal

Circuit low is an electrical classification here. It does not mean low reductant level, insufficient dosing pressure, or a slow pump. The source does not give a numeric low-voltage threshold, and a generic pump voltage specification should not be substituted for the driver's diagnostic criterion.

The related component procedure concerns delivery unit GX19, which contains return-flow pump V561 together with the main delivery pump and tank-related components. The manual regards those internal parts as a serviced assembly. The procedure nevertheless examines the supply and harness paths first, allowing an external connection or wiring fault to be separated from the assembly.

A qualified technician should document the power-stage state, related SCR electrical codes, and the actual circuit defect. The fact that the monitor runs with the driver off helps explain why a fault can be stored without a successful active pump test.

Do not ground control wires deliberately or bypass the relay to reproduce the code. Proper circuit isolation, the vehicle wiring diagram, and suitable test leads are necessary. Repair verification must show that the same electrical fault no longer returns and that required readiness checks have been completed; replacing the pump assembly without those findings is not supported by the code alone.

## Source and applicability

[Volkswagen factory manual, P20FC](https://vwts.ru/diag/engine-cvca-passat-b8-diagnostic-eng.pdf#page=116). Physical PDF pages 116, 232, 433, 434, 435. Volkswagen Passat factory Generic Scan Tool manual, Edition 08.2018; CVCA ECM tables for 2015/2016 MY; coolant-pump codes P26F4–P26F7 use 2016 MY table. This explains the documented monitor; it does not establish applicability to other vehicles.
