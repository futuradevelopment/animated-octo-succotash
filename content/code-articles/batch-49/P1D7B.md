---
{"entryId": "honda-p1d7b", "code": "P1D7B", "title": "P1D7B: Reactor overheating has a fast and a sustained branch", "description": "Honda P1D7B monitors reactor temperature inside the PCU.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1d7b-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1d7b-factory", "pages": [1, 2]}], "authoringBatch": "batch-49"}
---

# P1D7B: Reactor overheating has a fast and a sustained branch

## Temperature and time must be read together

Honda P1D7B monitors reactor temperature inside the PCU. The factory description gives two qualifying branches: a reported temperature above 164 °C for at least 500 milliseconds, or above 163 °C for at least eleven seconds. The higher temperature is paired with the shorter allowed duration.

These are not interchangeable limits, and they are diagnostic calibration values rather than safe operating targets. The monitor is continuous when the listed 12-volt supply is at least 8 V. Retaining the temperature and duration context helps distinguish a short severe event from a slightly lower but sustained one.

## Cooling-system causes remain in the factory list

The possible causes include a coolant-pipe leak, radiator-fan failure, failure of the PCU electric coolant pump and an internal PCU problem. That range means the reactor-temperature code should not automatically trigger a PCU replacement decision. The cooling circuit and its operation require the appropriate model-specific checks.

Honda specifies one-drive-cycle MIL illumination, a power-system indication and stored pending, confirmed and freeze-data records. Preserve those records before resetting the warning, especially if the event followed heavy load or a cooling complaint.

Do not repeatedly load the hybrid system to reproduce an overtemperature condition. A qualified technician should assess it safely, allowing for both hot coolant and high-voltage hazards. The source supplies no permission to open a hot cooling circuit or bypass the cooling pump.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P1D7B%205558.pdf), PDF pages 1, 2. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
