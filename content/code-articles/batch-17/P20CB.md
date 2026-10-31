---
{"entryId": "generic-p20cb", "code": "P20CB", "title": "P20CB: The exhaust fuel injector’s open check uses different driver states", "description": "Learn how GM P20CB combines low-side open status with an enabled high-side path, rather than directly testing exhaust fuel flow.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 04A documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file.", "sourceIds": ["gm-2025-04a"], "sourcePages": [{"sourceId": "gm-2025-04a", "pages": [1128]}], "authoringBatch": "batch-17"}
---

# P20CB: The exhaust fuel injector’s open check uses different driver states

P20CB identifies an open control circuit for exhaust aftertreatment fuel injector A. This injector serves exhaust treatment in the documented GM system. The monitor evaluates its electrical command interface, not the amount of fuel delivered into the exhaust during a regeneration event.

## Keep high-side enable separate from low-side assessment

The source requires the injector's high-side enable driver to be on while the low-side hardware interface reports an open condition. Its voltage description refers to the low-side output's off state. Those are different parts of the driver system, so combining both into a simple instruction that the entire injector must be on or off would lose an important distinction.

Calibration enablement, valid powertrain-relay voltage and an active diagnostic system are required. The open-status interface must also provide a determinate result. An indeterminate interface state is not equivalent to a confirmed open circuit.

## Use the confirmed electrical status before judging flow

The table lists nineteen failures within twenty-five samples at 100 milliseconds per sample, with two-trip reporting. Preserve the high-side enable, low-side status and supply state together when evaluating that history.

The voltage-band wording and very short internal timing units are insufficiently clear for an external reproduction specification, so they are not converted into a probing instruction here. A confirmed open classification still does not identify the interrupted component or prove an exhaust-flow fault. Further electrical isolation requires the exact aftertreatment-injector service procedure.

## Source and applicability

2025 GM 04A documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file. [GM PDF, physical page 1128](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04A.pdf#page=1128).
