---
{"entryId":"generic-p2b2d","code":"P2B2D","title":"P2B2D: Sensor 5 circuit low uses a configurable resistance channel","description":"Learn why P2B2D requires the logical coolant-sensor assignment to be resolved before a resistance threshold is selected.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-03b"],"sourcePages":[{"sourceId":"gm-2025-03b","pages":[868]}],"authoringBatch":"batch-18"}
---

# P2B2D: Sensor 5 circuit low uses a configurable resistance channel

P2B2D concerns low circuit resistance for the logical engine-coolant temperature sensor 5. GM describes a configurable sensor-reading system, so the number in the diagnostic name is not automatically the numbered hardware input in the calibration table. Confusing those two numbering schemes can select the wrong threshold.

## Resolve the logical assignment first

The cited table maps the engine-coolant-sensor-5 function to its sixth temperature-sensor input. Other inputs have different functions or are unused, and the threshold list contains more than one resistance value. The article therefore does not use “sensor 5” as a physical location or connector identity.

The fault concerns resistance falling below the configured limit, consistent with the monitor’s short-to-ground classification. Its temperature annotation describes the calibration endpoint; the code is not independent proof that the coolant actually reached that temperature.

## Look for sustained electrical behavior

The diagnostic is continuously sampled and requires five seconds of failure within a six-second window. A brief low-resistance transition and a qualified persistent result are not equivalent. The source also classifies reporting separately as two-trip behavior.

Preserve the logical sensor assignment, interpreted resistance and fault duration. A plausible displayed temperature at another time does not establish that the original electrical condition was absent. Determining whether the problem lies in the sensor, wiring or interpretation requires the corresponding vehicle circuit information.

## Source and applicability

2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG03B, PDF page 868](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=868).
