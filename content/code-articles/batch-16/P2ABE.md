---
{"entryId": "generic-p2abe", "code": "P2ABE", "title": "P2ABE: Current and temperature faults in the bank 2 wastegate driver", "description": "Distinguish the bank 2 H-bridge overcurrent and overtemperature reports that can produce P2ABE.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [860, 861]}], "authoringBatch": "batch-16"}
---

# P2ABE: Current and temperature faults in the bank 2 wastegate driver

P2ABE is attached to the wastegate bank 2 H-bridge's protection diagnostics. The main row begins with an overcurrent report on one page and continues with its conditions and a separate overtemperature route on the next. Reading only the first page would omit important context.

## The command state matters

The overcurrent route requires the bank 2 power stage to be actuated. Its listed qualification is 1,500 milliseconds, with battery voltage above 10.9 V and no active open-load or overload-plausibility test. This describes a driver-reported protection state while a command is being attempted.

The second route accepts an internal overtemperature error from the H-bridge, qualified for 1,000 milliseconds. It has the battery and diagnostic-inhibit prerequisites but is a distinct reported condition. The document does not publish a universal actuator current limit or a temperature measured at the turbocharger housing.

## Preserve evidence before interpreting cause

Identify the bank 2 protection reason, command state and companion supply or feedback codes. Comparing those details is more informative than treating every P2ABE as a seized wastegate. A feedback problem, a current protection report and a thermal protection report are different monitor results even when they concern the same assembly.

After a repair, the relevant branch must have an opportunity to run under the documented conditions. An idle check without actuator demand cannot establish that the overcurrent branch is clear. Physical testing and replacement decisions require the exact vehicle procedure; this source does not prescribe dismantling the turbocharger.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 860](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=860). [GM PDF, page 861](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=861).
