---
{"entryId": "generic-p0a5e", "code": "P0A5E", "title": "P0A5E: Drive motor A phase U current is below its expected peak", "description": "The GM P0A5E monitor evaluates U-phase current only when drive motor A is actively commanded under suitable inverter conditions.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 diagnostic monitor; document section stated in article; per-vehicle and calibration applicability must be verified.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [1504]}], "authoringBatch": "batch-36"}
---

# P0A5E: Drive motor A phase U current is below its expected peak

P0A5E is drive motor A phase U current low. The 2018 GM MCP1A table checks absolute U-phase current near its expected electrical peak to detect an open-circuit response.

## Low current is meaningful only under the specified demand

The threshold is below 9 A for 0.4 seconds in a 0.6-second window. Enable conditions include Run drive state, normal inverter PWM, inverter voltage above 50 V, no active discharge and a delay above 10 milliseconds. Evaluation occurs within a ±30-degree phase-axis window, with squared commanded current above 900 A².

The squared-current value is not a 900 A command. Nor is a low current near an ordinary phase zero crossing equivalent to the peak-window defect. GM lists Type A, one-trip reporting.

## Retain the motor and phase identity

Motor A and phase U identify the specific measurement being judged. Compare the original command and inverter status with the fault record before assuming that an idle measurement proves an open circuit. The DTC does not identify whether a conductor, power stage, sensing path or motor is the defective part.

Use the applicable motor/inverter diagnostic and qualified high-voltage personnel. Confirmation should demonstrate the expected current response during the prescribed eligible test after repair. Do not probe live motor phases, apply external power or use an improvised load test from this explanatory table.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 1504](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=1504).
