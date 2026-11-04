---
{"entryId": "generic-p2b2a", "code": "P2B2A", "title": "P2B2A: MX-30 coolant pump spins without circulation", "description": "Mazda distinguishes electric pump operation from actual coolant circulation and checks installation, leaks, and trapped air.", "status": "draft", "sourceReview": "checked", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P2B2A:00 [PCM (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300202037000"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300202037000", "locator": "id300202037000; DTC P2B2A:00 [PCM (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P2B2A: MX-30 coolant pump spins without circulation

The generic P2B2A title describes hybrid or EV coolant-pump overspeed or dry running. Mazda's MX-30 electric procedure states that the pump motor is idling while coolant is not circulating. A rotating motor therefore does not establish that the cooling circuit is functioning. The page does not give an RPM limit or a timed detection threshold.

## Rotation without the expected coolant circulation

The first physical check is installation of the electric water pump. That is particularly relevant after service: an incorrectly installed pump can produce a circulation problem without requiring a new control module. Mazda then applies the separate pump inspection before investigating leakage and trapped air.

If the pump passes, the procedure checks the cooling passage for leaks, repairs the identified defect, and restores coolant using the specified replacement procedure. It then calls for air removal from the cooling passage. These branches distinguish a pump defect from a hydraulic condition that prevents an otherwise functioning pump from moving coolant properly. The exact coolant and bleeding method must come from the applicable service information.

Preserve the snapshot and any recent cooling-system repair history. After the relevant correction, the workshop verifies that the same pending fault does not return. Persistent recurrence leads through CAN diagnosis and a repeated sequence before the PCM replacement branch. Other DTCs are also checked.

A useful repair explanation states whether installation, the pump, leakage, or retained air was actually responsible. Replacing a pump without checking those conditions can miss the source of the dry-running indication. Do not open a hot cooling circuit or run the pump deliberately without coolant to reproduce this code.

## Source and applicability

[Mazda factory procedure, P2B2A](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300202037000.html). id300202037000; DTC P2B2A:00 [PCM (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P2B2A:00 [PCM (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
