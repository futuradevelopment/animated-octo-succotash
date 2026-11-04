---
{"entryId": "generic-p0ada", "code": "P0ADA", "title": "P0ADA: Ford's battery-contactor high-side driver reaches a current limit", "description": "Ford's positive-contactor control performance code uses a shared driver observation while a vehicle contactor is requested closed.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [161]}], "authoringBatch": "batch-42"}
---

# P0ADA: Ford's battery-contactor high-side driver reaches a current limit

P0ADA is labeled positive battery-contactor control range/performance, but Ford's detailed condition refers to the high-side contactor driver when any vehicle contactor is commanded closed. That broader command context should remain visible instead of being narrowed automatically to one physical positive contactor.

## The driver report is very brief and state-dependent

Ford requires power-sustain or charging wake-up to be high. The stated malfunction is a limited-current or overcurrent report from the high-side driver lasting 0.02 second while a vehicle contactor closure is requested. This 20 millisecond condition is an electrical-control observation, not a measurement of total battery current.

The neighboring positive and negative control-circuit codes describe other driver conditions and timing. Ford also has separate monitors for the battery contactors' apparent open or closed state. Keeping those categories separate prevents an electrical performance report from being mistaken for a completed mechanical diagnosis.

## Preserve which sequence was underway

The power-sustain and charging-wake-up alternatives allow this monitor to be relevant in more than one battery-control state. The event record should therefore retain the wake-up path, requested contactor states and related faults. A diagnosis that ignores the initiating sequence can lose the condition under which the shared driver was assessed.

The summary supplies no universal coil-resistance specification or mandatory replacement instruction for P0ADA. It should not be used to justify energizing the battery contactors outside the manufacturer's procedure. Appropriate verification confirms valid driver behavior during the permitted sequence and completes the related high-voltage system checks. A cleared code while no closure is requested is not evidence that the original current-limit condition has been resolved.

## Source and applicability

Ford Motor Company, [physical page 161](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=161). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
