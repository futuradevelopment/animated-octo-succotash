---
{"entryId": "generic-p0c8c", "code": "P0C8C", "title": "P0C8C: Battery temperature sensor I is intermittently unstable", "description": "The GM P0C8C test accumulates changes in sensor I and distinguishes instability from a steady out-of-range temperature.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [916]}], "authoringBatch": "batch-36"}
---

# P0C8C: Battery temperature sensor I is intermittently unstable

P0C8C identifies intermittent or erratic behavior in hybrid/EV battery temperature sensor I. In GM's 2018 table, the controller examines a sequence of signal changes rather than making a diagnosis from one final temperature value.

## Why both directions matter

The calculation integrates absolute signal changes in a ten-sample window. Opposite-direction jumps therefore reinforce the accumulated movement rather than cancel each other. An integrated result above 10 is the listed failure criterion; four failed evaluations out of five at 100-millisecond intervals are needed.

The table requires system voltage above 10.2 V and excludes the specified battery-interface communication faults. It lists Type B, two trips. GM identifies an intermittent connection as a possible source of erratic readings, without proving a particular component has failed.

## What distinguishes a meaningful recheck

A steady number observed after the vehicle has settled is less informative than a trace covering the conditions around the fault. Capture sensor I's sequence and verify that the measurement source remained available. If the test is inhibited by a communication fault, the absence of another P0C8C event is not a passing result.

Use the actual vehicle's sensor I assignment before planning physical inspection. Successful repair confirmation includes an enabled stability evaluation and credible data. The diagnostic table supplies no universal pack location, connector specification or instruction for handling high-voltage battery internals; trained service personnel must follow the vehicle procedure.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 916](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=916).
