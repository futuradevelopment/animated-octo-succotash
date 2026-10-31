---
{"entryId": "generic-p0bca", "code": "P0BCA", "title": "P0BCA: Battery fan feedback frequency exceeds range", "description": "The GM P0BCA monitor detects an excessively high cooling-fan feedback frequency under specified enabled conditions.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [899]}], "authoringBatch": "batch-36"}
---

# P0BCA: Battery fan feedback frequency exceeds range

P0BCA means hybrid/EV battery cooling fan 1 sense circuit high. The 2018 GM monitor evaluates a feedback frequency above 290 Hz. The word “high” therefore refers to the monitored signal's frequency in this implementation, not necessarily excessive voltage or confirmed fan overspeed.

## When the frequency is evaluated

System voltage must be above 10.2 V, cooling-fan enable must be true, and commanded PWM duty must fall between 11 and 89 percent. The fan must have been on for more than eight seconds. The test requires 16 failed samples among 20 at 250-millisecond intervals and is listed as Type B, two trips.

Those conditions prevent a disconnected observation from becoming a diagnosis. Feedback obtained outside the enabled operating range cannot be interpreted using this row alone. Capture command duty, enable state, elapsed on time and frequency together.

## Distinguish signal range from speed performance

An excessive frequency can make feedback unusable even if the physical fan's motion seems ordinary. The code does not establish which component created the abnormal signal. Use the correct feedback-circuit procedure rather than assuming the motor itself is running too fast.

Verification needs an acceptable feedback signal during the eligible test window. Merely observing airflow or clearing a historical fault does not confirm the input the controller uses. This is a monitor explanation, not a connector-level test specification. Qualified service is necessary where the cooling system requires access to protected hybrid-battery components.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 899](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=899).
