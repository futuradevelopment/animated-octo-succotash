---
{"entryId":"generic-p0ae4","code":"P0AE4","title":"P0AE4: precharge driver feedback is inconsistent with its command","description":"The GM P0AE4 summary supports a precharge control-circuit mismatch diagnosis, but its stated open-circuit coverage is internally unclear.","status":"draft","sourceReview":"needs-review","scope":"Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[554]}],"authoringBatch":"batch-25"}
---

# P0AE4: precharge driver feedback is inconsistent with its command

P0AE4 in the cited GM hybrid table concerns the precharge control circuit. The controller compares the driver's command with the actual electrical state, using off-state output-voltage feedback among its checks.

## Keep the driver result separate from precharge behavior

P0AE2 on the same page evaluates a precharge path that appears stuck closed from bus and battery voltage. P0AE4 instead concerns the control circuit's response. A precharge timing complaint and a driver mismatch may be related, but they are not identical diagnostic evidence.

The row qualifies the check with adequate 12-volt supply and a repeated-sample window. A single reading with no command-state information is insufficient to identify the branch that failed.

## The source has a coverage inconsistency

The malfunction description says the diagnostic cannot detect an open-circuit fault, yet the threshold column names an off-state open-load condition. This draft does not resolve that inconsistency by guessing which statement is intended. It also does not promise detection of a short to ground, which the description excludes.

The supported conclusion is a precharge driver/control-state disagreement. Exact fault-class coverage and terminal tests require confirmation against the matching current service information.

Record the precharge command, hardware feedback, supply condition and any separate stuck-closed or timing codes. High-voltage contactor and precharge work requires qualified isolation procedures; bypassing the driver would invalidate the monitored circuit rather than demonstrate a repair.

## Application limits

Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.

## Source

[15OBDG01 Hybrid Diagnostics](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=554), physical PDF pages 554.
