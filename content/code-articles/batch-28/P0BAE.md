---
{"entryId":"generic-p0bae","code":"P0BAE","title":"P0BAE: Sense X open-line diagnosis uses relationships","description":"P0BAE belongs to the GM open-sensing-line monitor, where neighboring voltage patterns and sensing-module status guide interpretation.","status":"draft","sourceReview":"needs-review","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[635,636]}],"authoringBatch":"batch-28"}
---

# P0BAE: Sense X open-line diagnosis uses relationships

P0BAE is the X-channel entry in the cited GM open-voltage-sensing diagnostic. An open-line finding is based on relationships among measurements and the availability of the sensing electronics. It should not be summarized as proof that one battery cell must be replaced.

## Distinguish a local disagreement from lost measuring power

For the general sensing-line branch, GM compares adjacent voltages and uses a difference above one volt. Its common-power-line case uses half a volt. The source separately states that an unpowered slave ASIC can report zero for all affected cells. These patterns give a workshop different starting evidence even when the scan tool groups them under electrical circuit faults.

The shared monitor evaluates a 600-millisecond window at 200-millisecond frequency. The source does not supply a universal physical mapping from X to a battery cell or connection.

## Check the diagnostic context

Communication must be enabled, with the specified sensing-module communication, balancing and internal-performance faults absent. The secondary protection self-test cannot be running. If those conditions are missing, an absent new code cannot serve as a completed verification of the X path.

Preserve nearby readings, timing and companion fault status for the qualified high-voltage technician. The original busbar subcase omits part of its comparison. This article therefore keeps the supported patterns and avoids manufacturing a complete fault-isolation procedure from incomplete specifications.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 635](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=635) · [GM source, physical page 636](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=636).
