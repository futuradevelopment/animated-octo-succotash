---
{"entryId": "generic-p05ce", "code": "P05CE", "title": "P05CE: Exhaust cam error during catalyst warmup needs its own timing window", "description": "Understand GM P05CE cold-start exhaust timing monitoring, including stable commands and the distinction between an inhibited test and a passing one.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 03B documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file.", "sourceIds": ["gm-2025-03b"], "sourcePages": [{"sourceId": "gm-2025-03b", "pages": [519]}], "authoringBatch": "batch-17"}
---

# P05CE: Exhaust cam error during catalyst warmup needs its own timing window

P05CE identifies cold-start exhaust camshaft timing performance on bank 1. The cited GM strategy evaluates position error when the cold-start phaser positions are being commanded, rather than judging every exhaust cam movement throughout the drive.

## Command stability determines whether the comparison is useful

The monitor compares the absolute difference between desired and actual cam position with a six-degree limit. Both positions must be inside the documented six-to-thirty-two-degree operating window. The desired position must have varied by less than three degrees for a calibration-defined interval before the comparison qualifies.

Exhaust phaser enablement, a running engine and catalyst warmup are required. Supply must exceed 11 V and power take-off operation must be inactive. Existing exhaust actuator circuit faults can inhibit the test, so a missing performance result during such a fault is not proof that timing control passed.

## Verify the original cold-start condition

The table uses sixty-five failed samples within seventy-five, sampled at 100-millisecond intervals, with two-trip reporting. A useful record retains the warmup phase, requested angle, measured angle and command-stability state together.

If timing follows normally once warmup has ended, that observation does not reproduce this particular test. Likewise, a deviation during an intentionally changing request may fall outside its stated comparison window. The monitor supports investigation of eligible target-tracking error; it does not identify a particular exhaust phaser, oil path or mechanical timing component as the cause without further service checks.

## Source and applicability

2025 GM 03B documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file. [GM PDF, physical page 519](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=519).
