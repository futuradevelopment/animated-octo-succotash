---
{"entryId": "generic-p2b7a", "code": "P2B7A", "title": "P2B7A: Volkswagen separates invalid EVAP signal counts from sensor self-check errors", "description": "VW’s 2021–2022 engine table gives P2B7A both a digital signal-range check and an internal sensor-check path.", "status": "draft", "sourceReview": "checked", "scope": "Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021; engine control 2021/2022 MY. Original manufacturer PDF mirrored by VWTS; physical PDF page references.", "sourceIds": ["vw-drna-dsfb-dsfe-dsff-arteon-gst"], "sourcePages": [{"sourceId": "vw-drna-dsfb-dsfe-dsff-arteon-gst", "pages": [321, 323]}], "authoringBatch": "batch-43"}
---

# P2B7A: Volkswagen separates invalid EVAP signal counts from sensor self-check errors

Volkswagen’s 2021–2022 engine table places P2B7A in the EVAP fuel-tank pressure sensor C family and directs component diagnosis toward fuel-tank leak-detection module GX36. The row contains two monitor paths: a signal-range check and an internal sensor check.

## Raw signal counts are not pressure or voltage

The signal check identifies values below 1 or above 4095, with dimensionless units. These figures must not be described as volts or kilopascals. The internal-check branch instead identifies an electrical-check or initialization-check error reported by the sensor.

The table lists a 0.5-second monitoring time, continuous checks and two driving cycles for MIL illumination. The range-check branch is enabled after at least 0.1 second following ignition-on. These timing details belong to the diagnostic monitor, not to an instruction to probe a connector immediately after switching on.

## Distinguish an invalid signal from an implausible pressure

The related P2B7C and P2B7D entries compare tank pressure with barometric pressure. P2B7A can instead concern the validity of the signal representation or the sensor’s own reported status. A pressure value that appears believable on a scanner does not automatically resolve an initialization-error event.

The table does not supply GX36 terminal tests or an unconditional replacement decision. A technician needs the matching component procedure to identify the actual fault path. Verification should establish a valid signal and satisfactory internal status under the applicable conditions, rather than assume that clearing the DTC proves the EVAP sensor is functioning.

## Source and scope

[Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021, physical PDF pages 321, 323](https://vwts.ru/diag/engine-drna-dsfb-dsfe-dsff-arteon-diagnostic-eng.pdf#page=321). Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021; engine control 2021/2022 MY. Original manufacturer PDF mirrored by VWTS; physical PDF page references.
