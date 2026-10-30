---
{"entryId": "generic-p0aef", "code": "P0AEF", "title": "P0AEF: Inverter-A sensor circuit low produces a hot indicated temperature", "description": "Read the GM P0AEF PIM Temp 0 limit and distinguish it from a valid inverter-overtemperature diagnosis.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [289]}], "authoringBatch": "batch-22"}
---

# P0AEF: Inverter-A sensor circuit low produces a hot indicated temperature

P0AEF monitors the low-voltage limit of inverter A's first temperature input, represented as PIM Temp 0 in this GM table. The listed failure is a reading above 125°C, near a zero-volt signal. The code name describes the electrical direction rather than a low physical temperature.

## The row checks signal range

Wakeup must be on. The monitor uses 250 failing counts within a 350-count window at approximately 10.4ms intervals. This is a range-limit test; it does not by itself establish the true temperature of an inverter switching device.

P0AEE separately compares this channel with the inverter average after a long soak. That rationality check is inhibited by the circuit-limit faults, so an invalid PIM Temp 0 value should not be treated as a reliable participant in the comparison.

## Preserve the raw interpretation

Save PIM Temp 0, its validity state and related inverter-temperature codes. If the scan tool presents only an averaged inverter temperature, it may conceal the single input that reached the fault limit.

The source does not prove a shorted sensor or specify a physical test point. Those details depend on the actual inverter and service procedure. A trained high-voltage technician must establish safe access and use the approved diagnostic method; do not probe energized power electronics or infer a failed inverter assembly from this code alone.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 289](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=289).
