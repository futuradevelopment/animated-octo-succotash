---
{"entryId":"generic-p0bd2","code":"P0BD2","title":"P0BD2: inverter A sensor 2 plausibility is a cold-soak comparison","description":"GM P0BD2 compares inverter A temperature sensor 2 with the inverter average after a long ignition-off period.","status":"draft","sourceReview":"needs-review","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[289]}],"authoringBatch":"batch-27"}
---

# P0BD2: inverter A sensor 2 plausibility is a cold-soak comparison

P0BD2 is the in-range rationality check for inverter A temperature sensor 2 in this GM document. The generic name calls it inverter temperature sensor C performance. The source associates that channel with PIM Temp 1, rather than a universal physical sensor location.

## Look for disagreement after the soak

The monitor compares PIM Temp 1 with the inverter-temperature average. An absolute difference greater than 15°C is the failure criterion. Ignition must have been off for at least 360 minutes, while the average inverter and motor temperatures must meet the stated minimum range conditions.

That long-off requirement changes interpretation: a comparison made during active heating is not the cold-soak test described here. Preserve the shutdown history and the related temperature readings instead of diagnosing from one warm-running value.

## Circuit faults can prevent the comparison

The source inhibits rationality while listed inverter or motor temperature out-of-range faults are active. Those direct circuit faults should be understood before treating the performance report as independent evidence of a sensor bias.

The printed timing cell is incomplete in this row, so this article does not reconstruct a missing failure-count value from a neighboring sensor. Confirm the exact calibration timing in applicable service information. The useful supported finding is the cold-soak disagreement, not a proven defective sensor or cooling-system repair. High-voltage inverter access requires trained hybrid-service personnel.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 289](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=289).
