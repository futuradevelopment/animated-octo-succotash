---
{"entryId": "generic-p0c6d", "code": "P0C6D", "title": "P0C6D: Toyota generator resolver B intermittent open indication", "description": "P0C6D is the Toyota MG1 cosine resolver fault reported under specified companion-code conditions.", "status": "draft", "sourceReview": "checked", "scope": "2023–2026 Toyota Corolla HV repair manual, lithium-ion battery with PA10, production from September 2022; verify the exact vehicle specification and detailed Toyota code.", "sourceIds": ["toyota-corolla-pa10-rm1000000026pxn"], "sourceLocators": [{"sourceId": "toyota-corolla-pa10-rm1000000026pxn", "locator": "RM1000000026PXN; explicit SAE mapping for P0C6D, DTC detection conditions, monitor strategy and diagnostic procedure"}], "authoringBatch": "batch-45"}
---

# P0C6D: Toyota generator resolver B intermittent open indication

## A conditional fault in the generator position circuit

For the documented Corolla HV, Toyota maps P0C691F to SAE P0C6D. It detects an **open in the generator resolver cosine-phase circuit** while one of a defined set of other faults is stored. Toyota identifies P0C7917, P0E5717, P0D3319, P1C5D19, P1C5F19 and P1C5E19 as that set.

The generator is MG1, and its cosine channel is circuit B. The same physical channel has an ordinary open-circuit variant, P0C6913, mapped to P0C69. Those two codes share a diagnostic procedure but do not share identical detection context or warning behavior.

## Interpreting the factory diagnostic order

P0C691F has one-trip logic and does not itself command the MIL or master warning in its individual table row. A vehicle can still display warnings from companion faults. Toyota does not publish the detailed monitor thresholds, so an arbitrary signal voltage should not be used as its claimed standard.

The manual gives precedence to insulation faults, then associated controller, communication and power-reference issues. The subsequent branch checks inverter connector condition and the generator resolver circuit. An improperly secured connector is corrected; contact damage or contamination leads to connector/harness repair. Only normal preceding inspections take the flow to inverter replacement. The listed transaxle possibility is therefore a diagnostic area, not an automatic repair recommendation.

## Evidence of recovery

Preserve the original combined fault record and any operating symptom. Toyota notes that heat or vibration inspection can itself affect detection, so a reproduced code must be interpreted in that setting. Its final operating pattern and All Readiness judgment verify recovery; INCOMPLETE is not a pass. A qualified hybrid technician should conduct that confirmation and all work near high-voltage components.

## Sources and applicability

[Toyota repair procedure RM1000000026PXN](https://estimate.mymitchell.com/t3Portal/document/rm/RM3560U/xhtml/RM1000000026PXN.html?linkId=d3713e9161&hashId=RM1000000026PXN#RM1000000026PXN). 2023–2026 Toyota Corolla HV repair manual, lithium-ion battery with PA10, production from September 2022; verify the exact vehicle specification and detailed Toyota code. These are manufacturer procedures for that documented configuration, not universal repair instructions.
