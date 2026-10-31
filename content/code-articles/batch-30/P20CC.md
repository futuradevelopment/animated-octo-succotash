---
{"entryId":"generic-p20cc","code":"P20CC","title":"P20CC: aftertreatment injector performance is judged through exhaust heat","description":"The cited GM P20CC monitor uses exhaust-temperature differences and regeneration history, rather than only injector-circuit feedback.","status":"draft","sourceReview":"checked","scope":"GM 2015 15OBDG09 LML/LGH-common exhaust-aftertreatment monitor. Only the cited monitor and calibration are described; per-code vehicle and engine applicability has not been established.","sourceIds":["gm-2015-15obdg09-engine-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg09-engine-diagnostics","pages":[182,183]}],"authoringBatch":"batch-30"}
---

# P20CC: aftertreatment injector performance is judged through exhaust heat

P20CC concerns aftertreatment fuel-injector performance in this GM diesel table. The monitor is intended to detect excessive exhaust temperatures. Its evidence comes from temperature relationships across the aftertreatment system, rather than solely from whether an injector's electrical driver follows its command.

## Retain the temperatures and their locations

The documented alternatives compare the oxidation-catalyst downstream and upstream temperatures, or the particulate-filter downstream and SCR downstream temperatures. Each comparison has a source-specific difference threshold. Substituting one exhaust-temperature reading for these paired measurements would remove the relationship the controller is evaluating.

The adjacent circuit codes investigate driver-command disagreement. A P20CC performance finding should therefore be considered separately from an electrical open, low-voltage or high-voltage diagnosis, even when more than one code is stored.

## Regeneration and cleaning history affect evaluation

The enabling logic includes the time since the last successful regeneration and time since the injector's tip-cleaning request. It also considers the current exhaust-temperature management state. Those conditions explain why observing temperatures immediately after a service operation may not reproduce a valid monitor opportunity.

Save the original temperature data, operating mode and aftertreatment history before deciding which inspection is justified. The table does not identify a failed injector, catalyst or temperature sensor by itself. Fuel dosing and hot exhaust components require the applicable professional service procedures; this summary does not authorize forcing regeneration or manipulating an injector.

Verification should establish that the relevant temperature relationships remain credible when the monitor is enabled, with associated circuit or temperature-signal faults resolved according to the exact application.

## Source and applicability

GM 2015 15OBDG09 LML/LGH-common exhaust-aftertreatment monitor. Only the cited monitor and calibration are described; per-code vehicle and engine applicability has not been established.

[15OBDG09 Engine Diagnostics](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG09%20Engine%20Diagnostics.pdf#page=182), physical PDF pages 182, 183.
