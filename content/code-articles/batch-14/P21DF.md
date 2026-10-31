---
{"entryId": "generic-p21df", "code": "P21DF", "title": "P21DF: An injector B high-circuit report whose source channel needs mapping", "description": "Read P21DF’s active-current evidence while keeping generic cylinder 2 separate from document injector channel 8.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 25OBDG07A Part 2 monitor tables only; model, engine and transmission applicability are not established by the unresolved application-matrix filename join.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [558, 559]}], "authoringBatch": "batch-14"}
---

# P21DF: An injector B high-circuit report whose source channel needs mapping

P21DF is generically cylinder 2 injector B circuit high. The GM table labels the corresponding monitored channel injector 8. These naming systems are not mapped on the cited pages, so the source must not be used to guess the physical injector location.

## The failure is evaluated during activation

The row describes a short-to-supply electrical category. It requires an active power stage and output current above 3.8 A, with three events listed for maturation. Engine speed and battery supply must meet the stated eligibility limits, including the minimum 80-rpm condition.

This is an energized-current check. It differs from the inactive-stage voltage tests used for the same document channel's low-circuit and open-load categories. A current reading after the output has been disabled does not establish what happened during the failing activation.

## What must be resolved before component testing

Keep controller and calibration identity together with the full code and driver status. Those details allow vehicle-specific information to establish the channel-to-cylinder relationship before a circuit is selected.

The monitor does not identify a mechanical fuel-delivery defect and cannot separate load, wiring and driver causes by itself. The 3.8-A value is a documented internal threshold, not a direct-power test prescription. Resolve the mapping, retain the electrical category and evaluate the correct circuit under the applicable procedure before choosing a replacement. Clearing a fault without an eligible retest is not confirmation of recovery.

## Source and scope

2025 GM 25OBDG07A Part 2 monitor tables only; model, engine and transmission applicability are not established by the unresolved application-matrix filename join. These are documented monitor criteria, not a universal repair procedure. [GM PDF, physical page 558](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=558) · [GM PDF, physical page 559](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=559).
