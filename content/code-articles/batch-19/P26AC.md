---
{"entryId": "generic-p26ac", "code": "P26AC", "title": "P26AC: The B bypass valve controls transmission cooling in this Ford example", "description": "Learn why P26AC identifies a transmission-cooling valve circuit and should not be confused with coolant pump B.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2024–2025 gasoline OBD summary, July 16, 2024 revision; only the described monitor and architecture. Model, engine and calibration fitment are not inferred.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [144]}], "authoringBatch": "batch-19"}
---

# P26AC: The B bypass valve controls transmission cooling in this Ford example

P26AC identifies the control-circuit/open classification for engine coolant bypass valve B. Ford defines this valve’s B function as automatic-transmission cooling. That letter belongs to the bypass-valve family; it should not be confused with the separately named coolant pump B or assumed to identify the same component.

## A driver report differs from a coolant-flow diagnosis

The table maps P26AC to P26AC_13 and states that the smart driver reports an output-circuit fault. Monitoring is continuous with a five-second duration. The source does not describe a measured transmission-temperature discrepancy or a direct valve-flow test as the criterion for this code.

A cooling complaint may supply context, but it cannot replace the electrical evidence. Equally, a current transmission-temperature reading cannot establish that an output-circuit fault has been resolved.

## Preserve the valve function and failure subtype

A useful record includes the detailed identifier, requested valve operation, driver fault indication and the actual cooling-system layout. The paired P26AE entry is specifically the short-to-battery classification, so retaining the suffix avoids treating an open and a high electrical condition as equivalent.

The summary gives no connector pin, resistance limit or universal actuator test for P26AC. Vehicle-specific circuit diagnosis must establish where the reported output fault arises. The code alone does not prove that the valve is mechanically blocked, that coolant is restricted or that the complete transmission cooling assembly needs replacement.

## Source and applicability

Ford 2024–2025 gasoline OBD summary, July 16, 2024 revision; only the described monitor and architecture. Model, engine and calibration fitment are not inferred. The monitor explanation does not identify a failed part or replace the applicable service procedure. [Ford PDF, page 144](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=144).
