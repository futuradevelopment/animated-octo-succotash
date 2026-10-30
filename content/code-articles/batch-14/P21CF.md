---
{"entryId": "generic-p21cf", "code": "P21CF", "title": "P21CF: The injector B open-load check for cylinder 1", "description": "Understand P21CF’s inactive-stage voltage window and why it is distinct from a fuel-flow diagnosis.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 25OBDG07A Part 2 monitor tables only; model, engine and transmission applicability are not established by the unresolved application-matrix filename join.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [555]}], "authoringBatch": "batch-14"}
---

# P21CF: The injector B open-load check for cylinder 1

P21CF is cataloged as cylinder 1 injector B circuit/open. The GM row describes an open-load electrical check on its injector 1 channel. The source does not establish a complete physical injector arrangement for every vehicle, so the precise B-injector mapping still comes from the applicable service information.

## An inactive power stage can still be monitored

The test requires the power stage to be inactive and evaluates an output-voltage window from 3 V inclusive to below 5 V. That is the controller's diagnostic observation, not a universal voltage that should be applied to an injector connector.

The row specifies three events, engine speed of at least 80 rpm and battery voltage above 10.9 V but below 25.5 V. It also references an inhibition table. An engine-off observation or an ineligible supply condition does not reproduce this entire monitor.

## Separate an open load from the adjacent electrical categories

The neighboring channel-1 rows distinguish low-circuit and high-circuit failures with different observations and power-stage states. A generic “injector fault” description loses that useful classification.

Preserve whether the driver actually reported open load, together with its state and eligibility. This monitor does not measure injector delivery, spray pattern or mechanical sealing. Establish the actual injector B circuit before using a wiring-based test to locate an interruption. The summary cannot identify the connector, winding or controller as the failed component, and it provides no basis for choosing a replacement from the code alone.

## Source and scope

2025 GM 25OBDG07A Part 2 monitor tables only; model, engine and transmission applicability are not established by the unresolved application-matrix filename join. These are documented monitor criteria, not a universal repair procedure. [GM PDF, physical page 555](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=555).
