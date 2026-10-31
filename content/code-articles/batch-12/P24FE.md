---
{"entryId": "generic-p24fe", "code": "P24FE", "title": "P24FE: An incorrect SCR catalyst code uses cumulative conversion evidence", "description": "Ford’s 6.7L P24FE monitor evaluates cumulative SCR efficiency only inside a controlled dosing and temperature window.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2023–2024 diesel OBD summary, revised August 25, 2023; these are documented monitor examples, not confirmed fitment or universal thresholds for every vehicle carrying this generic code.", "sourceIds": ["ford-diesel-2023-2024"], "sourcePages": [{"sourceId": "ford-diesel-2023-2024", "pages": [6]}], "authoringBatch": "batch-12"}
---

# P24FE: An incorrect SCR catalyst code uses cumulative conversion evidence

P24FE describes an incorrect SCR catalyst in Ford’s 6.7L-only monitor. The documented malfunction criterion is **cumulative SCR efficiency below 0%**. That is the controller’s conversion-based evidence; the code does not physically inspect a catalyst label or identify exactly which component has been fitted.

## The monitor excludes unsuitable conditions

Ford lists approximately 60 seconds of monitoring with coolant at least 70°C, engine speed between 900 and 4,000 rpm, and bounded feedgas NOx. SCR inlet and outlet temperatures must be within their respective listed ranges, and DPF regeneration must not be active.

The entry table also constrains dosing, ammonia-storage estimates, exhaust flow, and transients. These requirements show why one tailpipe NOx observation during a regeneration event is not equivalent to the cumulative monitor result.

## Interpret efficiency together with measurement validity

The monitor requires satisfactory NOx, temperature, dosing, air-metering, oxygen, and EGR-related inputs. Preserve relevant sensor and DEF-system faults before concluding that the catalyst itself is incorrect. An efficiency calculation depends on its inputs and operating window.

Useful verification confirms that the applicable 6.7L strategy has completed under valid conditions and that the supporting measurements are credible. The summary does not provide a catalyst-identification procedure, an exact replacement part, or proof that the catalyst is absent. It explains the conversion evidence behind P24FE, leaving component identification and fault isolation to the correct service information.

## Source and applicability

This explanation follows Ford’s 2023–2024 diesel OBD summary. Match the vehicle’s engine and calibration before applying these monitor values; a generic code alone does not establish fitment. [Ford PDF, page 6](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=6).
