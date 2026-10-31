---
{"entryId": "generic-p05cf", "code": "P05CF", "title": "P05CF: Bank-2 exhaust cam timing fails during cold start", "description": "GM's 2015 OBDG06 monitor for P05CF checks bank-2 exhaust camshaft position during cold-start variable valve timing operation.", "status": "draft", "sourceReview": "checked", "scope": "Document-scoped GM 2015 diagnostic monitor; exact vehicle, engine and calibration applicability not established.", "sourceIds": ["gm-2015-15obdg06-engine-diagnostics"], "sourcePages": [{"sourceId": "gm-2015-15obdg06-engine-diagnostics", "pages": [266]}], "authoringBatch": "batch-33"}
---

# P05CF: Bank-2 exhaust cam timing fails during cold start

GM's 2015 OBDG06 monitor for P05CF checks bank-2 exhaust camshaft position during cold-start variable valve timing operation. The controller evaluates the magnitude of the difference between commanded and measured timing. The exhaust-bank identity is essential; bank-2 intake timing belongs to a different monitor.

## Stable demand makes the comparison meaningful
The table uses a position error greater than four degrees and 40 failed observations in a 100-sample window. Each sample is taken at 100-millisecond intervals. The engine must be running with adequate voltage and the cold-start mode active, while power takeoff is inactive.

The row includes a permitted position window and a command-stability condition. It also excludes relevant exhaust-actuator circuit faults. Thus, a snapshot during rapid target movement or with a separately failed electrical circuit cannot be treated as an equivalent completed test.

## Identify which side of the comparison changes
A useful record follows the bank-2 exhaust target and actual position across the qualified interval. A target that changes while the cam follows appropriately is different from a stable target with persistent tracking error. Keeping actuator circuit diagnostics separate also prevents a performance code from becoming an unsupported wiring diagnosis.

Verification should show the expected exhaust timing response in the actual calibration's enabled cold-start procedure. The code alone does not establish an oil-control, actuator, phaser or mechanical cause, and the table does not prescribe a replacement part. Confirm engine and calibration applicability before adopting these GM-specific numeric limits on a generic-code page.

Source: GM diagnostic parameters, [physical PDF page 266](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG06%20Engine%20Diagnostics.pdf#page=266).
