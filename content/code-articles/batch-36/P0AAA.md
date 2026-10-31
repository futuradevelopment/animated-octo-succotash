---
{"entryId": "generic-p0aaa", "code": "P0AAA", "title": "P0AAA: Isolation sensor voltage exceeds the documented range", "description": "P0AAA in the 2018 GM hybrid monitor is a high isolation-sensor reading, not a general battery-overcharge diagnosis.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [759]}], "authoringBatch": "batch-36"}
---

# P0AAA: Isolation sensor voltage exceeds the documented range

P0AAA identifies the hybrid/EV battery voltage isolation sensor circuit as high. GM's 2018 HPC2/BSM table checks whether the first isolation-sensor reading exceeds 416 V while the active isolation bias switch is commanded open.

## Keep the quantity and test state together

The threshold belongs to this particular sensing implementation. It is not a universal maximum traction-battery voltage and should not be applied to a different battery architecture. The controller evaluates 400 samples at 12.5-millisecond intervals and requires 320 failures. GM lists the monitor as Type B, two trips.

Because the failure is a sensor-range result, the code alone does not establish that charging raised the battery above its permitted operating voltage. Nor does it identify a specific insulation leak. A diagnosis needs the vehicle's actual sensing arrangement and related battery-voltage information.

## A useful comparison

Compare the high isolation-sensor report with the companion isolation channel and pack-voltage data while retaining the bias-switch command state. If those values disagree, the disagreement is evidence for the relevant sensing procedure, not permission to choose whichever value seems convenient.

Verification should confirm that the intended range test executes and returns an acceptable result following the applicable repair. Turning the vehicle off or clearing memory can remove the immediate display without reproducing that test. High-voltage battery and isolation-circuit measurements require the manufacturer's safety process and qualified personnel; this source does not provide a do-it-yourself test method.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 759](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=759).
