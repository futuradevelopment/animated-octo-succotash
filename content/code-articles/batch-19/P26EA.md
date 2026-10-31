---
{"entryId": "generic-p26ea", "code": "P26EA", "title": "P26EA: Pump B internal-error feedback is not lost communication", "description": "Understand the 30-percent feedback classification behind Ford P26EA and how it differs from missing fuel-pump module feedback.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2024–2025 gasoline OBD summary, July 16, 2024 revision; only the described monitor and architecture. Model, engine and calibration fitment are not inferred.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [141]}], "authoringBatch": "batch-19"}
---

# P26EA: Pump B internal-error feedback is not lost communication

P26EA is Ford’s fuel-pump B driver-module internal-error classification in the cited mechanical returnless fuel-system monitor. The source maps it to P2632_01 and identifies a fuel-pump monitor feedback duty cycle of 30% ±4%. That is a diagnostic feedback code, not a commanded pump speed or a measured fuel-pressure percentage.

## Feedback can be present while reporting a problem

Ford distinguishes this internal-error band from invalid control-data feedback and from loss of communication. U016C corresponds to no meaningful feedback, described as a 0% or 100% duty cycle. Receiving the P26EA feedback band therefore differs from receiving no usable monitor waveform.

The check runs continuously within its entry conditions, with battery voltage between 11 and 16 V and a monitoring duration of two to five seconds. These conditions belong to the documented implementation, not every fuel-pump module.

## Interpret the signal before condemning hardware

A useful record preserves the feedback duty cycle, pump B identity, supply state and complete fault subtype. A rail-pressure complaint does not itself establish the internal-error feedback classification, and an apparently normal pressure later does not explain the module’s earlier report.

The summary does not disclose which internal component failed or provide a universal replacement decision. Vehicle-specific checks must distinguish reported module status from wiring and feedback acquisition. The 30% figure must not be applied as a universal operating command or pump-output specification.

## Source and applicability

Ford 2024–2025 gasoline OBD summary, July 16, 2024 revision; only the described monitor and architecture. Model, engine and calibration fitment are not inferred. The monitor explanation does not identify a failed part or replace the applicable service procedure. [Ford PDF, page 141](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=141).
