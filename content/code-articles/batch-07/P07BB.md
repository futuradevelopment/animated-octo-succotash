---
{"entryId":"generic-p07bb","code":"P07BB","title":"P07BB: Park-button switch B has an unrecognized intermediate reading","description":"P07BB monitors switch B values between the recognized Park-button pressed and released zones.","status":"draft","sourceReview":"checked","scope":"Documented 2025 GM diagnostic parameter monitor in 25OBDG04B.pdf; model, engine and calibration applicability require vehicle-specific confirmation.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[651]}],"authoringBatch":"batch-07"}
---

# P07BB: Park-button switch B has an unrecognized intermediate reading

The defining feature of P07BB in the reviewed GM table is an ambiguous Park-button state. Switch B's measured signal falls outside both its pressed and released zones, even though that condition differs from the dedicated circuit-low and circuit-high checks.

## An intermediate interval

The source defines the malfunction interval as greater than 184.00 and less than 188.00. It gives no voltage unit, so these are controller-signal values rather than a ready-made meter specification. A reading within this interval can be problematic despite not being an extreme high or low value.

The diagnostic needs 400 failing samples in a 480-sample window. That persistence criterion is part of the distinction between a fleeting transition through an intermediate value and a reportable performance fault. This page does not provide a sampling period, so an exact elapsed failure time cannot be calculated from it alone.

## Related codes affect eligibility

The enable information references P07B9 and P07BA, switch B's low and high faults, as codes not set. Calibration enablement is also required, and reporting is Type B over two trips. Their presence should therefore be considered before assuming this performance test has completed normally.

For confirmation, examine the B-channel value and the interpreted button state over actual transitions. The intended result is reliable recognition of the permitted states under an enabled diagnostic. P07BB alone does not demonstrate a failed parking lock or identify a replacement assembly. The thresholds remain limited to this 2025 GM monitor pending vehicle-specific applicability checks.

Source: [GM monitor, PDF page 651](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=651).
