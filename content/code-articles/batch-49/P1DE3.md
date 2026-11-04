---
{"entryId": "honda-p1de3", "code": "P1DE3", "title": "P1DE3: V1 feedback reaches the high end of its signal circuit", "description": "Honda P1DE3 monitors the V1 sensor output used by the PCU for voltage-control-unit regulation.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1de3-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1de3-factory", "pages": [1]}], "authoringBatch": "batch-49"}
---

# P1DE3: V1 feedback reaches the high end of its signal circuit

## This code identifies an electrical signal ceiling

Honda P1DE3 monitors the V1 sensor output used by the PCU for voltage-control-unit regulation. The published threshold is an output above 4.9 V for at least 500 milliseconds. The monitor runs continuously with the 12-volt supply at or above 8 V.

The 4.9 V quantity is the stated sensor-circuit output. It should not be confused with the high-voltage quantity represented by that signal. The factory diagram places the sensing and reporting functions within the PCU and shows internal communication between the power drive unit and motor control module.

## An over-range signal does not establish the underlying voltage

Once a measurement circuit reaches an implausible upper limit, the code alone cannot prove that the actual measured power-circuit voltage is excessive. The excerpt lists internal PCU failure, but it provides neither an independent reference measurement nor a connector-level isolation procedure. Those details must come from the correct Honda service information.

Honda specifies one-drive-cycle MIL illumination with a power-system indication. Pending, confirmed and freeze-data records are retained in the motor control module. Save them before a reset, and consider related sensor and internal-supply faults when selecting the diagnostic path.

The correct next step is professional verification of the measurement path, not replacement of a battery based on the word “high.” Any PCU access must follow high-voltage isolation requirements; the low-voltage signal specification does not make the assembly safe to probe live.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P1DE3%205582.pdf), PDF pages 1. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
