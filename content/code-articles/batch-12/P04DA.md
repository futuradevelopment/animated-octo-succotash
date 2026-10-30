---
{"entryId": "generic-p04da", "code": "P04DA", "title": "P04DA: Excessive EGR flow is detected as a control-ratio error", "description": "Ford diesel P04DA is a closed-loop EGR-ratio limit fault, distinct from an intake-air mass performance code.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2023–2024 diesel OBD summary, revised August 25, 2023; these are documented monitor examples, not confirmed fitment or universal thresholds for every vehicle carrying this generic code.", "sourceIds": ["ford-diesel-2023-2024"], "sourcePages": [{"sourceId": "ford-diesel-2023-2024", "pages": [40]}], "authoringBatch": "batch-12"}
---

# P04DA: Excessive EGR flow is detected as a control-ratio error

P04DA identifies closed-loop EGR control at limit with flow too high. The Ford diesel check uses the relationship between **desired and measured EGR ratio**. A high-flow diagnosis should therefore retain the controller’s target and operating state, not rely only on an absolute flow value.

## A sustained closed-loop comparison

Ford lists continuous monitoring with a typical twenty-second detection duration. The EGR system must be in closed-loop control and air-system faults must not invalidate the monitor. Its permitted ratio-error boundaries depend on engine speed and torque.

The page includes example numerical bounds for 6.7L, but the full calibration and ratio-unit interpretation are not given here as a universal service limit. This article does not convert those examples into a fixed percentage applicable to every engine.

## What the paired codes can clarify

P04D9 is the low-flow side of the EGR-ratio check. P02EC and P02ED on the same page concern air-mass control instead, with different typical durations. A code reader may group all of them under airflow or EGR, but their monitored quantities remain different.

Useful verification relates the recorded high-flow control result to target ratio, operating point, and the qualifying interval. The source does not identify a valve stuck open, a sensor defect, or another root cause from P04DA alone. Confirming that cause requires the correct vehicle’s diagnostic procedure; the summary establishes the controller’s sustained ratio discrepancy, not an automatic component replacement.

## Source and applicability

This explanation follows Ford’s 2023–2024 diesel OBD summary. Match the vehicle’s engine and calibration before applying these monitor values; a generic code alone does not establish fitment. [Ford PDF, page 40](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=40).
