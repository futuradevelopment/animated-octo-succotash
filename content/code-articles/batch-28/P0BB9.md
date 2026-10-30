---
{"entryId":"generic-p0bb9","code":"P0BB9","title":"P0BB9: Sense Z must follow a changing voltage reference","description":"P0BB9 is a dynamic Z-channel voltage comparison in GM’s 2015 monitor, requiring sufficient average cell movement and valid inputs.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[575]}],"authoringBatch":"batch-28"}
---

# P0BB9: Sense Z must follow a changing voltage reference

P0BB9 is the Z-channel voltage-performance diagnostic in the cited GM table. The monitor looks for an individual cell report moving in a different direction from the average cell-voltage movement. It does not use a fixed low-voltage boundary as its principal comparison.

## Recreate the type of observation

Average movement must exceed 0.006 volt. A set of nearly stationary readings therefore does not provide the reference behavior that the diagnostic expects. Seeing no code during such a condition cannot by itself verify the Z measurement.

The table specifies 20 failed observations among 40 samples at 200-millisecond intervals. Record the individual trend and the average trend together when the vehicle's diagnostic system allows it. A static voltage difference does not substitute for a directional mismatch over those observations.

## Keep the prerequisite status

The cell-voltage rationality fault bundle must be false and U185A inactive. These are part of the monitor's eligibility. If another fault blocks the comparison, address that context before interpreting an absent new P0BB9 result.

The source does not settle whether the disagreement originates in battery behavior or in the sensing electronics. A qualified high-voltage technician needs the correct pack-specific mapping and service procedure to distinguish them. The Z label does not establish a universal physical cell number, a connector pin or a required battery replacement.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 575](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=575).
