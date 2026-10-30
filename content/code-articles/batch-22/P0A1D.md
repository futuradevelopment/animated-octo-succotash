---
{"entryId": "generic-p0a1d", "code": "P0A1D", "title": "P0A1D: The ECM can report a status failure detected by hybrid-control processors", "description": "Understand the GM P0A1D reporting path before treating the ECM code as a complete hybrid-controller diagnosis.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [92]}], "authoringBatch": "batch-22"}
---

# P0A1D: The ECM can report a status failure detected by hybrid-control processors

P0A1D is described here from the ECM's viewpoint. The ECM looks for a message indicating that motor-control processor A has detected a hybrid-control status failure. This reporting path matters because the module storing the visible code is not necessarily the module that performed the underlying failed check.

## A message carries the result

The ECM monitor requires run/crank to have been high for at least 2.5 seconds. Its decision uses three qualifying counts out of four at 12.5ms per count. Other parameters and enable conditions are controlled by the programmable logic and motor-control processors within the hybrid-control arrangement.

Consequently, the short ECM decision interval should not be mistaken for the duration or complete logic of the originating internal fault. The table explicitly leaves those underlying conditions elsewhere.

## Retrieve the originating evidence

Preserve ECM and hybrid-controller records together, including which module reports each code and any available status-message detail. If the diagnostic equipment only reads the ECM, its coverage limitation should be resolved before choosing a controller replacement.

P0AC4 on the same page is a separate request for malfunction-indicator illumination, not the same status-failure definition. Neither entry provides connector pinouts, a processor repair or proof of a failed physical assembly. Investigation of hybrid-control hardware belongs with trained personnel using the matching service information and high-voltage safety procedure.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 92](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=92).
