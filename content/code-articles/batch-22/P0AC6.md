---
{"entryId": "generic-p0ac6", "code": "P0AC6", "title": "P0AC6: Battery temperature input two must disagree with each of its peers", "description": "Read the GM P0AC6 sensor-two rationality check and understand why a single pairwise mismatch is insufficient.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [236]}], "authoringBatch": "batch-22"}
---

# P0AC6: Battery temperature input two must disagree with each of its peers

P0AC6 is the battery temperature sensor-two rationality code in this GM implementation. It checks input two against inputs one, three and four, rather than testing an absolute temperature limit. This can identify an implausible channel even when its electrical range is accepted.

## The entire comparison pattern is needed

The source requires each of the three absolute differences to exceed 15°C. The conditions are connected by AND, so one disagreeing pair does not establish the complete monitor result. Input two must be valid, and its own circuit-low and circuit-high codes must be inactive.

The run-mode and low-voltage supply prerequisites also apply. Failure uses 90 qualifying samples out of 100 at 100ms intervals, making persistence part of the recorded judgment.

## A useful capture keeps all four channels

Save the temperatures simultaneously with their validity status. An average pack temperature can conceal a single outlier, while readings gathered at different times may create an artificial disagreement. Keep the input-two label rather than assigning a physical sensor position from memory.

This source does not prove that input two's sensor is defective or specify its connector. The correct battery sensor map and service tests are needed to locate and distinguish the cause. Pack access is high-voltage work and requires trained personnel following the prescribed isolation and verification process.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 236](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=236).
