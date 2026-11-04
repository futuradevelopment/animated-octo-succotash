---
{"entryId": "ford-p1a1b", "code": "P1A1B", "title": "P1A1B: The brake system asks the hybrid engine to keep running", "description": "Ford associates this forced-running request with a regenerative-braking system fault.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD summary carrying May 12, 2017 revision; exact described hybrid architecture, not universal later-model specifications.", "sourceIds": ["ford-hev-phev-2019-20170512"], "authoringBatch": "batch-47", "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [190, 193]}], "sourceLocators": [{"sourceId": "ford-hev-phev-2019-20170512", "locator": "Complete code-specific monitor tables and surrounding explanatory sections on PDF pages 190, 193"}]}
---

# P1A1B: The brake system asks the hybrid engine to keep running

## An engine-running request can be a protective response

Ford's general hybrid-system table identifies P1A1B as forced engine running requested by the brake-system control module because of a regenerative-braking fault. The code describes why the hybrid strategy is being constrained; it is not simply a complaint that the engine happens to run more often than expected.

The accompanying brake-system explanation describes an electric vacuum pump as an important vacuum source because the engine may remain stopped for long periods. In certain pump failure modes, the powertrain returns toward conventional engine-running operation to maintain vacuum availability. That example explains why brake faults and engine behavior can be linked, without making every P1A1B event a proven vacuum-pump failure.

## Diagnose the originating brake concern

Capture the brake-module and hybrid-module codes together before clearing them. The brake controller's specific fault and requested operating state are more useful than interpreting the forced-running response as an independent engine-management defect.

A technician should follow the correct brake-system procedure to determine whether the concern involves vacuum support, regenerative coordination, sensing or another documented cause. The overview gives no single parts-replacement instruction for this response code and no guarantee that a normally running engine confirms adequate braking support.

Unexpected engine operation may be the visible symptom, but uncertain brake performance requires professional attention. Verification should show that the originating brake fault is resolved and the protective request is no longer needed, rather than attempting to suppress the engine-running strategy itself.

## Source and scope

[Factory diagnostic source](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf) — PDF pages 190, 193.

Ford/Lincoln 2019 MY HEV/PHEV OBD summary carrying May 12, 2017 revision; exact described hybrid architecture, not universal later-model specifications.
