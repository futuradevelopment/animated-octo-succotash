---
{"entryId": "generic-p21ea", "code": "P21EA", "title": "P21EA: Understanding injector B circuit low when the source uses a different channel number", "description": "See P21EA’s documented inactive-stage classification and why its physical injector identity needs verification.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 25OBDG07A Part 2 monitor tables only; model, engine and transmission applicability are not established by the unresolved application-matrix filename join.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [556, 557]}], "authoringBatch": "batch-14"}
---

# P21EA: Understanding injector B circuit low when the source uses a different channel number

P21EA is cataloged as cylinder 8 injector B circuit low. In the GM source, its row is labeled injector 4. The article preserves this unresolved distinction between the generic cylinder designation and the document's channel naming rather than choosing one as a physical location.

## The monitor’s electrical observation

The row describes a short-to-ground category and uses output voltage above 5 V while the power stage is inactive. Three events are specified. Engine speed must be at least 80 rpm, the supply must remain inside the row's voltage window, and inhibition rules also apply.

These are internal diagnostic conditions. Without an identified external test point and driver topology, the voltage figure cannot be converted into a universal connector test.

## Why neighboring categories still matter

The same document channel has a separate open-load voltage window and an active-stage high-current check. Retaining the precise low-circuit category therefore helps frame the electrical investigation, even though channel identity must first be established for the vehicle.

Record controller identification, code status and stage conditions before selecting the applicable wiring information. The summary does not measure injector delivery or isolate a failed winding, wire or ECU output. A component swap based on the unresolved number could miss the affected path entirely. A useful retest requires actual completion of the eligible circuit monitor, rather than simply clearing the stored code.

## Source and scope

2025 GM 25OBDG07A Part 2 monitor tables only; model, engine and transmission applicability are not established by the unresolved application-matrix filename join. These are documented monitor criteria, not a universal repair procedure. [GM PDF, physical page 556](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=556) · [GM PDF, physical page 557](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=557).
