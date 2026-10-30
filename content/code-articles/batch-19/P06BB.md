---
{"entryId": "generic-p06bb", "code": "P06BB", "title": "P06BB: Cylinder3 resistance monitoring begins after the basic fault checks", "description": "Understand Ford P06BB’s sequence and heating-state limits before interpreting an isolated glow-plug resistance reading.", "status": "draft", "sourceReview": "needs-review", "scope": "Ford 2023–2024 diesel OBD summary, August 25, 2023 revision; only the described monitor examples. Confirm the engine and calibration before applying values.", "sourceIds": ["ford-diesel-2023-2024"], "sourcePages": [{"sourceId": "ford-diesel-2023-2024", "pages": [116]}], "authoringBatch": "batch-19"}
---

# P06BB: Cylinder3 resistance monitoring begins after the basic fault checks

P06BB is the cylinder 3 member of Ford’s glow-plug resistance range/performance monitor. The source explicitly sequences resistance assessment after open-circuit and short-circuit testing. That order keeps a performance result distinct from the simpler question of whether the channel is electrically open or shorted.

## Verify that the resistance assessment was eligible

The monitor operates with the glow plugs heating and uses approximately three seconds for malfunction registration. An inactive or disconnected circuit measured under different conditions is not automatically the same test that the controller performs.

The resistance panel gives an individual-circuit criterion above 2 ohms, but the caption beneath it says short to battery. The article retains this source inconsistency and does not treat the number as a universal cold-plug workshop limit.

## Interpret the channel-specific result

A useful record keeps cylinder 3 identity, heating command, preceding electrical-test status and the reported performance result. A successful continuity check alone cannot establish that the heating-mode resistance assessment also passed.

Ford uses the same documented method for the listed glow channels; P06BB identifies the affected channel rather than a different resistance rule. The summary cannot determine whether the relevant resistance originates in the glow element, a connection, wiring or control electronics. That localization and the exact applicable limit require the vehicle-specific procedure before a component replacement is justified.

## Source and applicability

Ford 2023–2024 diesel OBD summary, August 25, 2023 revision; only the described monitor examples. Confirm the engine and calibration before applying values. The monitor explanation does not identify a failed part or replace the applicable service procedure. [Ford PDF, page 116](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=116).
