---
{"entryId": "nissan-p1b0d", "code": "P1B0D", "title": "P1B0D: Battery-controller CPU self-diagnosis must be confirmed again", "description": "Nissan P1B0D-41 records an internal LBC CPU fault and uses a defined repeat-confirmation sequence before replacement.", "status": "draft", "sourceReview": "checked", "scope": "Nissan Ariya FE0 factory-manual 91 kWh battery LBC procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.", "sourceIds": ["nissan-ariya-fe0-battery91-20261102"], "sourceLocators": [{"sourceId": "nissan-ariya-fe0-battery91-20261102", "locator": "P1b0d-41 Li-Ion Battery Controller > DTC Description, Confirmation Procedure and DTC Diagnosis Procedure"}], "authoringBatch": "batch-50"}
---

# P1B0D: Battery-controller CPU self-diagnosis must be confirmed again

## The finding is internal to the battery controller

P1B0D-41 in the Ariya 91 kWh battery procedure is triggered by the LBC's internal CPU self-diagnostic program. The power-on diagnosis is listed as two seconds or less. The protective pattern named in this entry is the EV-system warning lamp, rather than a specified cell-voltage or temperature limit.

This distinction prevents a controller-processing fault from being described as proof of damaged battery cells. The code identifies the type of internal finding, but does not disclose a memory address, processor test or repairable board-level component.

## Repeat the diagnostic observation in the prescribed order

Nissan erases the diagnostic results in a specified order, with HIGH VOLTAGE BATTERY 2 before HIGH VOLTAGE BATTERY, and then repeats confirmation. The replacement branch is for a returning P1B0D-41. A code disappearing immediately after erasure is not equivalent to completing that process successfully.

Save the original scan and other battery warnings before any reset. Controller access and replacement require qualified EV service, the correct pack documentation and the applicable configuration work. This article explains the confirmation logic; it does not establish that a used controller is compatible or that the whole battery assembly needs replacement because one CPU-related code was recorded.

The confirmation inspects both battery diagnostic groups. A workshop should document their results together rather than conclude that a warning has been resolved because one controller view is temporarily clear.

## Source and scope

[Nissan factory procedure, reproduced by niariya.com](https://www.niariya.com/high_voltage_battery_high_voltage_battery_2_lbc_-1197.html#p1b0d_41_li_ion_battery_controller). Exact section: P1b0d-41 Li-Ion Battery Controller.

Nissan Ariya FE0 factory-manual 91 kWh battery LBC procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.
