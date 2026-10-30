---
{"entryId":"generic-p0b9a","code":"P0B9A","title":"P0B9A: Sense T and groups of zero battery readings","description":"Read P0B9A as a channel T sensing-path finding and distinguish adjacent-voltage disagreement from loss of measuring-circuit power.","status":"draft","sourceReview":"needs-review","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[635,636]}],"authoringBatch":"batch-28"}
---

# P0B9A: Sense T and groups of zero battery readings

The cited GM description assigns P0B9A to voltage-sense channel T. It belongs to an open-sensing-line diagnostic that can evaluate relationships among several cell readings. A scan result should therefore preserve the surrounding measurements, not just the value labelled T.

## A zero reading is not the whole diagnosis

One documented failure case removes power from a slave measuring ASIC and makes every affected cell reading zero. Other branches compare neighboring voltages: the general sensing-line threshold is a difference above one volt, while the common-power-line branch uses half a volt. These are different measurement patterns, even though a scanner may describe all of them as circuit faults.

GM evaluates the open-line condition over 600 milliseconds, with checks at 200-millisecond intervals. A momentary reading captured outside that window does not establish the monitor's complete finding.

## Why other battery-controller faults matter

The source excludes active sensing-module communication, cell-balancing and internal-performance faults. The secondary protection self-test must be inactive, and communication must be enabled. If those conditions are not satisfied, a quiet monitor after clearing memory cannot demonstrate that the T sensing path has recovered.

The source does not provide a universal pinout or channel-to-cell location. Leave high-voltage access to the appropriate technician. Its busbar case includes an unfinished comparison, so no missing voltage limit is supplied here.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 635](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=635) · [GM source, physical page 636](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=636).
