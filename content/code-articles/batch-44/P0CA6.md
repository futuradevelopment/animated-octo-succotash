---
{"entryId": "generic-p0ca6", "code": "P0CA6", "title": "P0CA6: the MX-30’s charging-current monitor before filtering", "description": "Mazda P0CA6:00 evaluates charging current before noise removal and requires the excessive-current condition to persist for one second.", "status": "draft", "sourceReview": "checked", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0CA6:00 [BECM (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300201010000"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300201010000", "locator": "id300201010000; DTC P0CA6:00 [BECM (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P0CA6: the MX-30’s charging-current monitor before filtering

Mazda describes P0CA6:00 as charging over-current in the high-voltage power-supply system. In the MX-30 Electric procedure, the BECM evaluates the current value before noise removal and detects a value greater than 450 A for one second.

## Preserve the measurement’s direction and processing stage

The positive threshold belongs to the charging-current direction in this diagnostic. The companion discharge monitor uses a negative boundary. Keeping that sign is necessary when comparing recorded data with the stated condition; the magnitude alone is not the complete definition.

The reference to a value before noise removal also prevents a second mistake. A filtered display or a later snapshot of normal current is not automatically equivalent to the internal quantity tested at detection. The source does not provide a conversion from a particular scan-tool display to that raw measurement.

## Recurrence comes before the repair branch

The workshop flow records the snapshot, then checks for the same pending BECM code under the original operating conditions. Reproducing those conditions belongs to a qualified EV workshop using the applicable safety procedure. An owner should not attempt to create an over-current event.

If the code returns, Mazda checks CAN communication before its high-voltage battery replacement branch. The possible-cause field names internal battery malfunction, and this page supplies no wiring or connector test.

## What this code does not establish

P0CA6 does not identify an external charge point as the cause. It documents an excessive charging-current observation in the vehicle’s specified circuit. A sound conclusion therefore retains the current direction, one-second duration and related fault records, then completes Mazda’s separate check for other DTCs.

## Source and applicability

[Mazda factory procedure, P0CA6](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300201010000.html). id300201010000; DTC P0CA6:00 [BECM (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0CA6:00 [BECM (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
