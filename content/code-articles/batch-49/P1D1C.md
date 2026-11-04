---
{"entryId": "honda-p1d1c", "code": "P1D1C", "title": "P1D1C: The V2S circuit remains outside its two-sided range", "description": "Honda P1D1C monitors the V2S sensor signal used by the PCU for traction-motor and generator control.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1d1c-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1d1c-factory", "pages": [1]}], "authoringBatch": "batch-49"}
---

# P1D1C: The V2S circuit remains outside its two-sided range

## Either extreme can satisfy the monitor

Honda P1D1C monitors the V2S sensor signal used by the PCU for traction-motor and generator control. Its labeled criterion is a signal above 4.83 V or below 0.05 V for at least two seconds. Both boundaries matter: the code is not limited to an excessively high reading.

The monitor's duration and confirmation strategy are part of the definition. A brief excursion, a value that remains out of range and a confirmed fault after recurrence represent different stages of evidence. Monitoring requires a 12-volt supply of at least 8 V in the cited factory table.

## The low and high branches share a diagnostic record

An out-of-range signal does not tell the technician which internal PCU function failed or whether another reported voltage is trustworthy. Honda lists internal PCU failure as a possible cause but gives no terminal-by-terminal test in this advanced-diagnostics excerpt. The current model-specific procedure must establish the valid next check.

The first qualifying drive cycle stores a pending DTC. If the malfunction returns on the next cycle, confirmed storage and MIL illumination follow; the monitor table also names the power-system indicator. Preserve freeze information and companion internal-supply or voltage-sensor faults before clearing memory.

The V2S circuit belongs to high-voltage power electronics even though its output specification is expressed as a small signal voltage. Access requires qualified personnel and proper isolation, not an improvised attempt to measure internal circuitry while energized.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P1D1C%205549.pdf), PDF pages 1. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
