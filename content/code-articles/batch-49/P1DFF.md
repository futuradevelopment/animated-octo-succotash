---
{"entryId": "honda-p1dff", "code": "P1DFF", "title": "P1DFF: The IGHLDB relay fault is divided into relay and wiring branches", "description": "Honda P1DFF concerns the IGHLDB relay circuit associated with the battery condition monitor module.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p1dff-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p1dff-factory", "pages": [1, 2]}], "authoringBatch": "batch-49"}
---

# P1DFF: The IGHLDB relay fault is divided into relay and wiring branches

## The shutdown delay is part of fault verification

Honda P1DFF concerns the IGHLDB relay circuit associated with the battery condition monitor module. The factory procedure clears the DTC, leaves the vehicle off for three minutes and then checks for recurrence after switching back on. That waiting period is part of the stated verification; an immediate power toggle does not follow the same sequence.

If the fault repeats, the relay is tested first. A failed relay test leads to the relay replacement branch. If the relay passes, the procedure continues into circuit isolation rather than assuming the module is responsible.

## Ground and power shorts are separate possibilities

The next checks distinguish a grounded IGHLDB control path from an IGB line shorted to power. The module decision comes only after the relay and these wiring branches have been evaluated. These are different electrical conditions, so replacing a relay without checking why its circuit is behaving incorrectly may leave the fault unresolved.

The source requires service-plug removal and IPU-cover access before the relay work, and uses specific disconnected-connector and power-state conditions for its measurements. This article explains the decision structure rather than substituting a universal connector test.

Retain the original pending, confirmed and freeze-data records before clearing. A qualified hybrid technician must follow the full Honda safety procedure and exact wiring information. Do not bridge the relay or force its control line to suppress the code, because that would bypass the operating state the controller is monitoring.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Troubleshooting_%20P1DFF%20(127)%205893.pdf), PDF pages 1, 2. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
