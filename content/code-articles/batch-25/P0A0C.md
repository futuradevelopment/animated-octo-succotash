---
{"entryId":"generic-p0a0c","code":"P0A0C","title":"P0A0C: interlock feedback is low when its source is active","description":"The cited GM hybrid P0A0C row evaluates low sensed interlock voltage during the sourced state.","status":"draft","sourceReview":"checked","scope":"Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[553]}],"authoringBatch":"batch-25"}
---

# P0A0C: interlock feedback is low when its source is active

P0A0C in the cited GM hybrid table concerns low feedback from the high-voltage interlock circuit. The published row checks sensed voltage as a fraction of its reference while the interlock source is actively supplying its nominal five-volt signal.

## The source state is essential

A low interlock reading must be interpreted against the commanded source state. The monitor expects the sourced condition and detects a sensed fraction below its low threshold. A reading taken when the source is intentionally inactive does not reproduce that same check.

The row also qualifies the ordinary 12-volt supply. An interlock result and a low-voltage power problem should therefore be kept in context rather than treated as unrelated observations.

## The code does not locate an open connection

The table establishes the monitored signal condition, but does not identify a particular cover, connector or interlock segment. Nor does it establish that the high-voltage bus is de-energized. Those conclusions require the vehicle-specific interlock diagnostic and isolation procedure.

The neighboring P0A0D monitor checks high feedback with separate sourced and unsourced conditions. Preserve the exact code and source state; merging both into a generic interlock complaint loses diagnostic information.

A qualified hybrid technician should document the source command, sensed feedback and supply state before choosing a repair. Never jumper an interlock to see whether the vehicle will operate. A passed signal check must be accompanied by the complete service verification required for the affected high-voltage system.

## Application limits

Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.

## Source

[15OBDG01 Hybrid Diagnostics](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=553), physical PDF pages 553.
