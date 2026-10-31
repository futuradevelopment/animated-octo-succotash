---
{"entryId": "generic-p0bc6", "code": "P0BC6", "title": "P0BC6: Battery temperature sensor E fails a stability check", "description": "P0BC6 indicates erratic battery temperature sensor E behavior rather than a direct finding of battery overheating.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [895]}], "authoringBatch": "batch-36"}
---

# P0BC6: Battery temperature sensor E fails a stability check

P0BC6 names hybrid/EV battery temperature sensor E circuit intermittent/erratic. The 2018 GM controller evaluates how much the signal moves during a defined window. A large total movement can fail even when the starting and ending readings are similar.

## The relevant calculation

The table specifies an integrated absolute change over ten samples, with a threshold above 10. Four failed evaluations among five are required, at 100 milliseconds per sample. It also requires system voltage above 10.2 V and no active battery-interface communication fault from the defined group. The listed reporting category is Type B, two trips.

This is not a comparison with the other temperature sensors or a direct overtemperature threshold. Treating it as either would skip the signal-stability issue that the code describes.

## Evidence worth preserving

A technician should preserve the channel E trace and the state of the data source. An intermittent connection is one explanation expressly discussed by GM, but the monitor does not locate that connection. A later steady value cannot prove that the earlier erratic condition was absent.

Following the appropriate repair, verify a credible stable signal while the diagnostic is enabled. If another fault still blocks the monitor, no fresh code is not the same as a passing evaluation. Confirm sensor E's actual location through the vehicle documentation; internal pack work belongs to qualified high-voltage service.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 895](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=895).
