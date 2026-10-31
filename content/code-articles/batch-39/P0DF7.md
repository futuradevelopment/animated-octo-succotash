---
{"entryId": "generic-p0df7", "code": "P0DF7", "title": "P0DF7: Mazda ISG W-phase temperature-signal comparison fails", "description": "Mazda P0DF7:00 identifies disagreement between two internal readings of the W-phase temperature sensor.", "status": "draft", "sourceReview": "checked", "scope": "Mazda3 01/2019 onward workshop edition d9n1-1a-22d_ver10, Mazda M Hybrid integrated starter generator internal FET temperature sensors; source procedure references SKYACTIV-G and SKYACTIV-X 2.0; verify vehicle equipment.", "sourceIds": ["mazda3-2019-id140202300300"], "sourceLocators": [{"sourceId": "mazda3-2019-id140202300300", "locator": "id140202300300, P0DF7:00 system malfunction location and detection condition; common ISG Diagnostic Procedure steps 1–4"}], "authoringBatch": "batch-39"}
---

# P0DF7: Mazda ISG W-phase temperature-signal comparison fails

For Mazda's M Hybrid ISG, P0DF7:00 is a W-phase internal FET temperature-sensor characteristic fault. It implements the generic generator-inverter temperature sensor C range/performance definition.

## This monitor compares two receiving circuits

The ISG microcomputer and stator-coil driver-control IC each receive the W-phase temperature-sensor signal. Mazda recognizes a difference of at least 0.2 V maintained for one second. This is an internal agreement check, not simply a high-temperature threshold.

The absolute low- and high-input codes for W-phase use separate voltage limits. A technician should retain that distinction because a comparison failure and an out-of-range input are different recorded observations, even though the manufacturer gives them a shared service procedure.

## Confirm the fault in its original context

The procedure preserves snapshot data and distinguishes a present fault from a historical one. Reproduction uses the recorded engine speed, vehicle speed, and coolant temperature while monitoring ISG speed. A second technician or recorded data is required for safe moving-vehicle assessment.

Persistent or reproduced faults lead through CAN diagnosis before ISG replacement. The source notes that communication noise can create an entry, so a single historical code does not bypass those checks.

The common fail-safe disables hybrid assistance, regenerative operation, and i-stop, and leaves vehicle electrical supply dependent on the 12 V battery. Mazda warns that continued use can exhaust that supply. No external sensor connector or internal repair sequence is provided; verification follows the shared ISG flow and resolution of other displayed faults.

## Source and applicability

[Mazda diagnostic chart, P0DF7](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id140202300300.html). Mazda3 01/2019 onward workshop edition d9n1-1a-22d_ver10, Mazda M Hybrid integrated starter generator internal FET temperature sensors; source procedure references SKYACTIV-G and SKYACTIV-X 2.0; verify vehicle equipment. These values describe that documented monitor; they are not universal specifications for every vehicle displaying this code.
