---
{"entryId": "honda-p1d7d", "code": "P1D7D", "title": "P1D7D: The reactor-temperature sensor output falls below its range", "description": "Honda P1D7D identifies a reactor-temperature sensor output below 0.21 V for at least 400 milliseconds.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1d7d-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1d7d-factory", "pages": [1]}], "authoringBatch": "batch-49"}
---

# P1D7D: The reactor-temperature sensor output falls below its range

## The threshold concerns a sensor signal

Honda P1D7D identifies a reactor-temperature sensor output below 0.21 V for at least 400 milliseconds. The PCU uses that sensor information to protect the reactor from excessive heat. The electrical low-circuit diagnosis is therefore about the validity of the temperature input, not a direct statement that the reactor is unusually cold.

The monitor runs continuously with the specified 12-volt supply at or above 8 V. A later normal-looking temperature display does not necessarily explain a previously recorded brief electrical excursion, which is why freeze data and related sensor records should be preserved.

## Do not infer a temperature from an invalid input

The factory source lists internal PCU failure as a possible cause. It does not provide a resistance-versus-temperature chart, sensor terminal location or independent component-replacement instruction. Converting the low voltage into a claimed actual reactor temperature would go beyond the evidence in this excerpt.

Honda classifies the fault as one-drive-cycle MIL illumination with a power-system indication. Pending and confirmed records and freeze data are retained in the motor control module. The matching Honda diagnostic procedure is needed to establish whether the temperature information and its internal circuit can be trusted.

Investigation around the reactor and PCU requires trained hybrid personnel. A signal measured in fractions of a volt does not remove the high-voltage hazards of the assembly, and an owner should not attempt live probing or bypass the input to extinguish the warning.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P1D7D%205559.pdf), PDF pages 1. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
