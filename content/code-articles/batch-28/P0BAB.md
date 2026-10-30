---
{"entryId":"generic-p0bab","code":"P0BAB","title":"P0BAB: Sense W low is qualified separately from an open line","description":"GM P0BAB records a very low W-channel voltage under explicit measuring-system prerequisites and a timed observation window.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[628]}],"authoringBatch":"batch-28"}
---

# P0BAB: Sense W low is qualified separately from an open line

The cited 2015 GM battery controller reports P0BAB when the W cell-voltage reading is at or below 0.2 volt. This is a measurement-limit diagnostic. It is not the same test as the neighboring P0BA9 open-sensing-line code.

## Preserve the exclusion information

The low-voltage monitor requires the listed open-sense-line faults to be absent. It also excludes sensing-module communication, balancing and internal-performance faults, and the secondary protection self-test must not be active. Consequently, a record of those companion conditions is necessary to judge whether the low-reading check was eligible.

These restrictions should not be converted into a conclusion that a cell is healthy whenever P0BAB does not repeat. An inhibited monitor may not be providing a fresh result.

## What the timing establishes

The low reading must occupy 1.4 seconds of a two-second window. A single scanner update below the threshold is less information than the controller's qualified finding. Keep the recorded voltage behavior and operating-state history for the diagnostic technician.

The source's 0.2-volt value is specific to this controller and measurement architecture. It does not provide a universal battery-discharge specification, repair price or physical location for W. Any investigation of the battery and its sensing connections should follow the actual high-voltage service procedure. The next useful decision is whether the reported low measurement is trustworthy and reproducible under valid prerequisites.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 628](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=628).
