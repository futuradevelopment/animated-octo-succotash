---
{"entryId": "generic-p0af5", "code": "P0AF5", "title": "P0AF5: Inverter-B sensor high is a cold-limit test with warmup context", "description": "Read the GM P0AF5 temperature-input criterion and distinguish it from a real low-temperature operating condition.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [301]}], "authoringBatch": "batch-22"}
---

# P0AF5: Inverter-B sensor high is a cold-limit test with warmup context

P0AF5 evaluates the high-voltage end of inverter B's first temperature-sensor input. In this GM table, PIM Temp 0 falls below −40°C while the associated signal is near 5V. The code is an electrical range diagnosis, not a direct statement about ambient weather or actual inverter temperature.

## A fault present at startup has another prerequisite

Wakeup must be on. When the malfunction exists at trip start, the table also requires at least 1.5 minutes of cumulative inverter warmup above its stated torque threshold. The row's sample decision uses 250 failing counts within 350 at approximately 10.4ms intervals.

Those details make the event sequence relevant. A cold initial value and a later failure report need to be interpreted with the warmup context rather than assumed to be simultaneous.

## Keep inverter identity attached to the data

Record inverter B's PIM Temp 0, validity and available warmup information. Do not substitute a value from inverter A or assume the generic sensor-B label names a second sensor within the same inverter. The source explicitly uses inverter B sensor one here.

The table provides no proof of an open connector or a failed sensor, and no safe test-point instructions. Physical diagnosis requires the correct inverter service information and a trained high-voltage technician following the prescribed isolation and verification procedure before access.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 301](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=301).
