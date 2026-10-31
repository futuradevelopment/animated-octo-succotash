---
{"entryId": "generic-p0af4", "code": "P0AF4", "title": "P0AF4: Inverter-B input zero can fail electrically low while reading hot", "description": "Understand the GM P0AF4 sensor-limit monitor and why an averaged inverter temperature is incomplete evidence.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [301]}], "authoringBatch": "batch-22"}
---

# P0AF4: Inverter-B input zero can fail electrically low while reading hot

P0AF4 is the circuit-low monitor for inverter B's first temperature sensor in this GM implementation. The controller variable is PIM Temp 0, and the failure indication is above 125°C near zero volts. That mapping is more precise than treating the generic sensor letter as a physical location.

## The individual channel is the target

Evaluation requires wakeup on and uses 250 failing counts within 350 at approximately 10.4ms intervals. The source is identifying an out-of-range input, not directly proving an inverter power device reached the displayed temperature.

A normal-looking average does not necessarily validate PIM Temp 0. The separate P0AF3 rationality monitor compares this channel with the average only when the required circuit-limit faults are absent and the long-soak conditions are satisfied.

## Preserve both value and validity

Save inverter B identification, the individual temperature input and its status along with companion temperature faults. If the diagnostic equipment only exposes an aggregate temperature, that limitation needs to be resolved before interpreting the sensor-specific event.

No connector pinout, physical sensor test or component replacement decision is included in the source. A qualified hybrid technician must use the applicable inverter information and prescribed high-voltage isolation process. The fact that the fault concerns a low-voltage sensor signal does not make access to an energized inverter assembly safe.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 301](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=301).
