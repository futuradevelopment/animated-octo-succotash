---
{"entryId": "generic-p20fa", "code": "P20FA", "title": "P20FA: Passat reductant return-pump open-circuit monitor", "description": "The CVCA monitor checks output-driver diagnostics with the power stage off for a two-second monitoring period.", "status": "draft", "sourceReview": "checked", "scope": "Volkswagen Passat factory Generic Scan Tool manual, Edition 08.2018; CVCA ECM tables for 2015/2016 MY; coolant-pump codes P26F4–P26F7 use 2016 MY table.", "sourceIds": ["vw-passat-cvca-gst-2018"], "authoringBatch": "batch-44", "sourcePages": [{"sourceId": "vw-passat-cvca-gst-2018", "pages": [116, 231, 433, 434, 435]}]}
---

# P20FA: Passat reductant return-pump open-circuit monitor

P20FA is identified in the Passat CVCA manual as an open-circuit fault in the reductant backflow pump, corresponding to generic reductant pump B control circuit/open. The monitor uses the output driver's diagnostic signal with the ECM power stage off. Volkswagen lists a 2,000-millisecond monitoring period and a two-driving-cycle MIL schedule in both model-year tables.

## The return-pump driver's open-circuit evidence

The off-state check matters because an open-load diagnosis does not require observing the pump actively emptying a line. The source does not publish a test voltage or current for this row, so the timing information should not be supplemented with an invented electrical threshold.

The referenced delivery unit GX19 contains reducing-agent return-flow pump V561 as well as the main pump, heater, and tank sensing components. Volkswagen states that its internal components are serviced as a unit. However, the shared procedure checks supply and wiring before the assembly branch, so an open-circuit DTC is not proof that the internal pump winding is open.

Useful evidence includes connector condition, the verified continuity or supply defect, related SCR faults, and whether the code returns after repair. The normal delivery pressure described elsewhere in the component section is not the failure threshold for P20FA; this row is electrical.

Diagnosis should use the actual vehicle wiring diagram and approved test equipment. Do not bridge relay or pump circuits to force reductant movement. The workshop should confirm the repair through recurrence and readiness checks, and identify why the component or harness was judged defective rather than relying only on the code description.

## Source and applicability

[Volkswagen factory manual, P20FA](https://vwts.ru/diag/engine-cvca-passat-b8-diagnostic-eng.pdf#page=116). Physical PDF pages 116, 231, 433, 434, 435. Volkswagen Passat factory Generic Scan Tool manual, Edition 08.2018; CVCA ECM tables for 2015/2016 MY; coolant-pump codes P26F4–P26F7 use 2016 MY table. This explains the documented monitor; it does not establish applicability to other vehicles.
