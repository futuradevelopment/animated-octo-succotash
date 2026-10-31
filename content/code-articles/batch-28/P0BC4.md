---
{"entryId":"generic-p0bc4","code":"P0BC4","title":"P0BC4: Sensor E circuit low can correspond to a hot reported value","description":"P0BC4 is the low electrical signal diagnosis for battery-temperature sensor E; the cited GM table reports a high converted temperature.","status":"draft","sourceReview":"needs-review","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[639]}],"authoringBatch":"batch-28"}
---

# P0BC4: Sensor E circuit low can correspond to a hot reported value

P0BC4 identifies battery-temperature sensor E's low-circuit diagnostic in this GM controller. “Low” describes the electrical side of the signal. It should not be read as a conclusion that the battery is cold.

## Follow the printed electrical relationship

The original threshold pairs an ADC count below 680 with a reported temperature above 87.5°C. The code therefore can accompany a high converted temperature even though the circuit label says low. That report does not independently prove actual battery overheating; the sensing circuit must be evaluated using the proper vehicle procedure.

Qualification requires 1.4 seconds within a two-second window, with checks at 200-millisecond intervals. The recovery row requires the reported temperature to return to 87.5°C or lower, with ADC count at least 680, for two seconds.

## Check the conditions around the reading

The diagnostic requires enabled communication, no specified sensing-module communication or internal-performance faults, and an inactive secondary protection self-test. Those prerequisites should accompany the fault record when deciding whether a later test was valid.

The strategy sentence in the source says the temperature falls below a threshold, conflicting with its explicit converted-temperature criterion. This article uses the displayed ADC/temperature pair and flags that wording rather than silently rewriting it. Sensor E's physical location and any high-voltage battery access must be established by a qualified technician from the exact service information.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 639](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=639).
