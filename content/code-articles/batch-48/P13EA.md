---
{"entryId": "audi-p13ea", "code": "P13EA", "title": "P13EA: Cold-start ignition efficiency is checked away from idle", "description": "The CREC monitor evaluates accumulated ignition-angle efficiency during stable part-load operation.", "status": "draft", "sourceReview": "checked", "scope": "Audi Q7 2016-onward CREC Generic Scan Tool manual, edition 11.2016; only the cited engine-control calibration table and component procedure. Confirm the installed engine and control-module software.", "sourceIds": ["audi-crec-gst-2016"], "sourcePages": [{"sourceId": "audi-crec-gst-2016", "pages": [301]}], "authoringBatch": "batch-48"}
---

# P13EA: Cold-start ignition efficiency is checked away from idle

## The code does not mean any timing value is wrong

Audi's P13EA entry is a cold-start ignition-timing performance monitor off idle. The CREC strategy compares an ignition-angle efficiency integral with time spent at part load. Its calibrated ratio limit is shown within 0.20–0.30, with a 0.1-second check once per driving cycle.

The enable conditions include more than five seconds at part load and vehicle speed above 3 mph. The table also limits changes in air-mass and engine-speed signals over specified intervals. These restrictions make a rapidly changing acceleration event different from the stable operating window used by this comparison.

## Keep combustion evidence and control conditions together

The diagnostic column directs attention to ignition coils and their output stages. That reference does not establish that a particular coil is defective or that mechanical engine timing needs adjustment. Preserve associated ignition and misfire information and determine whether the monitor actually ran under its qualified conditions.

A technician should use the installed engine's ignition procedure and control data rather than selecting a repair from the phrase “timing performance.” The ratio in the table is a controller diagnostic quantity, not a recommended manual timing setting or a universal ignition advance angle.

After resolving the underlying issue, confirmation requires an eligible off-idle event with stable inputs. A normal idle or a brief restart cannot demonstrate that the once-per-cycle part-load efficiency check has completed. Any road verification must suit the vehicle's condition and be performed safely.

## Source and applicability

[Audi Q7 CREC Generic Scan Tool, edition 11.2016](https://vwts.ru/diag/engine-crec-generic-scan-tool-eng.pdf). Physical PDF pages 301. Audi Q7 2016-onward CREC Generic Scan Tool manual, edition 11.2016; only the cited engine-control calibration table and component procedure. Confirm the installed engine and control-module software.
