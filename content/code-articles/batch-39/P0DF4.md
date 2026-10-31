---
{"entryId": "generic-p0df4", "code": "P0DF4", "title": "P0DF4: Mazda ISG V-phase temperature readings disagree", "description": "Mazda P0DF4:00 compares two internal readings of the V-phase FET temperature-sensor signal.", "status": "draft", "sourceReview": "checked", "scope": "Mazda3 01/2019 onward workshop edition d9n1-1a-22d_ver10, Mazda M Hybrid integrated starter generator internal FET temperature sensors; source procedure references SKYACTIV-G and SKYACTIV-X 2.0; verify vehicle equipment.", "sourceIds": ["mazda3-2019-id140202300300"], "sourceLocators": [{"sourceId": "mazda3-2019-id140202300300", "locator": "id140202300300, P0DF4:00 system malfunction location and detection condition; common ISG Diagnostic Procedure steps 1–4"}], "authoringBatch": "batch-39"}
---

# P0DF4: Mazda ISG V-phase temperature readings disagree

Mazda maps generic temperature sensor B range/performance code P0DF4 to ISG V-phase sensor-characteristic fault P0DF4:00. The monitor compares the signal received by the ISG microcomputer with the signal received by its stator-coil driver-control IC.

## The difference is the defining evidence

A disagreement of at least 0.2 V lasting continuously for one second triggers this entry. That differs from the neighboring low- and high-input codes, which compare one signal with an absolute voltage boundary. Two readings can disagree without either observation proving an actual excessive temperature.

The source supplies no thermal conversion or externally accessible sensor test. Its wiring and connector diagram fields are not applicable, so this is not a basis for opening the ISG to probe its internal electronics.

## Use the shared recurrence procedure

Mazda records snapshot data and establishes whether the fault is present or historical. It rechecks a present fault after an ignition cycle and a wait of at least ten seconds. Persistent or reproduced faults require CAN diagnosis before the procedure proceeds toward ISG replacement.

The V-phase code shares that process with the other internal temperature channels; the manual does not prescribe a different replacement strategy merely because the phase letter changes.

The fail-safe disables hybrid assistance, regeneration, and i-stop while electrical loads rely on the 12 V battery. Mazda warns that continued operation can exhaust that battery. Professional verification must resolve the recurrence and assess other stored faults, rather than treating a restart or a plausible single temperature display as proof that the internal comparison is healthy.

## Source and applicability

[Mazda diagnostic chart, P0DF4](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id140202300300.html). Mazda3 01/2019 onward workshop edition d9n1-1a-22d_ver10, Mazda M Hybrid integrated starter generator internal FET temperature sensors; source procedure references SKYACTIV-G and SKYACTIV-X 2.0; verify vehicle equipment. These values describe that documented monitor; they are not universal specifications for every vehicle displaying this code.
