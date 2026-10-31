---
{"entryId": "generic-p21dc", "code": "P21DC", "title": "P21DC: The cylinder 1 injector B high-circuit monitor uses active-stage current", "description": "Understand P21DC’s current threshold and why circuit-high wording does not mean a fuel-pressure measurement.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 25OBDG07A Part 2 monitor tables only; model, engine and transmission applicability are not established by the unresolved application-matrix filename join.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [555]}], "authoringBatch": "batch-14"}
---

# P21DC: The cylinder 1 injector B high-circuit monitor uses active-stage current

P21DC is the generic cylinder 1 injector B circuit-high code. In the GM monitor row, injector channel 1 is checked for a short-to-supply electrical fault by examining current while its power stage is active.

## Current and activation must coincide

The documented criterion is output current above 3.8 A with an active stage. The table lists three events for maturation, engine speed at least 80 rpm and battery voltage greater than 10.9 V but below 25.5 V. Separate inhibition rules also govern eligibility.

The current threshold is therefore not a resistance specification and not a universal instruction to energize an injector externally. It describes the controller's own observation during a particular operating state.

## How the active check differs from other channel faults

The channel's low-circuit and open-load entries use voltage observations with the stage inactive. Those diagnoses cannot be verified by substituting the active-stage current test, and a zero-current observation after shutdown cannot reconstruct the earlier overcurrent event.

Useful evidence includes requested activation, reported output current and the driver fault category. The exact vehicle documentation must establish the injector B arrangement and circuit location. This monitor does not measure fuel flow, spray quality or pressure, and it does not isolate wiring, load or internal driver behavior as the cause. A repair decision requires the applicable circuit diagnosis rather than assuming that a high-circuit label proves the injector itself has failed.

## Source and scope

2025 GM 25OBDG07A Part 2 monitor tables only; model, engine and transmission applicability are not established by the unresolved application-matrix filename join. These are documented monitor criteria, not a universal repair procedure. [GM PDF, physical page 555](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=555).
