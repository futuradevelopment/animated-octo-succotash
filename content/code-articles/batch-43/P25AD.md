---
{"entryId": "generic-p25ad", "code": "P25AD", "title": "P25AD: Volkswagen detects piston-cooling pressure in an unexpected control state", "description": "P25AD uses detected gallery pressure lasting beyond a calibrated interval, with the piston-gating signal in the source’s stated on condition.", "status": "draft", "sourceReview": "checked", "scope": "Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021; engine control 2021/2022 MY. Original manufacturer PDF mirrored by VWTS; physical PDF page references.", "sourceIds": ["vw-drna-dsfb-dsfe-dsff-arteon-gst"], "sourcePages": [{"sourceId": "vw-drna-dsfb-dsfe-dsff-arteon-gst", "pages": [414]}], "authoringBatch": "batch-43"}
---

# P25AD: Volkswagen detects piston-cooling pressure in an unexpected control state

Volkswagen’s 2021–2022 table defines P25AD as piston-cooling oil control stuck on. Its functional criterion is pressure detected at the piston-cooling gallery for longer than a threshold shown as five to ten seconds. The table references nozzle-control valve N522.

## Keep the hydraulic observation and electrical state distinct

The enabling column lists the piston-gating control signal as on. That wording must be preserved rather than replaced by an assumed relationship between electrical energization and oil flow. The short row does not describe the valve’s internal hydraulic polarity.

This monitor differs from P25AB, which uses signal voltage above 3.3 V during an on command. P25AD concerns gallery-pressure detection, not the electrical voltage itself. Passing one type of check does not automatically demonstrate that the other system behavior is correct.

## The calibrated interval is not one universal timeout

Volkswagen shows a five-to-ten-second pressure-detection threshold and separately lists a 0.5-second monitoring-time entry. The check is continuous, with two driving cycles for MIL operation. The engine-speed and ignition-time prerequisites must also be matched to the applicable calibration.

A professional diagnosis needs to establish credible gallery-pressure information and the exact actuator state before deciding why pressure remained detected. The source does not identify the valve as the only possible failed component or instruct an immediate replacement. Verification should demonstrate the appropriate functional response under the same conditions; erasing the code or observing normal overall engine oil pressure leaves the specific piston-cooling check unresolved.

## Source and scope

[Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021, physical PDF pages 414](https://vwts.ru/diag/engine-drna-dsfb-dsfe-dsff-arteon-diagnostic-eng.pdf#page=414). Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021; engine control 2021/2022 MY. Original manufacturer PDF mirrored by VWTS; physical PDF page references.
