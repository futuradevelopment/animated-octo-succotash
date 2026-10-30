---
{"entryId": "generic-p06bc", "code": "P06BC", "title": "P06BC: A cylinder4 glow performance fault is not just an open-circuit result", "description": "Learn the diagnostic sequence behind Ford P06BC and why a later resistance check needs its heating context.", "status": "draft", "sourceReview": "needs-review", "scope": "Ford 2023–2024 diesel OBD summary, August 25, 2023 revision; only the described monitor examples. Confirm the engine and calibration before applying values.", "sourceIds": ["ford-diesel-2023-2024"], "sourcePages": [{"sourceId": "ford-diesel-2023-2024", "pages": [116]}], "authoringBatch": "batch-19"}
---

# P06BC: A cylinder4 glow performance fault is not just an open-circuit result

P06BC concerns the cylinder 4 glow-plug range/performance assessment. Ford places this resistance check after the open, short-to-battery and short-to-ground checks. Keeping those stages separate prevents a resistance-performance code from being treated as merely another name for an open glow plug.

## Heating mode supplies the measurement context

The documented operating mode is glow-plug heating, with approximately three seconds to register a malfunction. A resistance observation from a cold disconnected part does not automatically recreate that controller assessment.

The panel includes a resistance above 2 ohms as its individual-circuit criterion, but the associated threshold caption is labeled short to battery. This inconsistency remains a review limitation. The article does not silently reinterpret the caption or prescribe an unconditional ohmmeter limit.

## Preserve the diagnostic progression

Record whether cylinder 4’s basic electrical checks were completed, whether heating was requested and which performance result was stored. A circuit that avoids an open classification may still be unsuitable under a resistance assessment; those findings answer different questions.

The code identifies one channel within a shared monitor family. It does not by itself localize resistance to the plug rather than its connections, harness or driver. Vehicle-specific electrical information is needed to resolve the actual fault path and applicable limit before choosing a repair, rather than replacing the cylinder 4 glow plug from the code alone.

## Source and applicability

Ford 2023–2024 diesel OBD summary, August 25, 2023 revision; only the described monitor examples. Confirm the engine and calibration before applying values. The monitor explanation does not identify a failed part or replace the applicable service procedure. [Ford PDF, page 116](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=116).
