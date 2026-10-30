---
{"entryId": "generic-p2ab9", "code": "P2AB9", "title": "P2AB9: Bank 1 wastegate position in the high diagnostic range", "description": "P2AB9 is a high-range wastegate feedback report whose paired voltage bounds should not be mistaken for a universal short-to-power test.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [862]}], "authoringBatch": "batch-16"}
---

# P2AB9: Bank 1 wastegate position in the high diagnostic range

P2AB9 identifies the high-range position feedback report for bank 1's wastegate in the cited controller. It describes an input accepted as a diagnostic error state, not proof that the exhaust bypass is physically at its maximum travel.

## Read both voltage bounds

The source row prints raw position voltage above 3,834 mV and below 3,973 mV. A 1,500-millisecond qualification, ignition-on condition and diagnostic inhibitors are also listed. Because this is a bounded range, reducing the entry to “voltage above 3.834 V” would discard information that may be important to the sensor interface.

The summary does not explain the signalling convention or why both bounds are present. That unresolved detail prevents using these figures as an unrestricted short-to-battery diagnosis. Match the controller's service information before interpreting a voltage outside the printed band.

## What to compare

The most informative record distinguishes an invalid high-range feedback status from a legitimate high position reading. Requested actuator movement and reported movement are useful only after establishing whether the feedback channel remains valid. On the same page, low-range and SENT communication-status checks are separate entries.

For this fault, confirmation should address the original high-range state under an eligible ignition condition. Simply observing normal boost during one acceleration does not demonstrate that the feedback diagnostic completed successfully. The table names no connector terminal, sensor location or failed part. It therefore supports a focused signal-validity investigation while leaving physical test specifications and repair decisions to the matching application documentation.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 862](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=862).
