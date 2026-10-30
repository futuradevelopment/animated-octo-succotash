---
{"entryId": "generic-p0aeb", "code": "P0AEB", "title": "P0AEB: Battery input four circuit high is an extreme-cold signal diagnosis", "description": "Read the GM P0AEB threshold and distinguish a rejected temperature signal from evidence about the pack’s physical state.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [237]}], "authoringBatch": "batch-22"}
---

# P0AEB: Battery input four circuit high is an extreme-cold signal diagnosis

P0AEB monitors the high-circuit end of battery temperature input four. The GM failure quantity is a reading below −45°C. That extreme indication is the controller's signal-limit evidence, not confirmation that the battery assembly is actually at that temperature.

## This row stands apart from rationality checks

The controller must be in run mode with its low-voltage supply within the stated limits. P0A1F must be inactive. The sample requirement is 30 failing observations within 40 at 100ms intervals; the row does not require disagreement with all three other temperature inputs.

P0AE9 supplies that separate rationality test. Keeping the distinction avoids adding unsupported comparison conditions or treating a circuit-limit failure as proof of ordinary temperature imbalance.

## Retain input four's identity

Record the input-four temperature, validity and companion codes from the event. A generic minimum or average battery-temperature value may obscure which channel the controller rejected. The input number should not be translated into a physical module location without the correct sensor map.

The source does not identify an open sensor, damaged connector or controller fault as the proven cause. Physical diagnosis requires the applicable battery circuit procedure. Only trained high-voltage personnel should access the pack using prescribed isolation and absence-of-voltage verification; a cold scan reading is not evidence that the system is de-energized.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 237](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=237).
