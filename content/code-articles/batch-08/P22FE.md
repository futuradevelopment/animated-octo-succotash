---
{"entryId":"generic-p22fe","code":"P22FE","title":"P22FE: post-catalyst NOx sensing-cell self-test fails","description":"P22FE checks the post-catalyst NOx sensor cavities against an internal reference during a qualified afterrun test.","status":"draft","sourceReview":"needs-review","scope":"2025 GM 25OBDG04B diagnostic parameter file; the cited monitor is documented, but individual vehicle, engine and calibration applicability has not been established.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[1442,1443,1444,1445,1446]}],"authoringBatch":"batch-08"}
---

# P22FE: post-catalyst NOx sensing-cell self-test fails

P22FE is a sensing-element performance code for NOx sensor 2. The source describes a test intended to detect restricted measurement cavities that can reduce NOx sensitivity. It is an internal sensor test, rather than a direct comparison of upstream and downstream conversion efficiency.

## How the self-test works

The sensor changes internal current setpoints to create a defined oxygen condition in its second cavity. Its response is compared with a reference stored when the sensor was new. The reported diagnostic ratio fails above 125% or below 75%, with exponentially weighted filtering. The entry specifies Type A, one-trip reporting.

The full continuation matters: many driving conditions must first be satisfied, then the ECM requests the test at key-off. Sensor electrical and range faults, communication problems, unsuitable temperature or flow, and other aftertreatment faults can prevent the test. A normal running concentration reading is therefore not proof that this self-test completed.

## Interpreting an incomplete or failed result

Establish whether the afterrun test was requested and finished before judging a post-repair scan. Repeated key cycling alone does not reproduce the listed prerequisites. The document contains questionable units and thresholds in parts of the continuation, so it should not be converted into a do-it-yourself drive recipe. Use the exact service procedure for qualification and interpretation; the monitor description alone cannot prove the location or cause of a cavity restriction.

## Source and application limits

This explanation covers the cited 2025 GM monitor. Confirm the vehicle and calibration in its service information before applying these limits; inclusion in this file does not establish model compatibility. [GM diagnostic parameters, PDF page 1442](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1442). [GM diagnostic parameters, PDF page 1443](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1443). [GM diagnostic parameters, PDF page 1444](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1444). [GM diagnostic parameters, PDF page 1445](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1445). [GM diagnostic parameters, PDF page 1446](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1446).
