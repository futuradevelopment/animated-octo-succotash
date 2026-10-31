---
{"entryId": "generic-p0b4c", "code": "P0B4C", "title": "P0B4C: The block-four low-limit check also watches block five", "description": "Understand the GM P0B4C paired low-sense criterion and why a single low reading does not complete its evidence.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [224]}], "authoringBatch": "batch-22"}
---

# P0B4C: The block-four low-limit check also watches block five

P0B4C is associated with block-four voltage sensing, but GM's failure criterion requires block four and block five both below 2V. The neighboring channel is part of the monitor itself. It should not be dropped from a diagnostic explanation just because the code title names only block four.

## Capture both channels at the event

The pair must qualify within a 15-of-20 failing-sample decision at 100ms intervals. Controller run mode, suitable low-voltage supply and absence of P0A1F are additional conditions.

A later normal block-five value does not show whether it was low during the original event. Conversely, two readings collected at different times cannot establish that the AND condition occurred simultaneously. The timing of the paired values is therefore useful evidence.

## Keep the cause open until the circuit is mapped

The source does not explain the physical sense-wire arrangement or prove that a common connection caused both indications. It also does not establish that the two physical blocks are depleted. Those are different conclusions requiring the matching battery service procedure.

Save related rationality and high-limit codes with the event record. A qualified high-voltage technician should perform any physical investigation under the approved isolation and verification process. Neither the low threshold nor the scan-tool display establishes that pack conductors are safe to touch, and no live-voltage test is supplied here.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 224](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=224).
