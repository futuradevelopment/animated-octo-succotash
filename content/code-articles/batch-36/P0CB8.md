---
{"entryId": "generic-p0cb8", "code": "P0CB8", "title": "P0CB8: Sensor P temperature differs excessively from its peers", "description": "GM's P0CB8 performance monitor checks sensor P against an average of other battery-temperature measurements.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [941]}], "authoringBatch": "batch-36"}
---

# P0CB8: Sensor P temperature differs excessively from its peers

P0CB8 identifies hybrid/EV battery temperature sensor P range/performance. The 2018 GM monitor is a consistency check: it compares P's temperature with the average of other battery-temperature sensors.

## What the difference means

The documented threshold is an absolute discrepancy above 25 °C. Fifty failed samples out of 67, taken every 25 milliseconds, meet the listed evaluation. GM classifies this implementation Type B, two trips.

The absolute comparison means P can be warmer or colder than the average. The DTC does not specify which direction occurred or prove that the entire battery is overheating. A voltage that stays inside its circuit limits can still produce an implausible relative temperature.

## Supporting inputs must be usable

Specified circuit-low, circuit-high, erratic and battery-interface communication faults inhibit the performance test. Preserve P's value and the comparison temperatures with their fault status. If those inputs are invalid, the absence of a repeat performance code cannot be treated as verification.

Use the appropriate vehicle procedure to determine which measurements are credible and why they disagree. Following repair, confirm that the comparison runs and passes with valid inputs. The sensor letter P does not supply a universal location in the battery. Access to internal pack components requires qualified high-voltage service; this source contains no physical test-point or replacement instructions.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 941](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=941).
