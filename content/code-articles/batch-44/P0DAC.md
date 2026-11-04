---
{"entryId": "generic-p0dac", "code": "P0DAC", "title": "P0DAC: Mazda’s first internal balancing-switch circuit check", "description": "Mazda maps P0DAC:00 to balancing-switch circuitry in BECM ASIC one, with a cell-voltage prerequisite before the discharge switch operates.", "status": "draft", "sourceReview": "checked", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0DAC:00 [BECM (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300201012000"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300201012000", "locator": "id300201012000; DTC P0DAC:00 [BECM (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P0DAC: Mazda’s first internal balancing-switch circuit check

In the MX-30 Electric factory manual, P0DAC:00 concerns the balancing-switch circuit in BECM ASIC No.1. The generic circuit-A label therefore identifies a particular internal controller section in this application, rather than an externally accessible cell-balancing connector.

## Separate the monitored voltage from its prerequisite

The fault condition is a balancing-switch circuit voltage of at least 1.8 V. Before the discharge switch turns on, the monitored voltage at each cell must be below 4.5 V. These two values refer to different observations and different roles in the test.

Using the 1.8 V value as an acceptable battery-cell voltage would confuse the switch-circuit measurement with the cell prerequisite. The source also gives no duration for this detection condition; a time limit from a neighboring cell-voltage code should not be borrowed.

## Other BECM faults receive attention first

The inspection flow records the snapshot and asks whether other BECM codes are present before proceeding with recurrence confirmation. Those other faults receive their own applicable troubleshooting. The next decision is whether this same pending code returns after the recorded code is cleared.

A returning P0DAC then leads through CAN diagnosis before the battery replacement branch. Mazda lists an internal battery malfunction as the possible cause and marks external wiring and connector diagrams not applicable.

## Recognize the limits of the circuit label

This switch-circuit diagnostic is distinct from a cell-balancing performance check based on voltage spread between cells. It does not specify which individual cell should be charged, discharged or replaced by an owner. Internal battery work belongs to qualified EV personnel, with vehicle-specific safety precautions and a final inspection for additional DTCs.

## Source and applicability

[Mazda factory procedure, P0DAC](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300201012000.html). id300201012000; DTC P0DAC:00 [BECM (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0DAC:00 [BECM (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
