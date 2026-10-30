---
{"entryId": "generic-p0ac7", "code": "P0AC7", "title": "P0AC7: Battery input two is judged hot relative to at least one cooler channel", "description": "Understand the GM P0AC7 circuit-low monitor across its page continuation and retain its peer-temperature condition.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [235, 236]}], "authoringBatch": "batch-22"}
---

# P0AC7: Battery input two is judged hot relative to at least one cooler channel

P0AC7 is the circuit-low diagnosis for battery temperature input two. The criterion is expressed as a hot reading: input two above 95°C while at least one of the other three module-temperature inputs remains below 70°C.

## The condition continues onto the next page

GM's row starts on one physical page and finishes on the next. Input one, input three and input four are alternative cooler references, joined by OR. Reading only the first page could omit part of that logic and incorrectly restrict the test to input one.

Run mode, suitable low-voltage supply and absence of the controller-performance fault are prerequisites. The failure decision uses 30 samples out of 40 at 100ms intervals.

## Preserve the hot-channel relationship

Capture input two and the other module temperatures together. The code's circuit-low label does not mean the indicated temperature is low, and a hot input alone is not the full printed condition. P0AC6 is a separate rationality comparison with different thresholds and sample counts.

The table does not identify the physical location of sensor two or establish that actual battery heat reached the displayed value. A qualified technician must use the vehicle-specific circuit and sensor information before choosing a repair. High-voltage pack access requires the appropriate isolation process; the monitor description provides no safe live-testing method.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 235](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=235). [GM PDF, page 236](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=236).
