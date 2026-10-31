---
{"entryId": "generic-p2a0d", "code": "P2A0D", "title": "P2A0D: High voltage on the bank 2 manifold-pressure channel", "description": "Understand the high-input criterion for P2A0D and why it does not independently prove excessive manifold pressure.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [633]}], "authoringBatch": "batch-16"}
---

# P2A0D: High voltage on the bank 2 manifold-pressure channel

P2A0D records a high raw input from the bank 2 manifold-pressure sensor in the cited GM strategy. The word high describes an electrical range decision. Without a verified sensor characteristic and operating context, it is not a standalone boost-pressure diagnosis.

## What the controller evaluates

The monitor threshold is raw sensor voltage above 4.5 V, with a listed 1.5-second duration. It also depends on basic enabling conditions and the absence of diagnostic inhibitors defined elsewhere in the document. The table lists a one-trip response for this check.

The useful evidence is therefore the input's level, persistence and validity, together with whether the monitor was allowed to run. A temporary change in calculated manifold pressure is not interchangeable with a sustained high electrical signal. If the scan tool supplies a raw-input channel, compare its status with the interpreted pressure rather than treating both as independent confirmation.

## How this differs from a rationality fault

The neighbouring P2A0B entry asks whether pressure passes cross-checks or varies correctly. It can fail without crossing this high-voltage boundary. P2A0D directs attention to signal-range evidence before drawing conclusions from the pressure calculation.

The source identifies bank 2 for this application, but provides neither a sensor location nor a connector test. Those details must be matched to the vehicle. Verification should show that the input is accepted while the relevant monitor completes; an erased warning or a pressure reading at one operating point does not establish that the electrical-range fault has been resolved.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 633](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=633).
