---
{"entryId": "generic-c05ae", "code": "C05AE", "title": "C05AE: ABS pump measurement calibration is not accepted", "description": "The GM C05AE monitor checks the pump's measurement calibration and related supply conditions while the hydraulic pump is off.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 diagnostic monitor; document section stated in article; per-vehicle and calibration applicability must be verified.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [1655]}], "authoringBatch": "batch-36"}
---

# C05AE: ABS pump measurement calibration is not accepted

C05AE is ABS pump motor calibration not learned. GM's 2018 brake system control module 1 table describes a zero-volt calibration for pump measurement electronics using a sigma-delta modulator. The controller compares calibration-related measurements against expected ranges.

## Calibration is not the same as pump output

One branch checks raw generator and relay voltage-drop measurements during the calibration assessment. Another checks pump supply-related measurements. Both require ignition on, system voltage above 6.9 V and the hydraulic pump motor off; their listed evaluation times are three and two seconds respectively. The row uses Type A, one-trip reporting.

These are internal measurement and supply checks. The raw values are not universal brake-pump connector test limits, and “not learned” does not establish that the hydraulic motor is mechanically seized. Nor does it prove that simply initiating a learn routine will resolve the underlying issue.

## What to establish before recalibration

Preserve calibration status, supply-related faults and the conditions under which the diagnostic ran. A pump that appears to operate can still have a measurement-calibration problem. Conversely, a voltage-related issue may need correction before a valid calibration result is possible.

Brake systems require qualified professional diagnosis. Follow the vehicle-specific calibration and verification procedure after resolving the cause; this article deliberately does not reproduce the table's road-speed clearing conditions. The DTC alone provides no assurance of braking performance and no instruction to power or bypass the pump.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 1655](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=1655).
