---
{"entryId": "generic-p25aa", "code": "P25AA", "title": "P25AA: Volkswagen checks the piston-cooling control signal for a short to ground", "description": "The 2021–2022 VW P25AA criterion is below 1.85 V with the piston-cooling actuator commanded off.", "status": "draft", "sourceReview": "checked", "scope": "Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021; engine control 2021/2022 MY. Original manufacturer PDF mirrored by VWTS; physical PDF page references.", "sourceIds": ["vw-drna-dsfb-dsfe-dsff-arteon-gst"], "sourcePages": [{"sourceId": "vw-drna-dsfb-dsfe-dsff-arteon-gst", "pages": [413, 414]}], "authoringBatch": "batch-43"}
---

# P25AA: Volkswagen checks the piston-cooling control signal for a short to ground

P25AA belongs to the piston-cooling oil control actuator in Volkswagen’s 2021–2022 engine table. The manufacturer labels the electrical condition a short to ground and gives signal voltage below 1.85 V. The actuator must be commanded off for the stated check.

## Off command does not mean every low signal is normal

The monitor deliberately evaluates an off-state circuit condition. Its expected electrical behavior therefore cannot be guessed from the everyday idea that a switched-off device has zero volts. The exact circuit design and test method are needed to interpret a physical measurement.

Volkswagen lists a two-second monitoring time, continuous operation and MIL illumination after two driving cycles. The component reference points to piston-cooling nozzle-control valve N522, but the table does not isolate a specific wire or prove the valve itself is defective.

## Distinguish electrical low from missing oil pressure

The nearby P25AC performance/stuck-off entry evaluates pressure detection in the piston-cooling gallery. P25AA instead uses signal voltage. Treating both as proof of insufficient oil delivery would discard the distinction between a control-circuit problem and a functional response.

A qualified diagnosis should preserve the recorded voltage classification, commanded state and related faults, then follow the correct N522 circuit procedure. The row does not authorize direct energization or an improvised resistance test. Verification needs a satisfactory off-state electrical response and the applicable monitor result, rather than relying only on a normal oil-pressure warning lamp or recently cleared code.

## Source and scope

[Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021, physical PDF pages 413, 414](https://vwts.ru/diag/engine-drna-dsfb-dsfe-dsff-arteon-diagnostic-eng.pdf#page=413). Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021; engine control 2021/2022 MY. Original manufacturer PDF mirrored by VWTS; physical PDF page references.
