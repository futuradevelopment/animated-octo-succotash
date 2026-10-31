---
{"entryId":"generic-p0bac","code":"P0BAC","title":"P0BAC: Sense W high requires valid measuring communication","description":"P0BAC is the W-channel upper-voltage check in the cited GM controller, with a 1.4-second failure requirement and sensing-system exclusions.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[631,632]}],"authoringBatch":"batch-28"}
---

# P0BAC: Sense W high requires valid measuring communication

P0BAC concerns a high W-channel cell-voltage report in GM's 2015 battery-monitor table. The failure boundary is 4.8 volts or greater. The controller detects a reported quantity; the code alone does not establish whether the battery is physically overcharged or the measurement path is inaccurate.

## Interpret the qualification window

The high report must persist for 1.4 seconds within a two-second window. Record the event's duration and surrounding values where supported by the diagnostic equipment. A later acceptable snapshot cannot explain the original sequence, while one brief spike does not establish that the full criterion was met.

The table requires diagnostic and operating-state communication enables. Listed open-sense-line, sensing-module communication, cell-balancing and internal-performance faults inhibit this check. The protection self-test must also be inactive.

## Use companion faults in the right order

Those exclusions matter when deciding whether a repeat assessment is valid. Clearing all faults and seeing no immediate P0BAC return is insufficient if the monitor has not become eligible. Preserve the original evidence before resetting memory as part of an applicable service procedure.

The W designation is an internal sensing-channel label. The document does not identify a connector pin, cell location or replacement battery for every vehicle using it. A trained high-voltage technician must establish the actual hardware and confirm the measurement before choosing a repair.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 631](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=631) · [GM source, physical page 632](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=632).
