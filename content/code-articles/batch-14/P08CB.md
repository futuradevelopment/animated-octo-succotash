---
{"entryId": "generic-p08cb", "code": "P08CB", "title": "P08CB: Why a high-circuit code can also reveal a neighboring-output short", "description": "Understand the two documented paths to P08CB, including the shutdown test that stores evidence for the next startup.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 25OBDG07A Part 2 monitor tables only; model, engine and transmission applicability are not established by the unresolved application-matrix filename join.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [926, 940]}], "authoringBatch": "batch-14"}
---

# P08CB: Why a high-circuit code can also reveal a neighboring-output short

P08CB is not limited to one instantaneous high-voltage observation in this GM transmission. The synchronizer actuation valve 1 entry includes an on-state short-to-supply assessment, while another table assigns the same code to a shutdown check for a short between neighboring outputs.

## The operating test

When the solenoid is on, its monitored output node should be drawn toward ground. The driver checks whether it remains too high using supply-dependent limits. The strategy also compares requested current with current estimated from driver duty cycle and battery voltage. A large disagreement is additional diagnostic evidence, not a measurement of hydraulic pressure.

Battery faults P0882 and P0883 inhibit the evaluation. Supply voltage and command state therefore need to accompany a captured driver status.

## Why the code may appear at the next startup

The shutdown routine enables low-side outputs one at a time. It looks for the reciprocal pattern in which one inactive output reports a ground short while another is active, then the opposite happens when their roles change. That behavior supports a connection between outputs.

The result is saved in nonvolatile memory at shutdown and used to set the code at startup. Thus, a code appearing immediately after a key cycle can reflect evidence collected during the preceding shutdown, not a new fault caused by starting. Identifying which diagnostic path failed prevents treating every P08CB as an isolated short to battery on one wire.

## Source and scope

2025 GM 25OBDG07A Part 2 monitor tables only; model, engine and transmission applicability are not established by the unresolved application-matrix filename join. These are documented monitor criteria, not a universal repair procedure. [GM PDF, physical page 926](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=926) · [GM PDF, physical page 940](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=940).
