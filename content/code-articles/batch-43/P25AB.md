---
{"entryId": "generic-p25ab", "code": "P25AB", "title": "P25AB: Volkswagen’s piston-cooling high check requires an on command", "description": "P25AB in the VW engine table identifies a signal above 3.3 V while the piston-cooling actuator is commanded on.", "status": "draft", "sourceReview": "checked", "scope": "Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021; engine control 2021/2022 MY. Original manufacturer PDF mirrored by VWTS; physical PDF page references.", "sourceIds": ["vw-drna-dsfb-dsfe-dsff-arteon-gst"], "sourcePages": [{"sourceId": "vw-drna-dsfb-dsfe-dsff-arteon-gst", "pages": [414]}], "authoringBatch": "batch-43"}
---

# P25AB: Volkswagen’s piston-cooling high check requires an on command

Volkswagen lists P25AB as piston-cooling oil control circuit high and points to nozzle-control valve N522. Its numerical boundary is signal voltage above 3.3 V while the actuator is commanded on. The on-command requirement differentiates this row from the neighboring off-state electrical checks.

## Evaluate voltage together with the command

The source’s low code, P25AA, is assessed with the actuator commanded off. The open-circuit code P25A9 also uses an off-state voltage region. Combining all of their figures into a single normal voltage range would ignore the different operating states.

For P25AB, the table lists two seconds of monitoring, continuous checks and two driving cycles for MIL illumination. It does not specify an external connector pin or tell the reader whether a particular scan-tool voltage is the exact quantity used internally by the controller.

## A high electrical signal is not high oil pressure

The malfunction criterion is in volts. It does not directly measure piston-cooling oil pressure or establish a stuck-open oil valve. Volkswagen publishes separate functional entries for the gallery-pressure response, and those should remain distinct from this circuit-high category.

Diagnosis requires the matching N522 electrical procedure and an accurate record of the commanded state. The code alone is not an instruction to replace the valve or manipulate its power feed. Verification should demonstrate proper behavior during the prescribed on-command check and reconcile related faults. A cleared DTC without that operating condition leaves the original event unexplained.

## Source and scope

[Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021, physical PDF pages 414](https://vwts.ru/diag/engine-drna-dsfb-dsfe-dsff-arteon-diagnostic-eng.pdf#page=414). Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021; engine control 2021/2022 MY. Original manufacturer PDF mirrored by VWTS; physical PDF page references.
