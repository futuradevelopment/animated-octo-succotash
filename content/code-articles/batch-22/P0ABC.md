---
{"entryId": "generic-p0abc", "code": "P0ABC", "title": "P0ABC: Low pack-voltage sense is evaluated after the contactors close", "description": "Understand the GM P0ABC voltage-sense criterion and why it should not be interpreted as a direct state-of-charge reading.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [233]}], "authoringBatch": "batch-22"}
---

# P0ABC: Low pack-voltage sense is evaluated after the contactors close

P0ABC is the battery-pack voltage-sense circuit-low monitor in this GM controller. Its example threshold is a pack-voltage indication below 40V. That is a monitored signal limit, not a universal definition of a discharged hybrid battery.

## Contactor state is part of the context

The controller must be in run mode and more than 200ms must have elapsed since the contactors closed. Its low-voltage supply must be in range, and the controller-performance fault must be inactive. Those conditions distinguish this test from a voltage observation made while the system is intentionally disconnected.

Failure requires 300 failing samples within 400 at 10ms intervals. A single low sample immediately around a switching event does not describe the complete decision window.

## Keep sensing and stored energy separate

Capture the dedicated pack-voltage parameter, contactor status and timing, controller supply state and companion voltage-rationality faults. A low sensed value does not establish that every battery block is physically at low voltage or that the pack is de-energized.

The source does not identify an open sensor wire, failed contactor or battery replacement as the cause. Those possibilities need the applicable circuit and contactor diagnostics. High-voltage pack testing must be performed by qualified personnel using approved isolation and absence-of-voltage verification; the scan-tool value is not a substitute for that safety procedure.

Controller run mode is separate from the elapsed contactor-closure interval.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 233](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=233).
