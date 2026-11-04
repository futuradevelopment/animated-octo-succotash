---
{"entryId": "generic-p20eb", "code": "P20EB", "title": "P20EB: Passat SCR relay remains closed after switch-off", "description": "Volkswagen's 2016 monitor assesses an opening delay while the reductant relay power state is off.", "status": "draft", "sourceReview": "checked", "scope": "Volkswagen Passat factory Generic Scan Tool manual, Edition 08.2018; CVCA ECM tables for 2015/2016 MY; coolant-pump codes P26F4–P26F7 use 2016 MY table.", "sourceIds": ["vw-passat-cvca-gst-2018"], "authoringBatch": "batch-44", "sourcePages": [{"sourceId": "vw-passat-cvca-gst-2018", "pages": [115, 231, 433, 434, 435]}]}
---

# P20EB: Passat SCR relay remains closed after switch-off

The Passat CVCA2016 table gives P20EB a specific relay-transition meaning. The SCR relay is described as staying closed when its power state is off, with an opening delay of at least 0.3 second. A separate monitoring-time entry is 100 milliseconds, and MIL illumination is listed after two driving cycles. The generic too-late de-energizing title should be interpreted in that command-state context.

## Relay response after deactivation

The manual's 2015 row includes both opening and closing delays and a zero-second monitoring entry. Those older entries are not interchangeable with the 2016 row. The technician must use the table and current service information appropriate to the actual vehicle and software.

Volkswagen refers the fault to the reducing-agent metering delivery-unit procedure. That procedure evaluates relay J963, delivery-unit supply paths, wiring, and connections before an assembly decision. It also explains that GX19 includes the return-flow pump and several tank-related components that are not individually serviced under that procedure.

P20EB therefore does not establish that the reductant pump itself is mechanically stuck. The recorded problem is failure to leave the powered state as expected. The repair evidence should show which relay or control-path defect prevented the intended transition.

Do not bypass or manually hold the relay on to test dosing behavior. Qualified service should perform the controlled electrical checks, then verify that the original fault does not return and restore readiness as necessary. A stored code, a delayed transition, and a confirmed defective assembly are separate findings and should be documented separately.

## Source and applicability

[Volkswagen factory manual, P20EB](https://vwts.ru/diag/engine-cvca-passat-b8-diagnostic-eng.pdf#page=115). Physical PDF pages 115, 231, 433, 434, 435. Volkswagen Passat factory Generic Scan Tool manual, Edition 08.2018; CVCA ECM tables for 2015/2016 MY; coolant-pump codes P26F4–P26F7 use 2016 MY table. This explains the documented monitor; it does not establish applicability to other vehicles.
