---
{"entryId":"generic-p0bb4","code":"P0BB4","title":"P0BB4: Sense Y performance is about direction of change","description":"The cited GM P0BB4 monitor compares Y-channel voltage movement with the average cell trend while checking reference validity.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[575]}],"authoringBatch":"batch-28"}
---

# P0BB4: Sense Y performance is about direction of change

A P0BB4 record from the cited GM monitor concerns how the Y-channel cell-voltage report changes. The test compares its movement with the average movement of the cell readings. It is possible to miss that distinction by looking only at whether Y's absolute voltage appears reasonable.

## A moving reference is required

The average cell-voltage movement must exceed 0.006 volt. Without that activity, a stationary set of readings does not provide the directional evidence specified by the monitor. An appropriate retest must establish that the qualifying reference behavior occurred.

The fault uses 20 failed observations among 40, at a 200-millisecond frequency. Reviewing both the individual and average traces is therefore more useful than describing one momentary numerical gap as the entire failure.

## Exclude invalid comparison conditions

The cell-voltage rationality fault bundle must be false, and U185A cannot be active. Record these prerequisites along with the Y trend. Their absence during a retest can explain why no fresh result appears.

This performance code alone does not decide between real battery behavior and a problem in its measurement path. That distinction requires the correct vehicle procedure and hardware mapping. The Y designation is not a universal physical-cell location. Any high-voltage battery inspection should be performed by trained personnel; this historical monitor supplies no pack-opening instructions or automatic replacement decision.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 575](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=575).
