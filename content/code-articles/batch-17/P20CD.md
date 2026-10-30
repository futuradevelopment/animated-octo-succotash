---
{"entryId": "generic-p20cd", "code": "P20CD", "title": "P20CD: A low aftertreatment-injector circuit result has separate recovery logic", "description": "Understand the GM P20CD ground-short assessment and why a later good sample is not automatically the same as a cleared diagnostic state.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 04A documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file.", "sourceIds": ["gm-2025-04a"], "sourcePages": [{"sourceId": "gm-2025-04a", "pages": [1129]}], "authoringBatch": "batch-17"}
---

# P20CD: A low aftertreatment-injector circuit result has separate recovery logic

P20CD is the low control-circuit code for exhaust aftertreatment fuel injector A. GM's cited monitor uses the hardware interface's short-to-ground classification on the command connection. That electrical finding is separate from insufficient injected fuel or an unsuccessful regeneration.

## A valid command interface is required

The documented assessment requires the high-side enable driver to be on, powertrain-relay voltage in range and diagnostics enabled. The low-side short-to-ground interface must be determinate. The row's low-side voltage description concerns its off state, so high-side enable and low-side output state should not be treated as one interchangeable command.

The confirmation is fifteen failures within twenty samples at a 100-millisecond sample rate, with one-trip reporting. A stored result therefore reflects qualifying hardware-status observations, not merely an isolated low voltage without command context.

## Recovery is not just the next normal reading

The source describes an additional calibrated-counter condition or an ECU-reset event in its recovery note. The exact counter relationship is not fully specified, and this article does not prescribe resetting the controller or inventing a number of good samples.

Retain fault status, driver states and the relevant enable history. A later normal-looking observation alone cannot establish that the documented recovery condition has been met. The table does not locate a short inside the injector, wiring or driver, and it supplies no stand-alone fuel-system repair procedure.

## Source and applicability

2025 GM 04A documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file. [GM PDF, physical page 1129](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04A.pdf#page=1129).
