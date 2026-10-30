---
{"entryId": "generic-p2ce8", "code": "P2CE8", "title": "P2CE8: high downstream pressure signal can mean an open circuit", "description": "P2CE8 detects a high raw downstream pressure signal consistent with an open circuit or a short to battery.", "status": "draft", "sourceReview": "checked", "scope": "Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [887]}], "authoringBatch": "batch-09"}
---

# P2CE8: high downstream pressure signal can mean an open circuit

The cited P2CE8 monitor checks the upper electrical range of the downstream relative-pressure sensor. It fails when the raw signal exceeds 99.80%. The table explicitly associates that result with either an open circuit or a short to battery.

## A high title does not distinguish those two faults

An interrupted signal path and an unwanted voltage connection can produce the same high-range classification in this sensor architecture. The code alone cannot select between them. Establish the exact circuit and interpret its raw input before treating the converted pressure value as a genuine exhaust-pressure measurement.

The source requires 158 failures from 200 samples at a 12.5-millisecond task rate. Run/crank power must be active, ignition in range and diagnostic reset inactive; the engine must not currently be cranking. These conditions qualify the electrical result rather than define a pressure or engine-load test.

## Diagnostic and verification decisions

An implausibly high displayed pressure accompanied by P2CE8 deserves electrical investigation before a restriction diagnosis. The source's stated open-circuit possibility is especially important when a connection has recently been disturbed. It remains a possibility, not proof of the event's cause.

After correction, confirm the raw signal stays in range while the monitor completes. A later pressure-performance or offset result is separate evidence and should be assessed on its own terms. The table provides neither a universal pin voltage nor a particulate-filter replacement criterion.

## Source and applicability

Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately. [GM monitor table, PDF page 887](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=887).
