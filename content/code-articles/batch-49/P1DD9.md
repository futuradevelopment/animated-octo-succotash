---
{"entryId": "honda-p1dd9", "code": "P1DD9", "title": "P1DD9: The I1 current-sensor circuit leaves its normal voltage band", "description": "Honda P1DD9 concerns the I1 current signal used by the PCU to regulate the voltage control unit.", "status": "draft", "sourceReview": "needs-review", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1dd9-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1dd9-factory", "pages": [1]}], "authoringBatch": "batch-49"}
---

# P1DD9: The I1 current-sensor circuit leaves its normal voltage band

## The sensor circuit is checked at both extremes

Honda P1DD9 concerns the I1 current signal used by the PCU to regulate the voltage control unit. The explicit threshold is an output above 4.53 V or below 0.47 V lasting at least two seconds. These are electrical signal boundaries; they do not directly state the actual reactor current in amperes.

The monitor is continuous and requires a 12-volt supply of at least 8 V. An out-of-range signal can make the current information unreliable even when the vehicle's instantaneous operating demand appears modest. The source lists internal PCU failure rather than supplying an external current-sensor replacement procedure.

## The confirmation strategy conflicts within the excerpt

The monitor table calls this a one-drive-cycle fault, but the diagnosis-details section describes pending storage on the first cycle and confirmed storage with MIL illumination on the next. That conflict remains unresolved. The article is flagged for review and does not promise a specific number of trips before the engine lamp appears.

Preserve the fault status, freeze data and related supply or current-monitor records before clearing memory. A qualified technician should consult current Honda information to settle both the confirmation strategy and the appropriate circuit checks.

The I1 sensing function is part of high-voltage power electronics. A small output-voltage limit does not authorize probing an energized PCU or inserting test equipment into the reactor-current path; use the required isolation and verification precautions.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P1DD9%205580.pdf), PDF pages 1. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
