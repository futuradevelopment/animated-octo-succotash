---
{"entryId":"generic-p23af","code":"P23AF","title":"P23AF: NOx sensor 3 exceeds the upper concentration range","description":"P23AF checks the third NOx sensor for a sustained raw reading above 2,990 ppm in this calibration.","status":"draft","sourceReview":"needs-review","scope":"2025 GM 25OBDG04B diagnostic parameter file; the cited monitor is documented, but individual vehicle, engine and calibration applicability has not been established.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[1454,1455]}],"authoringBatch":"batch-08"}
---

# P23AF: NOx sensor 3 exceeds the upper concentration range

The P23AF strategy evaluates the upper raw concentration range of NOx sensor 3, located after the second catalyst in this document's terminology. The failure threshold is above 2,990 ppm. It does not publish an external circuit-voltage threshold despite the generic circuit-high name.

## A different counter from sensor 2

The table specifies 120 failures out of 240 samples at a 25 ms task rate. The sensor-2 high-range entry uses a different counter, so its fault timing should not be transferred to this code. P23AF is Type B, two trips.

Sensor readiness, supply, internal control health, electrical health and valid CAN frames are prerequisites. The continuation also requires qualifying air-system control or reductant readiness without the stated inhibition. An isolated communication-description label says sensor 2, while its signal and the overall monitor identify sensor 3; vehicle-specific confirmation remains necessary.

## Diagnostic interpretation

Separate an in-range but elevated NOx value from a value beyond this sensor reporting limit. Only the latter matches the stated criterion. Preserve the raw concentration and validity status at the event, and confirm the upper-range test completed during verification. A catalyst-efficiency conclusion or an automatic sensor replacement cannot be established from this monitor alone.

## Source and application limits

This explanation covers the cited 2025 GM monitor. Confirm the vehicle and calibration in its service information before applying these limits; inclusion in this file does not establish model compatibility. [GM diagnostic parameters, PDF page 1454](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1454). [GM diagnostic parameters, PDF page 1455](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1455).
