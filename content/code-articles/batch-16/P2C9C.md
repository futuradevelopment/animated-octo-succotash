---
{"entryId": "generic-p2c9c", "code": "P2C9C", "title": "P2C9C: Second wastegate channel fails the CSERS tracking check", "description": "P2C9C should be interpreted with the bank 2 position convention, cold-start control mode and jammed-state details.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [870, 871, 872]}], "authoringBatch": "batch-16"}
---

# P2C9C: Second wastegate channel fails the CSERS tracking check

P2C9C is the bank 2 wastegate tracking diagnosis during CSERS, the documented cold-start emissions-reduction strategy. The source includes both stuck-open and stuck-closed branches. A reader needs the underlying branch or enhanced status to know which behaviour was observed.

## The percentage is not self-explanatory

The monitor changes its comparison according to whether zero-percent position means closed. It combines that convention with a fifty-percent position boundary and a governor-deviation fault outside plus or minus forty percent. Timing qualifications exceed one second.

This makes the configured interpretation of position essential. Comparing bank 2's displayed percentage with a general expectation about “open” and “closed” can reverse the intended meaning. Preserve the convention, command and jammed-state result together whenever the diagnostic equipment provides them.

## Eligibility limits the conclusion

The source requires CSERS operation and an active actuator, with valid supporting states. It excludes the actuator test, first end-stop learning and power-stage disabling conditions. A warm-engine test performed outside that strategy can show movement without proving that the original monitor passed.

Several enable fields are imperfectly documented, including a greater-than-TRUE offset-learning expression and awkwardly aligned continuation text. These are not repaired by inventing a universal test sequence. Use the exact service routine to resolve the operating conditions and examine the actuator safely. The code describes a tracking judgement under a particular strategy; it does not identify a replacement assembly or justify forcing the linkage by hand.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 870](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=870). [GM PDF, page 871](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=871). [GM PDF, page 872](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=872).
