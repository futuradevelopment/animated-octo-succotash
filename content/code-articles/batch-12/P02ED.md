---
{"entryId": "generic-p02ed", "code": "P02ED", "title": "P02ED: Low intake airflow must be compared with the controller’s target", "description": "Ford diesel P02ED is an operating-dependent closed-loop air-mass deviation, with different monitoring durations by engine.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2023–2024 diesel OBD summary, revised August 25, 2023; these are documented monitor examples, not confirmed fitment or universal thresholds for every vehicle carrying this generic code.", "sourceIds": ["ford-diesel-2023-2024"], "sourcePages": [{"sourceId": "ford-diesel-2023-2024", "pages": [40]}], "authoringBatch": "batch-12"}
---

# P02ED: Low intake airflow must be compared with the controller’s target

P02ED identifies low airflow in the diesel intake-air control system. Ford’s summary describes a closed-loop comparison between **desired air mass and measured air mass**, bounded by deviations that vary with engine speed and torque. A low-looking airflow value without its matching target is incomplete evidence.

## Eligibility is part of the fault definition

The EGR system must be in closed-loop air-mass control and no air-system faults should invalidate the check. Ford lists a typical five-second detection period for 3.0L and ten seconds for 6.7L.

The source presents high and low deviation limits together but does not provide their full maps. It would therefore be unsupported to publish one fixed grams-per-second threshold for P02ED or derive one from an unrelated vehicle’s scan data.

## Distinguish airflow control from other EGR tests

P02EC addresses the high-airflow side of this monitor. P04D9 and P04DA, although listed nearby, use desired-versus-measured EGR ratio and a different duration. Mixing those quantities can lead to interpreting the wrong diagnostic parameter.

Useful verification preserves the control mode, relevant speed/torque point, and desired/actual air-mass relationship over the qualifying interval. The code does not prove a restriction, a stuck EGR component, or an inaccurate meter by itself. Ford’s document supplies a control-performance observation; the correct vehicle service procedure is needed to determine which system condition produced the low-airflow discrepancy.

## Source and applicability

This explanation follows Ford’s 2023–2024 diesel OBD summary. Match the vehicle’s engine and calibration before applying these monitor values; a generic code alone does not establish fitment. [Ford PDF, page 40](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=40).
