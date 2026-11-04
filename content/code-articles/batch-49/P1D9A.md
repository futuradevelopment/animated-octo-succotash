---
{"entryId": "honda-p1d9a", "code": "P1D9A", "title": "P1D9A: Coolant condition and pump control both matter to this PCU fault", "description": "Honda P1D9A is a PCU electric-coolant-pump circuit code, but the source specifically notes that insufficient coolant concentration in a cold climate can contribute.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1d9a-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1d9a-factory", "pages": [1, 2, 3]}], "authoringBatch": "batch-49"}
---

# P1D9A: Coolant condition and pump control both matter to this PCU fault

## The factory procedure checks the coolant before condemning the pump

Honda P1D9A is a PCU electric-coolant-pump circuit code, but the source specifically notes that insufficient coolant concentration in a cold climate can contribute. Its initial verification checks coolant level and concentration, then uses the HDS electric-water-pump function test. This is broader than simply looking for a failed electric motor.

If the code repeats, the procedure investigates a short in the pump command circuit before reaching a pump-replacement and recheck branch. A persistent indication after that branch can lead further toward the PCU. Those decisions depend on the actual test results; the DTC name alone does not choose the replacement.

## Air bleeding changes the meaning of a pump-speed check

When the initial code does not repeat, the source calls for coolant-circuit inspection and the specified air-bleeding process before evaluating pump operation. During the stated HDS test, it gives a pump-speed range of 1,183–2,913 rpm. That range belongs to the described controlled test, not every operating condition.

The procedure also requires PCU coolant air bleeding after troubleshooting. Omitting that step could leave the cooling system in a condition different from the one assumed by the diagnostic check.

Preserve freeze data and have a qualified technician follow the complete Honda sequence. Account for hot coolant, electrical control and nearby high-voltage equipment. Avoid improvised pump power feeds, incorrect coolant mixtures or interpreting an unbled system's speed reading as a conclusive pump failure.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Troubleshooting_%20P1D9A%20(229)%205812.pdf), PDF pages 1, 2, 3. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
