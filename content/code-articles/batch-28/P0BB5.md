---
{"entryId":"generic-p0bb5","code":"P0BB5","title":"P0BB5: Sense Y low should not be read as a capacity measurement","description":"GM P0BB5 qualifies a Y-channel reading at or below 0.2 volt under specific sensing-system conditions and timing.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[628]}],"authoringBatch":"batch-28"}
---

# P0BB5: Sense Y low should not be read as a capacity measurement

P0BB5 is the Y-channel low-voltage report in the cited 2015 GM battery controller. Its threshold is a measured cell-voltage signal at or below 0.2 volt. That finding describes an electrical report, not a measurement of how much useful energy remains in a battery module.

## Retain the measuring-system context

The low-reading check is inhibited by specified open-sense-line, sensing-module communication, balancing and internal-performance faults. The secondary protection self-test must be inactive. Those restrictions are important because another diagnosed measuring-system problem changes what can be inferred from a displayed low value.

If the prerequisites are not satisfied, the lack of a new P0BB5 cannot be treated as a completed pass. Preserve the communication state and companion fault records when evaluating a subsequent test.

## Match the required duration

The documented condition occupies 1.4 seconds within a two-second observation window. A one-frame scanner reading cannot independently establish that qualification. The useful evidence includes the voltage sequence and neighboring measurements, where supported by the vehicle's diagnostic data.

The source does not provide a universal physical address for Y, nor a decision to replace a cell or pack. The correct service information must identify the sensing hardware and establish whether the low report is trustworthy. Physical work on the high-voltage battery belongs to an appropriately trained technician.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 628](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=628).
