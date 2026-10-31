---
{"entryId":"generic-p0d6b","code":"P0D6B","title":"P0D6B: low compressor voltage is evaluated after contactor closure","description":"GM P0D6B includes a contactor-settling condition and a separate recovery boundary, so a low reading during isolation is not the same test.","status":"draft","sourceReview":"checked","scope":"GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[712]}],"authoringBatch":"batch-29"}
---

# P0D6B: low compressor voltage is evaluated after contactor closure

P0D6B addresses low high-voltage input to the electric A/C compressor in this GM calibration. The controller does not evaluate an arbitrary voltage reading without context: the contactor state and the validity of the battery reference are part of the monitor.

## Confirm the supply was expected to be present

The table requires the high-voltage battery contactor to have been closed for 6.2 seconds, with its relevant fault inactive. It also requires a healthy battery-voltage reference and a compressor voltage reading within 15 V of that reference. System voltage must exceed 10.25 V, with Accessory or Run/Crank active.

The failure boundary is 190 V or less for 30 failed samples out of 60 at a 50-millisecond rate. Recovery uses a different boundary, at least 200 V. After failure, the compressor speed request must go to zero before passing is enabled.

## Preserve timing as well as voltage

A technician needs the closure history, compressor request and both voltage reports. A value collected before the contactor-settling condition is satisfied does not reproduce the documented failure evaluation. Similarly, crossing 190 V upward does not automatically satisfy the recovery branch.

This code does not establish which component caused the low report. The table supplies no bypass test or compressor replacement instruction. Use vehicle-specific diagnostics to distinguish actual supply behavior from measurement issues, and leave physical high-voltage investigation to trained personnel using the required safety procedure.

## Source and applicability

GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.

[General Motors source, physical page 712](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=712)
