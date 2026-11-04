---
{"entryId": "generic-p20fb", "code": "P20FB", "title": "P20FB: Passat reductant pressure does not fall as expected", "description": "Volkswagen's backflow-pump performance monitor combines pressure, pump-stroke, and pressure-reduction timing conditions.", "status": "draft", "sourceReview": "checked", "scope": "Volkswagen Passat factory Generic Scan Tool manual, Edition 08.2018; CVCA ECM tables for 2015/2016 MY; coolant-pump codes P26F4–P26F7 use 2016 MY table.", "sourceIds": ["vw-passat-cvca-gst-2018"], "authoringBatch": "batch-44", "sourcePages": [{"sourceId": "vw-passat-cvca-gst-2018", "pages": [116, 232, 433, 434, 435]}]}
---

# P20FB: Passat reductant pressure does not fall as expected

The Passat CVCA P20FB monitor evaluates reductant pressure reduction, not merely an electrical command to pump B. In the 2016 table, pressure-reduction mode takes more than 4.5 seconds to end and the pressure difference exceeds 500 hPa. Enabling conditions include filtered system pressure above 4,500 hPa, at least two valid pump strokes, and SCR operation in pressure-reduction mode.

## Pressure decay and reductant return flow

Volkswagen separately lists 100 milliseconds in the monitoring-time column and two driving cycles for MIL illumination. The 4.5-second process criterion should not be replaced by that shorter monitoring entry. The 2015 table lists a different monitoring-time entry, so this explanation is explicitly based on the 2016 row.

The 2016 enabling list also depends on the absence of specified related dosing, relay, and pump electrical faults. Those dependencies matter because an apparently failed pressure decrease cannot be evaluated cleanly if the relevant pump or relay circuit is already diagnosed as faulty.

The source directs diagnosis to reducing-agent delivery unit GX19, whose internal components include return-flow pump V561. The component procedure checks electrical delivery and wiring before the assembly branch. The monitor itself does not identify whether a pump, hydraulic condition, or unreliable prerequisite produced the failed pressure response.

A useful workshop report records starting pressure, pressure change, valid stroke count, mode, and companion faults. Do not intentionally run the system with disconnected lines or bridge the pump circuit. The correct service procedure and controlled verification are needed to distinguish a real pressure-reduction failure from an invalid diagnostic setup.

## Source and applicability

[Volkswagen factory manual, P20FB](https://vwts.ru/diag/engine-cvca-passat-b8-diagnostic-eng.pdf#page=116). Physical PDF pages 116, 232, 433, 434, 435. Volkswagen Passat factory Generic Scan Tool manual, Edition 08.2018; CVCA ECM tables for 2015/2016 MY; coolant-pump codes P26F4–P26F7 use 2016 MY table. This explains the documented monitor; it does not establish applicability to other vehicles.
