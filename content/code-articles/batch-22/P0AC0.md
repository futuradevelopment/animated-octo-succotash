---
{"entryId": "generic-p0ac0", "code": "P0AC0", "title": "P0AC0: Battery-current plausibility uses offset, range agreement and voltage change", "description": "Understand the GM P0AC0 current-sensor rationality branches instead of treating it as a simple high-current limit.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [234, 235]}], "authoringBatch": "batch-22"}
---

# P0AC0: Battery-current plausibility uses offset, range agreement and voltage change

P0AC0 evaluates whether the battery-current measurement is credible. The GM document lists several rationality paths, including offset with contactors open, agreement between sensing ranges and the relationship between voltage movement and current movement. It is not merely an excessive-current alarm.

## Different branches require different evidence

With contactors open, the table checks whether the absolute offset in any sensing range exceeds 5A. Another branch compares the high-range reading with the middle and low ranges while the high-range magnitude is no more than 20A. Both differences must meet the specified disagreement threshold.

The continuation also describes substantial accumulated block-voltage change with very little current change over a one-second interval. These branches use different physical relationships, so one current screenshot cannot establish which path caused the code.

## Retain the measurement context

Record contactor state, each available current range and relevant voltage history. Current-sensor circuit-low and circuit-high faults are excluded from the rationality evaluation, as are specified controller and supply faults. A rejected input should not be treated as a trusted reference for a further comparison.

The source provides no safe shunt measurement, sensor replacement or pack-opening procedure. A qualified battery technician must identify the actual failed branch using the applicable service information. Open contactors do not remove all stored energy inside a pack; professional high-voltage isolation and verification remain necessary for physical access.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 234](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=234). [GM PDF, page 235](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=235).
