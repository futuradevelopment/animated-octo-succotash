---
{"entryId": "generic-p06dc", "code": "P06DC", "title": "P06DC: oil-pump control circuit stays high when driven on", "description": "P06DC identifies the high-voltage oil-pressure control circuit condition in the cited ECM.", "status": "draft", "sourceReview": "checked", "scope": "Documented monitors in gm-2025-03a, model year 2025. These are module/calibration examples; vehicle, engine and transmission applicability must be confirmed independently.", "sourceIds": ["gm-2025-03a"], "sourcePages": [{"sourceId": "gm-2025-03a", "pages": [429]}], "authoringBatch": "batch-03"}
---

# P06DC: oil-pump control circuit stays high when driven on

P06DC identifies the high-voltage oil-pressure control circuit condition in the cited ECM. The low-side driver is commanded on when the controller evaluates a short-to-power signature.

## High circuit voltage does not mean high oil pressure

The measured quantity is the output-driver circuit voltage. The source does not compare oil pressure against a high-pressure limit. The generic control-circuit title should therefore not be turned into a diagnosis of excessive mechanical oil pressure.

The documented electrical detection specification is less than 0.5 ohm between output and controller power. Actual voltage boundaries are controller specific; this value does not constitute a live-circuit resistance-test instruction.

## Reproduce the enabled state, not just the code

The monitor requires relay voltage above 11 volts, run/crank active and cranking false. At least forty failed observations in fifty samples, taken every one hundred milliseconds, establish the decision. A high reading while the output is intentionally off is a different operating condition and cannot be used alone to confirm this on-state fault.

Record the command and circuit response together, then apply the exact vehicle's electrical diagnostic procedure. Successful verification should show the high signature no longer appears with the driver active and the diagnostic passes. Any separate oil-pressure warning still requires its own assessment. The table provides no universal pump or solenoid replacement claim and no authority to force the circuit externally.

## Source and applicability

Documented monitors in gm-2025-03a, model year 2025. These are module/calibration examples; vehicle, engine and transmission applicability must be confirmed independently. [GM 2025-03a, page 429](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=429).
