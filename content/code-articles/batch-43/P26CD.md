---
{"entryId": "generic-p26cd", "code": "P26CD", "title": "P26CD: Toyota detects a high coolant-pump command circuit without pulses", "description": "Toyota maps P26CA12 to P26CD and evaluates the water-pump duty-control path while a pump command is active.", "status": "draft", "sourceReview": "checked", "scope": "Toyota A25A-FKS SFI procedure for 2021–2025 RAV4, production from August 2020; original Toyota content mirrored by Mitchell. Extended DTC suffixes and SAE mappings are explicit in the procedure.", "sourceIds": ["toyota-rm100000001qol7"], "sourceLocators": [{"sourceId": "toyota-rm100000001qol7", "locator": "DTC detection condition; SAE Code mapping; Monitor Description; Monitor Strategy; Typical Enabling Conditions; Typical Malfunction Thresholds; Confirmation Driving Pattern; Procedure"}], "authoringBatch": "batch-43"}
---

# P26CD: Toyota detects a high coolant-pump command circuit without pulses

Toyota’s P26CA12 maps to generic P26CD on the covered RAV4. The ECM controls electric water-pump speed through a duty signal called WPO. This monitor examines the actual command-path behavior while an operation command is being sent; it is not simply a coolant-temperature alarm.

## A high level and missing pulses belong together

The malfunction-threshold section requires both a high output-terminal voltage level and no output signal. The monitor runs for three seconds with immediate MIL operation. Its enabling conditions include a commanded duty cycle from 30 to 85 percent, ignition on, the starter off and sufficient battery voltage.

Those details distinguish an abnormal control path from a deliberately inactive pump. Toyota’s related data list includes coolant temperature, target pump speed and actual pump speed, which preserve the difference between cooling demand, command and response.

## The diagnostic branches separate pump, wiring and ECM

The source begins with a connector-side voltage check. Its later guided test evaluates whether the ECM control transistor responds during an active test; a different branch checks unwanted connections in the harness. The resulting replacement decisions depend on those findings. The document’s specialized running-engine active test should be performed through the matching professional procedure, not improvised from the DTC number.

Verification requires the prescribed pump-monitor confirmation conditions followed by pending-code review and All Readiness for P26CA12. A normal coolant reading at rest does not prove that the pulse-control fault has been resolved, and clearing the DTC does not establish a completed monitor judgment.

## Source and scope

[A25A-FKS (ENGINE CONTROL): SFI SYSTEM: P26CA12; Engine Coolant Pump Circuit Short to Battery; 2021 - 2025 MY RAV4 [08/2020 -        ]](https://estimate.mymitchell.com/t3Portal/document/rm/RM3510U/xhtml/RM100000001QOL7.html). Locator: DTC detection condition; SAE Code mapping; Monitor Description; Monitor Strategy; Typical Enabling Conditions; Typical Malfunction Thresholds; Confirmation Driving Pattern; Procedure. Toyota A25A-FKS SFI procedure for 2021–2025 RAV4, production from August 2020; original Toyota content mirrored by Mitchell. Extended DTC suffixes and SAE mappings are explicit in the procedure.
