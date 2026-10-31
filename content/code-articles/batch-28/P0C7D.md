---
{"entryId":"generic-p0c7d","code":"P0C7D","title":"P0C7D: Sensor G performance is a relative temperature test","description":"GM P0C7D compares battery-temperature sensor G with the other module-group reports and requires repeated disagreement.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[586]}],"authoringBatch":"batch-28"}
---

# P0C7D: Sensor G performance is a relative temperature test

P0C7D identifies the battery-temperature sensor G performance comparison in this GM table. The controller compares that sensor's report with the average temperature of other module groups. The finding is a consistency problem, rather than a universal high-temperature alarm.

## Interpret the absolute difference

The boundary is an absolute deviation above 20°C. Either an unusually high or an unusually low G report can meet it. Describing the code as proof that G's part of the battery is overheated would omit half of the comparison's meaning.

The controller requires 50 failures out of 67 samples at 100-millisecond intervals. This repeated evaluation differs from one isolated scanner reading, especially when operating conditions are changing. Preserve the reference temperatures with the G value.

## Check the monitor's eligibility

The temperature-rationality fault bundle must be false. Relevant companion faults therefore belong in the diagnostic record. If they prevent the comparison from running, the absence of a new P0C7D does not establish that the measurement has recovered.

The table does not determine whether the discrepancy is physical temperature distribution or a problem in a sensor/reporting path. The exact battery service procedure must establish that distinction and map G to its hardware. A qualified high-voltage workshop should perform any physical investigation; the code and this historical monitor do not prescribe a universal sensor location or replacement component.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 586](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=586).
