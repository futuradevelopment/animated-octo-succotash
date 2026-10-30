---
{"entryId":"generic-p0bb6","code":"P0BB6","title":"P0BB6: Sense Y high and the meaning of a qualified event","description":"P0BB6 records a Y-channel upper-limit event in the cited GM monitor, with communication, fault-exclusion and timing requirements.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[631,632]}],"authoringBatch":"batch-28"}
---

# P0BB6: Sense Y high and the meaning of a qualified event

The cited GM battery-monitor table assigns P0BB6 to a Y-channel cell-voltage reading at or above 4.8 volts. It is a qualified upper-limit event. The controller's report alone does not establish whether the underlying cause is actual battery behavior or an inaccurate sensing path.

## Preserve what happened over time

The high report must account for 1.4 seconds of a two-second window. A normal value obtained later does not characterize the earlier event, while one brief high sample does not show that the full criterion was met. Keep the time context alongside the code when diagnostic records permit it.

The monitor also requires diagnostic enable and the appropriate enabled operating-state communication. The source excludes listed open-sense-line, sensing-module communication, balancing and internal-performance faults. The secondary protection self-test cannot be active.

## Judge recovery under valid conditions

Those exclusions explain why an immediate absence of the code after memory clearing is insufficient verification. The controller must have a valid opportunity to evaluate the high-reading condition again. Do not use P0BB6 as a general battery-health certificate when it is absent.

Identify the exact pack and controller before mapping the letter Y to hardware. The table supplies no universal connector pin or replacement instruction. A qualified high-voltage workshop should establish measurement credibility and follow the applicable service procedure before choosing corrective work.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 631](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=631) · [GM source, physical page 632](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=632).
