---
{"entryId": "generic-p01cc", "code": "P01CC", "title": "P01CC: cylinder 1 has negative SQP injection drift", "description": "Understand P01CC: cylinder 1 has negative sqp injection drift, with documented GM monitor criteria and diagnostic limits.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 04B diagnostic parameter document; the cited module and monitor only. Per-code vehicle, engine and calibration applicability is not established.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [1079, 1080]}], "authoringBatch": "batch-05"}
---

# P01CC: cylinder 1 has negative SQP injection drift

P01CC is the cylinder-1 negative-drift result in this GM small-quantity injection strategy. The narrative identifies excessive negative drift in energizing time or injection angle, matching the over-advanced title. It does not limit the failure to a measured angular advance alone.

## Pressure information supports two calculations

During diesel fuel cut-off, controlled small injections produce a rail-pressure drop. The drop magnitude informs quantity correction, while its falling-edge position helps determine injection start. Crank-wheel speed converts that timing to angle, and several injections support the final assessment.

This is a shared SQP strategy with cylinder-specific results. The applicable learning, temperature, speed and low-fuel prerequisites must be met, and the source uses Type B, two-trip reporting.

## Signed-threshold limitation

The table prints positive greater-than thresholds while the narrative explicitly describes negative drift. It does not explain whether those numbers represent magnitudes or a transformed diagnostic variable. This article therefore does not prescribe a signed numeric test from that presentation and remains marked for source review.

Preserve whether the energizing-time or angular branch failed on cylinder 1. Verification should include a completed eligible SQP result with the proper vehicle calibration; normal idle is insufficient. The monitor does not establish an injector replacement, and high-pressure fuel work must follow the professional service procedure.

## Source and applicability

[GM 04B, PDF page 1079](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1079); [GM 04B, PDF page 1080](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1080). This explanation covers the documented 2025 monitor. Confirm the vehicle's module, engine and calibration before applying these criteria; the document's vehicle list does not establish this code's applicability to every listed model.
