---
{"entryId":"generic-p04ae","code":"P04AE","title":"P04AE: bank-2 purge valve tested through a commanded pressure change","description":"P04AE evaluates a possible stuck-open bank-2 canister purge valve by observing intake-manifold pressure during an intrusive opening command.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG07A Part2 diagnostic monitor documentation; the application-matrix filename mismatch is unresolved, so no model or engine applicability is inferred.","sourceIds":["gm-2025-07a-2"],"sourcePages":[{"sourceId":"gm-2025-07a-2","pages":[157]}],"authoringBatch":"batch-10"}
---

# P04AE: bank-2 purge valve tested through a commanded pressure change

P04AE evaluates a possible stuck-open bank-2 canister purge valve by observing intake-manifold pressure during an intrusive opening command. The source maps the catalog’s valve B description to bank 2 for this monitor.

## A small response increments a counter

The controller compares bank-2 manifold pressure at the beginning and end of the commanded opening. A change below 5 hPa increments the failure counter; at least three counts are required. The table provides a one-second interval between diagnostic events and two-trip reporting.

This is a response test. A pressure reading that looks ordinary before the command does not establish whether the expected change occurred afterward. The counter also means that one weak response is different from the accumulated fault result.

## Eligibility and limits

The valve-release conditions include coolant above 69.75°C, ambient temperature above −7.5°C, and an ambient-pressure correction requirement. The monitor is limited to once per trip. The mixture-correction entries have ambiguous opposite inequalities, so they are not reconstructed here as a complete enabling formula.

Verification should demonstrate the bank-2 commanded-response monitor completing with suitable pressure evidence. The table supports a stuck-open diagnostic interpretation but does not identify a physical leak location or establish that replacing the purge valve is automatically the correct remedy.

## Documentation and applicability

These details describe the monitor in GM’s 2025 25OBDG07A Part2 file. Its application-matrix filename does not match the download index, so model and engine applicability remain unresolved. Use the vehicle’s correct service information before applying these calibration details.

[GM diagnostic table, PDF page 157](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=157).
