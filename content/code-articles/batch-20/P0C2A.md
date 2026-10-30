---
{"entryId": "generic-p0c2a", "code": "P0C2A", "title": "P0C2A: A reported pump stall does not prove the motor is permanently seized", "description": "Understand Ford P0C2A ATFP stalled reporting and the source’s limited suggestion that lost prime may be involved.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2024–2025 gasoline OBD operation summary, July 16 2024 revision; only the cited monitor and transmission architectures. No individual vehicle fitment or universal calibration is inferred.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [156, 160]}], "authoringBatch": "batch-20"}
---

# P0C2A: A reported pump stall does not prove the motor is permanently seized

P0C2A is the auxiliary transmission-fluid pump stalled report in Ford's table, paired with P0C2A_B2. The source adds that the pump may have lost prime. That is a stated possibility, not proof of a seized motor or a confirmed cause on the reader's vehicle.

## Separate stall from other pump reports

Ford lists incorrect speed, undercurrent, overcurrent and combined current/speed disagreement as separate categories. A stalled status should therefore be preserved as its own reported result rather than converted automatically into an electrical overcurrent diagnosis.

The table also distinguishes feedback-signal frequency and duty faults from decoded pump operating reports. A valid signal format can still carry a stalled status; signal quality and the reported operating state are different checks.

## Preserve the conditions of the reported stall

Record the full code, commanded pump operation and available speed/current status. If operation later resumes, that observation does not by itself establish why the earlier stall was reported. The suggestion of lost prime does not supply a universal filling, bleeding or activation procedure.

The summary gives no stall-speed threshold, elapsed-time boundary or confirmed component failure. Verification must follow the exact transmission's pump-control and fluid-service information, with the operating condition established before considering a replacement. External powering or a guessed priming procedure would go beyond the source's evidence.

## Source and applicability

Ford 2024–2025 gasoline OBD operation summary, July 16 2024 revision; only the cited monitor and transmission architectures. No individual vehicle fitment or universal calibration is inferred. [Ford PDF, page 156](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=156). [Ford PDF, page 160](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=160).
