---
{"entryId": "generic-p0a2d", "code": "P0A2D", "title": "P0A2D: A cold motor-A indication can be a high-voltage sensor signal", "description": "Understand the GM P0A2D circuit-high monitor and its additional warmup condition when the fault exists at trip start.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [287]}], "authoringBatch": "batch-22"}
---

# P0A2D: A cold motor-A indication can be a high-voltage sensor signal

P0A2D is motor A's temperature-sensor circuit-high diagnosis in this GM calibration. The table describes a temperature below −40°C, corresponding to a signal near 5V. The high electrical signal produces a very cold indicated temperature, so the name should not be read as motor overheating.

## A startup fault has a warmup qualification

Wakeup must be on. When the malfunction is already present at the start of a trip, the monitor also requires at least 1.5 minutes of accumulated motor warmup time above the stated torque threshold. This qualification is useful when interpreting why an initial cold indication and a later code decision do not occur at exactly the same instant.

The row uses 900 failing counts within 1,800 at approximately 10.4ms intervals. This differs from the circuit-low counterpart's decision window.

## Preserve the operating timeline

Record the motor A temperature, wakeup state, whether the indication was present at startup and the available warmup or torque history. A workshop snapshot after the event can miss the qualifying sequence.

This source provides no proof of a disconnected sensor or a particular damaged conductor. Those are service-test questions, not conclusions from the code label. Use the appropriate motor-controller procedure, and leave access to high-voltage motor/inverter assemblies to trained personnel using verified isolation before physical circuit work.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 287](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=287).
