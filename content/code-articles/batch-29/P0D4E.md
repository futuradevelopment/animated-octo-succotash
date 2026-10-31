---
{"entryId":"generic-p0d4e","code":"P0D4E","title":"P0D4E: very low high-voltage charger output is a reported sensor condition","description":"GM P0D4E evaluates the high-voltage charger output-voltage sensor only with the specified internal controllers awake.","status":"draft","sourceReview":"checked","scope":"GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[719]}],"authoringBatch":"batch-29"}
---

# P0D4E: very low high-voltage charger output is a reported sensor condition

P0D4E is the low-range check for the charger's hybrid/EV battery output-voltage sensor. The monitored quantity is the charger's reported high-voltage DC output, not the auxiliary battery voltage or an estimate of battery capacity.

## Two controller states qualify the reading

The cited table requires the low-voltage secondary microcontroller and the high-voltage microcontroller to be awake. A failure is a sensor reading at or below 2.62 V for 400 milliseconds within a 500-millisecond window. The pass branch calls for a reading above 2.62 V for 500 milliseconds.

That near-zero boundary identifies the documented sensor-range condition. It is not a target pack voltage, a state-of-charge threshold or a safe-to-touch indication. The source classifies the diagnostic as one-trip Type A.

## Do not turn a code into an isolation test

Keep the voltage report with the two controller states and relevant reference-voltage faults. A recorded low value does not prove that the physical high-voltage circuit is de-energized; an inaccurate measurement is among the possibilities that still require the correct diagnostic procedure.

Nor does this row determine whether the battery, charger or a connection has failed. It contains monitor criteria rather than a component-level repair sequence. Investigation must use the vehicle-specific procedure and trained high-voltage personnel. Clearing the fault and seeing a larger scan value later does not by itself verify the measurement path or establish that the original operating conditions have been reproduced.

## Source and applicability

GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.

[General Motors source, physical page 719](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=719)
