---
{"entryId":"generic-p0cef","code":"P0CEF","title":"P0CEF: Electronics coolant temperature must agree with charger temperature","description":"P0CEF compares coolant and charger temperature reports after established pump operation; it differs from direct low/high sensor-circuit checks.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[566,567]}],"authoringBatch":"batch-28"}
---

# P0CEF: Electronics coolant temperature must agree with charger temperature

P0CEF is the power-electronics coolant-temperature sensor performance comparison in this GM table. The continued row compares that sensor with high-voltage-charger temperature and shows an absolute difference greater than 35°C. This is a plausibility relationship between reports, not an absolute coolant-overheat threshold.

## Circulation must be established

Pump speed above 30 percent enables evaluation and below 25 percent disables it. The pump must have been enabled for more than 300 seconds, and the charger-temperature report must exceed −40°C. These conditions explain why an immediate temperature snapshot after startup does not reproduce the documented monitor.

System voltage must exceed 10.2 volts, with the listed sensor, pump-control and related faults absent. Qualification is 32 failed observations among 40 samples at 250-millisecond intervals.

## Separate disagreement from an electrical limit

P0CF0 and P0CF1 address the direct low/high voltage boundaries of the sensor circuit. P0CEF instead asks whether the temperature relationship is plausible when the supporting system is available. The distinction should be preserved when several codes appear together.

The source shows the same 35°C comparison in both printed pump-request branches; this article does not invent a different threshold for one branch. The monitor alone cannot determine whether the disagreement is real thermal behavior or inaccurate sensing. A qualified technician must use the actual high-voltage cooling-system procedure, hardware mapping and reference measurements before choosing a repair.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 566](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=566) · [GM source, physical page 567](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=567).
