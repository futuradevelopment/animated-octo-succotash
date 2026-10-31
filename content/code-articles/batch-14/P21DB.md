---
{"entryId": "generic-p21db", "code": "P21DB", "title": "P21DB: The injector B low-circuit label uses an internal off-state check", "description": "Understand P21DB’s documented diagnostic observation without mistaking it for a universal connector voltage.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 25OBDG07A Part 2 monitor tables only; model, engine and transmission applicability are not established by the unresolved application-matrix filename join.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [555]}], "authoringBatch": "batch-14"}
---

# P21DB: The injector B low-circuit label uses an internal off-state check

P21DB is cataloged as cylinder 1 injector B circuit low. GM's corresponding injector-1 row describes a short-to-ground electrical category, but the monitored condition is an output-voltage value above 5 V with the power stage inactive.

## Read the measurement in its documented context

That combination may seem counterintuitive if “circuit low” is treated as a promise that every external terminal must read near ground. The table describes the controller's diagnostic observation and does not identify an external meter connection for that value. It should not be silently rewritten into a conventional low-voltage threshold.

The row requires three events, engine speed at least 80 rpm and battery voltage above 10.9 V but below 25.5 V. Referenced inhibition conditions also apply.

## Distinguish low-circuit status from open load

For the same channel, the adjacent open-load monitor uses an inactive-stage window from 3 V to below 5 V. These are different classifications even though both involve the stage being off. The high-circuit monitor instead evaluates active-stage current.

Preserving the precise driver category helps avoid treating every injector electrical code as the same fault. The source does not establish a physical injector B location or isolate wiring, load and controller behavior. Use the actual circuit procedure to locate the cause; the code alone does not measure fuel delivery or prove a defective injector element.

## Source and scope

2025 GM 25OBDG07A Part 2 monitor tables only; model, engine and transmission applicability are not established by the unresolved application-matrix filename join. These are documented monitor criteria, not a universal repair procedure. [GM PDF, physical page 555](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=555).
