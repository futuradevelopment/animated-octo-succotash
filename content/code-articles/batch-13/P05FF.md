---
{"entryId": "generic-p05ff", "code": "P05FF", "title": "P05FF: Brake pressure and pedal information disagree in stop-start supervision", "description": "Understand Ford P05FF brake correlation monitoring and why it differs from a brake-pressure circuit or network-range fault.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2024–2025 gasoline OBD operation summary, July 16 2024 revision; only the documented monitor variants. No individual model, engine or calibration fitment inferred.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [101]}], "authoringBatch": "batch-13"}
---
# P05FF: Brake pressure and pedal information disagree in stop-start supervision

P05FF is Ford's brake pressure/brake pedal position correlation result in its stop-start dependability diagnostics. The controller is comparing information about braking demand; the code is not simply a statement that hydraulic pressure is low.

## Correlation is different from a circuit extreme

The source lists a separate brake-pressure sensor circuit result and a separate out-of-range pressure message received over the network. P05FF instead identifies disagreement between the pressure and pedal-position information. One input may look plausible alone while the relationship between them is inconsistent.

The monitor runs continuously and the summary gives a duration below five seconds. It classifies this result as non-MIL, so the absence of a check-engine lamp does not demonstrate that the diagnostic concern is absent.

## Preserve the relationship before choosing a component

Retain the complete DTC set and synchronized pressure, pedal and network information available through the correct diagnostic system. That follows from the correlation category; the source does not specify which input is wrong or provide a universal difference threshold.

Brake systems require the vehicle's proper service and safety procedure. This summary does not support bypassing an interlock, opening a hydraulic circuit or replacing a pressure sensor from P05FF alone. Verification should establish that the relevant inputs agree during the monitored braking states and that the dependability check completes without repeating the result. Any actual change in braking behavior needs direct professional assessment.

## Source and applicability

This explanation covers the cited Ford monitor variants, not every vehicle displaying this code. Match the engine, sensor architecture and calibration before applying numerical limits.

[Ford OBD summary, PDF page 101](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=101).
