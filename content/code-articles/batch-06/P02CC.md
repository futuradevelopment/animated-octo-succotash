---
{"entryId":"generic-p02cc","code":"P02CC","title":"P02CC: cylinder 1 reaches the minimum injection-learning limit","description":"P02CC concerns the lower limit of cylinder 1's learned injector energizing-time correction.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG04B diagnostic parameter tables; the cited monitor only. Vehicle, engine and calibration applicability must be confirmed separately.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[1137]}],"authoringBatch":"batch-06"}
---

# P02CC: cylinder 1 reaches the minimum injection-learning limit

P02CC concerns the lower limit of cylinder 1's learned injector energizing-time correction. In the cited diesel strategy, Small Quantity adjustment based on rail Pressure drop (SQP) learns from a small commanded injection during fuel cut-off.

## What reaches the limit

The controller estimates injected quantity from the fuel-rail pressure drop and evaluates the newly learned time correction against a calibrated minimum. The table names the limit in microseconds but supplies no universal numeric value. “Minimum” therefore does not mean that rail pressure itself is below a stated pressure threshold.

The result is stored separately for the SQP rail-pressure levels. One saturated entry can set the diagnosis; the described unset condition requires every entry to be free of saturation. A normal result at a single pressure level does not settle the whole map.

## Useful diagnostic evidence

Check whether SQP authority diagnosis and SQP injection management were enabled when learning occurred. The table ties evaluation to learning and cylinder firing events, rather than giving a fixed elapsed-time completion test. This matters when a short drive produces no new result.

A useful investigation separates the stored cylinder-1 correction from the pressure-drop evidence used to calculate it. That is diagnostic reasoning from the monitor design, not an OEM instruction to replace an injector. High-pressure fuel work requires the applicable professional service procedure.

## Source and applicability

2025 GM 25OBDG04B diagnostic parameter tables; the cited monitor only. Vehicle, engine and calibration applicability must be confirmed separately. These tables describe detection logic, not a complete repair procedure or a component replacement verdict. [gm-2025-04b, PDF page 1137](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1137).
