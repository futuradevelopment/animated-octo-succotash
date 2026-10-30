---
{"entryId": "generic-p06be", "code": "P06BE", "title": "P06BE: Cylinder6 performance monitoring follows the open and short checks", "description": "Learn why Ford P06BE should be interpreted as a heating-mode resistance assessment rather than a generic glow-system failure.", "status": "draft", "sourceReview": "needs-review", "scope": "Ford 2023–2024 diesel OBD summary, August 25, 2023 revision; only the described monitor examples. Confirm the engine and calibration before applying values.", "sourceIds": ["ford-diesel-2023-2024"], "sourcePages": [{"sourceId": "ford-diesel-2023-2024", "pages": [116]}], "authoringBatch": "batch-19"}
---

# P06BE: Cylinder6 performance monitoring follows the open and short checks

P06BE is the cylinder 6 glow-plug resistance range/performance entry in Ford’s summary. It identifies a particular monitored channel, while the underlying method is shared across the listed cylinders. The source does not establish a different resistance tolerance simply because the channel number changes.

## Sequence determines which evidence comes first

Ford runs the resistance check after open-circuit, short-to-battery and short-to-ground testing. If a basic electrical classification is present, its relationship to the later performance result should be preserved rather than ignored.

The resistance monitor operates during glow-plug heating and lists approximately three seconds to register a malfunction. A static reading taken without the operating command cannot automatically be considered equivalent.

## Treat the printed threshold with its limitation

The panel gives individual-circuit resistance above 2 ohms, but its caption says short to battery. This article leaves that inconsistency explicit and does not transform the number into a universal disconnected-plug test specification.

A useful verification record includes cylinder 6 identity, heating state, basic electrical-check results and the reported performance fault. The summary does not locate the resistance within the glow element or other parts of the circuit. The vehicle-specific procedure is needed to establish appropriate limits and localize the cause before a plug, harness or controller repair is selected.

## Source and applicability

Ford 2023–2024 diesel OBD summary, August 25, 2023 revision; only the described monitor examples. Confirm the engine and calibration before applying values. The monitor explanation does not identify a failed part or replace the applicable service procedure. [Ford PDF, page 116](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=116).
