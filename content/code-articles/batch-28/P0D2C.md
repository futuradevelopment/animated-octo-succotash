---
{"entryId":"generic-p0d2c","code":"P0D2C","title":"P0D2C: Charge-status LED circuit fault across connected and disconnected states","description":"P0D2C monitors the charge-status indicator driver with separate commanded-on and commanded-off electrical checks.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[587,588]}],"authoringBatch":"batch-28"}
---

# P0D2C: Charge-status LED circuit fault across connected and disconnected states

## What this indicator code identifies

P0D2C in GM’s monitor table concerns the charge-status LED output driver. Its diagnostic subject is the indicator control circuit, not the battery’s actual state of charge. An indicator-related fault therefore should not be translated directly into a claim that the high-voltage battery cannot accept energy.

The first branch detects a short-to-ground condition while the LED is commanded on and the charge cord is plugged in. The second branch, continued on the next physical source page, detects short-to-battery or open-circuit behavior while the LED is commanded off and the cord is unplugged. Reading only the first page would miss half the documented logic.

## Reproducing the correct branch

Both branches require the diagnostic to be enabled and use 40 failed samples within 50 observations at 100-millisecond intervals. The same sample count does not make the operating conditions interchangeable. An on-state check performed with the cord disconnected does not satisfy the first branch as published.

The neighboring control-pilot indicator code P0D2B has a shorter on-state counter. Its timing should not be borrowed for the separate charge-status indicator. This distinction is useful when a scan report includes several indicator or charging-interface faults.

For a technician, the meaningful evidence pairs the requested LED state with cord status and the electrical feedback available in the applicable diagnostic procedure. The source does not specify a universal connector location, lamp color or replacement part. It also does not prove the charger’s power stage is faulty. Repair verification should demonstrate the relevant completed indicator test rather than relying solely on a cleared code list.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[Manufacturer source, physical page 587](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=587) · [Manufacturer source, physical page 588](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=588).
