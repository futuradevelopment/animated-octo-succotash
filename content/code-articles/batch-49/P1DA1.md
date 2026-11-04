---
{"entryId": "honda-p1da1", "code": "P1DA1", "title": "P1DA1: The VCU chip-temperature signal reaches a high electrical value", "description": "Honda P1DA1 monitors the VCU-side IGBT chip-temperature sensor signal.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1da1-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1da1-factory", "pages": [1]}], "authoringBatch": "batch-49"}
---

# P1DA1: The VCU chip-temperature signal reaches a high electrical value

## The electrical threshold is short and specific

Honda P1DA1 monitors the VCU-side IGBT chip-temperature sensor signal. A sensor output above 4.8 V for at least 90 milliseconds meets the factory malfunction threshold. The PCU uses temperature information to protect the switching devices from heat-related damage, but this code's immediate criterion is an electrical signal limit.

A high sensor-circuit voltage should not be translated directly into a claimed high chip temperature without the sensor's correct transfer relationship. That relationship is not provided in this excerpt. The monitor operates continuously with a 12-volt supply of at least 8 V.

## Preserve transient evidence before resetting

Because the stated persistence period is less than a tenth of a second, a later scan reading within range does not explain whether the original event was genuine or intermittent. Freeze data and related internal-supply or temperature-sensing records help a technician choose the appropriate Honda diagnostic branch.

The source lists internal PCU failure as a possible cause and specifies one-drive-cycle MIL storage with a power-system indication. Pending and confirmed records are retained in the motor control module. The excerpt supplies no external terminal test or supported instruction to replace a single chip-temperature sensor.

Have the current vehicle-specific procedure applied before a hardware decision. PCU access requires trained high-voltage service personnel and proper isolation; an apparently small sensor-voltage specification does not make live work inside the inverter safe.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P1DA1%205574.pdf), PDF pages 1. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
