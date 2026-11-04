---
{"entryId": "honda-p1d7a", "code": "P1D7A", "title": "P1D7A: Reactor and inverter temperatures disagree after a six-hour soak", "description": "Honda P1D7A compares the reactor-temperature reading with the traction-motor-side IGBT temperature.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1d7a-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1d7a-factory", "pages": [1, 2]}], "authoringBatch": "batch-49"}
---

# P1D7A: Reactor and inverter temperatures disagree after a six-hour soak

## A cold-start comparison checks plausibility

Honda P1D7A compares the reactor-temperature reading with the traction-motor-side IGBT temperature. The factory monitor runs immediately after ON mode following at least six hours off. Traction-motor and generator speeds must each be no more than 20 rpm, and the 12-volt supply must be at least 8 V.

The stated failure condition is a temperature difference greater than 40 °C lasting at least 100 milliseconds. The long soak and very low rotational speeds help define a situation in which the two temperatures should be reasonably comparable. This is not the same as comparing them after sustained electrical loading, when different heat generation may be expected.

## Treat the two readings as a relationship

The code identifies a failed temperature relationship. It does not establish which reading is wrong or prove that the reactor actually overheated. The source lists internal PCU failure without giving a separate temperature-sensor replacement or independent measurement procedure.

Record the soak history, both reported temperatures and any related thermal or supply faults before clearing memory. Honda specifies one-drive-cycle MIL illumination and a power-system warning, with pending, confirmed and freeze-data storage.

A technician should use the correct Honda diagnostic sequence to validate the readings. Access to the PCU requires high-voltage precautions even after a long cool-down; the six-hour monitor prerequisite is a thermal condition, not proof of electrical isolation or discharged internal components.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P1D7A%205557.pdf), PDF pages 1, 2. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
