---
{"entryId": "generic-p0c2e", "code": "P0C2E", "title": "P0C2E: High feedback duty cycle must be separated from pump overcurrent", "description": "Learn how Ford P0C2E evaluates ATFP feedback and why its threshold is a signal-format criterion.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2024–2025 gasoline OBD operation summary, July 16 2024 revision; only the cited monitor and transmission architectures. No individual vehicle fitment or universal calibration is inferred.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [156, 160]}], "authoringBatch": "batch-20"}
---

# P0C2E: High feedback duty cycle must be separated from pump overcurrent

P0C2E is Ford's auxiliary transmission-fluid pump feedback duty-cycle-high classification, paired with P0C2B_85. The table's documented threshold is above 90 percent duty. That percentage describes the feedback signal, not a universal pump-current or speed limit.

## Preserve the distinction from operating reports

Pump overcurrent is separately listed as P0C28/P0C26_19, and incorrect speed or stall has other identifiers. A high-duty feedback result should not be automatically converted into one of those decoded operating faults.

The source also checks feedback frequency independently through P0C2C, using an expected 150 Hz with a 20 Hz allowance in the cited implementation. A reasonable repetition rate does not guarantee that the duty cycle is valid, and a valid waveform does not prove that every encoded pump status is normal.

## Verify the signal under comparable conditions

A useful capture includes duty, frequency, pump command and the exact module result. If the signal later returns to range, that observation does not locate the original high-duty condition. Avoid comparing an old feedback fault with an unrelated later current reading as though they were the same event.

The summary does not identify a defective pump module or provide a universal connector test. The applicable feedback-circuit procedure must resolve the signal condition before a component replacement is justified.

## Source and applicability

Ford 2024–2025 gasoline OBD operation summary, July 16 2024 revision; only the cited monitor and transmission architectures. No individual vehicle fitment or universal calibration is inferred. [Ford PDF, page 156](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=156). [Ford PDF, page 160](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=160).
