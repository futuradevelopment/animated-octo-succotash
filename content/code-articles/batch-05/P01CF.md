---
{"entryId": "generic-p01cf", "code": "P01CF", "title": "P01CF: cylinder 3 requires excessive positive SQP correction", "description": "Understand P01CF: cylinder 3 requires excessive positive sqp correction, with documented GM monitor criteria and diagnostic limits.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 04B diagnostic parameter document; the cited module and monitor only. Per-code vehicle, engine and calibration applicability is not established.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [1085, 1086]}], "authoringBatch": "batch-05"}
---

# P01CF: cylinder 3 requires excessive positive SQP correction

P01CF is the cylinder-3 over-retarded member of GM's SQP injection-drift strategy. The row checks calculated energizing-time correction above 100 microseconds or start-of-injection correction above five degrees. It can therefore identify a small-quantity delivery correction even when the generic title emphasizes timing.

## What is measured indirectly

The controller commands known small injections during diesel fuel cut-off. It infers injector behavior from the rail-pressure drop rather than directly measuring discharged fuel in a container. The pressure falling edge and crank-wheel speed also provide an estimate of injection-start angle.

Several injections and stepped energizing times form the evaluation. Relevant SQP quantity/timing enables, learning conditions, fuel-level checks and operating temperatures must be satisfied. The source uses Type B, two-trip reporting.

## A diagnostic consequence of the method

Because both quantity and timing estimates depend on the pressure response, preserve the associated rail-pressure and learning status as well as the cylinder-3 result. The code alone cannot prove whether the problem is a particular injector characteristic or another condition affecting valid evaluation.

Verification should demonstrate an eligible completed cylinder-3 SQP test with acceptable corrections. A short drive without a new code is inconclusive if learning did not run. Use the actual vehicle's professional fuel-system procedure; neither cylinder numbering nor the monitor threshold supplies an injector removal, adjustment or high-pressure test method.

## Source and applicability

[GM 04B, PDF page 1085](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1085); [GM 04B, PDF page 1086](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1086). This explanation covers the documented 2025 monitor. Confirm the vehicle's module, engine and calibration before applying these criteria; the document's vehicle list does not establish this code's applicability to every listed model.
