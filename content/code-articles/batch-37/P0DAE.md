---
{"entryId": "generic-p0dae", "code": "P0DAE", "title": "P0DAE: A commanded cell-balancing channel does not respond", "description": "The documented Mazda P0DAE procedure covers a commanded cell-balancing channel does not respond.", "status": "draft", "sourceReview": "needs-review", "scope": "Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; Mazda M Hybrid BATTERY. Verify exact vehicle specification; this is a Mazda application example.", "sourceIds": ["mazda3-2019-id140204310400"], "sourceLocators": [{"sourceId": "mazda3-2019-id140204310400", "locator": "DTC P0DAD:F1, P0DAD:F2, P0DAD:F3, P0DAD:F4, P0DAD:F5, P0DAD:F6, P0DAD:F7, P0DAD:F8, P0DAD:F9, P0DAE:F1, P0DAE:F2, P0DAE:F3, P0DAE:F4, P0DAE:F5, P0DAE:F6, P0DAE:F7, P0DAE:F8 OR P0DAE:F9 [Mazda M Hybrid BATTERY]; id140204310400; detection conditions and diagnostic procedure"}], "authoringBatch": "batch-37"}
---

# P0DAE: A commanded cell-balancing channel does not respond

P0DAE is the hybrid battery cell-balancing circuit stuck-off code. Mazda's M Hybrid battery adds F1–F9 suffixes to identify cell channels 1–9.

## Requested balancing changes the interpretation

Unlike the paired unintended-balancing code, P0DAE applies to a cell that is targeted for balance control but does not show the expected monitored response. The same cell reading cannot be interpreted without knowing whether that channel was commanded to balance.

The source requires the battery READY state and absence of specified voltage-monitor faults. It describes approximately twenty-second assessments repeated five consecutive times. This persistence requirement makes an isolated scan value insufficient to diagnose a permanently failed balancing channel.

## Preserve channel and status information

The factory explanation uses an internal 0.9 V balance-response comparison. It should not be treated as a normal battery-cell voltage specification or as an instruction to discharge cells manually. The code and its F suffix identify the control-response disagreement that the battery management system detected.

Mazda lists a battery malfunction as the possible cause and checks whether the fault is current or historical before its repeatability decision. No separate fail-safe is stated. A qualified technician should retain the full suffix, battery state and companion records, then use the exact pack service procedure. Do not open the pack or bypass balancing electronics to force the reported condition to disappear.

## Documented application

Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; Mazda M Hybrid BATTERY. Verify exact vehicle specification; this is a Mazda application example. [Mazda factory diagnostic page, mirrored by CHARM](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id140204310400.html).
