---
{"entryId":"generic-p0ad9","code":"P0AD9","title":"P0AD9: positive-contactor driver response does not match the command","description":"The GM P0AD9 control-circuit monitor checks positive-contactor driver feedback and explicitly excludes detection of one fault class.","status":"draft","sourceReview":"checked","scope":"Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[554]}],"authoringBatch":"batch-25"}
---

# P0AD9: positive-contactor driver response does not match the command

P0AD9 in the cited GM hybrid table concerns the positive battery-contactor control circuit. The controller compares the commanded driver state with the observed circuit response, using voltage feedback when off and current feedback for an on-state open-load check.

## Circuit integrity is not contact position

This monitor evaluates the control side. The same document separately monitors whether a contactor is stuck closed by comparing bus and battery voltage. A driver-circuit result therefore should not be treated as direct proof that the high-voltage contacts are welded or physically open.

The strategy explicitly states that this check cannot detect a short-to-ground fault. That limitation matters: absence of P0AD9 does not establish that every possible circuit defect has been excluded.

## Match feedback to the commanded state

An off-state voltage observation and an on-state current observation answer different questions. Preserve the command when reviewing the feedback; one unexplained reading cannot reconstruct the monitor's decision.

GM requires adequate 12-volt supply and counts repeated failures over its defined sample window. The row uses a one-trip classification for the positive-contactor result.

The source does not identify a failed coil, harness segment or controller driver. Physical testing must follow the high-voltage isolation and control-circuit procedure for the vehicle. Do not energize or bridge a contactor experimentally. Verify both valid driver response and any separate contactor-state checks required by the service instructions after the demonstrated defect is repaired.

## Application limits

Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.

## Source

[15OBDG01 Hybrid Diagnostics](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=554), physical PDF pages 554.
