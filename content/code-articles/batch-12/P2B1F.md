---
{"entryId": "generic-p2b1f", "code": "P2B1F", "title": "P2B1F: Cylinder-eight pulse offset reaches a calibration limit", "description": "Ford diesel P2B1F compares cylinder-eight test-injection energizing time against an asymmetric learning window.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2023–2024 diesel OBD summary, revised August 25, 2023; these are documented monitor examples, not confirmed fitment or universal thresholds for every vehicle carrying this generic code.", "sourceIds": ["ford-diesel-2023-2024"], "sourcePages": [{"sourceId": "ford-diesel-2023-2024", "pages": [21, 17]}], "authoringBatch": "batch-12"}
---

# P2B1F: Cylinder-eight pulse offset reaches a calibration limit

P2B1F is the cylinder-eight injection-pulse offset learning-limit code. Ford associates it with zero-fuel calibration: the observed energizing time of a test injection differs too far from the injector’s target. That observation is separate from the validity of cylinder-eight identification data stored in memory.

## The allowable difference is not symmetrical

Ford lists a lower deviation of 156 microseconds or more and an upper deviation of 254 microseconds or more. Both compare observed time with the target, rather than imposing one fixed absolute pulse width. Typical monitoring duration is 30 seconds while the base calibration function operates.

The shared conditions include suitable fuel and coolant temperatures, at least 10 V system voltage, accelerator input no higher than 2%, and a requested/actual rail-pressure difference within 50 bar. Some additional conditions are marked 3.0L-only and cannot be transferred to every engine.

## Keep learning and stored-data checks distinct

P2693, also associated with cylinder eight, checks missing, out-of-range, or checksum-invalid injector data. P2B1F concerns the learned time offset. Correcting one type of evidence does not automatically demonstrate a passing result for the other monitor.

Useful verification confirms the cylinder identity, valid supporting conditions, and completion of the relevant calibration function. The summary provides no universal relearn sequence or injector replacement criterion. A code that stays absent during operation where learning never runs is not equivalent to a successful, in-range calibration result.

## Source and applicability

This explanation follows Ford’s 2023–2024 diesel OBD summary. Match the vehicle’s engine and calibration before applying these monitor values; a generic code alone does not establish fitment. [Ford PDF, page 21](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=21) · [Ford PDF, page 17](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=17).
