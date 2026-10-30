---
{"entryId":"generic-p0c7e","code":"P0C7E","title":"P0C7E: Sensor G low circuit can yield a high temperature display","description":"GM P0C7E’s explicit criterion links a low ADC count with a reported temperature above 87.5°C, rather than a cold battery.","status":"draft","sourceReview":"needs-review","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[639]}],"authoringBatch":"batch-28"}
---

# P0C7E: Sensor G low circuit can yield a high temperature display

P0C7E is the low-circuit diagnostic for battery-temperature sensor G in this GM controller. The source's explicit threshold pairs ADC count below 680 with a reported temperature above 87.5°C. The electrical word “low” must not be turned into a cold-temperature diagnosis.

## Use the signal relationship

A high converted temperature may be the result of the sensing-path condition represented by the ADC count. P0C7E alone does not prove that the battery is physically that hot. The workshop must establish whether the measurement is credible using the correct circuit information.

Failure requires 1.4 seconds in a two-second window, evaluated every 200 milliseconds. The pass row requires temperature at or below 87.5°C and ADC at least 680 for two seconds. Both the failure and the recovery have a duration component.

## Keep the prerequisites with the record

Enabled communication is required, with specified sensing-module communication and internal-performance faults absent. The secondary protection self-test must not be running. An assessment performed without those prerequisites cannot be treated as a fresh valid result.

The strategy sentence says temperature falls below a threshold although its explicit converted-temperature boundary is high. That wording conflict is retained as a source-review issue. No physical G-sensor position or battery replacement is inferred. High-voltage battery access belongs to qualified personnel following the actual vehicle service procedure.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 639](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=639).
