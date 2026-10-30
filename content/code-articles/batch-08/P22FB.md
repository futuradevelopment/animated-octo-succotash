---
{"entryId":"generic-p22fb","code":"P22FB","title":"P22FB: engine-out NOx signal disagrees with its model","description":"P22FB evaluates the filtered difference between engine-out NOx measurement and a modeled reference.","status":"draft","sourceReview":"needs-review","scope":"2025 GM 25OBDG04B diagnostic parameter file; the cited monitor is documented, but individual vehicle, engine and calibration applicability has not been established.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[1439,1440,1441]}],"authoringBatch":"batch-08"}
---

# P22FB: engine-out NOx signal disagrees with its model

P22FB concerns the sensing performance of NOx sensor 1. The GM strategy compares engine-out NOx measurement with a model, expressing the difference relative to the modeled value. The documented failure boundaries are below −51% or above 100% after filtering.

## A model comparison needs valid inputs

The source describes averaging 100 samples and processing the mean with an exponentially weighted filter. Filter modes affect how many tests may occur per trip, so one instantaneous disagreement is not equivalent to the final diagnostic result. Reporting is Type A, one trip.

The model must be valid and modeled NOx must exceed 105 ppm. A steady-state requirement limits changes in modeled concentration for more than three seconds. Communication, electrical, sensor-range and internal-control failures are among the exclusions. Intake pressure, coolant temperature, fuel quantity and operating mode also qualify the comparison.

## Diagnosis and limitations

Review both measured NOx and the model's supporting conditions. A discrepancy cannot be interpreted confidently if the reference inputs are already flagged invalid. Verification similarly requires a completed qualified plausibility test, not simply a plausible-looking sensor value at idle.

One continuation prints an impossible speed interval for an alternative combustion mode. This article therefore does not prescribe that interval as a drive cycle. Confirm the applicable calibration and test procedure before using detailed enable limits or deciding that the sensor itself must be replaced.

## Source and application limits

This explanation covers the cited 2025 GM monitor. Confirm the vehicle and calibration in its service information before applying these limits; inclusion in this file does not establish model compatibility. [GM diagnostic parameters, PDF page 1439](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1439). [GM diagnostic parameters, PDF page 1440](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1440). [GM diagnostic parameters, PDF page 1441](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1441).
