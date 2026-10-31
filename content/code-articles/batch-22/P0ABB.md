---
{"entryId": "generic-p0abb", "code": "P0ABB", "title": "P0ABB: Pack voltage must agree with the sum of its block measurements", "description": "Read the GM P0ABB voltage-rationality monitor and understand why valid inputs and contactor timing matter.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [233, 234]}], "authoringBatch": "batch-22"}
---

# P0ABB: Pack voltage must agree with the sum of its block measurements

P0ABB compares the dedicated battery-pack voltage measurement with the sum of the individual block-voltage measurements. The cited GM failure threshold is an absolute disagreement greater than 50V. It is a consistency check between measurement paths, not simply a high- or low-pack-voltage limit.

## Both measurements must be accepted

The continuation requires valid pack-voltage information, battery-controller run mode and more than 200ms since the contactors closed. The circuit-low and circuit-high pack-voltage faults must be absent, along with the controller-performance fault.

The decision uses 70 failing samples out of 80 at 100ms intervals. A value captured before contactor closure or without knowing input validity cannot establish that this monitored comparison ran under its stated conditions.

## Preserve both sides of the calculation

Record the dedicated pack reading and the individual block readings used to form the sum. An aggregate display that already derives pack voltage from the blocks may not expose the independent measurement needed to evaluate this test.

The discrepancy does not prove whether the dedicated sensor, one block channel or another part of the measurement chain is wrong. The table supplies no live-voltage probing procedure or pack repair decision. A trained high-voltage technician must use the matching battery service information to establish signal integrity and safe access before investigating the physical sensing circuit.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 233](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=233). [GM PDF, page 234](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=234).
