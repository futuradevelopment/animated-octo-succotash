---
{"entryId": "generic-p03ef", "code": "P03EF", "title": "P03EF: Unexpected movement on intake profile C must be tied to the absent command", "description": "Learn how GM P03EF evaluates uncommanded profile-pin feedback and why a static position reading cannot establish this event.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 03B documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file.", "sourceIds": ["gm-2025-03b"], "sourcePages": [{"sourceId": "gm-2025-03b", "pages": [441]}], "authoringBatch": "batch-17"}
---

# P03EF: Unexpected movement on intake profile C must be tied to the absent command

P03EF carries a bank 1 intake profile-actuator C performance/stuck-off description. The cited GM strategy for intake profile actuator 3 instead looks for a pin firing without a command. The useful diagnostic question is therefore whether movement occurred at the wrong time, not merely whether a pin was found extended.

## The feedback sequence supplies the evidence

The monitor divides the feedback into extending, extended and retracted regions. It detects an extension-region crossing while the corresponding command is absent. The same feedback region reached during an intended shift would answer a different question.

The row gives numerical boundaries for those regions without clearly stating physical units. This article does not convert them into volts, millimetres or a duty-cycle test. The supported relationship is between observed state progression and the missing request.

## Verify the event conditions and channel

The engine must be running, system voltage must exceed 11 V and the diagnostic must be enabled. Four incorrect observations within five cylinder events confirm the condition. Preserve the event sequence for actuator 3 rather than borrowing a healthy response from another profile output.

A single screenshot after the transition loses the evidence that the movement was uncommanded. The generic label and the GM strategy also need the exact vehicle interpretation before hardware conclusions are drawn. The source cannot separate false position feedback from actual unwanted pin movement or justify mechanically forcing the actuator.

## Source and applicability

2025 GM 03B documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file. [GM PDF, physical page 441](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=441).
