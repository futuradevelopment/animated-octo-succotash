---
{"entryId":"generic-p0cf0","code":"P0CF0","title":"P0CF0: Electronics coolant-sensor low is an electrical boundary","description":"The GM P0CF0 row identifies coolant-temperature sensor voltage below 2 percent of reference, but its printed timing information is incomplete.","status":"draft","sourceReview":"needs-review","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[566]}],"authoringBatch":"batch-28"}
---

# P0CF0: Electronics coolant-sensor low is an electrical boundary

P0CF0 is the low electrical-range diagnostic for the power-electronics coolant-temperature sensor in this GM table. The visible criterion is sensor voltage below 2 percent of its reference, shown as 0.1 volt. The code therefore concerns the sensor signal, not a direct assertion that coolant temperature is low.

## Keep the electrical comparison distinct

The feedback percentage is relative to the reference voltage. It should not be converted into a coolant-flow percentage or an unverified physical-temperature threshold. The exact sensor characteristics and circuit information are needed to interpret the reported signal.

System voltage must exceed 10.2 volts. The row provides 16 failures out of 20 samples, but the printed sampling-period text is cut off. This article does not borrow a duration from an adjacent diagnostic to complete the missing specification.

## Use the correct follow-up evidence

The neighboring P0CEF performance check compares coolant and charger temperatures under established pump operation. That is a different test from P0CF0's low electrical boundary. Preserve both the original signal report and related circuit or plausibility faults when discussing the case with a technician.

The source's truncated wording remains a review issue. It does not establish a universal connector pin, resistance specification or required sensor replacement. Physical investigation around the high-voltage electronics cooling system must follow the actual vehicle service procedure and appropriate professional precautions.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 566](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=566).
