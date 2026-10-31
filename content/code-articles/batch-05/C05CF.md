---
{"entryId": "generic-c05cf", "code": "C05CF", "title": "C05CF: position sensor B changes implausibly or fails zero learning", "description": "Understand C05CF: position sensor b changes implausibly or fails zero learning, with documented GM monitor criteria and diagnostic limits.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 04B diagnostic parameter document; the cited module and monitor only. Per-code vehicle, engine and calibration applicability is not established.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [316, 318]}], "authoringBatch": "batch-05"}
---

# C05CF: position sensor B changes implausibly or fails zero learning

C05CF includes more than one position-sensor-B plausibility check in this GM brake-controller document. The cited step-error row examines PTS2 changing faster than 700 mm/s while disagreeing with PTS1 and with pressure-based expectations. A separate page assigns the same code to an excessive learned PTS2 zero offset.

## Why the companion signals matter

The step check does not fail solely because PTS2 moves quickly. It also requires PTS1 and PTS2 disagreement and a pattern in which the PTS1-based model agrees with SCP pressure while the PTS2-based model does not. The signal must be valid, and maturation is listed as 50 milliseconds.

The offset branch instead checks an absolute PTS2 offset above 2.5 mm after learning. Learning depends on vehicle movement, acceleration and no driver braking. These branches support different investigations: dynamic signal inconsistency versus an unacceptable learned reference.

## Verification

Preserve the full failure subtype, companion-position behavior and pressure comparison rather than diagnosing from Sensor B alone. A stable present-time value does not disprove a prior rapid step, and an erased code does not show that zero learning passed.

Use the vehicle-specific professional brake procedure to verify the relevant branch and system operation. The source does not identify a universal sensor location or supply a safe manual adjustment, pressure-test or replacement instruction.

## Source and applicability

[GM 04B, PDF page 316](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=316); [GM 04B, PDF page 318](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=318). This explanation covers the documented 2025 monitor. Confirm the vehicle's module, engine and calibration before applying these criteria; the document's vehicle list does not establish this code's applicability to every listed model.
