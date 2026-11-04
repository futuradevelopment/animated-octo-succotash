---
{"entryId": "generic-p0b0a", "code": "P0B0A", "title": "P0B0A: Volkswagen combines low ATF-pump voltage with a protective state", "description": "The DQ381 P0B0A criterion requires voltage below 10 V together with the source’s P0B0D protective-function condition.", "status": "draft", "sourceReview": "checked", "scope": "Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021; DQ381-7A/F 0GC 2021/2022 MY transmission chapter. Original manufacturer PDF mirrored by VWTS; physical PDF page references.", "sourceIds": ["vw-drna-dsfb-dsfe-dsff-arteon-gst"], "sourcePages": [{"sourceId": "vw-drna-dsfb-dsfe-dsff-arteon-gst", "pages": [459, 468]}], "authoringBatch": "batch-43"}
---

# P0B0A: Volkswagen combines low ATF-pump voltage with a protective state

Volkswagen’s DQ381 0GC table identifies P0B0A as low motor-supply voltage for electric/auxiliary transmission-fluid pump A. Its criterion combines voltage below 10 V with P0B0D being in a protective function. The protective-state requirement should not disappear when the monitor is summarized.

## A voltage reading alone is incomplete evidence

The table does not describe every sub-ten-volt observation as sufficient for this DTC. It explicitly includes the associated protective condition. The relevant controller data and the matching service procedure are needed to determine whether both parts of the recorded event are present.

Elsewhere in the same table, P0B0D compares actual and commanded ATF-pump speed, using a difference above 500 rpm when calibration is inactive. That supporting description helps distinguish the pump-control context from a generic vehicle battery fault, but it does not say that the two DTCs must always appear together in memory.

## Separate supply and pump-response findings

Low supply, commanded speed and actual speed are different pieces of evidence. A professional should evaluate their relationship through the appropriate transmission procedure before deciding whether the pump, supply path or controller is responsible. The row itself provides no direct replacement instruction.

Volkswagen lists two seconds of monitoring, continuous checks and two driving cycles for MIL operation. Verification needs acceptable supply and pump-control behavior under the applicable conditions. Merely charging the battery or clearing a warning cannot establish that the protective-state event has been explained and resolved.

## Source and scope

[Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021, physical PDF pages 459, 468](https://vwts.ru/diag/engine-drna-dsfb-dsfe-dsff-arteon-diagnostic-eng.pdf#page=459). Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021; DQ381-7A/F 0GC 2021/2022 MY transmission chapter. Original manufacturer PDF mirrored by VWTS; physical PDF page references.
