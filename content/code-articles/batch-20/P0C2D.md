---
{"entryId": "generic-p0c2d", "code": "P0C2D", "title": "P0C2D: Low feedback duty cycle is not the same as low pump current", "description": "Understand Ford P0C2D ATFP feedback monitoring and distinguish signal format from an undercurrent operating report.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2024–2025 gasoline OBD operation summary, July 16 2024 revision; only the cited monitor and transmission architectures. No individual vehicle fitment or universal calibration is inferred.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [156, 160]}], "authoringBatch": "batch-20"}
---

# P0C2D: Low feedback duty cycle is not the same as low pump current

P0C2D is the auxiliary transmission-fluid pump feedback duty-cycle-low result in Ford's table, represented as P0C2B_84. The documented example classifies duty cycle below 10 percent. It does not describe a measured pump-current limit.

## Do not collapse feedback low and undercurrent

The source separately assigns undercurrent to P0C27/P0C26_18. That is a decoded operating report, whereas P0C2D concerns the feedback signal's duty representation. A statement that the pump has low current cannot substitute for evidence that the feedback duty is below its allowed window.

Frequency has its own P0C2C check, with a documented nominal rate of 150 Hz and a 20 Hz allowance. A correct frequency alone does not validate a duty cycle, and a valid duty cycle does not validate every reported pump operating condition.

## Preserve the waveform context

Record the full code, feedback duty, frequency and commanded pump operation together. A later in-range waveform does not locate the cause of an earlier low-duty event. The source does not establish whether the feedback circuit, reporting module or another operating condition produced it.

The summary supplies no universal connector assignment or replacement instruction. Verification must use the exact pump-control feedback procedure, keeping signal format separate from undercurrent, speed and stall reports rather than treating the word low as one interchangeable diagnosis.

## Source and applicability

Ford 2024–2025 gasoline OBD operation summary, July 16 2024 revision; only the cited monitor and transmission architectures. No individual vehicle fitment or universal calibration is inferred. [Ford PDF, page 156](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=156). [Ford PDF, page 160](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=160).
