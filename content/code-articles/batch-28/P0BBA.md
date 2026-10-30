---
{"entryId":"generic-p0bba","code":"P0BBA","title":"P0BBA: Sense Z low is distinct from the open-sensing diagnosis","description":"The GM P0BBA threshold is a very low Z-channel report, evaluated only when the listed measurement-system faults are absent.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[628]}],"authoringBatch":"batch-28"}
---

# P0BBA: Sense Z low is distinct from the open-sensing diagnosis

P0BBA is the Z-channel low-measurement code in the cited GM battery-controller table. The reported cell voltage must be at or below 0.2 volt. This threshold identifies the controller's observation; it does not make a battery-capacity diagnosis or select a replacement component.

## Check the exclusions first

Listed open-sense-line faults inhibit the low-voltage assessment. The source also excludes sensing-module communication, cell-balancing and internal-performance faults, and requires the secondary protection self-test to be inactive. These restrictions distinguish this monitor from a broader complaint that the battery data are unreliable.

A quiet P0BBA monitor is not a successful verification if those enabling conditions are missing. Preserve companion faults and communication status before considering a retest conclusive.

## Record persistence, not only a number

The low report must occupy 1.4 seconds in a two-second window. A scanner's single low sample does not establish that timing. Conversely, a later normal reading does not erase the meaning of a previously qualified event. Capture the available trace and surrounding channel data for the workshop.

The Z label requires matching to the exact battery and controller documentation. No universal pack layout or connector position is provided by this source. Physical investigation of the high-voltage system must follow the proper professional service procedure, with measurement validity established before any repair decision.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 628](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=628).
