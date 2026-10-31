---
{"entryId": "generic-c05ab", "code": "C05AB", "title": "C05AB: Why a brake-blending code needs its originating subcode", "description": "Mazda C05AB:00 can summarize several electronically controlled brake-unit faults.", "status": "draft", "sourceReview": "checked", "scope": "Mazda3 01/2019 onward workshop manual d9n1-1a-22d_ver10; DTC C05AB:00 [PCM (SKYACTIV-G (WITH Mazda M Hybrid))]", "sourceIds": ["mazda3-2019-id0102t46805u2"], "authoringBatch": "batch-38", "sourceLocators": [{"sourceId": "mazda3-2019-id0102t46805u2", "locator": "DTC C05AB:00 [PCM (SKYACTIV-G (WITH Mazda M Hybrid))]; Outline and Diagnostic Procedure"}]}
---

# C05AB: Why a brake-blending code needs its originating subcode

The generic C05AB title refers to brake-blending separation-valve performance. In the cited Mazda M Hybrid PCM procedure, however, C05AB:00 is a grouped report received from the electronically controlled brake unit. Mazda associates the group with internal brake-unit faults, air leakage, the pressure-feed valve and the TMC cut valve.

## A broad summary with a narrow next step

The trigger list includes C05AB:72 and :73, but also C0022:49 and :56, C055D:7A, C055E:7A, C05D5:72, C1040:72 and :73, and C1041:72. This list explains why the PCM's base code cannot identify a particular valve for replacement. The brake unit holds the diagnostic distinction that the summary omits.

The PCM's stated response is to inhibit i-stop and regenerative braking. These consequences belong to the documented fail-safe strategy; they do not establish that a loss of regeneration originates inside the electric generator.

## How to interpret recurrence

Mazda's sequence saves the snapshot and follows any DTC currently present in the brake unit. It also accounts for a historical PCM record without a current originating brake fault. After the prescribed verification, a returning pending summary can lead to CAN diagnosis.

The practical question is therefore which brake-unit code caused the report, and whether that code is still present. The source does not justify opening hydraulic components, adjusting valves or conducting a driver-led brake test. A qualified workshop must use the original subcode and its corresponding safety-controlled procedure.

Scope: Mazda3 01/2019 onward manual d9n1-1a-22d_ver10, in the controller and equipment variant named by the source. Confirm vehicle applicability before using its diagnostic path.

Source: [Mazda workshop procedure (public CHARM mirror)](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id0102t46805u2.html).
