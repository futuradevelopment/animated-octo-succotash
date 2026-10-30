---
{"entryId": "generic-p21cd", "code": "P21CD", "title": "P21CD: A reductant quality-module low-supply code includes a wider voltage statement", "description": "Ford’s P21CD summary lists both low and high supply boundaries despite the low-voltage title, requiring vehicle-specific confirmation.", "status": "draft", "sourceReview": "needs-review", "scope": "Ford 2023–2024 diesel OBD summary, revised August 25, 2023; these are documented monitor examples, not confirmed fitment or universal thresholds for every vehicle carrying this generic code.", "sourceIds": ["ford-diesel-2023-2024"], "sourcePages": [{"sourceId": "ford-diesel-2023-2024", "pages": [87, 88]}], "authoringBatch": "batch-12"}
---

# P21CD: A reductant quality-module low-supply code includes a wider voltage statement

P21CD is reductant quality-module supply voltage low. Ford’s diesel table, however, states a malfunction when **quality-sensor supply is below 10 V or above 20 V for fifteen seconds**. The high-side branch conflicts with the low-only title, so it should not be silently removed or treated as universally applicable.

## Supply validity differs from reductant quality

The same section assigns separate codes to filtered reductant concentration and internal sensor errors. P21CD’s listed quantity is electrical supply voltage; it is not proof that the DEF mixture is too weak, too strong, or contaminated.

The monitor group requires satisfactory communication with the reductant-quality module and relevant ECU power checks. Those prerequisites matter when deciding whether concentration or level readings can be trusted alongside the supply fault.

## Confirm the disputed boundary in service information

A useful diagnostic record preserves the reporting module, the measured supply behavior, and related communication/power faults. The specific fifteen-second statement belongs to the supply check, not the much longer concentration-monitor periods described nearby.

Before using the above-20 V branch as a definitive service criterion, confirm the applicable vehicle calibration because of the source’s title/threshold mismatch. The summary does not locate a charging, wiring, or module defect and does not prescribe fluid replacement. Its supported starting point is an invalid electrical supply context, with the precise code-direction mapping still requiring confirmation.

## Source and applicability

This explanation follows Ford’s 2023–2024 diesel OBD summary. Match the vehicle’s engine and calibration before applying these monitor values; a generic code alone does not establish fitment. [Ford PDF, page 87](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=87) · [Ford PDF, page 88](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=88).
