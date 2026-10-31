---
{"entryId": "generic-p0afb", "code": "P0AFB", "title": "P0AFB: Battery voltage is compared with a safety limit rather than one fixed value", "description": "Understand the GM P0AFB control-strategy monitor and why the applicable voltage safety limit must be captured with pack voltage.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [186]}], "authoringBatch": "batch-22"}
---

# P0AFB: Battery voltage is compared with a safety limit rather than one fixed value

P0AFB checks whether the hybrid control strategy can keep battery voltage below its upper safety limit. The failure quantity is the difference between measured battery voltage and the applicable battery-voltage safety limit. A pack-voltage value without that reference is incomplete evidence.

## The threshold is relative

The cited GM condition is battery voltage exceeding the safety limit by more than 1V. The table does not provide one universal safety-limit voltage for every operating condition, so it would be inaccurate to convert this into a fixed pack-voltage ceiling.

The decision uses 800 failing counts out of 1,200 in a 12.5ms loop, with a listed 15-second observation interval. That describes a sample window; it should not be rewritten as a requirement for 15 uninterrupted seconds above the limit.

## Preserve the controller’s comparison

Record battery voltage, the available safety-limit parameter and the event timing. If the diagnostic tool cannot expose the reference limit, acknowledge that limitation instead of substituting the separate P0ABD voltage-sensor circuit-high threshold.

The monitor does not prove a specific charging component failed or identify a repair. The correct hybrid-control and battery service procedure must establish the cause and operating restrictions. High-voltage diagnosis belongs with trained personnel; deliberately raising battery voltage to reproduce this condition or treating the monitor threshold as a safe operating target is not an appropriate test.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 186](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=186).
