---
{"entryId": "generic-p0ab2", "code": "P0AB2", "title": "P0AB2: Outlet air is checked against the battery’s hottest module with the fan on", "description": "Interpret the GM P0AB2 outlet-temperature rationality monitor using fan command and valid module-temperature references.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [238, 239]}], "authoringBatch": "batch-22"}
---

# P0AB2: Outlet air is checked against the battery’s hottest module with the fan on

P0AB2 evaluates whether battery outlet-air temperature is credible relative to the highest battery-module temperature. The cited GM strategy expects the outlet reading not to exceed that reference by more than the allowed difference while the cooling fan is commanded on.

## The comparison is directional

The failure quantity is outlet-air temperature minus the battery reference above 10°C. This is not an absolute-difference test: a much cooler outlet reading does not satisfy that stated inequality by itself.

The controller must be in run mode with appropriate low-voltage supply. The decision uses 90 failing samples within 100 at 100ms intervals. A long list of module-temperature, outlet-temperature and fan faults inhibits the check, continuing onto the following physical page.

## Keep airflow command and sensor validity together

Record outlet temperature, the maximum-module reference, fan command and the validity of the contributing temperature channels. A fan-off workshop snapshot cannot be used as if it met the specified operating condition. Likewise, an invalid maximum-module reference undermines the comparison.

This monitor does not identify a blocked duct, wrong sensor or failed fan by itself. Its purpose is to test the temperature relationship under accepted conditions. The actual cooling-system and sensor diagnosis requires the matching vehicle procedure. High-voltage battery access and any fan intervention should be handled by qualified personnel using the appropriate isolation and moving-fan precautions.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 238](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=238). [GM PDF, page 239](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=239).
