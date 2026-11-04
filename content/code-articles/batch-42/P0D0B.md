---
{"entryId": "generic-p0d0b", "code": "P0D0B", "title": "P0D0B: Ford's charging-contact high-side driver reaches its current limit", "description": "Ford uses a shared high-side-driver current observation for the charging-contactor range/performance code.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [151, 164]}], "authoringBatch": "batch-42"}
---

# P0D0B: Ford's charging-contact high-side driver reaches its current limit

Ford's P0D0B example uses the high-side charging-contactor driver's current report. The generic title refers to positive-contactor control range/performance, but the documented monitor becomes eligible when any charge contactor is commanded closed with charging wake-up active. That shared operating condition is important to preserve.

## A common driver observation differs from an individual branch

The summary states that limited current or overcurrent reported by the high-side driver for 0.02 second triggers this result. This 20 millisecond criterion is shorter than the 40 millisecond individual-driver conditions described for the neighboring positive and negative circuit-high codes.

The source therefore supports a distinction between a common high-side performance observation and a particular branch's overcurrent report. It does not justify concluding from P0D0B alone that only the positive main contactor has physically failed. The fault has to be interpreted with the commanded contactors and other recorded results.

## A current limit is not a direct contact-position measurement

Ford separately checks whether charging contactors appear open or closed using reported high-voltage relationships. A current-limited driver can affect that sequence, but the two kinds of evidence should remain distinguishable. Combining them too early into a single replacement assumption would skip useful diagnostic information.

The summary offers no universal coil-resistance specification or bypass test for this code. A professional assessment needs the exact vehicle's electrical and high-voltage procedures, with the charge-wake-up and command states retained. Verification must exercise the relevant permitted sequence and confirm appropriate driver behavior. Deleting the fault while no contactor closure is requested does not test the event that originally satisfied the monitor.

## Source and applicability

Ford Motor Company, [physical page 151](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=151); [physical page 164](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=164). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
