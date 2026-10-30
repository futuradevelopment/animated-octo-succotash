---
{"entryId": "generic-p0a9d", "code": "P0A9D", "title": "P0A9D: Battery sensor one reads excessively hot while another input remains cooler", "description": "Interpret the GM P0A9D circuit-low criterion using both sensor-one temperature and the other battery temperature inputs.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [235]}], "authoringBatch": "batch-22"}
---

# P0A9D: Battery sensor one reads excessively hot while another input remains cooler

P0A9D is the battery temperature sensor-one circuit-low code in this GM implementation. Its failure criterion is expressed as an excessively hot temperature indication, so the word “low” should not be taken to mean that the battery is too cold.

## Another temperature provides context

The source requires input one above 95°C while at least one of inputs two, three or four remains below 70°C. The three cooler-reference alternatives are joined by OR. It is therefore unnecessary for all three other inputs to be below 70°C, but the hot input-one value alone is not the entire listed criterion.

The controller must be in run mode, its low-voltage supply must be within the stated range and P0A1F must be inactive. The decision uses 30 failing samples out of 40 at 100ms intervals.

## Save the pattern before choosing a cause

Record all four battery temperatures together. A single “maximum battery temperature” value hides which channel is high and whether the reference condition exists. Sensor-one plausibility and circuit-high codes answer different questions and should retain their own identities.

The source identifies no physical sensor position or failed component. It also does not establish that the extreme indication represents actual pack heat. A trained battery technician must use the correct sensor map and circuit procedure, with prescribed high-voltage isolation before any physical access or testing.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 235](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=235).
