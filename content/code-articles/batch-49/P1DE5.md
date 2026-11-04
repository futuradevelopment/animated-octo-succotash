---
{"entryId": "honda-p1de5", "code": "P1DE5", "title": "P1DE5: V2M feedback exceeds its specified signal ceiling", "description": "Honda P1DE5 concerns the V2M sensor signal used for voltage-control-unit regulation.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1de5-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1de5-factory", "pages": [1]}], "authoringBatch": "batch-49"}
---

# P1DE5: V2M feedback exceeds its specified signal ceiling

## The monitor watches the V2M reporting path

Honda P1DE5 concerns the V2M sensor signal used for voltage-control-unit regulation. The source defines a malfunction when that output stays above 4.9 V for at least 500 milliseconds. A 12-volt supply of at least 8 V is the listed enable condition for the continuous monitor.

The source diagram locates V2M sensing within the PCU and carries information through the PDU's internal communication path. This is distinct from a comparison between V2M and another measured voltage: the criterion here is the upper electrical boundary of the V2M signal itself.

## Preserve evidence before interpreting the represented voltage

An over-range sensor output can undermine the reliability of the associated calculated voltage. The code does not establish that an external conductor is at 4.9 V or that a traction-battery overcharge has occurred. The factory cause list names internal PCU failure, but no terminal test or individual sensor service procedure is included.

Keep the freeze data and related V2M, supply or internal-communication records so a qualified technician can apply the correct Honda diagnostic process. The documented storage strategy is one drive cycle with MIL illumination, a power-system indication and pending and confirmed records in the motor control module.

Do not jumper a presumed signal circuit or apply a substitute voltage to make the reading appear normal. Work on the PCU and its measurement paths requires the matching service information and high-voltage isolation precautions.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P1DE5%205584.pdf), PDF pages 1. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
