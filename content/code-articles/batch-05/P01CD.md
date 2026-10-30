---
{"entryId": "generic-p01cd", "code": "P01CD", "title": "P01CD: cylinder 2 exceeds its positive injection-correction limits", "description": "Understand P01CD: cylinder 2 exceeds its positive injection-correction limits, with documented GM monitor criteria and diagnostic limits.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 04B diagnostic parameter document; the cited module and monitor only. Per-code vehicle, engine and calibration applicability is not established.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [1081, 1082]}], "authoringBatch": "batch-05"}
---

# P01CD: cylinder 2 exceeds its positive injection-correction limits

P01CD reports excessive positive drift affecting injector 2 in the documented SQP test. The ECM can fail the test for calculated energizing-time delta above 100 microseconds or start-of-injection delta above five degrees. The over-retarded title therefore includes a quantity-correction branch as well as timing.

## An active test during fuel cut-off

The controller deliberately commands small known injections during diesel fuel cut-off and observes the rail-pressure response. It compares the resulting pressure drop with expected quantity behavior and derives timing from the pressure falling edge and crank-wheel speed. This is not merely a passive measurement of normal full-load injection.

The test steps through injections until its completion criteria are met. The source says an interrupted evaluation can resume rather than always restarting from zero. SQP learning and applicable temperature, speed and fuel conditions remain prerequisites; reporting is Type B, two trips.

## What to establish in the record

Confirm that the cylinder-2 evaluation completed and identify which correction branch failed. An incomplete learning attempt and a completed excessive-drift result are different outcomes. Do not assume an injector location from the cylinder number; obtain the vehicle's numbering information.

Verification needs the correct completed SQP evaluation, not just a smooth-running engine after clearing codes. Professional high-pressure fuel-system testing is necessary to determine the cause; this monitor supplies no safe injector adjustment or replacement instruction.

## Source and applicability

[GM 04B, PDF page 1081](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1081); [GM 04B, PDF page 1082](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1082). This explanation covers the documented 2025 monitor. Confirm the vehicle's module, engine and calibration before applying these criteria; the document's vehicle list does not establish this code's applicability to every listed model.
