---
{"entryId": "generic-p2bf3", "code": "P2BF3", "title": "P2BF3: Low bank 2 port-injection adaptation and the rich diagnosis", "description": "P2BF3 concerns the bank 2 port-injection correction factor after the controller establishes the required learning conditions.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [207, 208, 209]}], "authoringBatch": "batch-16"}
---

# P2BF3: Low bank 2 port-injection adaptation and the rich diagnosis

P2BF3 records a low multiplicative mixture-adaptation value for bank 2's port-fuel-injection path. The source sets the rich-direction boundary below 0.73. That number is an adaptation factor, not an oxygen-sensor voltage, an air-fuel ratio or a direct percentage of fuel leakage.

## Conditions distinguish a learned fault from a transient

The documented monitor needs a stable local port-injection integrator and the correct multiplicative adaptation range. Pure port injection must be active for more than two seconds. Bank 2 closed-loop operation and a six-second stability check are also part of the continued enable logic.

The readiness conditions exclude wide-open throttle, catalyst-heating demand and several other special operating states. Consequently, a brief rich indication during an unrelated mode cannot on its own reproduce the decision. Identify the actual port-injection adaptation channel before comparing present data with the historical code.

## A useful verification record

Keep the affected bank, correction factor, injection mode and monitor completion together. If a generic tool cannot distinguish the port-injection path, acknowledge that limitation instead of treating its overall trim value as conclusive. Bank 1 can provide context but is not a substitute for the bank 2 learning result.

The code shows that the controller's permitted rich-direction correction was exceeded. It does not establish which component caused that demand. Use the application diagnostic procedure to investigate cause, and verify with an eligible adaptation evaluation afterward. Erasing stored learning before preserving it can make the original fault harder to understand.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 207](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=207). [GM PDF, page 208](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=208). [GM PDF, page 209](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=209).
