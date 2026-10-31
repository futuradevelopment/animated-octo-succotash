---
{"entryId": "generic-p2ab8", "code": "P2AB8", "title": "P2AB8: The low-range wastegate position report for bank 1", "description": "P2AB8 concerns bank 1 wastegate position input validity; the source lists a bounded low-range criterion that requires careful interpretation.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [862]}], "authoringBatch": "batch-16"}
---

# P2AB8: The low-range wastegate position report for bank 1

P2AB8 is the low-range position-sensor report for wastegate bank 1 in this GM document. It is associated with the position feedback used by the wastegate controller. The code alone does not demonstrate that the wastegate mechanically stayed open or that turbocharger output was low.

## A bounded range, not a guessed short-circuit test

The source places two raw-voltage comparisons in this row: below 427 mV and above 206 mV. It lists 1,500 milliseconds, ignition on and diagnostic-inhibit conditions. Because the table does not explain the relationship between those bounds and the sensor's signalling convention, this article does not simplify them into a universal “anything below 427 mV” diagnosis.

That distinction matters when reading a captured signal. A reported low-range diagnostic state and an input collapsed completely to zero may not represent the same monitor path. The applicable service information is needed to translate the physical signal and any encoded status into a circuit test.

## Separate feedback from actuator demand

Retain position validity alongside requested and reported wastegate position if those channels are available. A rejected feedback signal can make a command-versus-position comparison unreliable. Nearby high-range and SENT-status monitors show that the controller distinguishes several feedback failure modes.

Confirm the exact bank and channel for the vehicle before testing. The published row supports checking the documented feedback fault under an eligible ignition state; it does not prescribe replacing the turbocharger, actuator or wiring. The meaning of the bounded low-voltage window remains a source-review item.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 862](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=862).
