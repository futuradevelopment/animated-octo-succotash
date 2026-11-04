---
{"entryId": "generic-p0cfe", "code": "P0CFE", "title": "P0CFE: MX-30 onboard-charger S2 switch remains closed", "description": "Mazda detects the internal control-pilot switch failing to leave its closed state and stops charging.", "status": "draft", "sourceReview": "checked", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0CFE:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300204055300"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300204055300", "locator": "id300204055300; DTC P0CFE:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P0CFE: MX-30 onboard-charger S2 switch remains closed

In Mazda's MX-30 electric implementation, P0CFE means the S2 switch inside the battery charge control module does not change from its closed state. This is the specific monitor behind the generic control-pilot charging-switch-stuck-on title. The fail-safe stops charging; a closed-state indication should not be interpreted as proof that charging continues normally.

## The S2 open command and its response

The source does not publish the expected switch voltage, transition timing, or an accessible terminal test. It also does not identify the charge-port connector lock or a battery contactor as the failed part. The monitored S2 function belongs to the onboard charger.

Mazda nevertheless considers external charging equipment alongside the onboard charger. The workshop preserves the snapshot and uses a controlled comparison with different equipment after clearing the record. A fault that remains only historical can support an equipment-specific event. A fault that is currently repeated takes the vehicle-side branch. The manual describes the comparison as quick charging, so the exact setup must be taken from the applicable service procedure.

A current recurrence leads to CAN diagnosis and repetition of the sequence. Onboard-charger replacement is conditional on continued recurrence with communication normal. Other DTCs are checked before the procedure is considered complete.

For diagnosis, record whether the expected change out of the closed state was missing, how the fault status changed with the equipment comparison, and whether companion faults appeared. Do not attempt to toggle the internal switch by bridging charger wiring. Charging tests and high-voltage component work belong to qualified personnel, especially where the normal control-state transition cannot be trusted.

## Source and applicability

[Mazda factory procedure, P0CFE](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300204055300.html). id300204055300; DTC P0CFE:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0CFE:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
