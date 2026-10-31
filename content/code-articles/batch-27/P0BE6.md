---
{"entryId":"generic-p0be6","code":"P0BE6","title":"P0BE6: motor A phase U performance checks current-sensor offset","description":"GM P0BE6 tests phase U offset with the power stage open, separately from the direct current-sensor low and high faults.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[284]}],"authoringBatch":"batch-27"}
---

# P0BE6: motor A phase U performance checks current-sensor offset

P0BE6 has a generic motor A phase U current-sensor range/performance description. In this GM controller, the specific performance test is an offset check. The source evaluates the phase U offset-current report with the power stage in its OPEN state.

## The operating state changes the meaning

The published threshold is phase U offset above 30 A. GM uses 100 counts at a 2.08 ms rate, with 208 ms shown in the timing field. This is not the same test as detecting excessive actual phase current during motor operation.

The wakeup signal must be on, the power stage must be OPEN, and P0BE7/P0BE8 must be inactive. Those direct low/high faults inhibit the offset check because the performance result depends on a usable channel.

## Separate offset evidence from circuit-range evidence

Preserve the offset reading, controller state and companion faults when the code occurs. If a direct range fault remains active, absence of a subsequent P0BE6 does not establish that the offset monitor has passed.

The source does not specify a manual zeroing adjustment, a replacement current sensor or a safe connector-probing method. OPEN is a controller state, not confirmation of workshop high-voltage isolation. A trained hybrid technician must use the actual vehicle procedure to identify the signal, verify measurement integrity and confirm the offset result after any repair.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 284](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=284).
