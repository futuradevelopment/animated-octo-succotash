---
{"entryId":"generic-p04cb","code":"P04CB","title":"P04CB: fuel-door request input is electrically high","description":"The GM P04CB row associates high open-request feedback with an open circuit or a short to battery.","status":"draft","sourceReview":"checked","scope":"Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[595]}],"authoringBatch":"batch-25"}
---

# P04CB: fuel-door request input is electrically high

P04CB is the high-circuit diagnosis for the fuel-fill door open-request input in the cited GM hybrid summary. It identifies an excessively high reported switch value, with an open circuit or short to battery included in the strategy.

## Request, unlock and opening are three separate events

The driver-operated request input tells the controller that opening is wanted. The controller's unlock command and the door's eventual position are different signals. P04CB belongs to the first event, so a door that remains closed does not by itself prove that the lock actuator is faulty.

Because an open circuit can report high, the result should not be narrowed to a battery short without the actual wiring test. The summary gives the diagnostic classification but no pinout or component-isolation procedure.

## Follow the effect on dependent checks

The document lists this high request fault among the exclusions for the separate wake-up-circuit performance monitor. A missing wake-up performance result while P04CB is present may therefore reflect an invalid request input rather than a healthy wake-up path.

The high-input decision is based on repeated samples and an enabled calibration. Record the request-switch trace and relevant operating state before clearing the result. This can show whether the signal is persistently high or intermittent, although it does not identify the failed connection by itself.

After repair, confirm valid request detection and then the downstream command/state sequence using the applicable vehicle procedure. Avoid forcing the fuel door as a substitute for resolving the input fault.

## Application limits

Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.

## Source

[15OBDG01 Hybrid Diagnostics](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=595), physical PDF pages 595.
