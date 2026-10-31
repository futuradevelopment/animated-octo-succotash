---
{"entryId":"generic-p0baa","code":"P0BAA","title":"P0BAA: Sense W must move with the other cell readings","description":"The 2015 GM P0BAA monitor checks the direction of cell-voltage movement, rather than a fixed low or high voltage.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[575]}],"authoringBatch":"batch-28"}
---

# P0BAA: Sense W must move with the other cell readings

P0BAA is a voltage-sense W performance code in the cited 2015 GM monitor. Its test asks whether the individual cell reading moves in the same direction as the average cell-voltage movement. It is a behavior comparison, not a fixed upper or lower cell-voltage boundary.

## A steady reading can be an unsuitable test

The average movement must exceed 0.006 volt before this directional comparison is meaningful. If the battery readings are nearly static, simply observing no repeat code does not show that the monitor had a useful opportunity to assess W.

The source uses 20 failures in 40 observations at 200-millisecond intervals. The finding therefore concerns repeated disagreement while the reference is moving, rather than one small difference between two displayed values.

## Check validity before interpreting direction

The cell-voltage rationality fault bundle must be false, and U185A must not be active. Those restrictions are part of the monitor, not optional background information. Preserve relevant companion faults together with the individual and average voltage trends.

A suitable technician can then establish whether the readings represent the actual battery behavior or an issue in the measuring path. P0BAA alone does not make that choice and supplies no replacement instruction. The W label must be mapped using the exact pack's service information; it is not a universal physical cell number. High-voltage investigation requires the corresponding professional precautions.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 575](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=575).
