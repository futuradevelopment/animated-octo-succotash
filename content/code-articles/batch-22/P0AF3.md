---
{"entryId": "generic-p0af3", "code": "P0AF3", "title": "P0AF3: The generic B-temperature code maps to inverter-B sensor one in this document", "description": "Read the GM P0AF3 inverter-B rationality monitor without assuming that the letter names a second sensor inside inverter A.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [301]}], "authoringBatch": "batch-22"}
---

# P0AF3: The generic B-temperature code maps to inverter-B sensor one in this document

P0AF3 is an inverter-temperature range/performance code, but the channel naming needs care. This GM table assigns it to inverter B's first temperature sensor, represented as PIM Temp 0. The generic letter B should not be assumed to mean the second physical sensor inside inverter A.

## Compare the documented channel with its own average

The failure quantity is an absolute difference greater than 15°C between inverter B's PIM Temp 0 and the inverter-temperature average. Ignition-off time must be at least 360 minutes, with the relevant average and motor temperature above the documented minimum.

Named motor and inverter circuit-limit faults must be inactive. A startup delay and sample window then qualify the comparison. An observation after active heating cannot be substituted for the specified long-soak startup evidence.

## Preserve the source mapping

Record inverter B controller identity, its PIM Temp 0, its average temperature and off-time from the same event. A value from inverter A or a generic unlabeled “temperature B” display may not identify the measurement used by this monitor.

The source does not locate the sensor physically or prove which channel caused the disagreement. Use the matching inverter B service procedure for those decisions. Work around high-voltage power electronics requires trained personnel and approved isolation; this plausibility test is not a live-probing instruction.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 301](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=301).
