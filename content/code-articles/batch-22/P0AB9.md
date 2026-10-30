---
{"entryId": "generic-p0ab9", "code": "P0AB9", "title": "P0AB9: This hybrid-performance entry describes a failed automatic engine transition", "description": "Understand the limited GM P0AB9 autostart/autostop evidence without inventing a starter, battery or fuel-system diagnosis.", "status": "draft", "sourceReview": "needs-review", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [187]}], "authoringBatch": "batch-22"}
---

# P0AB9: This hybrid-performance entry describes a failed automatic engine transition

P0AB9 is described in this GM hybrid-control table as a failed automatic engine-start or engine-stop attempt. The strategy states that a problem during the transition causes the engine to stall. That is more specific than a generic statement that the hybrid system has poor performance, but it is still a reported outcome rather than a root-cause diagnosis.

## Preserve which transition failed

The distinction between an autostart attempt and an autostop attempt is central to the source description. Record the requested transition, the engine's observed state and the accompanying controller records. A complaint that the engine “stopped” is incomplete because stopping may have been part of the commanded sequence.

The row lists a 12.5ms timing value but supplies no detailed threshold, operating-enable list or internal failure decision tree. It cannot support a precise universal reproduction test or a claim about how long every failed transition lasts.

## Use the code as an entry point

Retrieve associated engine and hybrid-controller faults before selecting a repair path. The table does not identify a weak battery, starter fault, fuel problem or mechanical cause, so none should be declared from P0AB9 alone.

A qualified hybrid technician needs the matching autostart/autostop service information for the actual vehicle. Automatic engine movement and high-voltage propulsion capability require controlled professional testing; do not attempt to force repeated transitions using this summary as a procedure.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 187](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=187).
