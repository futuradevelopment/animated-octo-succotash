---
{"entryId":"generic-p2ba0","code":"P2BA0","title":"P2BA0: A pump underspeed label must be read through the reported-speed format","description":"Learn what P2BA0’s sample logic supports and why its negative published speed boundary needs interpretation before physical testing.","status":"draft","sourceReview":"needs-review","scope":"2025 GM 25OBDG04A documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-04a"],"sourcePages":[{"sourceId":"gm-2025-04a","pages":[665]}],"authoringBatch":"batch-18"}
---

# P2BA0: A pump underspeed label must be read through the reported-speed format

P2BA0 is the low-range result for the low-temperature coolant-loop pump’s reported speed. The GM table describes an out-of-range low failure, but the printed boundary is below −50 rpm. Without an explanation of the reporting format, that number cannot establish that the pump is physically rotating backward or define a normal stalled-pump reading.

## Separate reported data from mechanical speed

The negative boundary is retained as a source limitation. The article does not turn it into a positive threshold, a direction test or a reason to force the pump to run. A signed or diagnostic feedback value needs its actual service definition before it can be treated as a physical measurement.

The row does provide usable qualification information: pump hardware must be configured present, the pump and diagnostic enabled, and cranking absent. Certain low-circuit and response faults also affect eligibility.

## Preserve the repeated low result

Four failures out of five samples are required, with a one-second sample interval. That establishes persistence in the reported value; a single anomalous scan reading is different evidence. The two-trip reporting class is separate from this sample decision.

Record the exact speed parameter, its units or status encoding and the enable conditions. The summary does not establish coolant flow, identify a blocked pump or justify replacement. Resolving the feedback format is necessary before assigning a mechanical meaning to the low-range code.

## Source and applicability

2025 GM 25OBDG04A documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG04A, PDF page 665](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04A.pdf#page=665).
