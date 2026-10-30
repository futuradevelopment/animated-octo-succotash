---
{"entryId": "generic-p0ac4", "code": "P0AC4", "title": "P0AC4: The ECM is reporting a hybrid-controller request for the warning lamp", "description": "Understand why GM P0AC4 needs the originating hybrid-controller codes before a component diagnosis is possible.", "status": "draft", "sourceReview": "needs-review", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [92]}], "authoringBatch": "batch-22"}
---

# P0AC4: The ECM is reporting a hybrid-controller request for the warning lamp

P0AC4 is an ECM report that the hybrid-control module has requested malfunction-indicator illumination. The source's deciding condition is an emissions-related DTC in the hybrid controller. This forwarding code does not identify the particular sensor, actuator or internal check that originally failed.

## Retrieve the source of the request

The ECM evaluates the request after more than three seconds since powerup and more than two seconds since code clearing. Run/crank must be active, and the diagnostic system must not be disabled for service. Those conditions help explain why the reporting code and the underlying hybrid-controller code need not appear at exactly the same moment.

Read the hybrid controller's detailed records before clearing the ECM. An ECM-only scan can show the request while omitting the diagnostic information needed to interpret it.

## Do not infer lamp behavior from one notation

The table prints “MIL: NO” in the classification area despite describing a lamp request from another controller. That notation is retained as a source limitation, not used to claim that the driver's lamp must remain off.

Record which module reports each fault and whether communication with the hybrid controller is available. The entry gives no repair or replacement instruction. A qualified hybrid technician must investigate the originating code using the applicable service information and high-voltage precautions before any hardware access.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 92](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=92).
