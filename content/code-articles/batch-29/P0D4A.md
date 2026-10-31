---
{"entryId":"generic-p0d4a","code":"P0D4A","title":"P0D4A: high charger low-voltage output current requires context","description":"The GM P0D4A example detects a high low-voltage output-current report while the secondary charger controller is awake.","status":"draft","sourceReview":"checked","scope":"GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[718]}],"authoringBatch":"batch-29"}
---

# P0D4A: high charger low-voltage output current requires context

P0D4A evaluates the high end of the charger's low-voltage output-current measurement. It does not measure traction-battery charging current: that is a separate high-voltage output path with its own diagnostic limits.

## A current boundary and an observation window

The cited monitor fails when low-voltage DC current is reported at 54 A or more for 400 milliseconds in a 500-millisecond window. Its prerequisite is an awake low-voltage secondary microcontroller. The stated pass condition is below 54 A for 500 milliseconds, and the fault is classified as one-trip Type A.

Those facts define the controller's evaluation. They do not establish a maximum permissible accessory load for every vehicle or identify a safe current rating for a cable. The measurement belongs to this charger calibration and must be interpreted accordingly.

## Decide whether the signal represents the output

A useful diagnostic record pairs the output-current report with the operating state and other charger electrical faults. The next distinction is whether the actual output behavior supports that report or whether the sensing path needs investigation under the applicable procedure.

The source does not assign a failed converter, battery or accessory as the cause. It also does not authorize disconnecting loads to experiment with the threshold. Qualified testing must account for the charger assembly's high-voltage hazards, despite the low-voltage name of this output. Preserve the original event information before a reset obscures the state in which the excessive current was reported.

## Source and applicability

GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.

[General Motors source, physical page 718](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=718)
