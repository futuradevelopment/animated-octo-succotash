---
{"entryId":"generic-p04cf","code":"P04CF","title":"P04CF: low-pressure EGR temperature disagrees after an overnight soak","description":"P04CF is a key-on temperature plausibility check for the upstream low-pressure EGR temperature sensor.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG04B diagnostic parameter tables; the cited monitor only. Vehicle, engine and calibration applicability must be confirmed separately.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[1209,1210]}],"authoringBatch":"batch-06"}
---

# P04CF: low-pressure EGR temperature disagrees after an overnight soak

P04CF is a key-on temperature plausibility check for the upstream low-pressure EGR temperature sensor. The monitor compares that reading with the average of intake-manifold air temperature and fuel temperature after an engine-off period longer than 28,800 seconds, or eight hours.

## Reference agreement comes first

The two reference temperatures must differ by less than 20°C. The EGR temperature then fails if its absolute difference from their average exceeds 20°C. A disagreement between the references therefore changes the interpretation: the controller should not use an already inconsistent pair as its normal comparison basis.

The average uses 10 samples. Monitoring occurs at key-on before the engine has run for two seconds, excluding cranking, with run/crank relay voltage above 11 V and a valid engine-off timer.

## What a meaningful retest needs

The continuation requires no relevant intake, fuel-temperature, EGR electrical or EGR intermittent fault. The check must not already be completed in the current cycle. A warm restart or a late running-engine comparison cannot reproduce the specified cold plausibility assessment.

Verification should establish the long soak, valid references and the initial EGR reading together. The table does not prove the EGR sensor itself is defective when its value disagrees, nor does it prescribe a replacement. It supplies a comparison strategy whose applicability and physical sensor identification still require the correct vehicle information.

## Source and applicability

2025 GM 25OBDG04B diagnostic parameter tables; the cited monitor only. Vehicle, engine and calibration applicability must be confirmed separately. These tables describe detection logic, not a complete repair procedure or a component replacement verdict. [gm-2025-04b, PDF page 1209](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1209); [gm-2025-04b, PDF page 1210](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1210).
