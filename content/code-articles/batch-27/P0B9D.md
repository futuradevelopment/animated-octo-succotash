---
{"entryId":"generic-p0b9d","code":"P0B9D","title":"P0B9D: block 20 high is distinct from total-pack overvoltage","description":"GM P0B9D concerns the final block sensing channel, while separate monitors evaluate total battery-pack voltage.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[233]}],"authoringBatch":"batch-27"}
---

# P0B9D: block 20 high is distinct from total-pack overvoltage

P0B9D is block 20 voltage measurement out of range high in GM's hybrid table. The generic circuit T description identifies the final channel in this documented block-monitor sequence. It does not mean that the controller has conclusively diagnosed total-pack overvoltage.

## Distinguish the block and pack tests

The block 20 high criterion is greater than 23 V, confirmed by fifteen failures in twenty samples at 100 ms intervals. Separate pack-voltage monitors appear below it on the same page and have different thresholds, counters and reporting classifications.

That distinction matters if a scan shows both block and pack-related faults. Preserve their individual status and measurements rather than interpreting P0B9D through a whole-pack specification or assuming a single code proves which sensor is inaccurate.

## Check that retesting was possible

The block test requires BPCM RUN mode, a 9–18 V low-voltage supply and no active P0A1F. A code-free observation outside that state is not equivalent to a completed normal monitor.

Use block 20 data, pack data and companion faults to guide the exact vehicle's sensing-circuit diagnosis. The source provides a calibration-level detection rule, not a universal replacement instruction or a safe probing procedure. A qualified hybrid technician must determine whether the high reported value is physically real and verify the repair without improvising high-voltage tests.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 233](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=233).
