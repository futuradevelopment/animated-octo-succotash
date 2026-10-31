---
{"entryId":"generic-p23ae","code":"P23AE","title":"P23AE: NOx sensor 3 reports below the lower concentration limit","description":"P23AE monitors the third NOx sensor for a raw concentration below the documented lower range.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG04B diagnostic parameter file; the cited monitor is documented, but individual vehicle, engine and calibration applicability has not been established.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[1453]}],"authoringBatch":"batch-08"}
---

# P23AE: NOx sensor 3 reports below the lower concentration limit

P23AE is the low-range code for bank 1 NOx sensor 3, identified in this source as the sensor after the second catalyst. The fault criterion is a raw NOx reading below −90 ppm. Although the generic label says “circuit low,” the documented comparison uses concentration units.

## Validity before concentration

The sensor bus relay must be on, relay voltage must exceed 11 V and sensor supply must exceed 9.90 V. Dewpoint, valid CAN data, internal current-control health, electrical health and oxygen plausibility all qualify the measurement. The controller counts 100 failures out of 200 samples at 25 ms intervals and uses Type B, two-trip reporting.

## Reading the negative boundary

A negative out-of-range value is a diagnostic representation, not evidence that physical exhaust contains negative NOx. A low positive concentration after treatment does not cross this limit. That distinction avoids treating every low downstream value as sensor failure.

To evaluate a recorded event, establish which sensor and which raw parameter supplied the value. Then check whether sensor status allowed the range monitor to run. A communication failure should not be interpreted as a valid concentration sample. Verification requires a completed lower-range assessment under qualified conditions; the summary does not establish the failed component or justify a particular replacement.

## Source and application limits

This explanation covers the cited 2025 GM monitor. Confirm the vehicle and calibration in its service information before applying these limits; inclusion in this file does not establish model compatibility. [GM diagnostic parameters, PDF page 1453](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1453).
