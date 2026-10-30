---
{"entryId": "generic-p20bc", "code": "P20BC", "title": "P20BC: Understanding a high-circuit failure on DEF tank heater 1", "description": "See how P20BC separates an initial on-state anomaly from off-state short-to-power classification.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 25OBDG04B DEFC monitor calibration only; this document does not establish applicability to every model, engine or reductant system.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [195]}], "authoringBatch": "batch-14"}
---

# P20BC: Understanding a high-circuit failure on DEF tank heater 1

P20BC identifies a short-to-power type electrical fault in the first reductant tank heater's control circuit. The GM table includes either the high-side or low-side path, so the code alone does not locate the short to one side of the heater.

## The final classification occurs with heating off

The running driver observations initiate the check, but the source says that the heater must be turned off to distinguish the specific circuit failure. Its off-state ADC pattern differs from the patterns used for an open circuit or a ground short.

This distinction is important when interpreting scan data: a heater command that has already fallen to zero may be a response to the fault. It does not disprove the preceding electrical event. The source specifies a two-second sample accumulation and recovery on the following driving cycle.

## Keep electrical direction separate from temperature

“High” refers to the circuit classification, not a statement that the DEF temperature is excessive. Equally, lack of heat after the event is compatible with the controller deliberately disabling the output; it is not independent proof of a failed heating element.

The relevant evidence includes the first abnormal driver status, the command transition and the subsequent off-state classification. Internal ADC limits in this summary are not universal external connector test values. Use the exact vehicle wiring information to separate a supply-side fault, a connected load problem and driver behavior before selecting a repair.

## Source and scope

2025 GM 25OBDG04B DEFC monitor calibration only; this document does not establish applicability to every model, engine or reductant system. These are documented monitor criteria, not a universal repair procedure. [GM PDF, physical page 195](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=195).
