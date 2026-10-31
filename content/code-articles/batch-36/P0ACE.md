---
{"entryId": "generic-p0ace", "code": "P0ACE", "title": "P0ACE: Battery temperature sensor C has an unstable signal", "description": "The GM P0ACE implementation detects excessive accumulated movement in temperature sensor C's signal.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [772]}], "authoringBatch": "batch-36"}
---

# P0ACE: Battery temperature sensor C has an unstable signal

P0ACE reports intermittent or erratic behavior of hybrid/EV battery temperature sensor C. The documented 2018 GM test is sensitive to an unstable signal even if individual displayed temperatures remain within a believable operating range.

## What distinguishes this from a range code

Instead of comparing C with a fixed hot or cold endpoint, the controller sums absolute changes over a ten-sample window. The listed failure threshold is an integrated value above 10. GM requires four failing evaluations among five at 100-millisecond sampling and lists Type B, two trips.

An intermittent electrical connection can cause the behavior, according to the monitor description. The description does not establish that such a connection is the only cause or identify a connector to replace.

## Conditions that affect confidence

Battery-interface communication must be valid under the listed fault-group rules, and system voltage must exceed 10.2 V. If communication faults prevent the diagnostic from running, an absence of a new P0ACE result does not demonstrate stable sensor C data.

A useful follow-up compares a recorded time history with the eligible test period. A sensor that happens to settle after the event may still require intermittent-fault diagnosis. Confirm the correct channel mapping in the vehicle information, and leave internal battery access to qualified high-voltage service. Successful verification includes a completed stable-signal evaluation rather than only an erased history code.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 772](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=772).
