---
{"entryId": "generic-p0cba", "code": "P0CBA", "title": "P0CBA: Sensor P circuit high converts to a cold endpoint", "description": "The GM P0CBA test detects high sensor P voltage through an extremely low calculated temperature.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [943]}], "authoringBatch": "batch-36"}
---

# P0CBA: Sensor P circuit high converts to a cold endpoint

P0CBA identifies hybrid/EV battery temperature sensor P circuit high. In GM's 2018 NTC thermistor arrangement, a sensing-board pull-up makes an open circuit tend toward high voltage and an exceptionally cold converted reading.

## The high label refers to the circuit

The table's failure condition is temperature below −69 °C for eight of ten samples at 100-millisecond intervals. System voltage must be above 10.2 V, and the specified battery-interface communication fault group must be inactive. Reporting is Type B, two trips.

A high-circuit code alongside a cold display is therefore consistent with this design. It is not evidence that the battery is simultaneously hot and cold. The code also does not prove the actual pack temperature or locate an open sensing path.

## What supports a useful diagnosis

Compare P's reading with other thermal data and preserve the event's circuit and communication status. An open circuit is one source-supported explanation, but the vehicle-specific procedure is needed to identify the responsible component or connection. Avoid treating the displayed endpoint as an ambient-weather measurement.

A verified correction should give credible P data during a completed enabled monitor run. Simply clearing memory or seeing one plausible value is insufficient for an intermittent concern. Confirm sensor P's vehicle-specific location before inspection. Internal battery sensing work requires qualified high-voltage personnel; this table does not provide a probing or pack-access procedure.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 943](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=943).
