---
{"entryId": "generic-p06ad", "code": "P06AD", "title": "P06AD: A low powerup-temperature signal has load and speed prerequisites", "description": "Read the GM P06AD low-reading monitor and understand why its enable conditions matter before interpreting a cold value.", "status": "draft", "sourceReview": "needs-review", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [207]}], "authoringBatch": "batch-22"}
---

# P06AD: A low powerup-temperature signal has load and speed prerequisites

The documented P06AD monitor evaluates the TCM powerup-temperature sensor for a low-reading circuit fault. Its example failure boundary is −59°C or lower, sustained for at least 60 seconds. GM describes that condition as a short-to-ground error in this particular implementation.

## More than an extreme temperature display

The row requires valid engine and vehicle speed information. It also lists estimated motor power loss of at least 0.4kW for 200 cumulative seconds and inhibits evaluation when the named output-speed or speed-correlation diagnostics have failed.

Those prerequisites matter when deciding whether a test was capable of running. A very low temperature captured immediately after wakeup is evidence of an implausible signal, but it does not establish that the controller completed this monitor's full operating sequence.

## Keep failure and recovery evidence distinct

Save the powerup-temperature value, related speed faults and available motor-loss history. Compare the actual parameter identity with the separate substrate-temperature channels; they are not interchangeable merely because they are inside the same controller.

The printed pass condition names substrate temperature rather than the powerup sensor. Its exact attribution needs service-document confirmation, so this article does not turn that line into a universal clearing test. The table gives no terminals, resistance values or replacement decision. Diagnosis should use the correct TCM procedure, with professional hybrid-system precautions for access to transmission electronics.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 207](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=207).
