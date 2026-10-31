---
{"entryId":"generic-p0c8a","code":"P0C8A","title":"P0C8A: Sensor I low circuit and a hot converted report","description":"P0C8A’s low electrical signal can correspond to a reported temperature above 87.5°C in the cited GM calibration.","status":"draft","sourceReview":"needs-review","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[639]}],"authoringBatch":"batch-28"}
---

# P0C8A: Sensor I low circuit and a hot converted report

P0C8A is the low-circuit diagnosis for battery-temperature sensor I in this GM controller. Its explicit threshold is ADC below 680 with reported temperature above 87.5°C. The code therefore cannot be explained simply as a low physical battery temperature.

## Separate the electrical finding from real heat

The displayed temperature is a conversion of the sensor signal. A high converted value with a circuit fault is not independent confirmation that the battery is actually that hot. The applicable circuit procedure must establish whether the measurement is trustworthy.

The low-signal condition must occupy 1.4 seconds of a two-second window, sampled every 200 milliseconds. Recovery requires at most 87.5°C with ADC at least 680 for two seconds. Both magnitude and persistence matter when comparing the event with a later normal-looking reading.

## Preserve the operating context

Enabled communication, absence of the listed sensing-module communication and internal-performance faults, and an inactive secondary protection self-test are prerequisites. A retest without those conditions cannot provide the same diagnostic assessment.

The source strategy sentence says temperature falls below a limit, which conflicts with its explicit converted-temperature direction. That wording remains a review flag; the article does not invent a replacement threshold. The I channel's physical location must be determined from the exact battery documentation. Any high-voltage battery access requires qualified personnel and the correct vehicle service precautions.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 639](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=639).
