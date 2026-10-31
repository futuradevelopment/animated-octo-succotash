---
{"entryId": "generic-p0b0d", "code": "P0B0D", "title": "P0B0D: The auxiliary-pump module label can describe an incorrect-speed report", "description": "Understand Ford P0B0D ATFP reporting and why the code does not automatically condemn the pump control module.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2024–2025 gasoline OBD operation summary, July 16 2024 revision; only the cited monitor and transmission architectures. No individual vehicle fitment or universal calibration is inferred.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [155, 156, 159, 160]}], "authoringBatch": "batch-20"}
---

# P0B0D: The auxiliary-pump module label can describe an incorrect-speed report

P0B0D names the auxiliary transmission-fluid pump motor control module in the generic dictionary. Ford's cited architecture table gives a more specific result: the pump reports incorrect speed. It further splits that detailed report into overspeed and underspeed representations, P0C29_B1 and P0C29_B2.

## Distinguish reported speed from feedback-signal quality

The same table separately diagnoses the feedback signal's frequency and duty cycle with P0C2C, P0C2D and P0C2E. Incorrect reported pump speed is therefore not automatically the same fault as a malformed feedback waveform. One concerns the decoded operating report; the other concerns signal representation.

Ford also separates undercurrent, overcurrent, combined current/speed disagreement and a stalled-pump report. Preserving the detailed status prevents the broad module name from hiding the actual category selected by the controller.

## Keep the direction of the speed error

A useful record retains the original module code, overspeed or underspeed suffix where available, commanded operation and the reported pump state. A normal feedback pulse train does not by itself establish that the reported speed was correct.

The summary does not publish universal pump-speed limits or identify a failed module. It provides no replacement instruction. Verification must use the matched transmission and pump-control procedure to establish the speed discrepancy and isolate its cause before the component named in the generic title is condemned.

## Source and applicability

Ford 2024–2025 gasoline OBD operation summary, July 16 2024 revision; only the cited monitor and transmission architectures. No individual vehicle fitment or universal calibration is inferred. [Ford PDF, page 155](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=155). [Ford PDF, page 156](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=156). [Ford PDF, page 159](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=159). [Ford PDF, page 160](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=160).
