---
{"entryId": "generic-p06bd", "code": "P06BD", "title": "P06BD: Cylinder5 glow resistance requires more evidence than continuity", "description": "Understand Ford P06BD’s post-circuit-test sequence and the source limitation around its published resistance criterion.", "status": "draft", "sourceReview": "needs-review", "scope": "Ford 2023–2024 diesel OBD summary, August 25, 2023 revision; only the described monitor examples. Confirm the engine and calibration before applying values.", "sourceIds": ["ford-diesel-2023-2024"], "sourcePages": [{"sourceId": "ford-diesel-2023-2024", "pages": [116]}], "authoringBatch": "batch-19"}
---

# P06BD: Cylinder5 glow resistance requires more evidence than continuity

P06BD identifies the cylinder 5 glow-plug circuit range/performance check in Ford’s diesel summary. Its resistance assessment follows the open-circuit, short-to-battery and short-to-ground tests. A simple statement that the channel has continuity is therefore not a complete evaluation of the later performance branch.

## The controller assesses an operating circuit

Ford specifies that the glow plugs are in heating mode and gives an approximate three-second registration period. That combination matters when comparing a stored result with a later test performed without an active heating command.

The resistance section prints an individual-circuit threshold above 2 ohms, while the caption calls it short to battery. The value is reported only with that source limitation; it is not converted into a universal cold-bench specification or a definitive plug-only limit.

## Keep cylinder5 and the wider circuit distinct

Preserve the affected channel, heating request and results of the preceding electrical checks. The code selects cylinder 5’s monitored path, but the summary does not say which physical portion of that path contributes the abnormal resistance.

A connection, harness segment, glow element or driver-related condition cannot be selected as the cause from this entry alone. The applicable vehicle procedure must establish the correct measurement conditions and localize the result. Direct powering or replacing a glow plug solely because a generic scanner says “performance” is not supported by the published monitor description.

## Source and applicability

Ford 2023–2024 diesel OBD summary, August 25, 2023 revision; only the described monitor examples. Confirm the engine and calibration before applying values. The monitor explanation does not identify a failed part or replace the applicable service procedure. [Ford PDF, page 116](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=116).
