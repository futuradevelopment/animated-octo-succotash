---
{"entryId": "nissan-c10aa", "code": "C10AA", "title": "C10AA: Nissan Ariya ABS pump-motor or relay fault", "description": "Nissan Ariya C10AA-63 identifies a pump-motor or motor-relay fault whose diagnosis checks connections and controller power before replacement.", "status": "draft", "sourceReview": "checked", "scope": "Nissan Ariya FE0 factory-manual VDC brake control procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.", "sourceIds": ["nissan-ariya-fe0-brake-20261102"], "sourceLocators": [{"sourceId": "nissan-ariya-fe0-brake-20261102", "locator": "C10aa-63 Pump Motor > DTC Description, Confirmation Procedure and DTC Diagnosis Procedure"}], "authoringBatch": "batch-50"}
---

# C10AA: Nissan Ariya ABS pump-motor or relay fault

## What is being monitored

The Nissan Ariya ABS procedure defines C10AA-63 as a detected malfunction in the pump motor or its motor relay. Monitoring occurs with the power switch on and normal supply voltage, with a delay of twelve seconds or less. The component name does not exclude an external electrical cause: the manual also lists harness connections, the ABS-controller power supply, fuses, fusible links, and the 12-volt battery.

A historical PAST record is treated differently from a CRNT fault. In particular, the manual says that a PAST code alone must not lead to replacement of the ABS actuator and electronic controller. Its fail-safe field states normal control for this specific entry, which should not be generalized to other brake codes found during the same scan.

## Connections and power precede the assembly decision

The diagnosis starts by inspecting the ABS-controller harness connector for a loose or disconnected connection. If that is repaired, self-diagnosis is repeated. The next stages check the controller's power and ground circuits, then inspect the controller terminals for damage or poor contact. Only the branch with those preceding checks satisfactory directs replacement of the ABS assembly.

This procedure also includes a defined post-repair driving event before clearing previous fault records: approximately two minutes at about 50 km/h or above. That is a workshop verification requirement, not advice to road-test a vehicle with unresolved brake symptoms. A technician must first assess whether testing can be performed safely. After the applicable repair and verification, ABS memory and the specified power-off rest sequence are checked again so an old record is not mistaken for continuing pump failure.

## Source and scope

[Nissan factory procedure, reproduced by niariya.com](https://www.niariya.com/dtc_circuit_diagnosis-2309.html#c10aa_63_pump_motor). Exact section: C10aa-63 Pump Motor.

Nissan Ariya FE0 factory-manual VDC brake control procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.
