---
{"entryId": "generic-u05aa", "code": "U05AA", "title": "U05AA: Charge-air cooler pump messages fail the alive-counter check", "description": "U05AA concerns message freshness from the charge-air cooler coolant pump, rather than directly proving inadequate coolant flow.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [818]}], "authoringBatch": "batch-16"}
---

# U05AA: Charge-air cooler pump messages fail the alive-counter check

U05AA is the invalid-data code for charge-air cooler coolant-pump communication in this source. The published monitor checks an alive rolling-counter error. It is a message-freshness diagnosis, not a direct measurement of pump flow, coolant level or cooling effectiveness.

## Received data can still be stale

An alive counter allows a receiver to distinguish changing messages from information that does not advance as expected. The table identifies the counter-error state as the failure criterion, with ignition on, basic enabling conditions and a two-trip response.

The row does not publish a numerical repeat limit, timeout or complete counter algorithm. Those values should not be borrowed from adjacent fan communication entries, which concern different devices and have their own event counts. This source therefore cannot supply an exact number of repeated pump messages that proves the fault externally.

## Separate communication from pump operation

Preserve the pump message's validity and any available command or operating status. A pump that can be heard running has not thereby demonstrated valid communication. Conversely, a rejected message does not by itself prove that the pump has stopped moving coolant.

Use the exact application network procedure to establish the expected message and counter behaviour before deciding whether the pump, wiring or controller is responsible. Verification requires the receiver to accept fresh pump data during an eligible check, together with any prescribed cooling-system functional tests. Clearing U05AA or observing one plausible coolant temperature does not establish that the original communication-integrity concern is resolved.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 818](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=818).
