---
{"entryId": "generic-p2cb9", "code": "P2CB9", "title": "P2CB9: fan 2 runs below a modeled speed expectation", "description": "P2CB9 detects fan 2 speed below a modeled expectation that accounts for command, voltage and response delays.", "status": "draft", "sourceReview": "checked", "scope": "Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [880, 881]}], "authoringBatch": "batch-09"}
---

# P2CB9: fan 2 runs below a modeled speed expectation

P2CB9 is an underspeed-performance diagnosis for cooling fan 2. The controller converts fan command to an expected speed, then accounts for startup and ramp delays, rate limits and supply-voltage effects. It compares measured speed with that model using a calibrated low-side margin.

## A commanded percentage is not the whole target

The modeled expectation matters during transitions. Comparing actual rpm instantly with a new command can falsely suggest a problem before the allowed startup or ramp period has elapsed. The published table also requires fan speed at least 580 rpm, so the row should not be generalized into a universal stopped-fan diagnostic.

The decision requires 16 failing observations out of 20 samples, each one second apart. Fan 2 must be commanded on, voltage in range and LIN-based fan operation enabled. The monitor excludes active fan-2 communication loss, continuous-operation faults and out-of-range high/low speed faults.

## Read performance separately from communication

A valid but insufficient speed response differs from missing speed data. Investigate those underlying fault states before evaluating the modeled performance comparison. The continuation states that, after the first diagnostic activation in a key cycle, the fan is held commanded on long enough to permit a decision; prolonged commanded operation can therefore be part of evaluation.

Verification should demonstrate measured speed following the model under qualified commands and voltage. The table does not publish a single universal rpm deficit or establish that the motor, controller or airflow path is the failed component.

## Source and applicability

Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately. [GM monitor table, PDF page 880](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=880); [GM monitor table, PDF page 881](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=881).
