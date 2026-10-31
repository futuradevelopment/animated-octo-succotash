---
{"entryId":"generic-p0bb8","code":"P0BB8","title":"P0BB8: Sense Z open-line evidence includes common power paths","description":"GM P0BB8 names the Z sensing channel in an open-line diagnostic that evaluates neighboring voltages and measuring-system availability.","status":"draft","sourceReview":"needs-review","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[635,636]}],"authoringBatch":"batch-28"}
---

# P0BB8: Sense Z open-line evidence includes common power paths

P0BB8 identifies voltage-sense channel Z in the GM open-line monitor described here. The finding can involve relationships between adjacent readings or a common measuring-power path. It is more specific than a generic battery warning, but less conclusive than identifying a failed physical cell.

## Use the pattern to frame the investigation

A general sensing-line branch uses an adjacent-cell voltage difference above one volt. The common-power-line branch uses half a volt. GM separately describes an unpowered slave ASIC making all affected cell reports zero. Those patterns should be preserved for the technician rather than reduced to the lowest number on a scan screen.

The observation window is 600 milliseconds, with evaluation every 200 milliseconds. The source does not assign a universal connector cavity or pack location to Z.

## Check whether a repeat test was eligible

Communication must be enabled and specified sensing-module communication, balancing and internal-performance faults absent. The secondary protection self-test must not be running. A test performed while these prerequisites are blocked cannot demonstrate that the Z path has passed the monitor.

A qualified high-voltage specialist must map the reported channel and select the appropriate vehicle procedure. The original busbar-case comparison is incomplete, so no missing threshold is guessed here. The supported adjacent-reading and power-loss distinctions remain useful without pretending that this table alone is a complete battery fault-isolation manual.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 635](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=635) · [GM source, physical page 636](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=636).
