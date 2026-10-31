---
{"entryId": "generic-p00ca", "code": "P00CA", "title": "P00CA: fuel-regulator supply high-side short to power", "description": "P00CA identifies the high-pressure fuel-pump solenoid supply-control high-side short-to-power diagnostic in the referenced GM ECM.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 25OBDG03A.pdf, ECM monitor described on the cited physical PDF pages. Vehicle, engine and calibration applicability must be confirmed separately; the file-level model matrix is not per-code fitment evidence.", "sourceIds": ["gm-2025-03a"], "sourcePages": [{"sourceId": "gm-2025-03a", "pages": [119]}], "authoringBatch": "batch-01"}
---

# P00CA: fuel-regulator supply high-side short to power

P00CA identifies the high-pressure fuel-pump solenoid supply-control high-side short-to-power diagnostic in the referenced GM ECM. The failure is detected while that output is off.

## Off-state supply behavior is the issue

A supply driver must reach its expected electrical state when switched off. The controller compares measured voltage with a controller-specific acceptable range and reports P00CA when the off-state result indicates a short to power. This is not a fuel-pressure high-limit test.

The table requires engine speed at least 50 rpm, battery voltage at least 11 V and the correct pump device-control/code-clear state. It uses 20 failing observations out of 40, sampled every 100 milliseconds. The ancillary current specification is part of the internal diagnostic description, not a general resistance-test instruction.

## Why command history matters

A functioning pump under an on command does not demonstrate correct off-state supply behavior. Record the high-side command and event supply conditions before clearing. Also distinguish P00CA from low-side driver faults: the code identifies which controlled side the table is supervising, even though it cannot localize the actual defective connection or component.

After a cause is verified through the matched service diagnosis, confirm that the high-side off-state monitor completes successfully. A pressure reading alone cannot verify this electrical condition. High-pressure fuel equipment must be serviced under the vehicle’s professional procedure, and no hazardous probing or line-opening step is implied by this explanation.

## Source and applicability

This explanation covers the documented 2025 GM monitor, not every vehicle using P00CA. Confirm the vehicle’s module and calibration before applying its limits. [GM diagnostic table, PDF page 119](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=119).
