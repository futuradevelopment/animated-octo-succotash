---
{"entryId": "generic-p0a3b", "code": "P0A3B", "title": "P0A3B: Generator temperature exceeds the documented thermal limit", "description": "P0A3B monitors motor-generator temperature directly in this GM BAS hybrid example.", "status": "draft", "sourceReview": "checked", "scope": "2009 General Motors diagnostic parameter file 09OBDG08 Engine Diagnostics.pdf. Section-specific modules and calibrations; no per-code model or engine applicability established.", "sourceIds": ["gm-2009-08-engine"], "sourcePages": [{"sourceId": "gm-2009-08-engine", "pages": [125]}], "authoringBatch": "batch-21"}
---

# P0A3B: Generator temperature exceeds the documented thermal limit

P0A3B is the generator-overtemperature check in GM's BAS hybrid summary. The controller monitors motor-generator temperature continuously while awake. The published threshold is above 205°C for one second in this implementation.

## A thermal code differs from a sensor-circuit code

The same page gives separate low- and high-voltage checks for the temperature sensor and a correlation check against other electronics temperatures. Those distinctions matter when assessing whether the reported high temperature is credible. P0A3B alone does not establish the accuracy of every input or identify the reason for the thermal event.

The threshold is a calibration value, not a permissible operating target. Do not continue loading the system to reproduce it. Follow the vehicle's warning messages and prescribed service guidance if an overheating condition is reported.

## Preserve the thermal history

Useful evidence includes the generator-temperature trend, the operating circumstances and companion temperature or cooling-system faults. A reading that returns to normal after cooling does not explain why the limit was exceeded or show that the cause has been corrected.

The summary does not specify a universal coolant repair, sensor replacement or generator replacement. Hybrid-system diagnosis should follow the appropriate professional procedure. Verification requires credible temperature information and successful thermal monitoring under the prescribed service conditions. Clearing the code or allowing the vehicle to cool can remove the immediate indication without resolving the underlying thermal problem.

## Source and applicability

2009 General Motors diagnostic parameter file 09OBDG08 Engine Diagnostics.pdf. Section-specific modules and calibrations; no per-code model or engine applicability established. This explanation describes the documented monitor, not a universal repair procedure.

[GM diagnostic parameters, PDF page 125](https://gsi.ext.gm.com/gmspo/mode6/pdf/2009/09OBDG08%20Engine%20Diagnostics.pdf#page=125).
