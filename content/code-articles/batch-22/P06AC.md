---
{"entryId": "generic-p06ac", "code": "P06AC", "title": "P06AC: Powerup temperature plausibility depends on two independent differences", "description": "Understand the GM P06AC powerup-temperature correlation monitor and its temperature-dependent comparison limits.", "status": "draft", "sourceReview": "needs-review", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [206, 207]}], "authoringBatch": "batch-22"}
---

# P06AC: Powerup temperature plausibility depends on two independent differences

P06AC is assigned to the TCM powerup-temperature sensor's range/performance check. In this table the controller compares that measurement with transmission fluid temperature and substrate temperature. The fault is about disagreement between measurements, rather than simply crossing an extreme electrical limit.

## Both reference temperatures matter

GM supplies separate temperature-dependent allowances for the two differences. The correlation must remain outside the required relationship for more than 300 seconds. Looking at just the fluid comparison would leave part of the documented decision unevaluated.

The monitor requires a transmission state other than park or neutral and acceptable supporting signals. A low-speed, higher-accelerator combination temporarily disables it, with a separate delay before it resumes. These conditions explain why a short stationary comparison may provide useful observations without reproducing the monitor itself.

## Preserve which sensor is being discussed

Record powerup, substrate and fluid temperatures together, with range and supporting speed-signal status. Avoid renaming all three as “TCM temperature”: that loses the identity needed to interpret the two comparisons.

The recovery text crosses the page boundary and names the substrate temperature even though this entry targets the powerup sensor. That wording is unresolved here, so no exact repair-confirmation rule is inferred from it. The source supports the failure comparison but does not identify which physical sensor or circuit caused the disagreement. Use the matching transmission service information before selecting a component-level repair.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 206](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=206). [GM PDF, page 207](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=207).
