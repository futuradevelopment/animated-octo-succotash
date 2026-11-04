---
{"entryId": "honda-p1de4", "code": "P1DE4", "title": "P1DE4: A V1 circuit fault can be secondary to precharge or crash shutdown", "description": "Honda P1DE4 concerns the VCU V1 voltage-sensor circuit.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1de4-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1de4-factory", "pages": [1, 2]}], "authoringBatch": "batch-49"}
---

# P1DE4: A V1 circuit fault can be secondary to precharge or crash shutdown

## The companion-code check changes the diagnosis

Honda P1DE4 concerns the VCU V1 voltage-sensor circuit. The factory procedure first verifies whether the code returns after an HDS clear and power cycle. A non-returning record is treated as intermittent, with the original freeze or snapshot conditions used to guide investigation.

When P1DE4 repeats, the next step is not immediate sensor or PCU replacement. The source checks for P0AE1, the high-voltage precharge-contactor circuit fault; P0DA8, battery-to-inverter voltage correlation; and P1D65, collision-signal shutdown. If any is present, diagnosis is redirected to the indicated code.

## Preserve the wider high-voltage operating state

That priority list shows why a V1 circuit record can need context from precharge, voltage agreement or a protective shutdown. Erasing companion faults before documenting them could remove the information that selects the correct branch. The procedure reaches its PCU replacement instruction only when the repeated V1 fault is present without those listed priorities.

The excerpt provides no numerical signal threshold or independent terminal test for P1DE4. A technician should not substitute values from another V1 code or treat the code title as proof that a particular internal sensor is defective.

Use the exact Honda service information and preserve the original diagnostic records before clearing. Precharge circuits, collision-related shutdowns and PCU access require qualified hybrid personnel, appropriate restraint-system context where relevant, and the prescribed high-voltage isolation precautions.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Troubleshooting_%20P1DE4%20(442)%205822.pdf), PDF pages 1, 2. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
