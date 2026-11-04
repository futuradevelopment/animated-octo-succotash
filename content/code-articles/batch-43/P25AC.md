---
{"entryId": "generic-p25ac", "code": "P25AC", "title": "P25AC: Volkswagen checks for missing piston-cooling gallery pressure", "description": "VW’s P25AC performance monitor requires absent pressure detection for a calibrated interval and retains a separate actuator-control state.", "status": "draft", "sourceReview": "checked", "scope": "Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021; engine control 2021/2022 MY. Original manufacturer PDF mirrored by VWTS; physical PDF page references.", "sourceIds": ["vw-drna-dsfb-dsfe-dsff-arteon-gst"], "sourcePages": [{"sourceId": "vw-drna-dsfb-dsfe-dsff-arteon-gst", "pages": [413, 414]}], "authoringBatch": "batch-43"}
---

# P25AC: Volkswagen checks for missing piston-cooling gallery pressure

Volkswagen’s 2021–2022 engine table labels P25AC piston-cooling oil control performance/stuck off. The functional criterion concerns oil-pressure detection at the piston-cooling gallery: pressure is not detected for a threshold interval expressed as five to ten seconds. This is separate from the valve’s voltage-based circuit faults.

## Do not equate electrical command polarity with oil flow

The enabling column specifies the piston-gating control signal as off, alongside ignition-time and engine-speed conditions. The document does not explain the actuator’s hydraulic polarity in this row. It would therefore be unsafe to rewrite the condition as “pressure missing whenever the electrical valve is on.”

The distinction matters because a command label describes the electrical control state, while the functional monitor evaluates the resulting gallery-pressure information. The source’s component reference is nozzle-control valve N522, but that reference does not independently prove the valve is mechanically stuck.

## Keep the two timing fields separate

The absent-pressure interval is shown as a five-to-ten-second calibrated range. The monitoring-time column separately lists 0.5 second, with continuous checking and two driving cycles for MIL operation. These fields are not interchangeable and should not be combined into an invented fixed delay.

A qualified investigation should use the matching application’s pressure-feedback and actuator procedure, including its command interpretation. Verification must establish the expected gallery response under those conditions. A normal oil level, a satisfactory electrical resistance check or a cleared fault alone does not demonstrate that this functional pressure monitor has passed.

## Source and scope

[Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021, physical PDF pages 413, 414](https://vwts.ru/diag/engine-drna-dsfb-dsfe-dsff-arteon-diagnostic-eng.pdf#page=413). Volkswagen Golf GTI, Golf R, Arteon 2021 onward Generic Scan Tool, edition 02.2021; engine control 2021/2022 MY. Original manufacturer PDF mirrored by VWTS; physical PDF page references.
