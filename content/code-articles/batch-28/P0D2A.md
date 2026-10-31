---
{"entryId":"generic-p0d2a","code":"P0D2A","title":"P0D2A: Excessive AC charging current depends on input voltage","description":"P0D2A uses different AC input-current limits for the voltage ranges documented in GM’s charger monitor.","status":"draft","sourceReview":"needs-review","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[598]}],"authoringBatch":"batch-28"}
---

# P0D2A: Excessive AC charging current depends on input voltage

## One code with voltage-dependent thresholds

GM’s P0D2A monitor concerns charger AC input current rather than battery-side DC output current. The printed table gives a limit above 17 amps when AC voltage is at least 180 volts and a limit above 13 amps when AC voltage is below 160 volts. Applying one current limit without the corresponding input voltage would misread the diagnostic.

The source does not state how the intervening 160–180-volt region is handled. It would be inappropriate to invent interpolation or assume that either threshold applies there. Applicable service information is needed to resolve that calibration boundary.

## Why sensor validity and time matter

The control-pilot charging switch must be closed, and the listed AC input-voltage and input-current fault exclusions must be satisfied. That means the controller depends on qualified electrical measurements before assessing excessive current. A concurrent sensor fault may change which diagnostic evidence can be trusted; it is not merely another unrelated code to clear.

The failure counter is 240 observations within 300 samples at 100 milliseconds per sample. The table also specifies a five-second passing period. An instantaneous current spike or a later low-current snapshot cannot be treated as the full fail or pass sequence.

Record input voltage, input current, pilot-switch state and related sensor codes together when evaluating the event. The monitor does not identify the charging station, wiring or on-board charger as the confirmed cause. Nor does it authorize changing protective current limits. Diagnosis of the power path requires the vehicle’s approved charging-system procedure.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[Manufacturer source, physical page 598](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=598).
