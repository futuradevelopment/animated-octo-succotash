---
{"entryId": "generic-p2bec", "code": "P2BEC", "title": "P2BEC: Bank 1 lean control in direct-injection mode needs the correct fuel-trim context", "description": "Understand Ford P2BEC mode-specific monitoring and why it is not simply another label for every bank 1 lean result.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2024–2025 gasoline OBD operation summary, July 16 2024 revision; only the cited monitor and transmission architectures. No individual vehicle fitment or universal calibration is inferred.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [99]}], "authoringBatch": "batch-20"}
---

# P2BEC: Bank 1 lean control in direct-injection mode needs the correct fuel-trim context

P2BEC is Ford's fuel-control system A lean result for bank 1 in direct-injection mode. The source separately lists common-mode bank 1 lean as P0171 and port-fuel-injection mode bank 1 lean as P2BF0. The operating injection mode is therefore part of the meaning, not just background information.

## Check that the fuel monitor was eligible

The monitor runs continuously while closed-loop fuel control is active. Ford's typical entry conditions include coolant temperature between 70 and 110 degrees Celsius, sufficient engine load, at least 10 percent fuel level and zero purge duty. A trim observation outside those conditions does not reproduce the documented evaluation window.

The listed lean example combines the long-term correction cell currently in use with short-term correction. It shows long-term trim above 25 percent and short-term trim above 1 percent. These are example monitor values, not a universal instruction to diagnose every engine from one stored trim number.

## Preserve the mode and the active correction cell

A useful record includes bank 1 trim, injection mode, operating conditions and relevant sensor status. A common-mode or port-injection observation should not silently replace evidence of the direct-injection result.

The code does not identify one injector, pump or intake leak. The summary establishes the control outcome and eligibility; the matched engine procedure must determine why the correction reached the lean boundary without inventing a ranked list of causes.

## Source and applicability

Ford 2024–2025 gasoline OBD operation summary, July 16 2024 revision; only the cited monitor and transmission architectures. No individual vehicle fitment or universal calibration is inferred. [Ford PDF, page 99](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=99).
