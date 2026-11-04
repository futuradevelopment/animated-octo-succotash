---
{"entryId": "honda-p1f3c", "code": "P1F3C", "title": "P1F3C: VCU overheating is investigated after coolant-pump faults", "description": "Honda P1F3C concerns excessive VCU temperature.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1f3c-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1f3c-factory", "pages": [1, 2]}], "authoringBatch": "batch-49"}
---

# P1F3C: VCU overheating is investigated after coolant-pump faults

## Pump-control codes have priority

Honda P1F3C concerns excessive VCU temperature. The factory procedure first checks for P1D92, the PCU coolant-pump control-circuit fault, and P1D9A, the pump-circuit fault. If either is present, diagnosis is redirected there before the VCU-overtemperature branch continues.

This priority is useful because inadequate cooling can affect the temperature of otherwise functioning power electronics. Clearing the pump-related records and investigating only the temperature code would remove the information that selects the documented diagnostic route.

## A failed monitor leads to coolant-circuit inspection

With those priority codes absent, the source uses the recorded freeze-data operating range and HDS OBD status. FAILED leads to inspection of the PCU coolant circuit. PASSED is treated as an intermittent event, while NOT COMPLETED means the monitor has not yet supplied a conclusive result.

After a failed monitor, a satisfactory coolant-circuit inspection reaches the PCU branch; an unsatisfactory result redirects to cooling-fan-control troubleshooting. The excerpt does not publish a universal VCU temperature threshold or authorize replacing the PCU merely because P1F3C appears in history.

Preserve the original thermal and pump records before resetting. Professional verification should avoid deliberately overstressing a system with active overheating symptoms. A qualified hybrid technician must apply the current Honda cooling inspection and high-voltage precautions, accounting for both hot coolant and energized power electronics. An incomplete monitor or extinguished lamp is not evidence that cooling performance has recovered.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Troubleshooting_%20P1F3C%20(336)%205829.pdf), PDF pages 1, 2. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
