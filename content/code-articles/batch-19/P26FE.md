---
{"entryId": "generic-p26fe", "code": "P26FE", "title": "P26FE: Exhaust-valve performance includes position and reported-state evidence", "description": "Learn why Ford P26FE cannot be verified using only the five-second electrical-monitor duration.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2024–2025 gasoline OBD summary, July 16, 2024 revision; only the described monitor and architecture. Model, engine and calibration fitment are not inferred.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [146]}], "authoringBatch": "batch-19"}
---

# P26FE: Exhaust-valve performance includes position and reported-state evidence

P26FE is the performance classification for bank 1 exhaust flow-control valve A. Ford maps it to several P26C5 subtypes and describes both driver-reported stuck-valve information through a PWM signal and a separate position-rationality assessment. A shortened performance label therefore leaves important detail unresolved.

## Two checks provide different kinds of evidence

The general valve-control table lists five seconds for monitoring and identifies the performance report through the smart driver. The rationality section instead compares measured valve position with the permitted band around commanded position, and its monitoring duration varies with ambient conditions.

It would be incorrect to use five seconds as a universal allowed movement time or to interpret a PWM fault report as though it were a direct position measurement. The two paths should remain distinguishable in the diagnostic record.

## Preserve the subtype and operating conditions

Record the complete P26FE/P26C5 representation, bank identity, command, measured position and available reported-state information. A valve that changes position may still disagree with its requested target; an apparently plausible position does not necessarily clear a separate driver report.

The summary does not disclose the numeric position band or specify a universal mechanical remedy. Appropriate verification follows the vehicle’s valve architecture and applicable test conditions. The code alone does not establish an obstruction, failed actuator or need to replace the exhaust assembly.

## Source and applicability

Ford 2024–2025 gasoline OBD summary, July 16, 2024 revision; only the described monitor and architecture. Model, engine and calibration fitment are not inferred. The monitor explanation does not identify a failed part or replace the applicable service procedure. [Ford PDF, page 146](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=146).
