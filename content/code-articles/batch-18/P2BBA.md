---
{"entryId":"generic-p2bba","code":"P2BBA","title":"P2BBA: Sensor 6’s implausible temperature jump uses its own response model","description":"See how P2BBA distinguishes excessive signal movement from a steady high or low temperature reading.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-03b"],"sourcePages":[{"sourceId":"gm-2025-03b","pages":[894,895,896]}],"authoringBatch":"batch-18"}
---

# P2BBA: Sensor 6’s implausible temperature jump uses its own response model

P2BBA concerns erratic coolant-temperature feedback for logical sensor 6. The GM algorithm calculates an acceptable next-reading band from the preceding value and a configured response time. Its target is physically implausible change, so a reading does not have to be outside the total temperature range to fail.

## The logical sensor uses a separate input calibration

In this file, coolant sensor 6 maps to the seventh configured temperature input. Its listed time constant is five seconds. The nearby sixth input has a different logical assignment and time constant, which must not be substituted merely because the code names sensor 6.

The document’s worked example uses a ten-second model and different endpoint values. That example explains the concept; its resulting bounds are not this sensor’s actual calibration.

## A sequence is more informative than a snapshot

The diagnostic considers an upward change above its calculated high bound or a downward change below its calculated low bound. Relevant active high/low circuit faults are excluded, and failure is required for five seconds within a six-second window.

Retain consecutive readings, the sample context and the configured channel. A smooth-looking value after the event cannot reconstruct the failed change. The code establishes that the reported signal moved too quickly for its model, but does not prove a real coolant-temperature swing or identify an intermittent wire. Those conclusions need the applicable circuit investigation.

## Source and applicability

2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG03B, PDF page 894](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=894). [25OBDG03B, PDF page 895](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=895). [25OBDG03B, PDF page 896](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=896).
