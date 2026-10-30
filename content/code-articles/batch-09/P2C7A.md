---
{"entryId": "generic-p2c7a", "code": "P2C7A", "title": "P2C7A: underfloor SCR efficiency evaluated with filtered evidence", "description": "P2C7A evaluates underfloor SCR ammonia storage and NOx conversion using qualified sensor data and an EWMA filter.", "status": "draft", "sourceReview": "checked", "scope": "Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [875, 876, 877, 878, 879]}], "authoringBatch": "batch-09"}
---

# P2C7A: underfloor SCR efficiency evaluated with filtered evidence

P2C7A concerns the second, underfloor SCR catalyst in this GM strategy. Its diagnostic efficiency index considers both ammonia storage capability and NOx conversion. The source identifies NOx sensors 2 and 3 around SCR2 and notes that their measurements respond to both NOx and ammonia.

## More than a single upstream/downstream ratio

The controller compares a measured efficiency index with a calibrated reference and applies an exponentially weighted moving average, or EWMA, to their difference. Testing occurs after a specified upstream NOx-plus-ammonia integral reaches 300 mg. The listed zero comparison is a filtered difference boundary, not a claim that zero-percent catalyst efficiency is acceptable.

The continuation imposes extensive qualifications: reliable sensor measurements and slip detection, suitable temperatures and exhaust flow, usable reductant delivery, appropriate ammonia storage and allowed dosing states. Rapid-response and initial-response filter modes also affect how often tests can execute.

## Diagnostic implications

A raw downstream NOx reading alone cannot reproduce the monitor. Ammonia response, dosing state and the validity of the upstream reference affect interpretation. Similarly, an incomplete monitor after a repair may reflect unmet thermal, storage or flow conditions rather than a new catalyst failure.

Review related sensor and reductant faults before treating P2C7A as proof that catalyst replacement is required. Verification needs the applicable efficiency test to execute with reliable inputs and qualified catalyst conditions. The source supplies the monitor's reasoning, not a universal road-test recipe or a direct pass/fail limit for a handheld emissions reading.

## Source and applicability

Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately. [GM monitor table, PDF page 875](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=875); [GM monitor table, PDF page 876](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=876); [GM monitor table, PDF page 877](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=877); [GM monitor table, PDF page 878](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=878); [GM monitor table, PDF page 879](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=879).
