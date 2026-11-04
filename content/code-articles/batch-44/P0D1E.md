---
{"entryId": "generic-p0d1e", "code": "P0D1E", "title": "P0D1E: MX-30 expansion-valve driver AMH error", "description": "Mazda monitors an internal AMH diagnostic bit rather than publishing an external valve-control high-voltage threshold.", "status": "draft", "sourceReview": "needs-review", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0D1E:00 [BECM (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300201011800"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300201011800", "locator": "id300201011800; DTC P0D1E:00 [BECM (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P0D1E: MX-30 expansion-valve driver AMH error

Mazda's MX-30 electric P0D1E chart identifies an electric expansion-valve driver diagnostic-resistor error reported through the AMH bit. The BECM detects the error eight times in succession. The generic code title refers to coolant-control valve B circuit high, but the Mazda source does not supply a valve terminal, a high-voltage limit, or a direct external circuit measurement.

## Interpreting the AMH driver report

The monitor therefore needs careful scope. It belongs to the battery cooling system in this manual edition, and the listed possible fault area is internal battery parts. It does not establish that a separate coolant valve has been commanded fully open, that refrigerant pressure is high, or that a particular external wire is shorted. Those conclusions require additional evidence.

Eight consecutive errors describe a repeated internal diagnostic result. No sample period is provided, and no elapsed-time equivalent should be invented. This page also omits an auxiliary-voltage enabling limit; limits from another code should not be transferred without support.

The service sequence preserves the snapshot and uses the factory diagnostic tool to command battery expansion-valve operation during recurrence assessment. A returning pending code leads to CAN communication diagnosis. With communication normal, the chart proceeds to its internal battery assembly decision and then checks other DTCs.

Record the exact code, companion cooling faults, and the commanded-test result. The mapping from the generic valve-B label to the Mazda expansion-valve driver remains an explicit review issue. Do not manually energize the valve or access the internal driver. Any battery or thermal-control work requires qualified EV service personnel and the complete safety procedure.

## Source and applicability

[Mazda factory procedure, P0D1E](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300201011800.html). id300201011800; DTC P0D1E:00 [BECM (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0D1E:00 [BECM (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
