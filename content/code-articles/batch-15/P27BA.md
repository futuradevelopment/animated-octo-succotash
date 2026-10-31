---
{"entryId":"generic-p27ba","code":"P27BA","title":"P27BA: A stuck-on shift valve is inferred from two rods moving differently","description":"P27BA uses unintended movement and relaxation around a selector change to diagnose shift solenoid two hydraulically stuck on.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG07A Part 2 documented monitor only; its application-matrix filename join is unresolved. No model, engine or universal calibration applicability is inferred.","sourceIds":["gm-2025-07a-2"],"sourcePages":[{"sourceId":"gm-2025-07a-2","pages":[1020,1021]}],"authoringBatch":"batch-15"}
---

# P27BA: A stuck-on shift valve is inferred from two rods moving differently

P27BA corresponds to shift solenoid two hydraulically stuck on in the cited transmission. The controller watches rods one and two during and shortly after a selector-position change. Pressure that remains applied can move one rod unintentionally while the other relaxes as the hydraulic routing changes.

## The movement pattern is the evidence

The table combines at least 1,000 micrometres of unintended movement on one rod with at least 125 micrometres of relaxation on its partner. Which rod plays each role changes with the selector target. The observation window is within 200 ms of the selector command change.

Both rod-force targets must be zero, and relevant position-sensor and valve electrical faults must be absent. Thus ordinary commanded rod travel is not equivalent to this stuck-on pattern.

## Verification must preserve both channels

Capture the selector transition and both rod responses together. One moving position trace alone loses the corroborating relaxation evidence. The source’s generic solenoid-N label is mapped to shift solenoid two only for this implementation. It does not identify a universal transmission component location. The summary explains the hydraulic inference but is not a procedure for manually forcing selector changes or replacing a valve without the applicable service tests.

## Document scope and source

2025 GM 25OBDG07A Part 2 documented monitor only; its application-matrix filename join is unresolved. No model, engine or universal calibration applicability is inferred. These figures explain the cited controller logic, not a vehicle-specific repair instruction. Match the vehicle’s service information before applying them.

[GM physical PDF page 1020](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=1020), [GM physical PDF page 1021](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=1021).
