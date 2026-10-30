---
{"entryId":"generic-p0d3e","code":"P0D3E","title":"P0D3E: charger AC voltage fails a two-reference comparison","description":"GM P0D3E compares AC peak voltage with two internal bulk-voltage measurements and requires both disagreements, subject to enabling conditions.","status":"draft","sourceReview":"checked","scope":"GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[742]}],"authoringBatch":"batch-29"}
---

# P0D3E: charger AC voltage fails a two-reference comparison

P0D3E is a plausibility check of the charger's AC input-voltage report. GM compares that reading with two internal bulk-voltage measurements. A sensor can remain inside its electrical range yet disagree with other measurements, so this diagnostic answers a different question from the associated low or high circuit codes.

## Both comparisons are required

In the cited calibration, the absolute difference between AC peak voltage and each bulk-voltage value must exceed 59 V. The failure logic joins those comparisons with AND. One disagreeing reference therefore does not establish this particular failure condition.

The deviation must occupy 1,760 milliseconds of a 1,920-millisecond window. AC must be present, bulk voltage must not be dropping, and the stated discharge-delay condition must have expired. The listed circuit faults for the AC and bulk-voltage sensors must also be absent.

## Diagnose the comparison, not a named part

Capture all three readings and the charger's operating state together. If one prerequisite sensor fault is present, that problem changes the basis on which the rationality comparison can run. A scan made during voltage decay should likewise not be treated as a failed steady-state comparison.

The disagreement does not automatically identify which measurement is wrong. It also supplies no evidence that the traction battery itself needs replacement. A qualified technician must use the matching charger procedure to separate input conditions, sensing accuracy and internal conversion behavior. This article does not provide access or measurement instructions for energized high-voltage equipment.

## Source and applicability

GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.

[General Motors source, physical page 742](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=742)
