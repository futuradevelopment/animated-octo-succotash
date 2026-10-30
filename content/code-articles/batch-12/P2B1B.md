---
{"entryId": "generic-p2b1b", "code": "P2B1B", "title": "P2B1B: Cylinder-six calibration detects a pulse duration beyond its target allowance", "description": "Ford diesel P2B1B records cylinder-six injection offset learning outside the documented lower or upper time boundary.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2023–2024 diesel OBD summary, revised August 25, 2023; these are documented monitor examples, not confirmed fitment or universal thresholds for every vehicle carrying this generic code.", "sourceIds": ["ford-diesel-2023-2024"], "sourcePages": [{"sourceId": "ford-diesel-2023-2024", "pages": [21]}], "authoringBatch": "batch-12"}
---

# P2B1B: Cylinder-six calibration detects a pulse duration beyond its target allowance

P2B1B identifies cylinder six’s injection-pulse offset learning limit. In Ford’s description, a calibration test injection supplies an **observed energizing time**, which is evaluated against the intended time for the injector. This is a learning-limit observation, not a direct measurement of cylinder pressure or spray quality.

## The test needs its qualifying context

A fault is indicated when the time is at least 156 microseconds below target or at least 254 microseconds above target. The monitor’s typical duration is 30 seconds and it operates whenever the zero-fuel calibration base function runs.

Ford lists common prerequisites including fuel at 10–75°C, coolant at least 50°C, system voltage at least 10 V, and accelerator position at or below 2%. Requested and actual rail pressure also need to be within the stated 50-bar difference. Comparing a pulse captured during heavy acceleration with these learning boundaries would ignore that context.

## What a useful verification distinguishes

Determine whether an eligible calibration event produced the cylinder-six result and whether related injector or pressure faults were present. A stored offset error and a calibration function that never ran are different situations, even if neither currently produces a fresh fault.

Other cylinder codes use the same monitored limits; the P2B1B identifier selects cylinder six. The source also separates certain 3.0L-only conditions. It does not provide a general-purpose forced-learning procedure or establish the failed part, so those decisions need the applicable vehicle service information.

## Source and applicability

This explanation follows Ford’s 2023–2024 diesel OBD summary. Match the vehicle’s engine and calibration before applying these monitor values; a generic code alone does not establish fitment. [Ford PDF, page 21](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=21).
