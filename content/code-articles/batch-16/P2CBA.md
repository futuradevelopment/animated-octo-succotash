---
{"entryId": "generic-p2cba", "code": "P2CBA", "title": "P2CBA: Fan 2 speed above the controller’s estimated allowance", "description": "P2CBA compares fan 2 speed with an estimated reference and a calibration table, rather than using one universal fan-speed limit.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [816]}], "authoringBatch": "batch-16"}
---

# P2CBA: Fan 2 speed above the controller’s estimated allowance

P2CBA is the fan 2 overspeed monitor in the cited GM controller. Its failure expression is actual fan speed minus the maximum estimated fan speed, compared with a calibration-dependent limit. The quantity being judged is therefore a speed difference, not just the fan's displayed revolutions per minute.

## Why the lookup table matters

The summary gives a threshold range of 1,400 to 4,050 rpm and refers to lookup table 36. It lists a twenty-second qualification and a two-trip response. The complete threshold selection is not provided in the row, so neither end of that range should be promoted to a universal pass/fail speed.

The monitor also references commanded fan percentage, battery and general enable conditions. Command information matters because the estimated allowance is part of the comparison. A high actual speed can be expected under one demand state and excessive relative to the reference under another.

## Retain actual and expected speed

Where diagnostic data permits, preserve actual fan 2 speed, the estimated reference, command and monitor status together. A single tachometer value without the reference cannot reconstruct the published decision. The adjacent fan 2 underspeed row evaluates a different condition and should not be substituted for this check.

The table does not prove a failed fan module or identify a control-wire fault. Confirmation requires the correct calibrated comparison during an enabled interval. Cooling fans can operate unexpectedly, so access and physical testing must follow the vehicle procedure; no hand contact or improvised restraint of a running fan is appropriate.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 816](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=816).
