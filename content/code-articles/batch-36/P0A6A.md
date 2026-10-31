---
{"entryId": "generic-p0a6a", "code": "P0A6A", "title": "P0A6A: Drive motor B phase V lacks the expected peak current", "description": "The GM P0A6A monitor evaluates a low V-phase response in motor B while current demand and inverter conditions make the test meaningful.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 diagnostic monitor; document section stated in article; per-vehicle and calibration applicability must be verified.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [1639]}], "authoringBatch": "batch-36"}
---

# P0A6A: Drive motor B phase V lacks the expected peak current

P0A6A concerns drive motor B phase V current low. In GM's 2018 MCP1B table, the diagnostic examines V-phase current near its expected electrical peak for an open-circuit response.

## The number alone is not the test

A current below 9 A must persist for 0.4 seconds within a 0.6-second window. The monitor also requires Run drive state, normal PWM, inverter voltage above 50 V, no active discharge, a ±30-degree phase-axis window and squared commanded current above 900 A². Reporting is Type A, one trip.

Those prerequisites distinguish a fault from a naturally low reading at another phase angle or low demand. The 900 A² parameter is a squared quantity, not a request for 900 amperes.

## Preserve motor B's context

Record the reporting controller and V-phase identity alongside the current request and inverter status. Phase V on motor B is not interchangeable with phase V on another motor. The code does not isolate a current sensor, motor winding, conductor or power stage as the failed part without the vehicle-specific checks.

Use qualified high-voltage service for diagnosis and repair. A meaningful confirmation repeats the prescribed eligible current assessment and system checks. An inactive inverter with no fresh code is not proof of recovery. The source gives no safe live-phase probing method, external energization instruction or universal motor replacement decision.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 1639](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=1639).
