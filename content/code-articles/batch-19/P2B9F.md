---
{"entryId": "generic-p2b9f", "code": "P2B9F", "title": "P2B9F: An underspeed report needs a command relationship and correct pump identity", "description": "Learn what Ford P2B9F establishes and why its source does not provide a universal rpm threshold or unambiguous A/B label.", "status": "draft", "sourceReview": "needs-review", "scope": "Ford 2024–2025 gasoline OBD summary, July 16, 2024 revision; only the described monitor and architecture. Model, engine and calibration fitment are not inferred.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [145]}], "authoringBatch": "batch-19"}
---

# P2B9F: An underspeed report needs a command relationship and correct pump identity

P2B9F is the underspeed classification listed in Ford’s auxiliary coolant pump B section, paired with P261A_B2. It differs from the separate actuator-stuck category: reporting less speed than expected is not automatically the same as proving that a rotor cannot move.

## The summary supplies timing, not a speed limit

The pump group is continuously monitored, lists five seconds and requires battery voltage of at least 11 V. The source does not disclose the commanded-speed comparison, permitted deviation or minimum rpm that produces P2B9F.

An observed pump speed therefore needs the relevant command and calibration before it can be called too low. A low reading during a low-demand or inactive state cannot be interpreted against an invented universal speed target.

## A naming inconsistency remains unresolved

The B heading and P261A detailed-code family point to pump B, but the row’s description prints pump A. This article does not choose a physical pump from that disagreement. Confirm the complete vehicle identifier and cooling-loop function first.

Useful evidence preserves requested operation, speed or status feedback, supply condition and accompanying pump classifications. The summary does not establish whether the speed report reflects an electrical, mechanical, control or feedback issue. The applicable procedure must resolve that question before a component replacement or cooling-system repair is justified.

## Source and applicability

Ford 2024–2025 gasoline OBD summary, July 16, 2024 revision; only the described monitor and architecture. Model, engine and calibration fitment are not inferred. The monitor explanation does not identify a failed part or replace the applicable service procedure. [Ford PDF, page 145](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=145).
