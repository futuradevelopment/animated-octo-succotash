---
{"entryId": "generic-p2c9b", "code": "P2C9B", "title": "P2C9B: Bank 1 wastegate tracking during cold-start emissions control", "description": "P2C9B covers jammed-open and jammed-closed checks during the documented cold-start emissions-reduction mode.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [868, 869, 870]}], "authoringBatch": "batch-16"}
---

# P2C9B: Bank 1 wastegate tracking during cold-start emissions control

P2C9B evaluates wastegate bank 1 during the cold-start emissions-reduction strategy, abbreviated CSERS in the source. Both jammed-open and jammed-closed routes share this code. The label alone therefore does not establish which end of travel the controller considered problematic.

## Position convention changes the comparison

The table explicitly branches according to whether zero-percent actuator position represents closed. The same numerical position can consequently be interpreted differently depending on that configured convention. It would be incorrect to declare every reading below fifty percent closed without first checking the convention used by the application.

The jammed-valve monitor also uses governor deviation outside plus or minus forty percent, with greater-than-one-second qualifications. It requires a valid disturbance-pressure state, no system error or power-stage disable condition, and excludes an active actuator test or initial end-stop learning.

## Verify the relevant operating mode

CSERS must be active for this code's documented check. A normal warm-engine movement test does not by itself demonstrate success of the cold-start strategy's monitor. Capture the mode, position convention, requested/actual movement and jammed-state information if available.

The source includes an unexplained greater-than-TRUE comparison for environmental-pressure offset learning. That Boolean-looking entry is not translated into a numeric test here. Obtain the application routine for the exact enable sequence and physical checks. The monitor supports a tracking-failure investigation; it does not automatically prove a frozen actuator, damaged turbocharger or need for mechanical adjustment.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 868](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=868). [GM PDF, page 869](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=869). [GM PDF, page 870](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=870).
