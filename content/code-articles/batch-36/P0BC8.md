---
{"entryId": "generic-p0bc8", "code": "P0BC8", "title": "P0BC8: Battery fan feedback is checked both running and stopped", "description": "The GM P0BC8 performance monitor checks commanded fan speed against feedback and also detects unexpected speed when the fan is off.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [896]}], "authoringBatch": "batch-36"}
---

# P0BC8: Battery fan feedback is checked both running and stopped

P0BC8 is a hybrid/EV battery cooling-fan sense range/performance code. GM's 2018 implementation has two useful branches: comparison of commanded and reported speed while running, and a check for reported rotation when the fan is off.

## Identify which branch failed

During operation, the controller filters the difference between command and feedback. The fan must have been on for more than 11 seconds, with commanded PWM duty between 11 and 89 percent. Several fan-circuit, enable-circuit and temperature faults inhibit this comparison. A speed error's size affects how quickly the performance test fails; the table allows up to 43 seconds.

With cooling-fan enable false, the monitor instead looks for feedback above 120 rpm after more than 20 seconds off. This branch requires 24 failures among 32 samples at 250-millisecond intervals. Thus, P0BC8 does not always mean the fan failed to turn fast enough—it can also describe unexpected off-state feedback.

## A useful verification record

Preserve command, feedback, elapsed on/off time and companion circuit faults. A brief command change may never satisfy the relevant delay. Resolve those conditions before treating a momentary speed match as proof of repair.

The source describes feedback performance, not a unique mechanical cause or replacement part. Follow the applicable battery-cooling procedure and keep access to protected battery components within qualified service. These criteria belong to this GM monitor and do not define another vehicle's fan-speed limits.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 896](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=896).
