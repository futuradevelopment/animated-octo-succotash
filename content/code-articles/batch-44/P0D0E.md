---
{"entryId": "generic-p0d0e", "code": "P0D0E", "title": "P0D0E: MX-30 negative charging-contactor control fault", "description": "Mazda's half-second monitor concerns the negative QBC contactor control circuit during battery charging.", "status": "draft", "sourceReview": "checked", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0D0E:00 [PCM (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300202033200"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300202033200", "locator": "id300202033200; DTC P0D0E:00 [PCM (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P0D0E: MX-30 negative charging-contactor control fault

In the cited MX-30 electric procedure, P0D0E is a negative QBC charging-contactor control-circuit fault. The PCM detects an open circuit or a short to ground for 0.5 seconds during high-voltage battery charging. That half-second requirement describes the monitor; it is not a safe interval for touching a circuit after charging stops.

## The negative contactor's control circuit

The source distinguishes the contactor's drive relay, its control wiring, and the connection to the battery. Its named interface is common connector C-67. Diagnosis begins with snapshot preservation and inspection of the negative QBC contactor drive relay. Connector condition and the external control paths then determine whether a local wiring defect can explain the code.

The connector branch is particularly important. A defect on the vehicle-harness side is handled as a harness or connection repair. A defect on the high-voltage-battery side follows the battery assembly branch. Thus the code alone does not establish that the battery's contactor has failed internally. Open-circuit and short-to-ground possibilities must be distinguished by a qualified technician using the complete service information.

When the external checks pass, Mazda uses recurrence and CAN communication diagnosis before the battery replacement branch. The later post-repair verification can lead back through the diagnostic sequence and eventually to PCM evaluation if the same pending fault remains. Those are conditional decisions, not interchangeable replacement suggestions.

This work crosses high-voltage system boundaries. Isolation, verification of safe conditions, and internal battery access belong to trained personnel following the vehicle's full safety procedure. For an owner or service adviser, the useful record is charging context, current versus historical status, relay and connector findings, and whether the fault returned after the identified defect was corrected.

## Source and applicability

[Mazda factory procedure, P0D0E](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300202033200.html). id300202033200; DTC P0D0E:00 [PCM (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0D0E:00 [PCM (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
