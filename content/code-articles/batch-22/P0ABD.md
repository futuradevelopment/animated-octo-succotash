---
{"entryId": "generic-p0abd", "code": "P0ABD", "title": "P0ABD: A high pack-voltage signal has a circuit-specific monitor", "description": "Read the GM P0ABD voltage-sense limit and distinguish it from the hybrid controller’s dynamic voltage-safety monitor.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [233]}], "authoringBatch": "batch-22"}
---

# P0ABD: A high pack-voltage signal has a circuit-specific monitor

P0ABD monitors the high end of the dedicated battery-pack voltage-sense input. In this GM table the failure threshold is a reading above 430V. This is a signal-range diagnostic in the battery controller, rather than the separate control-strategy test against a dynamic voltage safety limit.

## Evaluate the settled contactor state

The source requires battery-controller run mode and more than 200ms since contactor closure. Suitable low-voltage supply and absence of the controller-performance fault are also prerequisites. The failing decision uses 300 qualifying samples out of 400 at 10ms intervals.

These details mean an event's timing relative to contactor closure matters. An isolated value without that state information does not show whether the documented monitor was eligible or completed its sample decision.

## Compare independent evidence carefully

Preserve the pack-sensor value and available block-voltage information, along with P0ABB rationality status. Agreement or disagreement between those paths can inform the correct service procedure, but the code itself does not identify which hardware caused an excessive indication.

The table gives no pack disassembly, charging or live-meter test instructions. A high-voltage battery specialist must use the vehicle-specific diagnostic process before selecting a repair. Do not attempt to reproduce the threshold by charging or manipulating the pack, and do not treat any scan reading as proof of a safe electrical state.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 233](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=233).
