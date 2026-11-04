---
{"entryId": "generic-p0c6c", "code": "P0C6C", "title": "P0C6C: Toyota generator resolver cosine signal above threshold", "description": "Toyota maps P0C6C to P0C6917, identifying the high cosine-channel signal and its bounded factory repair path.", "status": "draft", "sourceReview": "checked", "scope": "2023–2026 Toyota Corolla HV repair manual, lithium-ion battery with PA10, production from September 2022; verify the exact vehicle specification and detailed Toyota code.", "sourceIds": ["toyota-corolla-pa10-rm1000000026pxo"], "sourceLocators": [{"sourceId": "toyota-corolla-pa10-rm1000000026pxo", "locator": "RM1000000026PXO; explicit SAE mapping for P0C6C, DTC detection conditions, monitor strategy and diagnostic procedure"}], "authoringBatch": "batch-45"}
---

# P0C6C: Toyota generator resolver cosine signal above threshold

## The high reading is a resolver signal

In the cited Toyota Corolla HV procedure, P0C6C is the SAE equivalent of P0C6917. The generator resolver's **cosine-phase signal is above the high-side threshold**. This is circuit B of the MG1 position-sensing system. It is not a direct diagnosis of generator overcharging or excessive rear-motor speed.

Toyota's description for this low/high resolver-signal family points toward the motor generator ECU circuit board inside the inverter or the installation of a low-voltage connector. The source explicitly says motor-resolver inspection is unnecessary for this branch. Applying the more extensive open-circuit procedure simply because both mention a resolver would overlook that distinction.

## The documented decision sequence

P0C6917 uses one-trip detection and commands the MIL and master warning. The monitor operates continuously, but the numerical high-side limit and duration are not disclosed. There is no supported universal test voltage to add to this description.

Toyota prioritizes listed insulation faults before associated control, communication and reference-supply faults. Its own procedure then checks the inverter connector. If engagement is insecure, it is corrected; if terminals are damaged or contaminated, the harness/connector is repaired. Only a normal connector takes the flow directly to inverter with converter assembly replacement. The transaxle is not the replacement outcome specified in this page.

## What a completed repair should show

The factory confirmation exercises the system through the stated operating sequence and reads Motor Generator All Readiness. A NORMAL judgment establishes a passed monitor, while INCOMPLETE calls for another valid sequence. Preserve the original detailed code and companion faults so that the repair addresses the correct channel and failure type. Inverter access and the required controlled operation belong to a qualified hybrid workshop following high-voltage precautions.

## Sources and applicability

[Toyota repair procedure RM1000000026PXO](https://estimate.mymitchell.com/t3Portal/document/rm/RM3560U/xhtml/RM1000000026PXO.html?linkId=d3713e9229&hashId=RM1000000026PXO#RM1000000026PXO). 2023–2026 Toyota Corolla HV repair manual, lithium-ion battery with PA10, production from September 2022; verify the exact vehicle specification and detailed Toyota code. These are manufacturer procedures for that documented configuration, not universal repair instructions.
