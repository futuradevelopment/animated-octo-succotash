---
{"entryId": "generic-p2bee", "code": "P2BEE", "title": "P2BEE: Direct-injection bank 2 lean control should not be mixed with another fuel mode", "description": "Learn how Ford P2BEE uses bank and injection-mode identity together with closed-loop fuel-monitor conditions.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2024–2025 gasoline OBD operation summary, July 16 2024 revision; only the cited monitor and transmission architectures. No individual vehicle fitment or universal calibration is inferred.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [99]}], "authoringBatch": "batch-20"}
---

# P2BEE: Direct-injection bank 2 lean control should not be mixed with another fuel mode

P2BEE identifies Ford's direct-injection-mode fuel-control system A lean result for bank 2. The table separately lists P0174 for common-mode bank 2 lean and P2BF2 for the port-injection-mode bank 2 lean result. Those distinctions should survive a simplified scanner description.

## Confirm the actual fuel-control window

Ford runs the monitor continuously during closed-loop control. Its typical conditions include coolant temperature between 70 and 110 degrees Celsius, adequate engine load, at least 10 percent fuel level and purge duty at zero. A bank 2 trim observation during another operating state is not a direct reproduction of that monitor window.

The lean example combines the long-term correction cell currently in use with short-term correction: long-term above 25 percent and short-term above 1 percent. These figures belong to the documented example and should not become universal limits for every vehicle with the generic code.

## Preserve bank 2 and the injection mode together

Record the active correction cell, short-term trim, injection mode and relevant sensor status from the same event. Evidence from bank 1 or from port-injection operation does not automatically explain a bank 2 direct-injection result.

The source establishes an excessive lean correction outcome, not a particular failed component or ranked cause list. Verification requires the matched engine procedure to determine why that correction was required, while keeping common-mode and mode-specific findings separate.

## Source and applicability

Ford 2024–2025 gasoline OBD operation summary, July 16 2024 revision; only the cited monitor and transmission architectures. No individual vehicle fitment or universal calibration is inferred. [Ford PDF, page 99](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=99).
