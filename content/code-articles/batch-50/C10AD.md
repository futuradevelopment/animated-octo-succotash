---
{"entryId": "nissan-c10ad", "code": "C10AD", "title": "C10AD: Nissan Ariya brake backup-function fault", "description": "Nissan Ariya C10AD-04 directs diagnosis toward the intelligent brake unit and its communication with the ABS controller.", "status": "draft", "sourceReview": "checked", "scope": "Nissan Ariya FE0 factory-manual VDC brake control procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.", "sourceIds": ["nissan-ariya-fe0-brake-20261102"], "sourceLocators": [{"sourceId": "nissan-ariya-fe0-brake-20261102", "locator": "C10ad-04 Brake Backup Function > DTC Description, Confirmation Procedure and DTC Diagnosis Procedure"}], "authoringBatch": "batch-50"}
---

# C10AD: Nissan Ariya brake backup-function fault

## A fault involving cooperating brake controllers

C10AD-04 is the brake backup-function code in the cited Nissan Ariya ABS procedure. The detection description links it to a malfunction in the electrically driven intelligent brake unit system. The monitored input is a CAN communication signal, evaluated with the power switch on and normal supply voltage; the listed delay is two seconds or less.

The possible causes include wiring, CAN communication, the intelligent brake unit, the ABS actuator and controller, and the ABS power-supply system. Fuses, fusible links, and the 12-volt battery are also listed. That combination is important: the ABS controller can record a problem whose first useful diagnosis is in the separate BRAKE system.

## Start with the BRAKE diagnostic session

For a current fault, the first factory step is self-diagnosis under BRAKE. If that session reports a DTC, the technician follows the corresponding brake-unit diagnostic path. When it reports no code, the sequence continues to ABS power and ground checks, followed by connector and terminal inspection at both the intelligent brake unit and ABS assembly.

After repairing any poor connection, the components are reconnected, ABS memory is cleared, and the specified power-off rest and power-on diagnostic sequence is completed. Any DTC that returns is then addressed through its own diagnostic entry. This page does not prescribe immediate replacement of either controller.

The manual labels fail-safe behavior normal control for C10AD-04, but that does not resolve an accompanying brake warning or abnormal pedal behavior. Professional assessment must consider the complete scan and symptoms. A PAST record alone is explicitly insufficient reason to replace the ABS actuator and electronic controller.

## Source and scope

[Nissan factory procedure, reproduced by niariya.com](https://www.niariya.com/dtc_circuit_diagnosis-2309.html#c10ad_04_brake_backup_function). Exact section: C10ad-04 Brake Backup Function.

Nissan Ariya FE0 factory-manual VDC brake control procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.
