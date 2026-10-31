---
{"entryId": "generic-p2a0b", "code": "P2A0B", "title": "P2A0B: Bank 2 manifold pressure that fails a plausibility check", "description": "P2A0B evaluates manifold-pressure plausibility and variation rather than the simple voltage limits used by adjacent codes.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [633]}], "authoringBatch": "batch-16"}
---

# P2A0B: Bank 2 manifold pressure that fails a plausibility check

P2A0B concerns the bank 2 intake-manifold pressure signal in this GM monitor. The dictionary's sensor B wording is mapped by this particular source to bank 2; that association should not be generalized to every engine using the code.

## Three plausibility routes

The table gives three separate reasons for the controller to report P2A0B: a high cross-check failure, a low cross-check failure and a signal-variation failure. Each is represented as a fault state from its respective evaluation. The row does not publish the underlying pressure-difference tolerance, reference model or variation amplitude.

That limitation is useful diagnostically. A voltage that appears within the electrical range does not demonstrate that pressure is plausible or responsive. Conversely, calling the sensor faulty solely because manifold pressure differs between operating conditions overlooks that real pressure is expected to change.

## Evidence that separates the possibilities

Record which plausibility subtest failed if enhanced diagnostic data provides it, together with pressure behaviour during the relevant event. A cross-check disagreement and insufficient variation point to different questions: whether the value agrees with the controller's comparison, and whether it responds as expected.

The adjacent P2A0C and P2A0D rows are explicit low/high voltage checks. They must not be substituted for the unpublished P2A0B limits. The monitor also refers to separate enable and inhibit tables, so a clean code list after clearing is not proof of a completed evaluation. Obtain the application-specific diagnostic routine before selecting physical tests or replacing parts.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 633](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=633).
