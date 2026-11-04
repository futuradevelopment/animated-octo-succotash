---
{"entryId": "generic-p0cfd", "code": "P0CFD", "title": "P0CFD: MX-30 onboard-charger S2 switch remains open", "description": "The Mazda control-pilot-switch diagnosis uses an internal S2 state and charging-equipment comparison.", "status": "draft", "sourceReview": "checked", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0CFD:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300204055200"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300204055200", "locator": "id300204055200; DTC P0CFD:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P0CFD: MX-30 onboard-charger S2 switch remains open

P0CFD describes control-pilot charging switch A stuck off. Mazda locates the relevant S2 switch inside the MX-30's battery charge control module, or onboard charger, and detects that it does not leave the open state. Charging is stopped as the stated fail-safe. The page gives no switching-voltage threshold or timing requirement.

## The S2 close command and its response

An internal-switch description still does not prove an internal charger failure. Mazda lists both the charging equipment and onboard charger as possible causes. The diagnostic comparison preserves the snapshot, clears the record, and assesses the fault using equipment other than that associated with the original event. The manual calls this quick charging; the applicable charging setup should be verified from the complete vehicle procedure.

Status is the deciding evidence. If P0CFD is only historical after the comparison, the original equipment remains a possible explanation. If it is current, Mazda directs CAN communication diagnosis and another pass through the diagnostic sequence. Only a continuing recurrence with communication normal reaches onboard-charger replacement.

This open-state monitor should not be conflated with a physically stuck charge-port latch or the main traction-battery contactors. The source names an internal S2 control function and supplies no owner-accessible test point. Opening the charger or bridging the pilot circuit is not an appropriate diagnostic shortcut.

A useful workshop record includes the original equipment, current-versus-historical results, and whether the fault persisted after the controlled comparison. Other DTCs are checked at completion. High-voltage component access and any charging reproduction must be managed by qualified service personnel using the full safety procedure.

## Source and applicability

[Mazda factory procedure, P0CFD](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300204055200.html). id300204055200; DTC P0CFD:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0CFD:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
