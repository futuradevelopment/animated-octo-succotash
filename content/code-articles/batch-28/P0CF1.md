---
{"entryId":"generic-p0cf1","code":"P0CF1","title":"P0CF1: Electronics coolant-sensor high uses its reference voltage","description":"GM P0CF1 checks coolant-temperature sensor voltage above 98 percent of reference, with repeated-sample qualification and support-voltage requirements.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[566]}],"authoringBatch":"batch-28"}
---

# P0CF1: Electronics coolant-sensor high uses its reference voltage

P0CF1 is the high electrical signal diagnostic for the power-electronics coolant-temperature sensor in this GM controller. Its criterion is voltage greater than 98 percent of reference, shown as 4.9 volts. This high-circuit label should not be interpreted as proof of high physical coolant temperature.

## Use the reference-based signal evidence

The table compares sensor voltage with its electrical reference. A technician must use the correct sensor and circuit information before translating that signal into a thermal conclusion. The code alone does not determine whether the signal originates in the sensor, wiring or controller path.

System voltage must exceed 10.2 volts. Qualification uses 16 failing observations out of 20 at 250-millisecond intervals. A single high scan value and a qualified fault are different levels of evidence; retain the timing and related records when available.

## Distinguish the neighboring performance test

P0CEF evaluates a coolant-to-charger temperature relationship under specific pump conditions. P0CF1 evaluates an electrical upper boundary. Those mechanisms should not be blended into one generic pump or cooling failure.

The document provides no universal connector location or replacement component. A qualified technician should preserve the original voltage report and companion fault status, then follow the exact vehicle procedure. Work near high-voltage electronics and their cooling equipment requires the applicable professional precautions. Clearing fault memory alone does not demonstrate that the electrical signal has recovered under valid monitoring conditions.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 566](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=566).
