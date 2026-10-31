---
{"entryId": "generic-p0dad", "code": "P0DAD", "title": "P0DAD: Cell balancing remains active when it was not requested", "description": "Mazda's P0DAD procedure identifies unintended battery cell balancing, with the suffix specifying the affected cell.", "status": "draft", "sourceReview": "needs-review", "scope": "Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; Mazda M Hybrid BATTERY. Verify exact vehicle specification; this is a Mazda application example.", "sourceIds": ["mazda3-2019-id140204310400"], "sourceLocators": [{"sourceId": "mazda3-2019-id140204310400", "locator": "DTC P0DAD:F1, P0DAD:F2, P0DAD:F3, P0DAD:F4, P0DAD:F5, P0DAD:F6, P0DAD:F7, P0DAD:F8, P0DAD:F9, P0DAE:F1, P0DAE:F2, P0DAE:F3, P0DAE:F4, P0DAE:F5, P0DAE:F6, P0DAE:F7, P0DAE:F8 OR P0DAE:F9 [Mazda M Hybrid BATTERY]; id140204310400; detection conditions and diagnostic procedure"}], "authoringBatch": "batch-37"}
---

# P0DAD: Cell balancing remains active when it was not requested

P0DAD generally describes a hybrid battery cell-balancing circuit stuck on. Mazda's M Hybrid battery uses suffixes F1 through F9 to identify the affected cell from number 1 through number 9.

## The suffix and command state are essential

The source defines P0DAD as continuous unintended balance control: the monitored balance response occurs for a cell that is not targeted for balancing. This differs from P0DAE, where a targeted cell fails to show the expected response. Recording only the five-character code loses which cell channel was implicated.

Detection occurs in the battery READY state with specified voltage-monitor faults absent. The listed persistence is approximately twenty seconds, five consecutive times. This is a sustained command-versus-response assessment, not proof derived from one instantaneous cell reading.

## Interpret the internal threshold cautiously

The page uses a 0.9 V comparison within its balance-control explanation. That value is not presented here as a normal cell operating voltage or a target for manually discharging a cell. The useful diagnostic distinction is whether the balance response agrees with the requested state.

Mazda lists an internal battery malfunction and separates present from historical events through ignition-state and recurrence checks. No dedicated fail-safe is listed. Professional pack diagnosis must retain the suffix and status; do not open the battery or attempt manual balancing on the basis of this code.

## Documented application

Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; Mazda M Hybrid BATTERY. Verify exact vehicle specification; this is a Mazda application example. [Mazda factory diagnostic page, mirrored by CHARM](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id140204310400.html).
