---
{"entryId": "generic-p06cb", "code": "P06CB", "title": "P06CB: An incorrect-glow-plug code can be a live resistance-rationality result", "description": "Learn how the GM P06CB monitor derives resistance from voltage and current, and why it cannot prove that the wrong part was installed.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 04A documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file.", "sourceIds": ["gm-2025-04a"], "sourcePages": [{"sourceId": "gm-2025-04a", "pages": [1004]}], "authoringBatch": "batch-17"}
---

# P06CB: An incorrect-glow-plug code can be a live resistance-rationality result

P06CB is generically described as an incorrect cylinder 7 glow plug. The GM monitor is a resistance-rationality assessment: it calculates resistance from measured voltage and current and compares the result with a calibrated operating range. A stored code does not, by itself, prove that someone fitted the wrong part.

## The measurements must be valid under command

The glow plug must be commanded on for the specified enable period, the glow system must be enabled and the relevant electrical and voltage-feedback fault conditions must be absent. The engine is running with cranking excluded, and supply must be in range.

These conditions matter because a resistance estimate depends on both measurements and an appropriate operating state. An off-state reading cannot substitute for the documented energized calculation, and a known feedback fault undermines the evidence used by the rationality check.

## Keep the source's channel discrepancy visible

The heading identifies cylinder 7, but the malfunction sentence refers to glow plug 4. The document does not resolve that naming difference, so this article does not assign a physical plug or silently change the number. The intended channel must be established from the matching service information.

The table confirms fifteen failures within twenty-five samples at a 100-millisecond task rate, with two-trip reporting. Those monitor details support interpreting a repeated rationality result, while the source alone cannot distinguish a plug characteristic from a measurement-path problem or establish a replacement decision.

## Source and applicability

2025 GM 04A documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file. [GM PDF, physical page 1004](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04A.pdf#page=1004).
