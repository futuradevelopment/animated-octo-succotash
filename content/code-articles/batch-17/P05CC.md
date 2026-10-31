---
{"entryId": "generic-p05cc", "code": "P05CC", "title": "P05CC: Cold-start intake timing is compared only during a stable warmup command", "description": "Learn the command-stability and catalyst-warmup conditions behind GM P05CC and why warm-running timing agreement cannot verify this fault.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 03B documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file.", "sourceIds": ["gm-2025-03b"], "sourcePages": [{"sourceId": "gm-2025-03b", "pages": [518]}], "authoringBatch": "batch-17"}
---

# P05CC: Cold-start intake timing is compared only during a stable warmup command

P05CC concerns intake camshaft timing performance during cold start on bank 1. The GM monitor compares desired and actual position while the cold-start phaser command is active. Agreement after the engine has warmed does not by itself verify the operating window that produced this code.

## The controller waits for a suitable comparison

The documented failure is an absolute desired-versus-actual position error above six degrees. The monitor requires the intake phaser to be enabled, the engine running and catalyst warmup active. Power take-off operation is excluded, and system voltage must exceed 11 V.

The desired and measured positions must lie within the listed six-to-twenty-six-degree window. The desired position must also remain sufficiently stable: less than three degrees of variation for a calibration-defined interval. Comparing the actual cam against a rapidly changing request is therefore not the same test.

## Preserve cold-start timing history

The diagnostic counts sixty-five failures in seventy-five samples at a 100-millisecond task rate and uses two-trip reporting. Retain the requested position, actual position, warmup state and eligibility during the event. A later stable idle capture can miss both the request and the failure interval.

Related actuator circuit faults inhibit this assessment. Resolve whether the control system had valid electrical information before interpreting target error as a mechanical timing problem. The source does not establish a failed phaser, oil-control component or timing drive from P05CC alone; those require the vehicle-specific procedure.

## Source and applicability

2025 GM 03B documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file. [GM PDF, physical page 518](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=518).
