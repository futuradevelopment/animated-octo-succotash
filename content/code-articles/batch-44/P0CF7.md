---
{"entryId": "generic-p0cf7", "code": "P0CF7", "title": "P0CF7: MX-30 charging-status signal open-circuit diagnosis", "description": "Mazda's implementation checks the charging equipment and control-signal path before the onboard charger.", "status": "draft", "sourceReview": "needs-review", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0CF7:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV (E))]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300204055112"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300204055112", "locator": "id300204055112; DTC P0CF7:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV (E))]; Outline and Diagnostic Procedure"}]}
---

# P0CF7: MX-30 charging-status signal open-circuit diagnosis

The generic P0CF7 title says control-pilot circuit intermittent or erratic. Mazda's MX-30 electric procedure instead describes an open charging-status control-signal circuit between the onboard charger and charging equipment. This difference must remain explicit; the source does not publish a waveform limit, pulse-frequency rule, or intermittency counter. Its stated fail-safe stops charging.

## Charging-status wiring and the generic label

The first discrimination is equipment dependence. After preserving the snapshot, the workshop compares behavior with different charging equipment and checks whether the fault is current. A historical record alone after that comparison can support a problem with the equipment originally used. This is a supervised diagnostic comparison, not advice to keep retrying a visibly damaged port or cable.

If P0CF7 remains current, Mazda checks the charge-port assembly connection, onboard-charger connection, the charging-status signal for an open circuit, and the charge port itself. Only after those checks does recurrence with different equipment lead through CAN diagnosis and a repeated sequence toward onboard-charger replacement.

The chart calls this comparison quick charging even though the fault is located in the onboard-charger control context. The exact charging mode and signal identification should be confirmed against the vehicle's applicable full service information. The article does not silently substitute a generic pilot test for Mazda's wording.

Record the equipment used, current or historical status, and the circuit defect actually found. Charging-port inspection and component access require the complete high-voltage safety procedure. Do not bypass the control pilot or bridge the signal to force charging; the communication state is part of the charging system's control.

## Source and applicability

[Mazda factory procedure, P0CF7](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300204055112.html). id300204055112; DTC P0CF7:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV (E))]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0CF7:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV (E))]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
