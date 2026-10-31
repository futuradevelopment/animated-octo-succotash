---
{"entryId": "generic-p00bc", "code": "P00BC", "title": "P00BC: Low measured airflow has several distinct plausibility tests", "description": "Ford diesel P00BC can arise from adaptation, an air-path check, or a continuous airflow-map comparison.", "status": "draft", "sourceReview": "needs-review", "scope": "Ford 2023–2024 diesel OBD summary, revised August 25, 2023; these are documented monitor examples, not confirmed fitment or universal thresholds for every vehicle carrying this generic code.", "sourceIds": ["ford-diesel-2023-2024"], "sourcePages": [{"sourceId": "ford-diesel-2023-2024", "pages": [75, 77, 78]}], "authoringBatch": "batch-12"}
---

# P00BC: Low measured airflow has several distinct plausibility tests

P00BC is airflow A range/performance with airflow too low. Ford’s diesel summary describes **multiple monitoring routes** under this code, so one generic idle airflow limit cannot represent the whole diagnosis.

## The adaptation route compares corrected flow with a model

During air-mass adaptation or intrusive turbo monitoring, Ford compares corrected measured airflow with modeled airflow. The listed low ratio is below 0.75 for 3.0L and below 0.70 for 6.7L. That comparison has a five-second typical monitoring duration.

A separate air-path check uses a qualified turbo/EGR position and warm-coolant window. The document changes its ratio wording in that section, so the two formulas should not be silently merged or inverted into one universal test.

## A third route uses an engine-speed map

The continuous plausibility check compares airflow with calibrated minimum and maximum maps for ten seconds. Its prerequisites include valid air-meter, barometric-pressure, and EGR-related information. The maps differ by engine and do not publish a universal unit-conversion procedure here.

Useful verification identifies which route completed, whether its supporting inputs were valid, and whether the observed quantity was corrected or uncorrected airflow. P00BC does not by itself prove a restricted intake or failed meter. The applicable service procedure is needed to resolve the actual control/model discrepancy and the source’s differing ratio descriptions before a replacement decision.

## Source and applicability

This explanation follows Ford’s 2023–2024 diesel OBD summary. Match the vehicle’s engine and calibration before applying these monitor values; a generic code alone does not establish fitment. [Ford PDF, page 75](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=75) · [Ford PDF, page 77](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=77) · [Ford PDF, page 78](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=78).
