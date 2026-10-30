---
{"entryId":"generic-p0bb0","code":"P0BB0","title":"P0BB0: Sense X low needs both timing and valid prerequisites","description":"P0BB0 evaluates a very low X-channel report in the cited GM controller, separately from open-line and communication diagnostics.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[628]}],"authoringBatch":"batch-28"}
---

# P0BB0: Sense X low needs both timing and valid prerequisites

P0BB0 identifies the X-channel low-voltage monitor in the 2015 GM table. Its threshold is a cell-voltage report at or below 0.2 volt. The low value is an electronic measurement requiring interpretation, not automatic proof of a particular battery repair.

## Why the other sensing faults matter

The table excludes active open-sense-line diagnostics and specified sensing-module communication, balancing and internal-performance faults. It also requires the secondary protection self-test to be inactive. Those conditions keep the low-reading assessment separate from cases in which the measuring system has already reported another problem.

An absence of P0BB0 during an inhibited period cannot confirm a good X circuit. Retain the companion-code history and communication state when discussing whether a retest is conclusive.

## Capture the qualified event

GM requires 1.4 seconds of low reporting within a two-second observation window. A single transient scanner value and a qualified monitor result provide different levels of evidence. The useful record includes the timing, X reading and neighboring measurements, where the vehicle's diagnostics expose them.

The source supplies neither a physical cell address for X nor a universal connector pinout. Its historical threshold should not be transferred to another pack architecture without verification. A qualified high-voltage workshop must determine whether the low report reflects actual battery behavior or a sensing-path problem before selecting corrective work.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 628](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=628).
