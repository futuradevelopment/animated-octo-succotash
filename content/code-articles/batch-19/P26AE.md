---
{"entryId": "generic-p26ae", "code": "P26AE", "title": "P26AE: A high transmission-cooling valve circuit is a short-to-battery classification", "description": "Understand Ford P26AE smart-driver evidence and the importance of distinguishing valve B from other coolant components.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2024–2025 gasoline OBD summary, July 16, 2024 revision; only the described monitor and architecture. Model, engine and calibration fitment are not inferred.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [144]}], "authoringBatch": "batch-19"}
---

# P26AE: A high transmission-cooling valve circuit is a short-to-battery classification

P26AE is the high-control classification for coolant bypass valve B. In Ford’s cited table it is explicitly described as a short-to-battery condition and maps to P26AC_12. The valve’s stated role is automatic-transmission cooling, which anchors the diagnostic identity more reliably than the letter B alone.

## The reported fault is electrical

The monitor runs continuously, lists five seconds, and receives an output-circuit fault report from the smart driver. This evidence does not directly quantify coolant flow or establish that the valve failed to move mechanically.

The open-circuit representation, P26AC_13, is listed separately. A high classification must therefore retain its direction and subtype; a test chosen only because another vehicle had an open valve coil may not investigate the same condition.

## Locate the relevant control path

Record the complete diagnostic identifier, commanded valve state and accompanying electrical classifications. Confirm the source-specific transmission-cooling function in the vehicle layout before selecting wiring or interpreting an actuator label.

Although the table names a short-to-battery classification, it does not identify where that path is located or provide a universal connector-voltage threshold. It cannot by itself distinguish an external wiring defect from a connected-load or driver problem. Appropriate verification follows the matching electrical procedure. Replacing a coolant pump or blaming high coolant temperature would not directly address the documented output-circuit question.

## Source and applicability

Ford 2024–2025 gasoline OBD summary, July 16, 2024 revision; only the described monitor and architecture. Model, engine and calibration fitment are not inferred. The monitor explanation does not identify a failed part or replace the applicable service procedure. [Ford PDF, page 144](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=144).
