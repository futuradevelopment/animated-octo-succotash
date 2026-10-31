---
{"entryId": "generic-p0ae6", "code": "P0AE6", "title": "P0AE6: Precharge contactor control is low while enabled", "description": "The documented GM P0AE6 test checks low feedback at the precharge contactor high-side driver during an on command.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [780]}], "authoringBatch": "batch-36"}
---

# P0AE6: Precharge contactor control is low while enabled

P0AE6 is the hybrid/EV battery precharge contactor A control-circuit low code. GM's 2018 table describes a check of the precharge contactor high-side driver for a short-to-ground response when commanded on.

## The circuit result and the precharge result differ

For this monitor, a voltage at or below 5.35 V meets the low criterion. The 12 V battery must be above 10.2 V. Thirteen failed samples out of 16 at 12.5 milliseconds per sample satisfy the listed evaluation; the reporting type is B, two trips.

Precharge is a system sequence, but P0AE6 specifically concerns its contactor control circuit. The code alone does not measure how quickly the high-voltage bus charged, determine the precharge resistance or prove the contactor contacts failed mechanically. Those are separate diagnostic questions.

## Use the on command as the reference

A useful scan record links the low feedback to the on command and adequate low-voltage supply. Without that context, a low control value may be normal for another state. Companion precharge or power-bus codes can add evidence, but their presence does not change what this driver monitor actually measured.

After a repair, confirm the eligible control test and the vehicle's prescribed precharge checks. Do not bypass the precharge path to “see if it starts”; this source provides neither authorization nor a procedure for doing so. Contactor, pack and high-voltage bus work must use qualified service personnel and vehicle-specific instructions.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 780](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=780).
