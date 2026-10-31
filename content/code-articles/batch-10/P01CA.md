---
{"entryId":"generic-p01ca","code":"P01CA","title":"P01CA: bank-2 rail pressure during the starting sequence","description":"P01CA identifies insufficient bank-2 rail pressure for the documented high-pressure starting sequence.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG07A Part2 diagnostic monitor documentation; the application-matrix filename mismatch is unresolved, so no model or engine applicability is inferred.","sourceIds":["gm-2025-07a-2"],"sourcePages":[{"sourceId":"gm-2025-07a-2","pages":[733,734]}],"authoringBatch":"batch-10"}
---

# P01CA: bank-2 rail pressure during the starting sequence

P01CA identifies insufficient bank-2 rail pressure for the documented high-pressure starting sequence. Its logic uses starting states and calibrated pressure requirements, rather than one fixed pressure limit for every engine condition.

## The continuation changes the interpretation

The first page introduces a high-pressure-start failure and a rail-pressure threshold that ranges from 7 to 20 MPa through a lookup table. The continuation adds a synchronous-count branch and other branches involving filtered pressure below 1.5 MPa and a maximum waiting interval of five to six seconds.

The row’s 0.1-second detection column therefore is not the whole startup observation time. Pressure, event count, waiting time, and engine state are separate parts of the decision. Sensor plausibility and release of the high-pressure start also affect eligibility.

## Verification requires the same starting context

Record the relevant start state and both measured and filtered pressure information when available. A normal pressure after the engine has fully started does not establish that pressure became available when the start sequence required it.

The table specifies two-trip reporting. A qualified technician should verify the appropriate startup branch using the vehicle’s service information and rated fuel-system equipment. The code does not by itself identify a pump or injector, and these thresholds are not instructions for opening a pressurized fuel circuit.

## Documentation and applicability

These details describe the monitor in GM’s 2025 25OBDG07A Part2 file. Its application-matrix filename does not match the download index, so model and engine applicability remain unresolved. Use the vehicle’s correct service information before applying these calibration details.

[GM diagnostic table, PDF page 733](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=733); [GM diagnostic table, PDF page 734](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=734).
