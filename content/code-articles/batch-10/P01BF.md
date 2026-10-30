---
{"entryId":"generic-p01bf","code":"P01BF","title":"P01BF: bank-2 rail-pressure plausibility includes a stuck check","description":"P01BF is a bank-2 fuel-rail-pressure plausibility code with multiple detection paths in this source.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG07A Part2 diagnostic monitor documentation; the application-matrix filename mismatch is unresolved, so no model or engine applicability is inferred.","sourceIds":["gm-2025-07a-2"],"sourcePages":[{"sourceId":"gm-2025-07a-2","pages":[577,578]}],"authoringBatch":"batch-10"}
---

# P01BF: bank-2 rail-pressure plausibility includes a stuck check

P01BF is a bank-2 fuel-rail-pressure plausibility code with multiple detection paths in this source. The examined pages distinguish an implausibly low raw pressure value from insufficient variation during injection activity.

## Different evidence, different prerequisites

One branch checks a digital raw pressure value below 0.002 MPa with the fuel pre-supply pump on, using a one-second interval. The stuck-check branch instead looks for a minimum-to-maximum signal difference no greater than the table’s stated raw threshold, after at least eight injections while the ECU is in drive state. Its interval is two seconds.

The signal and SENT plausibility conditions determine when these branches may run. The stuck-check difference is not given as a transferable physical pressure unit on this page, so it should not be interpreted as a one-MPa or one-volt acceptance rule.

## Why a steady reading is not automatically good

A plausible absolute pressure can still fail to vary as expected when injection events provide the test opportunity. Conversely, low raw pressure in the pre-supply branch is assessed under different conditions from the active-injection stuck test.

Both examined paths list one-trip reporting. Verification should identify the original path and show its completed pass. High-pressure fuel diagnosis requires suitable professional equipment and procedures; this monitor summary is not an instruction to open or probe a pressurized rail.

## Documentation and applicability

These details describe the monitor in GM’s 2025 25OBDG07A Part2 file. Its application-matrix filename does not match the download index, so model and engine applicability remain unresolved. Use the vehicle’s correct service information before applying these calibration details.

[GM diagnostic table, PDF page 577](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=577); [GM diagnostic table, PDF page 578](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=578).
