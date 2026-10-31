---
{"entryId":"generic-p0d5c","code":"P0D5C","title":"P0D5C: high-voltage charger power is checked against input evidence","description":"The GM P0D5C monitor evaluates calculated high-voltage output power and requires valid current, voltage, reference and AC-power information.","status":"draft","sourceReview":"needs-review","scope":"GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[725]}],"authoringBatch":"batch-29"}
---

# P0D5C: high-voltage charger power is checked against input evidence

P0D5C is a high-voltage output-power rationality diagnostic in this GM charger example. Output power is calculated from the reported output voltage and current, then compared with an AC-input-based limit. It does not directly measure battery condition or identify a defective cell.

## The calculation depends on healthy signals

The monitor excludes the specified high-voltage current-sensor faults P0D53/P0D54 and output-voltage faults P0D4E/P0D4F. The listed high-voltage reference faults must also be absent, and AC input-power status must not be failed.

GM specifies 1.6 seconds of failure in a two-second window. The printed boundary is AC power multiplied by 1.9995 plus 120 W. The narrative's use of the word efficiency is ambiguous beside that coefficient. It is retained as a calibration expression, not presented as a physically measured efficiency or a charging recommendation.

## Diagnose the consistency failure

Capture the input-power estimate and both output measurements together. If a prerequisite sensor fault is also recorded, establish its state before assuming that a calculated power imbalance proves a converter defect. The prerequisites explain why a rationality test may be inhibited.

An acceptable calculation for the stated pass period is different from merely clearing a stored code. Verification needs the applicable operating state and trustworthy measurements. The table offers no repair sequence or live-measurement instructions; a qualified technician must use the correct charger procedure and high-voltage safety controls to identify the cause.

## Source and applicability

GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.

[General Motors source, physical page 725](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=725)
