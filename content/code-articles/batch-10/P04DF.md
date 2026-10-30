---
{"entryId":"generic-p04df","code":"P04DF","title":"P04DF: bank-1 purge-valve response during intrusive testing","description":"P04DF monitors the bank-1 canister purge valve for a stuck-open pattern in the cited source.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG07A Part2 diagnostic monitor documentation; the application-matrix filename mismatch is unresolved, so no model or engine applicability is inferred.","sourceIds":["gm-2025-07a-2"],"sourcePages":[{"sourceId":"gm-2025-07a-2","pages":[156]}],"authoringBatch":"batch-10"}
---

# P04DF: bank-1 purge-valve response during intrusive testing

P04DF monitors the bank-1 canister purge valve for a stuck-open pattern in the cited source. It uses the effect of a deliberately commanded opening on bank-1 intake-manifold pressure rather than relying only on a static tank-pressure measurement.

## What qualifies the failure

The failure counter increases when the pressure difference from the beginning to the end of valve activation is below 5 hPa. At least three counts qualify, with one-second spacing between events. The table lists two-trip reporting and restricts the monitor to one completion per drive cycle.

The diagnostic therefore needs a commanded event and an observed before/after response. A general claim that purge is occurring cannot replace the specific pressure-change evidence used by this monitor.

## Scope of the interpretation

The row requires released purge operation and warm-environment conditions, including coolant above 69.75°C and ambient temperature above −7.5°C. One enable label unexpectedly refers to integrated bank-2 flow, and the mixture-correction inequalities are ambiguous. Those details require calibration confirmation rather than silent correction.

Verification should focus on the documented bank-1 response and the applicable completed test. The base code does not prove that the valve is mechanically stuck or identify an external hose leak. The correct service procedure must distinguish the source of insufficient response before any repair choice.

## Documentation and applicability

These details describe the monitor in GM’s 2025 25OBDG07A Part2 file. Its application-matrix filename does not match the download index, so model and engine applicability remain unresolved. Use the vehicle’s correct service information before applying these calibration details.

[GM diagnostic table, PDF page 156](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=156).
