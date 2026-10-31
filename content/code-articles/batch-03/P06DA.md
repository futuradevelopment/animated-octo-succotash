---
{"entryId": "generic-p06da", "code": "P06DA", "title": "P06DA: oil-pressure control open circuit is an electrical monitor", "description": "P06DA checks the oil-pump control low-side driver for an open circuit in the cited ECM strategy.", "status": "draft", "sourceReview": "checked", "scope": "Documented monitors in gm-2025-03a, model year 2025. These are module/calibration examples; vehicle, engine and transmission applicability must be confirmed independently.", "sourceIds": ["gm-2025-03a"], "sourcePages": [{"sourceId": "gm-2025-03a", "pages": [427]}], "authoringBatch": "batch-03"}
---

# P06DA: oil-pressure control open circuit is an electrical monitor

P06DA checks the oil-pump control low-side driver for an open circuit in the cited ECM strategy. The controller evaluates the output while it is off and judges its voltage against controller-specific limits.

## Separate circuit integrity from oil pressure

The open-circuit detection specification corresponds to more than 200 kilohms between output and controller ground. This describes electrical fault detection; the row does not compare measured oil pressure with a mechanical minimum. P06DA alone therefore cannot establish a pressure value or diagnose a worn pump.

The enabling conditions require powertrain relay voltage above 11 volts, run/crank active and cranking false. At least forty errors out of fifty samples are required, evaluated every one hundred milliseconds. A check made during cranking is outside this stated context.

## Interpret an accompanying low-circuit code

The source notes that P06DB can also set in certain controllers. Their co-occurrence need not imply two independent failures. Use the exact output-driver architecture and circuit observations to resolve the signature.

Verification should show the off-state control-circuit test passes with the required voltage and engine state. Any independent oil-pressure warning needs its own vehicle-specific assessment; this electrical summary does not establish adequate lubrication. It also provides no universal pump replacement, connector pinout or safe method for forcing the control solenoid with external power.

## Source and applicability

Documented monitors in gm-2025-03a, model year 2025. These are module/calibration examples; vehicle, engine and transmission applicability must be confirmed independently. [GM 2025-03a, page 427](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=427).
