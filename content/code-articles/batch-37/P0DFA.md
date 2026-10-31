---
{"entryId": "generic-p0dfa", "code": "P0DFA", "title": "P0DFA: Generator phase-current faults require the originating ISG code", "description": "The documented Mazda P0DFA procedure covers generator phase-current faults require the originating ISG code.", "status": "draft", "sourceReview": "checked", "scope": "Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-G (WITH Mazda M Hybrid)). Verify exact vehicle specification; this is a Mazda application example.", "sourceIds": ["mazda3-2019-id0102t46818u2"], "sourceLocators": [{"sourceId": "mazda3-2019-id0102t46818u2", "locator": "DTC P0DFA:00 [PCM (SKYACTIV-G (WITH Mazda M Hybrid))]; id0102t46818u2; detection conditions and diagnostic procedure"}], "authoringBatch": "batch-37"}
---

# P0DFA: Generator phase-current faults require the originating ISG code

P0DFA is cataloged as generator phase U-V-W current sensor correlation. Mazda's M Hybrid PCM can store it when the integrated starter generator reports a broader group of internal current-sensing faults.

## Why a full module scan changes interpretation

The factory page associates this PCM entry with current-sensor characteristic errors and high or low inputs in multiple stator phases, as well as rotor-current sensing faults. The originating ISG DTC may consequently be more specific than the P0DFA displayed by an engine-only reader.

A correlation label does not establish which phase is incorrect, nor does a high-input sensor code automatically prove excess current through the motor winding. The sensor report and the physical current are different diagnostic questions. Mazda directs diagnosis to the ISG code list before identifying a failed component.

## Operational response and confirmation

The documented fail-safe disables normal generation control, i-stop, regenerative braking, motor assistance and non-generation control. These simultaneous changes can be the consequence of one unavailable measurement rather than separate failures of each function.

The manual distinguishes a current ISG record from a PCM-only historical record. Save the module identities and snapshots, resolve any originating DTC, and confirm the result with the prescribed key-on, engine-off self-test and pending-code inspection. This PCM page does not publish phase-current thresholds or authorize an internal repair. Generator power electronics and hybrid electrical isolation should be handled under the exact professional service procedure.

## Documented application

Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-G (WITH Mazda M Hybrid)). Verify exact vehicle specification; this is a Mazda application example. [Mazda factory diagnostic page, mirrored by CHARM](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id0102t46818u2.html).
