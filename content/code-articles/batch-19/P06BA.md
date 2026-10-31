---
{"entryId": "generic-p06ba", "code": "P06BA", "title": "P06BA: Cylinder2 performance can fail after an open-circuit check passes", "description": "Learn Ford P06BA’s resistance-test sequence and why continuity alone is insufficient evidence of a healthy glow circuit.", "status": "draft", "sourceReview": "needs-review", "scope": "Ford 2023–2024 diesel OBD summary, August 25, 2023 revision; only the described monitor examples. Confirm the engine and calibration before applying values.", "sourceIds": ["ford-diesel-2023-2024"], "sourcePages": [{"sourceId": "ford-diesel-2023-2024", "pages": [116]}], "authoringBatch": "batch-19"}
---

# P06BA: Cylinder2 performance can fail after an open-circuit check passes

P06BA identifies the cylinder 2 glow-plug range/performance assessment in Ford’s diesel summary. The documented resistance check follows the open, short-to-battery and short-to-ground tests. A circuit that has not been classified open can still require evaluation under this later performance branch.

## Heating conditions matter to the resistance result

Ford specifies glow-plug heating mode and approximately three seconds for failure registration. The resistance section states an individual-circuit resistance above 2 ohms, but its threshold caption says short to battery. This inconsistency is preserved rather than silently converting the value into an unconditional resistance specification.

The source does not describe a cold disconnected-plug bench test. A resistance reading obtained under different conditions therefore cannot automatically be compared as though it were the controller’s heating-mode assessment.

## Keep the tested channel and preceding results

Preserve cylinder 2 identity, heating request and any basic electrical faults. Those earlier classifications may be more relevant to establishing a valid test path than interpreting a performance label in isolation.

P06BA uses the shared glow-resistance method; the code selects the channel, not an invented cylinder-specific threshold. The summary does not determine whether the resistive path lies within the plug, a connection, wiring or driver circuitry. The applicable vehicle procedure must establish that cause and resolve the source-caption limitation before a replacement or wiring repair is justified.

## Source and applicability

Ford 2023–2024 diesel OBD summary, August 25, 2023 revision; only the described monitor examples. Confirm the engine and calibration before applying values. The monitor explanation does not identify a failed part or replace the applicable service procedure. [Ford PDF, page 116](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=116).
