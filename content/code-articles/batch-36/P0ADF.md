---
{"entryId": "generic-p0adf", "code": "P0ADF", "title": "P0ADF: Negative contactor control is low during an on command", "description": "The GM P0ADF monitor checks the negative contactor's high-side control output for a low-voltage response when commanded on.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [777]}], "authoringBatch": "batch-36"}
---

# P0ADF: Negative contactor control is low during an on command

P0ADF names a hybrid/EV battery negative contactor control-circuit low fault. The 2018 GM HPC2/BSM row monitors the contactor's high-side PWM control output for a short-to-ground response. Its command state is **on**.

## Coil-control evidence, not contact position

The listed control-voltage threshold is at or below 5.35 V. The monitor requires 12 V battery voltage above 10.2 V and uses 13 failing samples out of 16, sampled every 12.5 milliseconds. GM assigns Type B, two-trip reporting.

These facts describe the control driver. They do not directly measure whether the contactor's high-voltage contacts have physically opened, closed or welded. Distinguishing the coil-control circuit from the power contacts prevents an electrical feedback code being turned into an unsupported mechanical diagnosis.

## What to establish before replacement

Preserve the on command, low-voltage supply condition and control-feedback result from the event. A low control value while the command is off is not equivalent evidence. Likewise, a test performed with inadequate low-voltage supply does not satisfy the documented enable condition.

A technician should use the vehicle's contactor control diagnostic to separate the output, wiring and load. The table does not rank those causes or authorize replacing the battery assembly. Repair confirmation requires the low-voltage control response to agree with an eligible on command and the specified high-voltage system checks to complete. Do not energize, bypass or manually bridge a contactor based on this description.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 777](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=777).
