---
{"entryId": "generic-p07bd", "code": "P07BD", "title": "P07BD: Parking-lock input B has its own frequency or mismatch classification", "description": "Learn how Ford’s TR9070 P07BD differs from B pulse-width high/low faults and from parking-lock consistency.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2024–2025 gasoline OBD summary, TR9070 DCT parking-lock position sensor input B. Numeric frequency boundaries and individual vehicle applicability are not supplied.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [164]}], "authoringBatch": "batch-20"}
---

# P07BD: Parking-lock input B has its own frequency or mismatch classification

P07BD is the TR9070 parking-lock sensor input B result in Ford's frequency-out-of-range or input-mismatch row. That is more specific than the generic intermittent/erratic description, and it identifies B rather than the separate A input.

## Do not replace timing evidence with a level check

Ford lists B pulse-width high or stuck-at-one separately as P07BA, and low or stuck-at-zero as P07B9. P07B5 occupies a separate consistency row. A plausible high/low level cannot alone establish that the B pulse frequency and input relationship satisfy the controller.

The table does not state the numerical frequency boundary for this parking-lock input. A frequency limit from a transmission range sensor elsewhere in the summary is not an evidenced substitute.

## Keep the signal result separate from mechanical engagement

A useful record preserves the exact code, B-input status and companion A information available from the module. A displayed parking state does not verify every sensor timing check. Equally, the sensor code alone cannot prove that the parking lock is mechanically engaged or disengaged.

Use the applicable parking-lock diagnostic procedure with suitable vehicle restraint. The source provides no universal connector test or authorization to bypass the mechanism. The next investigation must resolve the documented B signal category while retaining distinct pulse-level, consistency and mechanical-state evidence.

## Source and applicability

Ford 2024–2025 gasoline OBD summary, TR9070 DCT parking-lock position sensor input B. Numeric frequency boundaries and individual vehicle applicability are not supplied. [Ford PDF, page 164](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=164).
