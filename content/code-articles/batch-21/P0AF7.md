---
{"entryId": "generic-p0af7", "code": "P0AF7", "title": "P0AF7: The auxiliary power module reports excessive internal temperature", "description": "P0AF7 checks the internal temperature of the low-voltage power module in the GM BAS hybrid system.", "status": "draft", "sourceReview": "checked", "scope": "2009 General Motors diagnostic parameter file 09OBDG08 Engine Diagnostics.pdf. Section-specific modules and calibrations; no per-code model or engine applicability established.", "sourceIds": ["gm-2009-08-engine"], "sourcePages": [{"sourceId": "gm-2009-08-engine", "pages": [121]}], "authoringBatch": "batch-21"}
---

# P0AF7: The auxiliary power module reports excessive internal temperature

P0AF7 concerns auxiliary power-module internal temperature in GM's BAS hybrid summary. The controller continuously evaluates that temperature while awake. The published limit is above 175°C, with a listed 20-millisecond detection interval.

## Identify the monitored temperature correctly

This is the auxiliary power-module temperature, not the generator temperature or the general electronics-board temperature covered by other codes. Comparing the wrong scan parameter can conceal the thermal event that P0AF7 actually describes.

The same section contains separate temperature-sensor electrical and correlation diagnostics. Their evidence helps determine whether the reported temperature is credible. A thermal code alone does not establish the accuracy of the sensor or identify why the module became hot.

## Preserve the conditions before the system cools

Record the temperature trend, operating state and companion power or cooling faults. A normal value after shutdown can show that the module cooled, but it does not prove that the original cause has been corrected.

The threshold is not a permissible test target. Follow vehicle warnings and the appropriate hybrid service process; do not deliberately load the module to reproduce the temperature limit. The summary supplies no universal pump, sensor or converter replacement. Verification should establish credible thermal information and completed monitoring under prescribed service conditions. Clearing P0AF7 or waiting for the temperature to fall cannot independently demonstrate a successful repair.

## Source and applicability

2009 General Motors diagnostic parameter file 09OBDG08 Engine Diagnostics.pdf. Section-specific modules and calibrations; no per-code model or engine applicability established. This explanation describes the documented monitor, not a universal repair procedure.

[GM diagnostic parameters, PDF page 121](https://gsi.ext.gm.com/gmspo/mode6/pdf/2009/09OBDG08%20Engine%20Diagnostics.pdf#page=121).
