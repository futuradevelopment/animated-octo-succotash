---
{"entryId": "generic-p0bcf", "code": "P0BCF", "title": "P0BCF: Mazda ISG U-phase temperature-sensor input is high", "description": "Mazda P0BCF:00 monitors high electrical input from the ISG’s internal U-phase FET temperature sensor.", "status": "draft", "sourceReview": "checked", "scope": "Mazda3 01/2019 onward workshop edition d9n1-1a-22d_ver10, Mazda M Hybrid integrated starter generator internal FET temperature sensors; source procedure references SKYACTIV-G and SKYACTIV-X 2.0; verify vehicle equipment.", "sourceIds": ["mazda3-2019-id140202300300"], "sourceLocators": [{"sourceId": "mazda3-2019-id140202300300", "locator": "id140202300300, P0BCF:00 system malfunction location and detection condition; common ISG Diagnostic Procedure steps 1–4"}], "authoringBatch": "batch-39"}
---

# P0BCF: Mazda ISG U-phase temperature-sensor input is high

In Mazda's M Hybrid ISG procedure, P0BCF:00 identifies high input from the internal U-phase FET temperature sensor. This is the source-specific implementation of the generic generator-inverter temperature sensor A code. The threshold is at least 2.95 V continuously for half a second.

## High input is not a published temperature limit

The monitored quantity is electrical signal voltage. The page does not provide a voltage-to-temperature conversion, so P0BCF cannot be translated into an invented overheating temperature. It also does not describe an externally accessible sensor connector: both wiring and connector diagrams are marked not applicable.

## Confirm recurrence before the replacement branch

Mazda uses one shared diagnostic procedure for the internal temperature-sensor family. It records snapshot information, distinguishes present from past faults, and rechecks after ignition cycling and at least ten seconds on. A returning fault leads to CAN diagnosis before the ISG replacement decision.

If the entry is historical, the procedure attempts reproduction using captured engine speed, vehicle speed, and coolant temperature, with ISG speed also monitored. It notes that communication noise can create a displayed DTC when the problem cannot be reproduced.

The common fail-safe removes M Hybrid power support and inhibits ISG regeneration, assistance, and i-stop. Continued operation can deplete the 12 V battery. This requires appropriate professional assessment, not repeated clearing to restore functions.

Verification follows the shared ISG procedure and checks other remaining faults. U-phase identifies the monitored channel; it does not create a separate external probing or internal sensor-repair procedure.

## Source and applicability

[Mazda diagnostic chart, P0BCF](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id140202300300.html). Mazda3 01/2019 onward workshop edition d9n1-1a-22d_ver10, Mazda M Hybrid integrated starter generator internal FET temperature sensors; source procedure references SKYACTIV-G and SKYACTIV-X 2.0; verify vehicle equipment. These values describe that documented monitor; they are not universal specifications for every vehicle displaying this code.
