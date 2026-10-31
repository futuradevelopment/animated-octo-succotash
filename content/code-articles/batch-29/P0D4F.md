---
{"entryId":"generic-p0d4f","code":"P0D4F","title":"P0D4F: high charger battery-output voltage is not a battery-capacity test","description":"The GM P0D4F example detects a high charger output-voltage report with both relevant internal controllers awake.","status":"draft","sourceReview":"checked","scope":"GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[719]}],"authoringBatch":"batch-29"}
---

# P0D4F: high charger battery-output voltage is not a battery-capacity test

P0D4F concerns the voltage measurement on the charger's high-voltage battery output. It does not describe the nominal 14 V auxiliary output. Keeping those channels separate matters because the same charger document assigns very different limits to them.

## The monitored state is qualified

GM specifies a failure when the high-voltage DC sensor reading is at least 482 V for 400 milliseconds within a 500-millisecond window. Both the low-voltage secondary microcontroller and the high-voltage microcontroller must be awake.

The documented pass condition is a report below 482 V for 500 milliseconds. The row classifies this as a one-trip Type A diagnostic. These numbers describe a historical internal monitor; they are not a battery charging recommendation or a test-voltage setting.

## Determine what the high report represents

Preserve the output-voltage value, the two controller states and any related reference-voltage faults. A technician must distinguish genuinely excessive output from an inaccurate sensor report using the applicable vehicle procedure. The code itself does not settle that distinction.

The parameter sheet supplies no basis for concluding that battery capacity has deteriorated, that a particular cell is defective, or that charger replacement is mandatory. Those are different questions requiring additional evidence. A later normal scan value also does not explain the original event unless its operating conditions are understood. High-voltage circuits must be treated according to the vehicle's professional safety procedure; a diagnostic number never establishes that physical access is safe.

## Source and applicability

GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.

[General Motors source, physical page 719](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=719)
