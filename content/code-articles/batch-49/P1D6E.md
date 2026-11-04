---
{"entryId": "honda-p1d6e", "code": "P1D6E", "title": "P1D6E: Motor and transmission-fluid temperatures disagree after cooling", "description": "Honda P1D6E compares traction-motor temperature with the transmission-fluid temperature used by its oil-cooling system.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1d6e-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1d6e-factory", "pages": [1, 2]}], "authoringBatch": "batch-49"}
---

# P1D6E: Motor and transmission-fluid temperatures disagree after cooling

## The comparison relies on a long cool-down

Honda P1D6E compares traction-motor temperature with the transmission-fluid temperature used by its oil-cooling system. After sufficient cooling, those temperatures should be close when operation begins. The documented failure criterion is a difference greater than 50 °C for at least three seconds.

The enable conditions are specific: the vehicle must have been off for at least five hours and fifty minutes, and the traction motor's absolute torque must be no more than 10 N·m. A comparison made immediately after hard operation would not reproduce that intended near-equilibrium check. The overnight or other long-soak history is therefore meaningful diagnostic information.

## Either temperature input can be responsible

The possible causes include the traction-motor temperature sensor, the transmission-fluid temperature sensor and an internal PCU fault. The comparison identifies disagreement between two inputs; it does not establish which temperature reading is correct. Nor does it alone prove that the motor is actually overheating.

Record both temperature values and the soak conditions before clearing the fault. Honda specifies one-drive-cycle MIL illumination, a power-system indication and pending, confirmed and freeze-data storage in the motor control module.

The matching Honda procedure should determine how each input is verified for the vehicle. Sensor access around the traction drive requires the appropriate thermal and high-voltage precautions. Do not treat the 50 °C difference as a universal operating-temperature limit for the motor or transmission.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P1D6E%205551.pdf), PDF pages 1, 2. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
