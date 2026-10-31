---
{"entryId": "generic-p0aae", "code": "P0AAE", "title": "P0AAE: Battery inlet-air circuit low is expressed as a hot indicated value", "description": "Understand the GM P0AAE inlet-air sensor criterion without confusing its electrical label with low temperature.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [237]}], "authoringBatch": "batch-22"}
---

# P0AAE: Battery inlet-air circuit low is expressed as a hot indicated value

P0AAE monitors the low-circuit end of the battery inlet-air temperature sensor. The GM table represents failure as inlet-air temperature above 95°C. That electrical label and temperature direction should be kept separate when interpreting a scanner's description.

## The inlet row has its own conditions

The battery controller must be in run mode with the low-voltage supply between its specified limits, and the controller-performance fault must be inactive. The sample decision is 30 failures within 40 at 100ms intervals.

Unlike several module-temperature circuit-low rows, this inlet-air row does not add a requirement for another battery temperature to be below 70°C. Importing that condition from a neighboring sensor would misdescribe the documented monitor.

## Distinguish inlet sensing from battery heating

Record the inlet-air parameter specifically, alongside its validity and related inlet-plausibility or circuit-high codes. A maximum-module temperature is a different measurement and cannot replace the inlet reading in the fault record.

The threshold alone does not prove that incoming cooling air physically exceeded 95°C or identify a blocked duct. It is evidence of the monitored input reaching its electrical-fault criterion. A qualified technician must use the actual sensor circuit and battery-cooling procedure to determine the cause. Pack-adjacent work still requires the prescribed high-voltage access precautions; this summary supplies no direct-power or live-probing test.

The inlet measurement concerns cooling air entering the battery system.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 237](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=237).
