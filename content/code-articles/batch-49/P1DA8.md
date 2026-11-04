---
{"entryId": "honda-p1da8", "code": "P1DA8", "title": "P1DA8: V2M must fail two reference comparisons together", "description": "Honda P1DA8 evaluates V2M voltage information during gate-drive operation with the VCU in direct-connection mode.", "status": "draft", "sourceReview": "needs-review", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1da8-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1da8-factory", "pages": [1, 2]}], "authoringBatch": "batch-49"}
---

# P1DA8: V2M must fail two reference comparisons together

## Both stated comparisons are required

Honda P1DA8 evaluates V2M voltage information during gate-drive operation with the VCU in direct-connection mode. The factory threshold requires two conditions to continue for at least one second: V2M differs from the stated 12-volt battery value by at least 30 V, and it also differs from V1 by at least 30 V. The source presents this as an AND relationship, not either comparison independently.

The enable table requires at least 8 V on the 12-volt supply and at least 5 V on the internal supply labeled 6 V. Omitting the control mode or combining only one failed comparison would misrepresent the monitor as printed.

## The first reference needs further clarification

The excerpt does not explain why a high-voltage-related V2M value is compared directly with the 12-volt battery reference in this operating state, or whether an internal scaling is implied. This article retains a source-review flag and does not convert that unexplained comparison into a physical meter test. Current Honda information should resolve the quantity definitions.

The possible-cause section names internal PCU failure. Honda specifies one-drive-cycle MIL illumination, a power-system warning and retained freeze data. Preserve both reference readings and the control-state information before clearing memory. Qualified hybrid personnel should follow the correct service procedure; do not connect test equipment between assumed V2M and 12-volt terminals based on this excerpt.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P1DA8%205577.pdf), PDF pages 1, 2. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
