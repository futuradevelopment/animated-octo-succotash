---
{"entryId":"generic-p0aa6","code":"P0AA6","title":"P0AA6: battery isolation resistance is too low under the test state","description":"GM P0AA6 monitors isolation between the high-voltage system and chassis, using qualified contactor states and a history of resistance measurements.","status":"draft","sourceReview":"checked","scope":"Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[553]}],"authoringBatch":"batch-25"}
---

# P0AA6: battery isolation resistance is too low under the test state

P0AA6 in the cited GM hybrid table concerns insufficient electrical isolation between the high-voltage system and chassis. The controller evaluates resistance, making this fundamentally different from a battery state-of-charge or ordinary low-voltage supply code.

## The contactor state defines the measurement

Both positive and negative contactors must have been open for the documented period before this evaluation. A resistance value obtained in an unrelated system configuration is not automatically comparable with the monitor's result.

The table uses different resistance thresholds depending on whether P0AA6 is already active. That hysteresis prevents the same boundary from being used for every setting and recovery decision. Do not treat a value near one published threshold as a universal safety certificate.

## The fault history spans wake-up cycles

GM permits no more than one resistance measurement per controller wake-up cycle in this strategy. Setting also depends on the latest result and a specified count of low measurements in recent history. Repeatedly reading the same displayed value is not the same as collecting independent monitor measurements.

The summary describes a passing measurement separately from the failure history. Clearing a code does not establish that insulation integrity has been restored.

This is a high-voltage safety diagnosis requiring qualified isolation testing and the exact vehicle procedure. The article provides no instructions to probe energized battery components. Preserve the controller's isolation results, contactor state and event history so the technician can locate the affected portion of the system without assuming a complete battery replacement from the code alone.

## Application limits

Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.

## Source

[15OBDG01 Hybrid Diagnostics](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=553), physical PDF pages 553.
