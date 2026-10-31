---
{"entryId": "generic-p07bf", "code": "P07BF", "title": "P07BF: input-speed circuit low is distinct from low input RPM", "description": "P07BF is the electrical low-input diagnostic for transmission input/turbine speed sensor A.", "status": "draft", "sourceReview": "checked", "scope": "Documented monitors in gm-2025-03a, model year 2025. These are module/calibration examples; vehicle, engine and transmission applicability must be confirmed independently.", "sourceIds": ["gm-2025-03a"], "sourcePages": [{"sourceId": "gm-2025-03a", "pages": [1122]}], "authoringBatch": "batch-03"}
---

# P07BF: input-speed circuit low is distinct from low input RPM

P07BF is the electrical low-input diagnostic for transmission input/turbine speed sensor A. The cited TCM compares raw sensor voltage with a lower boundary of 0.2500 volt to detect the ground-short condition.

## Check the electrical channel, not only speed

The fault is not simply a statement that the turbine is rotating slowly. A zero-RPM report and an electrically low input are different observations. The source links the voltage threshold to a detection specification below 0.5 ohm between signal and controller ground, without identifying the physical cause of that signature.

This distinction is useful when P0717 or P0716 also appears in a diagnostic history: those source monitors evaluate speed activity or drop behavior, while P07BF addresses circuit voltage. The electrical result can affect whether the performance monitors are permitted to run.

## Count logic and enable conditions

A failure interval beyond fifty milliseconds advances the counter, and the counter must exceed sixteen. Both run/crank and battery voltage must be above 10 volts for more than five seconds. Service fast learn, code-clear activity and active P07C0 are excluded.

Verification needs a passing electrical test under those conditions, not merely a momentary return of a nonzero speed PID. Use the vehicle-specific circuit procedure before attributing the code to the sensor assembly. The published resistance relationship is a monitor design criterion, not a live-circuit measurement instruction.

## Source and applicability

Documented monitors in gm-2025-03a, model year 2025. These are module/calibration examples; vehicle, engine and transmission applicability must be confirmed independently. [GM 2025-03a, page 1122](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=1122).
