---
{"entryId": "generic-p0be5", "code": "P0BE5", "title": "P0BE5: MX-30 inverter U-phase current at initial diagnosis", "description": "Mazda detects an excessive initial U-phase current-sensor value inside the inverter and stops the drive motor.", "status": "draft", "sourceReview": "checked", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0BE5:00 [DRIVE MOTOR CONTROL MODULE (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300203047800"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300203047800", "locator": "id300203047800; DTC P0BE5:00 [DRIVE MOTOR CONTROL MODULE (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P0BE5: MX-30 inverter U-phase current at initial diagnosis

P0BE5 identifies the drive motor's U-phase current-sensor circuit. The cited Mazda MX-30 electric procedure is more specific: during initial diagnosis, the drive motor control module detects a U-phase current value at or above a specified limit. The sensor is inside the inverter. The page does not disclose the current limit or a detection duration.

## Initial current evidence before component selection

The initial-diagnosis context is important. This code should not automatically be described as excessive propulsion current under acceleration, nor does the title establish an externally serviceable sensor. Mazda lists an inverter fault, including its current sensor or drive motor control module, and states that the fail-safe stops the electric motor.

Snapshot information is preserved before the workshop evaluates recurrence. The source's confirmation involves at least ten minutes of controlled vehicle operation followed by a drive motor control-module scan. That is a professional verification stage after the vehicle is judged safe to operate; it is not an instruction to drive a malfunctioning EV to make the code return. The ten-minute interval is also not the unpublished monitor timer.

If the same pending fault returns, Mazda checks CAN communication before the drive motor control-module replacement branch, which references inverter removal and installation. Final verification checks other DTCs and confirms that no further malfunction appears.

A service report should distinguish the recorded initial current indication from later operating current and identify whether the fault recurred. Internal inverter access, sensor investigation, and replacement require qualified high-voltage service. This page supplies no safe external probing method, phase-current test lead location, or basis for opening the inverter at home.

## Source and applicability

[Mazda factory procedure, P0BE5](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300203047800.html). id300203047800; DTC P0BE5:00 [DRIVE MOTOR CONTROL MODULE (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0BE5:00 [DRIVE MOTOR CONTROL MODULE (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
