---
{"entryId": "generic-p0aea", "code": "P0AEA", "title": "P0AEA: Battery input four circuit low requires a contrasting temperature pattern", "description": "Interpret the GM P0AEA hot-indication criterion using input four and at least one of its cooler peers.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [237]}], "authoringBatch": "batch-22"}
---

# P0AEA: Battery input four circuit low requires a contrasting temperature pattern

P0AEA is the battery temperature input-four circuit-low monitor. The source represents its failure as input four above 95°C while at least one of inputs one, two or three is below 70°C. The electrical label therefore should not be rewritten as a low-temperature complaint.

## The full pattern is more useful than the peak

The cooler-reference conditions are alternatives. One qualifying peer is sufficient for that part of the monitor, but the input-four peak alone is not the entire listed failure condition. The battery controller must also be in run mode with suitable low-voltage supply and no controller-performance fault.

Thirty failing samples within forty, at 100ms intervals, make up the documented decision. Preserve duration and simultaneous values rather than only a single maximum-temperature screenshot.

## Separate signal diagnosis from thermal conclusions

P0AE9 checks input-four rationality with a different three-way comparison. P0AEA addresses the circuit-low category. Neither code alone proves a physical hot spot or identifies the sensor's location in the pack.

A technician needs the correct sensor map, controller calibration and circuit procedure to distinguish a sensor/input problem from a credible thermal event. The document supplies no replacement decision or live measurement instructions. High-voltage battery access must follow professional isolation and verification requirements; the apparent temperature direction does not reduce the electrical hazard.

Input-four circuit high, P0AEB, evaluates the opposite signal extreme.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 237](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=237).
