---
{"entryId": "generic-p0acc", "code": "P0ACC", "title": "P0ACC: Battery input three circuit low combines a hot value with a cooler peer", "description": "Read the GM P0ACC temperature pattern and distinguish its electrical classification from confirmed pack overheating.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [236]}], "authoringBatch": "batch-22"}
---

# P0ACC: Battery input three circuit low combines a hot value with a cooler peer

P0ACC identifies the circuit-low condition for battery temperature input three. In this GM calibration, that condition is represented by input three above 95°C while at least one other module-temperature input is below 70°C.

## The other inputs are alternatives

Inputs one, two and four are joined by OR in the cooler-reference condition. The monitor does not demand that every other sensor remain below 70°C. Conversely, the hot input-three reading alone does not include the complete stated relationship.

The battery controller must be in run mode, its low-voltage supply must be acceptable and its performance fault must be absent. The sample decision is 30 failures out of 40 at 100ms intervals.

## Keep the electrical label in perspective

Circuit low does not mean cold temperature here. It describes the fault category for a sensor conversion that can appear excessively hot. P0ACB addresses a different, in-range rationality comparison, so those two code definitions should not be merged.

Record all module temperatures and validity information at the same event. The table does not establish actual heat, a specific short or a sensor location. A qualified battery technician must use the matching circuit and pack information to identify the cause. Professional high-voltage isolation is required for any physical access, and this summary supplies no live-probing or replacement procedure.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 236](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=236).
