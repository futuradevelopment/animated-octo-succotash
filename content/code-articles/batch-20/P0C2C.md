---
{"entryId": "generic-p0c2c", "code": "P0C2C", "title": "P0C2C: Auxiliary-pump feedback frequency is separate from encoded pump performance", "description": "Learn how Ford P0C2C checks the ATFP feedback timing and why a normal duty cycle does not validate its frequency.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2024–2025 gasoline OBD operation summary, July 16 2024 revision; only the cited monitor and transmission architectures. No individual vehicle fitment or universal calibration is inferred.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [156, 160]}], "authoringBatch": "batch-20"}
---

# P0C2C: Auxiliary-pump feedback frequency is separate from encoded pump performance

P0C2C identifies an out-of-range auxiliary transmission-fluid pump feedback frequency in Ford's table. The detailed representation is P0C2B_38. The source gives an expected frequency of 150 Hz with a 20 Hz allowance for the documented implementation.

## Frequency and duty cycle are independent checks

The same table assigns duty cycle below 10 percent to P0C2D and above 90 percent to P0C2E. A duty cycle inside that window does not establish that the pulse repetition rate meets the frequency requirement. A decoded status value alone may therefore omit the feature that caused P0C2C.

Ford separately lists pump operating reports such as incorrect speed, undercurrent, overcurrent and stall. Those are not synonymous with a malformed feedback frequency. The communication format must be interpreted separately from the operating category carried by the signal.

## Capture both timing dimensions

A useful record includes feedback frequency, duty cycle, commanded pump operation and the full module code. A normal frequency observed after an intermittent event cannot reconstruct the original timing fault without comparable conditions.

The summary does not specify a universal connector pin or tell the reader to replace the pump module. Its 150 Hz example is bounded to the cited architecture. Verification needs the applicable feedback-circuit procedure to determine why the reported signal timing was outside its allowed range.

## Source and applicability

Ford 2024–2025 gasoline OBD operation summary, July 16 2024 revision; only the cited monitor and transmission architectures. No individual vehicle fitment or universal calibration is inferred. [Ford PDF, page 156](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=156). [Ford PDF, page 160](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=160).
