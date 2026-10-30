---
{"entryId": "generic-p01ce", "code": "P01CE", "title": "P01CE: the SQP test finds cylinder 2 drift in the advanced direction", "description": "Understand P01CE: the sqp test finds cylinder 2 drift in the advanced direction, with documented GM monitor criteria and diagnostic limits.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 04B diagnostic parameter document; the cited module and monitor only. Per-code vehicle, engine and calibration applicability is not established.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [1083, 1084]}], "authoringBatch": "batch-05"}
---

# P01CE: the SQP test finds cylinder 2 drift in the advanced direction

P01CE is the negative-drift diagnostic for injector 2 in this GM SQP family. The source describes excessive negative correction in energizing time or injection angle. Its shared method uses controlled small injections during diesel fuel cut-off, then analyzes the resulting rail-pressure drop.

## Why a timing label can involve quantity

Pressure-drop magnitude helps estimate the energizing-time correction needed for the intended small quantity. The pressure falling edge separately establishes injection-start timing, converted to angle with crank-wheel speed. Either calculation can contribute to the diagnostic result; a timing label alone does not identify which branch failed.

The learning conditions and relevant fuel, temperature and speed gates must be satisfied. The source lists Type B, two-trip reporting and describes completion or resumption of the stepped evaluation.

## Do not invent the sign convention

The narrative says negative drift, but the displayed thresholds use positive greater-than notation without defining the transformation. Consequently, this article does not turn those numbers into a signed cylinder-2 adjustment specification. That unresolved presentation is recorded for source review.

Keep the detailed quantity/timing result and monitor-completion status. An idle check cannot reproduce a controlled fuel-cut-off learning test. Verification and any injector work require the vehicle-specific professional procedure and calibration; the DTC does not by itself prove a failed injector or a global engine-timing error.

## Source and applicability

[GM 04B, PDF page 1083](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1083); [GM 04B, PDF page 1084](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1084). This explanation covers the documented 2025 monitor. Confirm the vehicle's module, engine and calibration before applying these criteria; the document's vehicle list does not establish this code's applicability to every listed model.
