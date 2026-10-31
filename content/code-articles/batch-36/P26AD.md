---
{"entryId": "generic-p26ad", "code": "P26AD", "title": "P26AD: Coolant bypass-valve drive 2 reads low during a high command", "description": "The GM P26AD table calls this coolant bypass-valve control circuit 2 low and checks the motor-driver feedback state.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG01 diagnostic monitor; document section stated in article; per-vehicle and calibration applicability must be verified.", "sourceIds": ["gm-2018-18obdg01-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg01-hybrid-diagnostics", "pages": [1129]}], "authoringBatch": "batch-36"}
---

# P26AD: Coolant bypass-valve drive 2 reads low during a high command

P26AD's generic description is engine coolant bypass valve B control circuit low. The 2018 GM HPC2/VICM table uses the more specific label “control circuit 2 low voltage” and monitors valve motor drive 2 for a short-to-ground response. The table alone does not establish that a universal valve labeled B exists on every application.

## Commanded position and feedback must be paired

The listed fault criterion is motor-driver 2 hardware input/output sense state low. The valve must be commanded to its high position, with system voltage above 10.2 V. Four failures among five samples at 100-millisecond intervals meet the documented requirement. Reporting is Type B, two trips.

This is an electrical driver observation. It does not directly measure coolant flow or prove the valve mechanism is jammed. A low feedback state with a different command cannot automatically be interpreted using this row.

## Use the vehicle's terminology to locate the circuit

Retain command, driver sense state and supply voltage. Match the generic description to the applicable diagram and service procedure before selecting a component; “B,” “2” and a physical connector position should not be assumed interchangeable without that information.

After a repair, verify that driver feedback responds appropriately under an eligible high-position command and complete the specified cooling checks. A normal coolant temperature during a short observation is not proof that the circuit monitor passed. Hybrid-system access must follow the applicable professional safety procedure.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 1129](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG01%20Hybrid%20Diagnostics.pdf#page=1129).
