---
{"entryId":"generic-p0a0d","code":"P0A0D","title":"P0A0D: interlock feedback is high under one of two source states","description":"GM P0A0D compares sensed interlock voltage with different limits depending on whether the source is active or inactive.","status":"draft","sourceReview":"checked","scope":"Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[553]}],"authoringBatch":"batch-25"}
---

# P0A0D: interlock feedback is high under one of two source states

P0A0D in the cited GM hybrid summary is a high-feedback interlock diagnosis. It evaluates two cases: the source is inactive and the sensed fraction remains too high, or the source is active and the sensed fraction exceeds that state's separate upper limit.

## One voltage limit cannot describe both cases

The published thresholds differ between the sourced and unsourced states. A technician who records only the sensed reading, without the source command, cannot identify which comparison produced the fault.

The source also gives different failed-sample counts for those two branches. The complete monitor therefore includes command state, signal level and persistence; it is not simply an instantaneous “voltage present” check.

## High feedback is not high-voltage bus measurement

The interlock sensing circuit uses a low-voltage reference in this table. Its diagnostic result does not measure traction-battery terminal voltage and does not certify that opening a connector is safe. The high-voltage isolation and verification procedure remains separate.

The row requires adequate 12-volt supply and identifies a one-trip reporting classification. Preserve any supporting supply faults and the controller that reported the interlock result.

This summary supplies no connector locations or approved bypass procedure. A qualified technician should use the vehicle-specific interlock diagnosis to determine where the sensed state diverges from the command. Defeating the interlock would conceal the very condition being monitored and cannot serve as repair verification.

## Application limits

Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.

## Source

[15OBDG01 Hybrid Diagnostics](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=553), physical PDF pages 553.
