---
{"entryId": "generic-p01bd", "code": "P01BD", "title": "P01BD: oil-temperature sensor B fails the cumulative-change check", "description": "Understand P01BD: oil-temperature sensor b fails the cumulative-change check, with documented GM monitor criteria and diagnostic limits.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 04B diagnostic parameter document; the cited module and monitor only. Per-code vehicle, engine and calibration applicability is not established.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [476]}], "authoringBatch": "batch-05"}
---

# P01BD: oil-temperature sensor B fails the cumulative-change check

P01BD monitors intermittent engine-oil-temperature sensor B behavior by summing absolute changes between consecutive readings. The source calls that sum temperature-signal string length and sets its boundary at 10°C or more. A net temperature change near zero does not exclude failure because upward and downward movements both add to the sum.

## A condition specific to this row

Alongside the string-length threshold, the table requires EngOilTempFA to be false. That named fault-status condition is part of the documented decision and should not be silently omitted when comparing this result with another oil-temperature monitor. The page does not fully define every dependency behind that status.

The diagnostic is enabled continuously in this summary and uses four failures out of five samples, sampled every two seconds. Reporting is Type B, two trips.

## Reading a useful trace

Preserve sensor B's sequence of values rather than only its minimum and maximum. Several modest oscillations can accumulate enough movement even without a dramatic one-sample spike. That is the practical implication of summing absolute differences.

Verification should show credible sensor-B evolution with the required fault status clear during an eligible evaluation. The result cannot establish rapid physical oil-temperature cycling or identify a specific bad connection. The actual vehicle's input mapping and circuit tests remain necessary before a repair decision.

## Source and applicability

[GM 04B, PDF page 476](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=476). This explanation covers the documented 2025 monitor. Confirm the vehicle's module, engine and calibration before applying these criteria; the document's vehicle list does not establish this code's applicability to every listed model.
