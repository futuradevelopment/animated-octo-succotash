---
{"entryId": "generic-p0aee", "code": "P0AEE", "title": "P0AEE: Inverter-A temperature input zero is compared with the inverter average", "description": "Understand the GM P0AEE sensor rationality monitor and its six-hour off-time requirement.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [289]}], "authoringBatch": "batch-22"}
---

# P0AEE: Inverter-A temperature input zero is compared with the inverter average

P0AEE is the range/performance check for the inverter-temperature channel identified here as inverter A sensor one, using the controller variable PIM Temp 0. The table compares that value with the inverter-temperature average rather than imposing a simple hot limit.

## The comparison is designed for startup after a soak

Ignition-off time must be at least 360 minutes. The inverter average and motor temperature must meet the stated minimum temperature, and the named motor/inverter circuit-limit faults must be inactive. The failure quantity is an absolute difference above 15°C between PIM Temp 0 and the inverter average.

The source includes a startup delay followed by a qualifying sample window. A difference observed after active inverter heating is not automatically evidence that this cold-start monitor failed under its required conditions.

## Keep naming and timing precise

Record the controller's PIM Temp 0 value, inverter average, motor temperature and verified off-time from the same startup. Do not translate “sensor A” into an assumed physical phase or connector position; the document's channel naming is the supported mapping here.

The comparison does not establish which sensor is inaccurate and provides no replacement or resistance-test procedure. The correct inverter service information is needed for physical diagnosis. High-voltage power-electronics access requires trained personnel using prescribed isolation and verification, even though the reported problem concerns a temperature input.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 289](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=289).
