---
{"entryId": "generic-p0aa8", "code": "P0AA8", "title": "P0AA8: Two isolation readings must agree with pack voltage", "description": "GM's P0AA8 performance monitor checks a relationship among two isolation-sensor readings and high-voltage battery voltage.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [757]}], "authoringBatch": "batch-36"}
---

# P0AA8: Two isolation readings must agree with pack voltage

P0AA8 concerns hybrid/EV battery voltage isolation sensor range/performance. In GM's 2018 HPC2/BSM table, the controller checks the consistency of the isolation measurement electronics by comparing two sensor readings with high-voltage battery voltage.

## The relationship being tested

The failure expression is the absolute difference between the sum of the two isolation-sensor values and battery voltage. A discrepancy above 5 V is the listed threshold. The active isolation bias switch must be commanded open, and high-voltage battery-voltage status must be valid.

Forty failures in 50 samples, at 12.5 milliseconds per sample, meet this implementation's failure requirement. It is listed as Type B, two trips. These are calibration-specific facts; they are not handheld-meter acceptance limits for another vehicle.

## Why one believable reading is insufficient

A single isolation reading may look reasonable while its relationship to the other channel and the pack reference is inconsistent. The useful diagnostic record therefore preserves all three values and the pack-voltage validity status together. Checking only the displayed pack voltage would omit the relationship that produced P0AA8.

This code also differs from a direct insulation-resistance conclusion. The table describes a measurement-electronics performance check and does not identify the defective component from the code alone. Resolve validity and companion sensing faults through the applicable service information before interpreting insulation measurements. Work on these circuits requires qualified high-voltage service; no internal pack probing is implied here.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 757](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=757).
