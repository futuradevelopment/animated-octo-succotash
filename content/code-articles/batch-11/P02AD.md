---
{"entryId":"generic-p02ad","code":"P02AD","title":"P02AD: Cylinder 5 misfire evidence must be paired with rail-control status","description":"P02AD is a cylinder 5 injector-leakage inference whose pressure-control requirement matters as much as the misfire count.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG07A Part 2, specific documented monitor only. Vehicle, engine and calibration applicability require confirmation; application-matrix filename join is unresolved.","sourceIds":["gm-2025-07a-2"],"sourcePages":[{"sourceId":"gm-2025-07a-2","pages":[707]}],"authoringBatch":"batch-11"}
---

# P02AD: Cylinder 5 misfire evidence must be paired with rail-control status

P02AD concerns suspected injector leakage on cylinder 5. The GM table requires both a cylinder-specific combustion problem and a rail-pressure-control minimum error. Treating the code as merely another name for a cylinder 5 misfire would omit half of the diagnostic logic.

## The paired observations

The documented counter boundary is more than 100 misfires for cylinder 5. The pressure-control minimum-error status must also be set. Neither a shared rail complaint with no cylinder evidence nor an isolated misfire count fully reproduces this combination.

The monitor has a five-second interval and two-trip reporting. It runs only within the specified engine-speed window above 1,520 and below 6,000 rpm, with relative air charge below 100 percent and no injector electrical failure. Statistical inhibition must also be absent.

## Preserve shared and local information

Rail control is shared system evidence; the misfire counter localizes the monitored pattern to cylinder 5. Reviewing both together helps avoid assigning every rail-pressure complaint to this injector. If several cylinders show similar patterns, that broader context should remain visible rather than being discarded after reading one code.

The source supports a failure-open hypothesis, not a confirmed leaking component. Cylinder numbering and the approved confirmation method depend on the actual engine. High-pressure fuel equipment should be evaluated through the appropriate service process; the summary does not support improvised opening, spraying or swapping tests.

## Source and applicability

This explanation covers the cited GM monitor, not every vehicle carrying this code. The application-matrix filename does not resolve cleanly to this file, so no model or engine fitment is assigned. [GM diagnostic table, PDF page 707](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=707).
