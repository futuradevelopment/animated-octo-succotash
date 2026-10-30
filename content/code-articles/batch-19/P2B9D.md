---
{"entryId": "generic-p2b9d", "code": "P2B9D", "title": "P2B9D: Pump A supply status cannot be inferred from one battery reading", "description": "Learn why Ford P2B9D must be kept distinct from output-circuit low and high classifications.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2024–2025 gasoline OBD summary, July 16, 2024 revision; only the described monitor and architecture. Model, engine and calibration fitment are not inferred.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [144]}], "authoringBatch": "batch-19"}
---

# P2B9D: Pump A supply status cannot be inferred from one battery reading

P2B9D is the supply-voltage-out-of-range classification for Ford’s auxiliary coolant pump A. It maps to P2600_1C, while P2602 and P2603 identify separate low and high output-circuit faults. Keeping those representations distinct avoids turning every electrical pump code into a single “low battery” explanation.

## Eligibility is not the malfunction threshold

The monitor group requires battery voltage of at least 11 V, executes continuously and lists five seconds. The source does not publish the specific supply-voltage bounds that produce P2B9D. The 11 V minimum must therefore not be presented as the code’s actual low-voltage failure limit.

A battery measurement and the supply quantity assessed by a pump’s control system may answer different questions. The correct circuit and reporting information is needed before deciding whether a normal battery reading clears the supply concern.

## Use the documented pump function

Ford defines A here as the high-temperature-loop auxiliary pump for cabin heating. Confirm that role against the vehicle rather than choosing a component solely from its alphabetical label.

Preserve the detailed identifier, supply status, operating command and accompanying circuit faults. The summary does not localize an intermittent voltage event or identify a failed module, connection or pump. Vehicle-specific verification must establish the affected supply path before a repair decision is justified.

## Source and applicability

Ford 2024–2025 gasoline OBD summary, July 16, 2024 revision; only the described monitor and architecture. Model, engine and calibration fitment are not inferred. The monitor explanation does not identify a failed part or replace the applicable service procedure. [Ford PDF, page 144](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=144).
