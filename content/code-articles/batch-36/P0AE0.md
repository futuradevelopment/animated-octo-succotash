---
{"entryId": "generic-p0ae0", "code": "P0AE0", "title": "P0AE0: Negative contactor output stays high when commanded off", "description": "GM documents P0AE0 as a negative contactor control-output high fault evaluated with the command off.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [778]}], "authoringBatch": "batch-36"}
---

# P0AE0: Negative contactor output stays high when commanded off

P0AE0 refers to the hybrid/EV battery negative contactor control circuit high. In the documented 2018 GM monitor, the high-side PWM output is evaluated for a short-to-power response while its command is **off**.

## Why an off-state fault matters

The failure band is a control voltage from 5.27 through 19.7 V. These are control-circuit values, not measured traction-battery voltage. The monitor needs 12 V battery voltage above 10.2 V and requires 40 failing samples out of 50 at 12.5-millisecond intervals. Its reporting classification is Type B, two trips.

The code describes a disagreement between an off command and electrical feedback. It does not, by itself, prove the power contacts are welded. That separate question requires the appropriate system checks rather than an inference from the word “contactor.”

## Distinguishing useful observations

Record the requested contactor state and the output's feedback together. A high value with an on command cannot establish the off-state defect in this row. Also preserve companion faults that may explain why a contactor sequence was interrupted.

A correct verification demonstrates that the control output behaves properly when deactivated under valid supply conditions, followed by the manufacturer's required battery-system confirmation. Merely seeing the vehicle shut down is insufficient evidence about the control circuit. This information is for interpreting a scan result; access to contactors and high-voltage circuitry belongs to trained personnel following the vehicle procedure, with no bridging or direct energization implied.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 778](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=778).
