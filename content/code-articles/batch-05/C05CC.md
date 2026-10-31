---
{"entryId": "generic-c05cc", "code": "C05CC", "title": "C05CC: position sensor A needs too much zero-offset correction", "description": "Understand C05CC: position sensor a needs too much zero-offset correction, with documented GM monitor criteria and diagnostic limits.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 04B diagnostic parameter document; the cited module and monitor only. Per-code vehicle, engine and calibration applicability is not established.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [318]}], "authoringBatch": "batch-05"}
---

# C05CC: position sensor A needs too much zero-offset correction

The C05CC row on this GM brake-controller page is a PTS1 offset monitor. It fails when the magnitude of the offset required to zero position sensor 1 exceeds 2.5 mm. That is a learned-zero plausibility result, not a direct open-circuit or supply-voltage test.

## Learning conditions matter

The source says the result is checked whenever an offset is learned. Learning itself requires vehicle speed above a specified but unpublished threshold, vehicle acceleration and no driver braking. A stationary reading after clearing the code does not prove that the relevant learning event occurred.

The row lists 100-millisecond maturation and Type A reporting. It identifies sensor defects and mechanical mounting as conditions covered by the monitor, but does not establish either as the cause of an individual fault.

## What to keep with the code

Preserve the learned PTS1 offset and whether the learning conditions were satisfied. Distinguish a large learned offset from a rapidly changing signal or missing digital message, because those are different diagnostic observations. The 2.5-mm value is an offset limit, not a brake-pedal adjustment specification.

A useful verification demonstrates an acceptable learned offset during the proper vehicle-specific procedure, with the rest of the brake checks completed as required. Do not adjust mounting or zero the sensor from this monitor summary alone. Brake-system service and any controlled verification movement belong within the professional procedure for the actual vehicle.

## Source and applicability

[GM 04B, PDF page 318](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=318). This explanation covers the documented 2025 monitor. Confirm the vehicle's module, engine and calibration before applying these criteria; the document's vehicle list does not establish this code's applicability to every listed model.
