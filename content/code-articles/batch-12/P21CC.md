---
{"entryId": "generic-p21cc", "code": "P21CC", "title": "P21CC: The reductant control module reports supply voltage above its limit", "description": "Ford diesel P21CC monitors reductant pump-control-module voltage after its circuit checks complete.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2023–2024 diesel OBD summary, revised August 25, 2023; these are documented monitor examples, not confirmed fitment or universal thresholds for every vehicle carrying this generic code.", "sourceIds": ["ford-diesel-2023-2024"], "sourcePages": [{"sourceId": "ford-diesel-2023-2024", "pages": [82, 83]}], "authoringBatch": "batch-12"}
---

# P21CC: The reductant control module reports supply voltage above its limit

P21CC is reductant control-module supply voltage high. Ford’s diesel functional monitor lists **reductant pump-control-module voltage above 19 V** as the failure criterion. It is an electrical supply observation, not evidence that reductant pressure or concentration is too high.

## Earlier circuit checks are part of the sequence

The normal pump-control functional check follows completion of P208A, P208C, and P208D circuit checks. It also requires satisfactory pressure-sensor and reductant-injector information. Ford gives five seconds as the typical fault-detection duration for this functional group.

That sequence helps distinguish a completed supply-voltage assessment from an operating period in which more basic circuit checks prevented meaningful functional monitoring.

## Match the voltage to the reporting module

A useful record identifies the actual reductant control module and its voltage evidence. A normal reading at another module or after the event does not automatically refute an earlier supply excursion at the monitored unit.

P21CB is the low-supply counterpart, while P20FF on the same table covers controller performance and temperature/internal-error information. Those classifications should remain separate. The source does not identify a charging-system cause, wiring defect, or failed module from P21CC alone. It supplies the monitored voltage and sequence, leaving vehicle-specific electrical isolation and safe test locations to the applicable service instructions.

## Source and applicability

This explanation follows Ford’s 2023–2024 diesel OBD summary. Match the vehicle’s engine and calibration before applying these monitor values; a generic code alone does not establish fitment. [Ford PDF, page 82](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=82) · [Ford PDF, page 83](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=83).
