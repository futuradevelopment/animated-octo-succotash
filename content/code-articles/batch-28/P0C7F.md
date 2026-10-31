---
{"entryId":"generic-p0c7f","code":"P0C7F","title":"P0C7F: Sensor G high circuit can report an extreme cold value","description":"The cited GM P0C7F monitor uses a high ADC count and a temperature below −40°C, with reference and communication prerequisites.","status":"draft","sourceReview":"needs-review","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[639,640]}],"authoringBatch":"batch-28"}
---

# P0C7F: Sensor G high circuit can report an extreme cold value

P0C7F names the high-circuit diagnosis for battery-temperature sensor G. In this GM table, the explicit condition is ADC above 3992 with a converted temperature below −40°C. A high electrical signal should therefore not be described as proof of high battery temperature.

## Preserve electrical and temperature evidence together

The extreme cold report is calculated from the sensing circuit. It may represent a measurement-path concern rather than actual battery temperature, which the code alone cannot resolve. Retain the original data for a technician using the exact sensor procedure.

The failure must occupy 1.4 seconds of a two-second window at 200-millisecond evaluation intervals. Recovery requires at least −40°C and ADC no greater than 3992 for two seconds. A brief acceptable reading does not establish the full pass condition.

## Establish valid support conditions

The shared table excludes specified communication, 5-volt-reference, internal-performance and bus-off faults. The secondary protection self-test must be inactive and communication enabled. Those conditions matter when deciding whether a non-returning code reflects an actual completed assessment.

The strategy sentence's temperature-direction wording differs from the explicit threshold and remains flagged. This article does not resolve the discrepancy by inventing a new limit. Sensor G's physical location and any battery access require the correct vehicle documentation and qualified high-voltage service precautions; no universal replacement instruction follows from this monitor.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 639](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=639) · [GM source, physical page 640](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=640).
