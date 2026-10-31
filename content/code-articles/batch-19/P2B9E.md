---
{"entryId": "generic-p2b9e", "code": "P2B9E", "title": "P2B9E: A pump A thermal report does not directly measure engine overheating", "description": "Understand Ford P2B9E control-system temperature reporting and the missing numerical limit that must remain unspecified.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2024–2025 gasoline OBD summary, July 16, 2024 revision; only the described monitor and architecture. Model, engine and calibration fitment are not inferred.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [144]}], "authoringBatch": "batch-19"}
---

# P2B9E: A pump A thermal report does not directly measure engine overheating

P2B9E identifies a control-system overtemperature classification for coolant pump A in Ford’s auxiliary-pump table. It maps to P2600_98. The A function is the high-temperature-loop cabin-heating auxiliary pump, so the code should not automatically be assigned to the main engine cooling pump.

## Distinguish the reported thermal state from coolant readings

The shared monitoring conditions specify continuous execution, five seconds and battery voltage of at least 11 V. They do not supply an actual temperature threshold for this code. No numerical overtemperature limit can be derived from the battery entry condition or from a neighboring component’s specifications.

A coolant-temperature value is not automatically the same quantity as a pump control-system thermal report. Both may be relevant during diagnosis, but neither should silently replace the other as evidence.

## Keep the event and companion classifications

Record the full subtype, requested pump operation, reported thermal status and any simultaneous supply, speed or circuit faults. A later normal condition after cooling does not recreate the event that caused the stored classification.

The source does not establish why the control system reported excessive temperature or prescribe a universal repair. It cannot justify replacing the cooling assembly or deliberately heating the pump. Verification must identify the actual thermal reporting method and operating limits in the vehicle-specific procedure while preserving the cabin-heating pump scope.

## Source and applicability

Ford 2024–2025 gasoline OBD summary, July 16, 2024 revision; only the described monitor and architecture. Model, engine and calibration fitment are not inferred. The monitor explanation does not identify a failed part or replace the applicable service procedure. [Ford PDF, page 144](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=144).
