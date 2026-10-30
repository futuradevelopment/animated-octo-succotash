---
{"entryId":"generic-p0d5b","code":"P0D5B","title":"P0D5B: low-voltage charger power fails an input-to-output plausibility check","description":"GM P0D5B compares calculated low-voltage output power with an AC-input-based boundary, after excluding specified sensor faults.","status":"draft","sourceReview":"needs-review","scope":"GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[725]}],"authoringBatch":"batch-29"}
---

# P0D5B: low-voltage charger power fails an input-to-output plausibility check

P0D5B asks whether the charger's reported low-voltage output power is plausible relative to its AC input information. It combines output voltage and current. This makes it a consistency check involving several measurements, rather than a direct test of auxiliary-battery capacity.

## Valid inputs are prerequisites

GM excludes the listed low-voltage current-sensor, voltage-sensor and reference-voltage faults. AC input-power status must also not be failed. Those prerequisites matter because a bad input can invalidate a power calculation before any conclusion about conversion performance is justified.

The failure must occupy 1.6 seconds within a two-second window. The printed calibration boundary uses AC input power multiplied by 1.9995, plus a 125 W offset. Although the explanatory text calls the multiplier efficiency, this article does not interpret that number as a physical conversion-efficiency percentage; that wording requires clarification.

## Trace the calculation before blaming a component

Record the AC input-power value and the low-voltage output voltage and current together. The diagnostic question is which inputs account for the implausible calculated result, not merely whether a charger-related code is present.

The sheet does not establish a failed converter or a prescribed battery replacement. It also provides no external load-test setup. Use the matching vehicle diagnostic procedure to assess measurement accuracy and actual output behavior. Physical work on a charger requires professional high-voltage precautions even when the calculation being investigated concerns its nominal 14 V output.

## Source and applicability

GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.

[General Motors source, physical page 725](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=725)
