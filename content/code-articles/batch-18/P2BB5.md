---
{"entryId":"generic-p2bb5","code":"P2BB5","title":"P2BB5: Sensor 5 erratic temperature is a rate-of-change judgment","description":"Understand how P2BB5 uses a configurable sensor response model rather than one fixed temperature-jump threshold.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-03b"],"sourcePages":[{"sourceId":"gm-2025-03b","pages":[889,890,891]}],"authoringBatch":"batch-18"}
---

# P2BB5: Sensor 5 erratic temperature is a rate-of-change judgment

P2BB5 evaluates temperature changes that are faster than the configured sensor should physically report. GM calculates allowable bounds for the next sample from the previous reading and the sensor’s response model. A value can remain inside an ordinary temperature range and still change implausibly quickly.

## Use the correct configured input

The logical engine-coolant-sensor-5 function maps to the sixth input in this file’s configurable sensor system. That input uses a seven-second time constant in the displayed calibration. It must not be confused with the fifth numbered input merely because the DTC name contains “sensor 5.”

The supporting page also provides a generic worked example using a different time constant and endpoint limits. Its example numbers illustrate the calculation; they are not the actual pass/fail limits for this configured sensor.

## Preserve consecutive readings

Both an excessive upward step and an excessive downward step can trigger the erratic classification. The source requires five seconds of failure within six seconds and excludes relevant active circuit faults. Those distinctions separate implausible signal dynamics from an already identified high- or low-circuit problem.

Useful evidence includes the prior and next readings, sampling context and logical input assignment. A single plausible temperature after the event cannot reconstruct the failed rate comparison. The monitor does not prove a sudden coolant-temperature event or locate an intermittent connector; the correct vehicle procedure must establish the signal’s cause.

## Source and applicability

2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG03B, PDF page 889](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=889). [25OBDG03B, PDF page 890](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=890). [25OBDG03B, PDF page 891](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=891).
