---
{"entryId": "generic-p00ea", "code": "P00EA", "title": "P00EA: intake temperature 3 signal resistance is too low", "description": "P00EA is the intake-air temperature 3 circuit-low monitor in the documented GM manifold-temperature/humidity arrangement.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 25OBDG03A.pdf, ECM manifold-temperature and humidity-equipped IAT3 resistance monitoring. Vehicle, engine and calibration applicability must be confirmed separately; the file-level model matrix is not per-code fitment evidence.", "sourceIds": ["gm-2025-03a"], "sourcePages": [{"sourceId": "gm-2025-03a", "pages": [122]}], "authoringBatch": "batch-01"}
---

# P00EA: intake temperature 3 signal resistance is too low

P00EA is the intake-air temperature 3 circuit-low monitor in the documented GM manifold-temperature/humidity arrangement. It detects a continuous short-to-ground condition when the raw IAT3 resistance falls below 57.94 Ω.

## Interpret the thermistor correctly

The source describes lower resistance as corresponding to higher indicated temperature. The “low” in the code title concerns the electrical resistance, not low intake-air temperature. The threshold’s printed temperature annotation is inconsistent with that relationship, so no equivalent temperature value is inferred here.

The diagnostic requires enable and counts 40 failures among 50 readings, sampled every 100 milliseconds. The Type B, two-trip classification is separate from this within-test sample qualification. A single unusual reading is not the full confirmed failure logic.

## A focused circuit investigation

Preserve the raw IAT3 input and complete failure status. The code indicates low-resistance behavior in the signal circuit; it does not by itself distinguish the sensing element from wiring or another part of that path. Vehicle-specific information is required before identifying terminals or measuring the circuit.

After the actual cause is corrected, verification should show credible raw input and completion of the enabled low-resistance monitor. A three-sensor cold-soak comparison belongs to the separate performance diagnostic and cannot replace this circuit check. The 57.94 Ω criterion applies to this documented controller/sensor arrangement and should not be generalized to every intake-temperature sensor.

## Source and applicability

This explanation covers the documented 2025 GM monitor, not every vehicle using P00EA. Confirm the vehicle’s module and calibration before applying its limits. [GM diagnostic table, PDF page 122](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=122).
