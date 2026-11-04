---
{"entryId": "ford-p1a1e", "code": "P1A1E", "title": "P1A1E: Both battery contactors fail to reach the commanded closed state", "description": "Ford identifies a combined contactor-state disagreement rather than one isolated driver-circuit fault.", "status": "draft", "sourceReview": "needs-review", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD summary carrying May 12, 2017 revision; exact described hybrid architecture, not universal later-model specifications.", "sourceIds": ["ford-hev-phev-2019-20170512"], "authoringBatch": "batch-47", "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [161]}], "sourceLocators": [{"sourceId": "ford-hev-phev-2019-20170512", "locator": "Complete code-specific monitor tables and surrounding explanatory sections on PDF pages 161"}]}
---

# P1A1E: Both battery contactors fail to reach the commanded closed state

## The combined state is the clue

Ford's P1A1E criterion is that the battery contactors are commanded closed while both the positive and negative contactors remain open for 1.3 seconds. The check is enabled when the power-stage request or charging wakeup is high. It therefore concerns the relationship between a requested power connection and the observed state of both contactors.

Neighboring diagnostics distinguish individual positive and negative contactor driver faults. Those more specific circuit results should be retained; P1A1E does not independently prove that two contactors have mechanically failed at the same time.

## Preserve the power-up sequence

A useful diagnostic record includes the contactor command, both reported states, wakeup conditions and associated interlock or driver codes. A qualified hybrid technician can then follow the exact power-up and precharge procedure for the vehicle. The sequence matters because a contactor remaining open before a valid closing request is not the same event as failure to respond to that request.

The overview's general duration row says less than one second, while its code-specific criterion says 1.3 seconds. This timing discrepancy is disclosed and retained as a source-review flag; the more specific row is reported without pretending that the document is internally consistent.

Never bridge contactors or bypass an interlock to prove that the vehicle can power up. The fault concerns a safety-critical high-voltage connection, and the summary supplies neither a safe live-test method nor a parts-replacement verdict.

## Source and scope

[Factory diagnostic source](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf) — PDF pages 161.

Ford/Lincoln 2019 MY HEV/PHEV OBD summary carrying May 12, 2017 revision; exact described hybrid architecture, not universal later-model specifications.
