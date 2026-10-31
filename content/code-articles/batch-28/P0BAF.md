---
{"entryId":"generic-p0baf","code":"P0BAF","title":"P0BAF: Sense X performance follows voltage movement","description":"GM P0BAF compares the direction of the X-channel voltage trend with average cell movement during an eligible monitoring period.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[575]}],"authoringBatch":"batch-28"}
---

# P0BAF: Sense X performance follows voltage movement

For P0BAF, the 2015 GM table describes a comparison of cell-voltage movement. The X-channel reading must move consistently with the average movement of the other cell-voltage reports. A normal-looking absolute voltage at one moment does not answer that dynamic question.

## The reference must actually move

The average cell-voltage movement must exceed 0.006 volt. This condition prevents a nearly motionless reference from being treated as a meaningful directional comparison. A retest consisting only of a static parked reading may therefore fail to recreate the monitor's opportunity.

The specified qualification is 20 failed observations out of 40 at 200-millisecond intervals. Review the individual and average trends over the relevant period; do not substitute a single numerical difference for the recorded direction mismatch.

## Verify the supporting evidence

The cell-voltage rationality fault bundle must be false and U185A inactive. Those requirements determine whether the comparison is enabled. Preserve their status when evaluating the code or interpreting an apparent recovery.

P0BAF does not distinguish a real battery behavior difference from a faulty measuring path by itself. The applicable workshop procedure must establish that distinction and map X to the actual hardware. No universal connector location or replacement decision follows from the letter. Inspection of high-voltage battery connections is work for appropriately trained personnel, using the correct isolation and service information.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 575](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=575).
