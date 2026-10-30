---
{"entryId":"generic-p0be1","code":"P0BE1","title":"P0BE1: inverter B sensor 3 plausibility is checked after a long shutdown","description":"GM P0BE1 compares PIM Temp 2 with the inverter-temperature average under a defined cold-soak condition.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[302]}],"authoringBatch":"batch-27"}
---

# P0BE1: inverter B sensor 3 plausibility is checked after a long shutdown

P0BE1 is the rationality test for inverter B temperature sensor 3 in the cited GM document. The standardized description names inverter temperature sensor F range/performance. The source maps this monitor to PIM Temp 2 within the inverter B controller.

## Understand the comparison's timing

The controller checks whether PIM Temp 2 differs from the inverter-temperature average by more than 15°C. The ignition-off period must be at least 360 minutes, and the relevant motor and average inverter temperature readings must satisfy the stated minimum range conditions.

This makes shutdown history part of the evidence. A temperature difference observed during active motor operation does not reproduce the same cold-soak test. Save the grouped readings and the operating history rather than diagnosing from a lone sensor value.

## Direct range faults can block rationality

The row lists inverter and motor temperature circuit faults that must be inactive. A startup delay and repeated-count filter also apply. Consequently, the absence of P0BE1 while a direct circuit fault is present does not demonstrate a healthy sensor F comparison.

The source establishes a measurement-consistency check, not a universal sensor tolerance or a replacement instruction. The actual vehicle's service information must identify the hardware and the appropriate diagnostic procedure. Any physical inverter investigation requires trained hybrid personnel and the prescribed high-voltage precautions; clearing codes alone cannot verify sensor plausibility.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 302](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=302).
