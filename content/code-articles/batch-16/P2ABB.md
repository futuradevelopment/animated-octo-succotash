---
{"entryId": "generic-p2abb", "code": "P2ABB", "title": "P2ABB: Low-range feedback from the second wastegate channel", "description": "Interpret P2ABB using the bank 2 position-signal status, its time qualification and the limits of the published voltage window.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [862]}], "authoringBatch": "batch-16"}
---

# P2ABB: Low-range feedback from the second wastegate channel

P2ABB belongs to the wastegate bank 2 position-feedback checks in this GM calibration summary. The generic sensor B designation is represented as bank 2 here. Confirm that mapping on the vehicle rather than assuming sensor letters always identify the same physical side.

## The reported fault is about feedback

The listed low-range row includes raw voltage below 427 mV and above 206 mV, qualified for 1,500 milliseconds with ignition on and relevant inhibitors absent. The second comparison means this is not safely summarized as every input below a single threshold. The document does not explain whether the bounded range represents a particular sensor error-signalling state.

That uncertainty does not erase the useful distinction: this is a position-input diagnostic, separate from the driver's overcurrent and overtemperature reports. An actuator can be commanded without its position being reliably known. The code alone cannot establish whether an observed boost problem resulted from mechanical movement or unusable feedback.

## Preserve the channel identity

Compare bank 2's input validity with its command and any available diagnostic status; do not substitute bank 1 readings merely because its circuit looks similar. A valid-looking calculated position may not resolve a source-reported input error.

The next decisive documentation is the exact sensor interface description and approved electrical test for the application. Verification should demonstrate recovery of the low-range diagnostic state while the monitor is eligible. No parts replacement, terminal-voltage test or actuator removal follows automatically from this summary.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 862](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=862).
