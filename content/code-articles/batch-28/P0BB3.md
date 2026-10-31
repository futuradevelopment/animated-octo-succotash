---
{"entryId":"generic-p0bb3","code":"P0BB3","title":"P0BB3: Sense Y requires an open-line pattern assessment","description":"P0BB3 belongs to GM’s Y-channel open-sensing diagnostic, where adjacent readings and measuring-power status change the interpretation.","status":"draft","sourceReview":"needs-review","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[635,636]}],"authoringBatch":"batch-28"}
---

# P0BB3: Sense Y requires an open-line pattern assessment

P0BB3 reports voltage-sense channel Y in the cited GM controller's open-line diagnostic. Its meaning depends on a measurement pattern, rather than a statement that one cell has a particular remaining capacity. Keep the complete battery-controller record when discussing the fault.

## Compare the affected group

The documented general sensing-line branch uses an adjacent-cell difference greater than one volt. The common-power-line branch uses a difference greater than half a volt. GM also notes that loss of power to a slave measuring ASIC can make all affected readings zero. Those observations distinguish an isolated disagreement from a group whose measurements may be unavailable.

The condition is evaluated through a 600-millisecond window with checks every 200 milliseconds. An isolated scanner sample does not contain the same evidence as that qualified comparison.

## Establish that evaluation was enabled

The specified communication, cell-balancing and internal-performance faults must not be active, and the secondary protection self-test must not be running. Enabled communication and the appropriate operating state are also required. A non-returning code during an inhibited interval does not verify Y's sensing path.

Use the actual pack service information to map Y before any physical investigation. High-voltage access requires the appropriate professional procedure. One busbar branch is incomplete in the original table; this explanation preserves the supported patterns without inventing its missing comparison or a universal connector-level repair.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 635](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=635) · [GM source, physical page 636](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=636).
