---
{"entryId": "generic-p24ef", "code": "P24EF", "title": "P24EF: Control-module wake-up output is open in its off state", "description": "GM's P24EF monitor detects an open wake-up circuit from output voltage while the command is off.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [1259]}], "authoringBatch": "batch-36"}
---

# P24EF: Control-module wake-up output is open in its off state

P24EF identifies a control-module wake-up circuit/open fault. The 2018 GM HPC2/BSM monitor evaluates the output wake-up path while its command is **off**. It is a circuit diagnostic rather than a direct declaration that one named module has stopped communicating.

## Why a middle voltage can identify an open

The documented open-circuit band is 2.82–7.04 V. The diagnostic must be enabled, and 480 failed samples among 560 are required. Samples occur every 12.5 milliseconds, producing a listed seven-second evaluation. GM classifies this implementation Type A, one trip.

A voltage inside that band is meaningful only in the appropriate circuit and command state. It should not be treated as a universal acceptable logic level or tested at an assumed connector pin.

## Wake-up faults and communication faults are related questions

A module's availability can depend on its wake-up path, but P24EF does not identify a failed remote module. Preserve the off command, output feedback and any associated communication history. The exact vehicle's diagram is needed to establish which devices share the monitored output.

Following a circuit correction, confirm that the off-state diagnostic executes successfully and that the vehicle's required wake-up sequence works. A module answering a scan request at one moment does not necessarily validate the entire output circuit. The source provides monitor logic, not a replacement instruction or a method for manually powering sleeping modules.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 1259](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=1259).
