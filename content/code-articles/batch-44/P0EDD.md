---
{"entryId": "generic-p0edd", "code": "P0EDD", "title": "P0EDD: module-two cell resistance and Mazda’s deterioration check", "description": "The MX-30 EV’s P0EDD:00 uses excessive cell resistance in battery module two as its specific deterioration finding.", "status": "draft", "sourceReview": "checked", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0EDD:00 [BECM (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300201014900"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300201014900", "locator": "id300201014900; DTC P0EDD:00 [BECM (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P0EDD: module-two cell resistance and Mazda’s deterioration check

The generic battery-pack-B deterioration code P0EDD becomes a cell-resistance finding in Mazda’s MX-30 Electric manual. P0EDD:00 identifies module No.2, with detection when the resistance of any cell in that module exceeds the specified limit.

## Do not invent a resistance number

The diagnostic page does not publish a numeric resistance threshold. It therefore cannot support a universal milliohm limit or an owner-performed resistance test. It also does not define the fault as a percentage of lost driving range. Those would be different measurements from the criterion actually provided.

The any-cell wording matters: one qualifying cell is enough for this monitor. The entry does not state that every cell in module two has exceeded the limit or that all battery modules are equally affected.

## Confirmation needs more than a restart

Mazda saves the snapshot, clears the recorded DTC and specifies an operating confirmation lasting at least 30 minutes before checking the pending-code result. That duration is part of the workshop confirmation, not a published detection timer or advice to drive despite a battery warning.

If the code returns, the flow checks CAN communication before reaching its high-voltage battery replacement action. The listed possible cause is internal battery malfunction, and no external wiring test is supplied.

## Preserve the finding without overextending it

A qualified EV workshop should keep module identity, resistance-related data and other battery faults together. The source’s final step checks for remaining DTCs. An isolated clear-code operation neither measures battery capacity nor establishes that the specified resistance condition has been resolved.

## Source and applicability

[Mazda factory procedure, P0EDD](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300201014900.html). id300201014900; DTC P0EDD:00 [BECM (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0EDD:00 [BECM (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
