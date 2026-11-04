---
{"entryId": "honda-p1de9", "code": "P1DE9", "title": "P1DE9: The V0 performance monitor uses an indirect current comparison", "description": "Honda P1DE9 is titled as a V0 voltage-sensor range/performance fault, but the explicit monitor compares two I1 current-detection values identified as A and B.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1de9-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1de9-factory", "pages": [1]}], "authoringBatch": "batch-49"}
---

# P1DE9: The V0 performance monitor uses an indirect current comparison

## A voltage-sensor code can use current evidence

Honda P1DE9 is titled as a V0 voltage-sensor range/performance fault, but the explicit monitor compares two I1 current-detection values identified as A and B. The source describes this as a way of recognizing V0 sensing trouble during voltage-control-unit operation. A difference greater than 45 A lasting at least five seconds satisfies the stated criterion.

That indirect relationship is the defining feature. The code should not be interpreted as a simple V0 voltage exceeding a fixed upper or lower limit, because the cited threshold is in amperes and depends on two current values.

## The operating mode must match the monitor

Gate drive must be on, the VCU must be in voltage-boost mode and V2 voltage-control duty must be at least 20 percent. The internal supply identified as 6 V must also be at least 5 V. A comparison outside those states would not reproduce the documented test conditions.

Honda lists internal PCU failure as a possible cause and specifies one-drive-cycle MIL illumination with a power-system indication. Preserve the A/B current data, control-mode information and freeze records before resetting. The excerpt does not explain a safe external measurement equivalent or authorize replacing V0 sensing hardware from this code alone.

A qualified technician should use the exact Honda procedure to interpret the calculated relationship. High-voltage isolation remains necessary for PCU access; an indirect software comparison is not permission to probe energized reactor or inverter circuits.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P1DE9%205588.pdf), PDF pages 1. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
