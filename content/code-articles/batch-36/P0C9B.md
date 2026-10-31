---
{"entryId": "generic-p0c9b", "code": "P0C9B", "title": "P0C9B: Temperature sensor L is erratic over time", "description": "The GM P0C9B monitor uses accumulated sensor L signal movement, so a stable average does not rule out the fault.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [928]}], "authoringBatch": "batch-36"}
---

# P0C9B: Temperature sensor L is erratic over time

P0C9B identifies intermittent/erratic operation of hybrid/EV battery temperature sensor L. In the 2018 GM HPC2/BSM table, the fault is based on signal movement accumulated during a ten-sample window.

## A changing trace can have a normal average

The controller uses absolute changes, meaning upward and downward excursions both contribute. Its documented threshold is above 10 for the integrated result. Four of five evaluations must fail, with samples 100 milliseconds apart. The row lists Type B, two-trip reporting.

The source requires system voltage above 10.2 V and excludes the designated battery-interface communication faults. It describes intermittent connections as one possible source of the erratic behavior. Neither the threshold nor that explanation identifies a specific replaceable component.

## The useful next comparison

Compare L's actual time trace with the event's supply and communication conditions. A normal mean temperature or a reading taken after the fault has ceased does not reproduce the monitor's evidence. If L also has a range-related code, keep that information distinct from its stability result.

Channel L's physical mapping is vehicle-specific and must be established before any inspection. Verification after repair should confirm that this diagnostic executes with stable input, not merely that warning memory was cleared. The source is a monitor description, not an instruction to open the pack or manipulate internal sensor wiring. Such work requires qualified high-voltage service.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 928](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=928).
