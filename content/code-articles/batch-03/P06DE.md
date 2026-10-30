---
{"entryId": "generic-p06de", "code": "P06DE", "title": "P06DE: a two-stage oil pump fails to leave its low-pressure state", "description": "P06DE identifies a low-pressure-state performance failure in the documented two-stage oil-pump system.", "status": "draft", "sourceReview": "checked", "scope": "Documented monitors in gm-2025-03a, model year 2025. These are module/calibration examples; vehicle, engine and transmission applicability must be confirmed independently.", "sourceIds": ["gm-2025-03a"], "sourcePages": [{"sourceId": "gm-2025-03a", "pages": [435]}], "authoringBatch": "batch-03"}
---

# P06DE: a two-stage oil pump fails to leave its low-pressure state

P06DE identifies a low-pressure-state performance failure in the documented two-stage oil-pump system. The source maps control ON to the low-pressure state and control OFF to the high-pressure state, so stuck-on refers to that specific control architecture.

## Response matters more than one pressure reading

The controller compares filtered pressure before a state change with pressure 1.5 seconds later. It looks for insufficient change combined with a pressure level consistent with the low state. A pressure reading without the corresponding command transition does not reproduce this diagnostic decision.

The displayed test requires more than twelve errors in fifteen samples. The pressure boundaries are calibration-dependent supporting-table quantities. The extracted low-state formula is awkwardly rendered, so this explanation does not turn it into a universal mechanical pressure specification.

## Intrusive and passive tests cooperate

The intrusive sequence deliberately cycles the two states. Once it passes, the passive monitor watches subsequent natural state changes and can request another intrusive test if response becomes inadequate. A single normal transition is therefore less persuasive than successful completion of the applicable monitor.

Related sensor faults, insufficient running time and an identified aeration condition can inhibit evaluation. Diagnose this with the exact vehicle's oil-pressure service process, preserving command, pressure and enable information. Do not force control states or continue operating solely to accumulate samples when an independent lubrication warning requires attention. The summary does not identify a mandatory pump replacement.

## Source and applicability

Documented monitors in gm-2025-03a, model year 2025. These are module/calibration examples; vehicle, engine and transmission applicability must be confirmed independently. [GM 2025-03a, page 435](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=435).
