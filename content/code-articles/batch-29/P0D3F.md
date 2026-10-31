---
{"entryId":"generic-p0d3f","code":"P0D3F","title":"P0D3F: low charger AC peak voltage with a long observation window","description":"The GM P0D3F example requires low reported AC peak voltage while AC is present and the bulk-voltage-dropping condition is false.","status":"draft","sourceReview":"checked","scope":"GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[741]}],"authoringBatch":"batch-29"}
---

# P0D3F: low charger AC peak voltage with a long observation window

GM's P0D3F row evaluates a low AC peak-voltage report at the battery charger. The monitored quantity is explicitly a peak value. It should not be confused with an ordinary household AC RMS reading or a universal specification for every charging installation.

## A low reading alone is incomplete evidence

The documented failure boundary is below 90 V. The controller requires that condition for 5,500 milliseconds within a 6,875-millisecond observation window. It also requires AC to be present and the bulk-voltage-dropping flag to be false.

Those qualifications make the sequence important. A reading taken after AC disappears or during expected voltage decay does not establish that this monitor should fail. The pass branch calls for an acceptable peak-voltage report for 6,875 milliseconds; a momentary recovery is not the same evidence.

## Preserve the charging-state context

Record the reported peak voltage alongside AC-present status, voltage-decay status and the time of the fault. That combination lets a technician assess whether the input really met the test's conditions or whether the reported state is inconsistent.

The table does not distinguish a supply problem from a faulty internal voltage measurement. Nor does it prescribe replacing the charger. It establishes what the controller regarded as an out-of-range report. Use the vehicle-specific diagnostic procedure for that distinction, and leave high-voltage access to trained personnel. Applying the 90 V number directly to an unspecified meter or test point would ignore the measurement type and calibration scope.

## Source and applicability

GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.

[General Motors source, physical page 741](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=741)
