---
{"entryId":"generic-p0bd7","code":"P0BD7","title":"P0BD7: inverter B sensor 2 is checked against its temperature average","description":"GM P0BD7 is a cold-soak rationality test for inverter B temperature sensor 2, with a source-list detail needing confirmation.","status":"draft","sourceReview":"needs-review","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[301]}],"authoringBatch":"batch-27"}
---

# P0BD7: inverter B sensor 2 is checked against its temperature average

P0BD7 is inverter B temperature sensor 2 range/performance in the cited GM controller. The standardized description calls the channel sensor D. The source identifies the monitored input as PIM Temp 1 and compares it with the inverter-temperature average.

## The soak condition changes the comparison

An absolute difference greater than 15°C is the published failure threshold. The ignition-off period must be at least 360 minutes, and the relevant motor and average inverter temperatures must satisfy the stated minimum range conditions. This is a comparison after a long shutdown, not a general rule that all inverter sensors must agree during operation.

The table includes a startup delay and a repeated-count filter. Record the shutdown history and the sensor group together before interpreting one disagreeing value as evidence of a defective part.

## Review circuit faults and the source limitation

Direct temperature out-of-range faults inhibit this rationality test. However, the printed inhibit list includes P0BD3 where a nearby inverter B list uses a different channel code. This article does not silently correct that list or claim universal inhibit behavior; confirm it against the applicable calibration.

The supported diagnostic distinction remains a cold-soak disagreement among otherwise usable inputs. Physical sensor identification, circuit checks and repair selection require vehicle-specific information. Do not infer an inverter replacement from the code, and keep high-voltage access within trained professional service.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 301](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=301).
