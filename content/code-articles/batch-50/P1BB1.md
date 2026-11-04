---
{"entryId": "nissan-p1bb1", "code": "P1BB1", "title": "P1BB1: Internal battery communication needs the harness and controller status together", "description": "Nissan P1BB1-08 combines recorded cell-controller status with communication-harness checks before component replacement.", "status": "draft", "sourceReview": "checked", "scope": "Nissan Ariya FE0 factory-manual 91 kWh battery LBC procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.", "sourceIds": ["nissan-ariya-fe0-battery91-20261102"], "sourceLocators": [{"sourceId": "nissan-ariya-fe0-battery91-20261102", "locator": "P1bb1-08 Li-Ion Battery Communication > DTC Description, Confirmation Procedure and DTC Diagnosis Procedure"}], "authoringBatch": "batch-50"}
---

# P1BB1: Internal battery communication needs the harness and controller status together

## Internal communication differs from the vehicle-wide CAN network

The Ariya 91 kWh battery's P1BB1-08 entry describes an internal LBC communication malfunction. Its power-on diagnosis is listed as two seconds or less, and the protective pattern limits driving output, stops charging and illuminates the EV warning. The code should not automatically be translated into an external CAN-bus failure.

Nissan records eight cell-controller status entries, then checks communication wiring between the LBC and cell controllers. This preserves both ends of the diagnostic relationship: whether a controller reports abnormality and whether the connecting path is intact.

## Reconfirmation prevents a one-step parts assumption

After harness inspection, the status result determines which controller branch is followed. Assembly and repeat confirmation come before the broader replacement combination described later in the flow. The manual also excludes components already replaced at the earlier step from being replaced again.

Keep the original status data and a clear record of work already performed. Without that history, a repeated fault can lead to unnecessary repetition of parts replacement. Battery disassembly, wiring inspection and controller configuration require qualified EV personnel with the matching pack instructions and isolation precautions. The base code alone cannot identify which individual cell controller is responsible.

The post-assembly confirmation includes a power-off interval after the prescribed clearing order. Keeping that restart sequence and the recorded controller status together makes a recurring communication fault more interpretable than repeatedly erasing one isolated code.

## Source and scope

[Nissan factory procedure, reproduced by niariya.com](https://www.niariya.com/high_voltage_battery_high_voltage_battery_2_lbc_-1197.html#p1bb1_08_li_ion_battery_communication). Exact section: P1bb1-08 Li-Ion Battery Communication.

Nissan Ariya FE0 factory-manual 91 kWh battery LBC procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.
