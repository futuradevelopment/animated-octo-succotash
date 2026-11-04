---
{"entryId": "generic-p0cd1", "code": "P0CD1", "title": "P0CD1: MX-30 charge-lid lock actuator circuit diagnosis", "description": "The Mazda procedure distinguishes the charge-lid actuator, its connection, and the charge-port electrical supply unit.", "status": "draft", "sourceReview": "checked", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0CD1:00 [PCM (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300202032300"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300202032300", "locator": "id300202032300; DTC P0CD1:00 [PCM (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P0CD1: MX-30 charge-lid lock actuator circuit diagnosis

The generic P0CD1 label refers to charge-port door unlocking control. Mazda's MX-30 electric procedure describes a charge-lid lock actuator circuit malfunction detected by the PCM. It does not supply a voltage threshold, current limit, or minimum duration. The code should therefore be treated as evidence about the locking system, not as a measurement of traction-battery charging performance.

## Actuator command versus lock feedback

The diagnostic order separates several serviceable causes. After preserving snapshot information, the technician checks the charge port-electrical supply unit connector and terminals. A connection defect is addressed before condemning the actuator or controller. The next branch uses the dedicated charge-lid lock actuator inspection, whose detailed test is a separate manual section.

If the actuator passes that inspection, the chart points to the charge port-electrical supply unit. If it fails, Mazda specifies the charge-lid box assembly. This distinction is useful when evaluating a proposed repair: the same visible symptom, a lid that will not unlock correctly, does not identify which assembly failed. The chart also lists circuit and connector faults among the possible actuator-system causes.

After repair, the workshop clears the recorded fault and verifies recurrence under the relevant recorded conditions. A recurring pending code leads to CAN communication diagnosis and a repeated diagnostic sequence; PCM replacement appears only after that sequence when communication is normal and the malfunction returns. Other DTCs are checked at completion.

Record whether the lid actually locks and unlocks, the fault status, and any connector findings. Do not force the lid or bridge actuator wiring. This source supports the named Mazda EV locking system and does not establish the same hardware layout on another vehicle.

## Source and applicability

[Mazda factory procedure, P0CD1](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300202032300.html). id300202032300; DTC P0CD1:00 [PCM (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0CD1:00 [PCM (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
