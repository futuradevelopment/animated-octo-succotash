---
{"entryId": "generic-p0a9e", "code": "P0A9E", "title": "P0A9E: An extreme cold reading identifies battery sensor-one circuit high", "description": "Understand the GM P0A9E sensor-one threshold and distinguish it from temperature disagreement and real battery overheating.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [235]}], "authoringBatch": "batch-22"}
---

# P0A9E: An extreme cold reading identifies battery sensor-one circuit high

P0A9E is the high-circuit diagnosis for battery temperature input one in this GM battery controller. The criterion is an indicated temperature below −45°C. “High” refers to the circuit fault category; it does not describe a high measured battery temperature.

## This check does not require a four-sensor comparison

The source evaluates the absolute cold limit with the controller in run mode and its low-voltage supply in range. The controller-performance code P0A1F must be absent. Failure requires 30 qualifying samples within 40 at 100ms intervals.

That differs from P0A9C, which compares input one with each of the other three temperatures. A source-consistent explanation must not add a peer-temperature disagreement requirement to this circuit-high row.

## Preserve channel identity and status

Capture input one's actual reading, validity state and companion temperature codes. Recording only the battery's minimum or maximum value can lose the identity of the channel that reached the limit. The other temperatures remain useful context, but they are not substitutes for this input's record.

The document does not specify whether the sensor is open, a connector is disconnected or an internal input has failed. Those distinctions require the applicable wiring and service tests. Access to the high-voltage battery must be performed by trained personnel using the prescribed isolation procedure; an implausibly cold scan value does not make pack work safe.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 235](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=235).
