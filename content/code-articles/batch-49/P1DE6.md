---
{"entryId": "honda-p1de6", "code": "P1DE6", "title": "P1DE6: An out-of-range V2M reading can involve the wider HV supply path", "description": "Honda P1DE6 is set when the V2M sensor output remains above 4.18 V or below 0.10 V for at least two seconds.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1de6-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1de6-factory", "pages": [1, 2]}], "authoringBatch": "batch-49"}
---

# P1DE6: An out-of-range V2M reading can involve the wider HV supply path

## The signal criterion has a broad diagnostic context

Honda P1DE6 is set when the V2M sensor output remains above 4.18 V or below 0.10 V for at least two seconds. Monitoring requires ON mode and a 12-volt supply of at least 10 V. Unlike a simple sensor-only description, the source's possible-cause list reaches across the high-voltage power path.

It includes contactor-control circuits, stuck-off contactors, battery power cabling, bus-bar and junction-board connections, the main fuse and switch, and the bypass resistor. These alternatives show why an abnormal V2M value cannot automatically be assigned to a defective voltage sensor.

## Preserve the system-level fault picture

The factory list also includes collision-related and SRS conditions, battery-module problems, the electric A/C compressor, DC-DC converter, battery-monitor module and PCU. That does not mean every component requires replacement; it means the correct diagnostic sequence must determine which branch is supported by the actual vehicle data.

Record companion DTCs and the operating state before clearing memory. Honda describes pending storage on the first qualifying drive cycle and confirmed storage with MIL illumination when the fault returns on the next; the monitor table also names the power-system warning.

This excerpt provides monitor criteria, not a safe sequence for opening contactors or checking bus bars. A qualified hybrid technician must use the exact Honda procedure and high-voltage isolation checks. Do not bypass a contactor or fuse to investigate the reported voltage.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P1DE6%205585.pdf), PDF pages 1, 2. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
