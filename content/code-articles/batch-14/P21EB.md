---
{"entryId": "generic-p21eb", "code": "P21EB", "title": "P21EB: The injector B high-circuit code whose document channel is numbered 4", "description": "Understand P21EB’s active-current diagnosis while keeping its generic cylinder 8 designation separate from source channel naming.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 25OBDG07A Part 2 monitor tables only; model, engine and transmission applicability are not established by the unresolved application-matrix filename join.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [556, 557]}], "authoringBatch": "batch-14"}
---

# P21EB: The injector B high-circuit code whose document channel is numbered 4

P21EB generically names cylinder 8 injector B circuit high. In the GM monitor tables, the corresponding row is labeled injector 4. These pages do not explain how the channel numbering relates to physical cylinder numbering, so neither number is used here to direct component removal.

## The diagnostic measures an energized condition

The row checks output current above 3.8 A while the power stage is active and labels the fault category as a short to supply. Three events are required, with engine speed and battery voltage inside the stated enabling conditions. The neighboring page provides the other electrical categories for this channel.

Inactive-stage open-load and low-circuit tests are different from this active-current assessment. A stopped driver showing no current after detection is not evidence that the original energized condition was normal.

## Resolve the mapping before testing a physical circuit

The full code, controller identification and calibration are needed to select the applicable vehicle circuit information. Only then can the electrical evidence be tied to the correct injector B path.

This summary neither measures fuel flow nor identifies which part of the electrical circuit failed. Wiring, load and internal driver behavior cannot be separated by the code alone. The current boundary is a monitor parameter and must not be treated as a direct-energization procedure. A valid recovery assessment needs the correctly identified monitor to run under eligible conditions, not simply a reset fault memory.

## Source and scope

2025 GM 25OBDG07A Part 2 monitor tables only; model, engine and transmission applicability are not established by the unresolved application-matrix filename join. These are documented monitor criteria, not a universal repair procedure. [GM PDF, physical page 556](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=556) · [GM PDF, physical page 557](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=557).
