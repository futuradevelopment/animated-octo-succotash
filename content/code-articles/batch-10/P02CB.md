---
{"entryId":"generic-p02cb","code":"P02CB","title":"P02CB: bank-2 underboost monitoring and a calibration caveat","description":"P02CB is labeled a bank-2 underboost condition in the cited table.","status":"draft","sourceReview":"needs-review","scope":"2025 GM 25OBDG07A Part2 diagnostic monitor documentation; the application-matrix filename mismatch is unresolved, so no model or engine applicability is inferred.","sourceIds":["gm-2025-07a-2"],"sourcePages":[{"sourceId":"gm-2025-07a-2","pages":[824]}],"authoringBatch":"batch-10"}
---

# P02CB: bank-2 underboost monitoring and a calibration caveat

P02CB is labeled a bank-2 underboost condition in the cited table. It compares an averaged boost-control deviation within a qualified operating window, rather than treating every low pressure reading as an underboost fault.

## Confirm demand and measurement validity

The row requires valid desired values, a valid bank-2 sensed value, active boost control, and no relevant safety-cutoff or limp-home request. It also lists desired pressure upstream of the bank-2 throttle above 1,600 hPa and ambient pressure above 700 hPa.

These conditions distinguish insufficient pressure during a valid boost demand from low pressure when no such demand exists. A diagnostic review should retain desired pressure, sensed pressure, and their validity status together.

## Do not turn the printed formula into a repair limit

The source’s comparison references a 250-hPa value and a 50-hPa difference described as healing a minimum error. It also prints both a wide-open-throttle-area condition and an idling-active condition. Those details are not clear enough to reconstruct a dependable universal failure threshold.

Two-trip reporting and a three-second operating qualifier are shown. Verification should use the applicable service calibration’s completed underboost test. This draft remains flagged for source review because the failure-versus-healing formula and operating-state wording need resolution before numerical diagnostic instructions can be published.

## Documentation and applicability

These details describe the monitor in GM’s 2025 25OBDG07A Part2 file. Its application-matrix filename does not match the download index, so model and engine applicability remain unresolved. Use the vehicle’s correct service information before applying these calibration details.

[GM diagnostic table, PDF page 824](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=824).
