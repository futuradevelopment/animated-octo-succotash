---
{"entryId": "generic-p2bf1", "code": "P2BF1", "title": "P2BF1: Bank 1 port-injection adaptation below its rich limit", "description": "P2BF1 evaluates a stabilized low multiplicative correction on the port-injection path, with operating-mode prerequisites.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [211, 212, 213]}], "authoringBatch": "batch-16"}
---

# P2BF1: Bank 1 port-injection adaptation below its rich limit

P2BF1 addresses excessive correction in the rich direction on bank 1's port-fuel-injection path. In the published row, the multiplicative mixture-adaptation factor falls below 0.73. The code therefore describes a learned control response, not a direct identification of a leaking injector.

## Learning conditions shape the result

The controller must consider the local port-injection integrator stable and the multiplicative adaptation range active. Pure port injection has to be operating for more than two seconds. The engine must also meet readiness conditions that include coolant temperature of at least 70.5°C and an injection counter of at least 2,000.

Wide-open-throttle operation and a catalyst-heating lambda request are excluded. These restrictions explain why a reading from a cold start or a different injection mode cannot be compared uncritically with the stored adaptation fault. The detailed source continues with additional closed-loop and stability qualifications.

## What evidence helps

Retain the bank 1 multiplicative port-injection correction, operating mode and relevant event conditions. A generic percentage labelled fuel trim may represent a different channel or calculation. Confirm the parameter identity before deciding that a currently displayed value contradicts the stored code.

The table does not provide a ranked cause list or a parts test. It supports determining when and on which injection path the correction became excessive. A repair is meaningfully checked when that path completes its eligible adaptation evaluation; an immediate code erase or a drive that never uses the required mode does not establish recovery.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 211](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=211). [GM PDF, page 212](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=212). [GM PDF, page 213](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=213).
