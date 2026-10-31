---
{"entryId":"generic-p23ad","code":"P23AD","title":"P23AD: NOx sensor 3 internal current control is unstable","description":"P23AD evaluates the internal NOx and lambda stability flags of the sensor after the second catalyst.","status":"draft","sourceReview":"needs-review","scope":"2025 GM 25OBDG04B diagnostic parameter file; the cited monitor is documented, but individual vehicle, engine and calibration applicability has not been established.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[1452]}],"authoringBatch":"batch-08"}
---

# P23AD: NOx sensor 3 internal current control is unstable

P23AD concerns NOx sensor 3, described here as the sensor after the second catalyst. Its range/performance test monitors internal NOx and lambda current-control stability. A concentration reading by itself is not the complete diagnostic evidence.

## The stability calculation

The controller evaluates the fraction of monitored time that each stability flag remains off. The printed threshold is greater than 0.50%, with two failures out of two samples on a 12.5 ms task and Type B, two-trip reporting. The sensor's internal voltage and pump-current criteria produce those flags.

The test requires dewpoint, suitable supply, valid communication and a heater-resistance relationship sustained for more than ten seconds. Fuel-request stability also qualifies the test. These prerequisites explain why rapid reporting after enablement can coexist with a longer delay before the monitor begins.

## What deserves attention

Examine stability status along with sensor concentration and heater readiness. A transient concentration change does not necessarily mean the internal current controller is unstable, while repeated unstable flags deserve attention even when a displayed average seems plausible. The source has an isolated “NOx2” electrical-failure label beside a sensor-3 signal name; it should not redirect diagnosis to sensor 2. Confirm sensor identity and the applicable calibration before acting on that inconsistent wording.

## Source and application limits

This explanation covers the cited 2025 GM monitor. Confirm the vehicle and calibration in its service information before applying these limits; inclusion in this file does not establish model compatibility. [GM diagnostic parameters, PDF page 1452](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1452).
