---
{"entryId":"generic-p0ae2","code":"P0AE2","title":"P0AE2: precharge path appears closed from the bus-to-battery ratio","description":"The GM P0AE2 monitor evaluates residual bus voltage after specified contactor and precharge-off conditions.","status":"draft","sourceReview":"checked","scope":"Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[554]}],"authoringBatch":"batch-25"}
---

# P0AE2: precharge path appears closed from the bus-to-battery ratio

P0AE2 in the cited GM hybrid table is labeled a precharge contactor stuck-closed result. The strategy specifically refers to the precharge FET and compares high-voltage bus voltage with battery voltage under a defined switching arrangement.

## The voltage ratio only has meaning in context

The positive contactor must have been open and the precharge FET off for the specified delay. The negative and multipurpose contactors must be in their required closed states, and the relevant voltage sensors must not have failed.

Under those conditions, a bus-to-battery ratio above the documented fraction is evidence for the monitored stuck-closed condition. A high ratio during normal energization would not be the same diagnostic observation.

## This is evaluated around a precharge event

The source describes the check as executed once per precharge event with a failed-sample requirement. Continuously watching the bus voltage after an unrelated event does not demonstrate that the controller repeated this monitor.

The generic word “contactor” in the code title should not be used to assume the exact physical switching technology. This row names a FET, so the vehicle's assembly and service procedure must be identified before choosing a repair.

The result does not authorize touching the bus or forcing contactor states. A qualified hybrid technician should retain the voltage ratio, sensor-validity information and commanded switch states, then follow the approved isolation and diagnostic sequence. Clearing the result cannot establish that the precharge path is electrically safe.

## Application limits

Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.

## Source

[15OBDG01 Hybrid Diagnostics](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=554), physical PDF pages 554.
