---
{"entryId":"generic-p0d3b","code":"P0D3B","title":"P0D3B: charger input current above the documented limit","description":"The GM P0D3B monitor evaluates reported AC input current while sufficient AC voltage is present, with a short accumulated-failure window.","status":"draft","sourceReview":"checked","scope":"GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[740]}],"authoringBatch":"batch-29"}
---

# P0D3B: charger input current above the documented limit

P0D3B concerns the charger's AC input-current measurement in this GM calibration. It is not the high-voltage battery's output-current code, and it does not by itself establish that the external charging supply is defective. The relevant quantity is the current reported through the input-current sensing path.

## Voltage and elapsed time both matter

The documented monitor requires AC voltage above 80 V. It fails when reported AC current exceeds 24.78 A for 160 milliseconds within a 200-millisecond window. A current value observed while the input-voltage condition is absent does not recreate the specified test.

The pass branch uses current at or below the same boundary for 200 milliseconds. That is distinct from erasing a stored record: the controller must see an acceptable measurement under its applicable test conditions. The table classifies the fault as a one-trip Type A diagnostic.

## Separate measurement from explanation

A technician needs the input-current reading, input-voltage state and fault timing together. Those records can establish whether the monitor saw a sustained out-of-range report; they cannot alone distinguish excessive real current from an inaccurate sensing path.

This parameter sheet gives no component-level repair or universal charging-station test. Compare related charger faults and the applicable vehicle procedure before assigning responsibility to the cable, charger or battery. Charger internals involve hazardous energy, so physical investigation belongs to appropriately equipped personnel. The figures here describe one historical controller monitor, not values for probing an exposed charger.

## Source and applicability

GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.

[General Motors source, physical page 740](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=740)
