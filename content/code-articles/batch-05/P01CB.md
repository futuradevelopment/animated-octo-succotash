---
{"entryId": "generic-p01cb", "code": "P01CB", "title": "P01CB: cylinder 1 shows positive drift in the small-injection test", "description": "Understand P01CB: cylinder 1 shows positive drift in the small-injection test, with documented GM monitor criteria and diagnostic limits.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 04B diagnostic parameter document; the cited module and monitor only. Per-code vehicle, engine and calibration applicability is not established.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [1077, 1078]}], "authoringBatch": "batch-05"}
---

# P01CB: cylinder 1 shows positive drift in the small-injection test

P01CB identifies excessive positive injection quantity and/or timing drift for cylinder 1 in GM's SQP small-quantity injection strategy. Although the title says “over retarded,” the documented monitor can also fail for an energizing-time correction; it is broader than a timing-angle-only result.

## How the controller obtains the evidence

During diesel fuel cut-off, the controller commands a known small injection and evaluates the rail-pressure drop. The pressure response estimates quantity behavior. The falling edge identifies injection start, which is converted to crank angle using crank-wheel speed. Multiple injections allow the strategy to estimate correction and angular drift.

The row lists a calculated energizing-time delta above 100 microseconds or a start-of-injection delta above five degrees. SQP quantity or timing diagnosis and learning conditions must be enabled, with fuel-level, temperature and speed conditions also satisfied. Reporting is Type B, two trips.

## The important diagnostic distinction

Determine whether cylinder 1 failed the quantity-related correction or angular-timing branch. That distinction changes what additional evidence is useful; neither branch alone establishes a mechanical timing-system failure.

Verification requires a completed eligible SQP evaluation for cylinder 1. Ordinary smooth idle or erasing the fault does not demonstrate that this small-injection test passed. The source does not provide an injector adjustment or high-pressure probing procedure; apply the vehicle-specific professional fuel-system diagnosis before selecting a part.

## Source and applicability

[GM 04B, PDF page 1077](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1077); [GM 04B, PDF page 1078](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1078). This explanation covers the documented 2025 monitor. Confirm the vehicle's module, engine and calibration before applying these criteria; the document's vehicle list does not establish this code's applicability to every listed model.
