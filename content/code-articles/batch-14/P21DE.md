---
{"entryId": "generic-p21de", "code": "P21DE", "title": "P21DE: Interpreting injector B circuit low while the channel mapping is unresolved", "description": "Learn the P21DE off-state classification and why cylinder 2 must not be equated automatically with source channel 8.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 25OBDG07A Part 2 monitor tables only; model, engine and transmission applicability are not established by the unresolved application-matrix filename join.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [558, 559]}], "authoringBatch": "batch-14"}
---

# P21DE: Interpreting injector B circuit low while the channel mapping is unresolved

P21DE's generic definition names cylinder 2 injector B circuit low. The GM source places this code in its injector-8 channel group. The pages do not explain the mapping from that document channel to physical cylinder numbering, so testing a guessed injector would be premature.

## The electrical class is still identifiable

The row describes a short-to-ground category with output voltage above 5 V while the power stage is inactive. This is the source's internal diagnostic observation, not an instruction to expect that voltage at an unspecified external terminal.

A three-event count is listed, along with minimum engine speed and supply eligibility. Adjacent channel-8 entries use separate criteria for an open load and an active-stage high-current fault. Those distinctions can be preserved accurately even while physical identity remains unresolved.

## What a useful diagnostic record contains

Retain the complete code, driver category, controller calibration and the command state. These details allow the applicable wiring information to identify the correct circuit before a component is judged.

The word “low” does not identify a fuel-pressure shortfall, and the monitor does not test injector spray or delivered quantity. Likewise, the reported electrical class does not isolate a particular wire, injector or internal output. Resolving channel identity and then following the vehicle's circuit procedure is necessary before a repair decision. Clearing the code without a completed eligible retest provides no confirmation that the original electrical condition has disappeared.

## Source and scope

2025 GM 25OBDG07A Part 2 monitor tables only; model, engine and transmission applicability are not established by the unresolved application-matrix filename join. These are documented monitor criteria, not a universal repair procedure. [GM PDF, physical page 558](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=558) · [GM PDF, physical page 559](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=559).
