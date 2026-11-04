---
{"entryId": "nissan-p1ba1", "code": "P1BA1", "title": "P1BA1: Controller status identifies which cell-sensing path to inspect", "description": "Nissan P1BA1-12 uses cell-controller status and a specific cell-voltage branch to separate wiring, module and controller faults.", "status": "draft", "sourceReview": "checked", "scope": "Nissan Ariya FE0 factory-manual 91 kWh battery LBC procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.", "sourceIds": ["nissan-ariya-fe0-battery91-20261102"], "sourceLocators": [{"sourceId": "nissan-ariya-fe0-battery91-20261102", "locator": "P1ba1-12 Cell Voltage Circuit > DTC Description, Confirmation Procedure and DTC Diagnosis Procedure"}], "authoringBatch": "batch-50"}
---

# P1BA1: Controller status identifies which cell-sensing path to inspect

## Start with the controller reporting abnormality

The Ariya 91 kWh battery's P1BA1-12 entry reports a short in the cell-voltage measuring circuit. It lists the detection circuit, module and cell controller as possibilities. The factory flow begins by recording eight cell-controller status items rather than immediately selecting a module from the generic fault label.

That status identifies which controller's connected sensing circuit requires inspection. The relationship between cell, module and controller is taken from the battery-specific component description; an assumed numbering map from another pack is inadequate.

## A measured cell result changes the component branch

After the associated voltage-detection circuit is checked, Nissan examines the cells belonging to that controller's module. The cited decision uses a cell voltage of 0.5 V or less to distinguish the corresponding module branch from the cell-controller branch. This is a diagnostic threshold in the stated test, not a normal charging target or a universal service limit.

Save the status records and full scan before erasure. Measurements inside a traction battery require qualified EV personnel, correct isolation and the complete factory procedure. The code alone cannot determine whether a low reported value reflects the sensing path or the cell, which is precisely why the circuit and module checks are separate.

Nissan's component description maps the affected controller back to its connected module and cells. Preserving that mapping avoids applying a valid measured result to the wrong module during a later repair decision.

## Source and scope

[Nissan factory procedure, reproduced by niariya.com](https://www.niariya.com/high_voltage_battery_high_voltage_battery_2_lbc_-1197.html#p1ba1_12_cell_voltage_circuit). Exact section: P1ba1-12 Cell Voltage Circuit.

Nissan Ariya FE0 factory-manual 91 kWh battery LBC procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.
