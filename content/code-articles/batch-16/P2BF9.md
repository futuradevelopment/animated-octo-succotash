---
{"entryId": "generic-p2bf9", "code": "P2BF9", "title": "P2BF9: Ground-short status on the exhaust valve B PWM circuit", "description": "P2BF9 reports an electrical ground-short diagnosis, which should be separated from a valve-position tracking fault.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [840]}], "authoringBatch": "batch-16"}
---

# P2BF9: Ground-short status on the exhaust valve B PWM circuit

P2BF9 is associated with a ground-short status from the exhaust valve B PWM circuit diagnostic. The low-circuit label is therefore an electrical classification in the cited monitor. It does not describe the exhaust valve's commanded opening percentage or prove that the valve is mechanically closed.

## What is actually qualified

The controller watches the circuit diagnostic report for four seconds, with the source listing a two-trip response. Battery and general enable conditions apply. The row's remaining labels require care: its enable text refers to the short-to-power diagnostic, despite the failure being a ground-short report.

The initialization entry also combines a description that sufficient initialization time has passed with a less-than-five-second comparison. This article preserves that conflict instead of converting it into a service test. The precise operating sequence must be obtained from the application procedure.

## Useful separation during diagnosis

Capture the electrical fault status, valve command and any independent tracking complaint. A tracking deviation can show that movement did not match demand, whereas P2BF9 identifies the circuit diagnostic's low-side fault classification. Those observations can coexist but should not be treated as identical proof.

The published row supplies no connector layout, isolation steps or permitted test current. It consequently does not justify shorting or energizing the control line to reproduce the condition. After an appropriate repair, confirm completion of the electrical check under its proper initialization state, with the original ground-short report absent. A code erase alone establishes none of those conditions.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 840](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=840).
