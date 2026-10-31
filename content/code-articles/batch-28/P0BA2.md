---
{"entryId":"generic-p0ba2","code":"P0BA2","title":"P0BA2: Block 21 high voltage is a qualified sensor report","description":"The cited GM P0BA2 monitor qualifies block 21 readings above 20 volts over multiple samples; it does not prove actual battery overcharge.","status":"draft","sourceReview":"checked","scope":"09OBDG13 2-Mode Hybrid Diagnostics — 2009 Diagnostic Parameters, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2009-13-2-mode-hybrid"],"sourcePages":[{"sourceId":"gm-2009-13-2-mode-hybrid","pages":[269]}],"authoringBatch":"batch-28"}
---

# P0BA2: Block 21 high voltage is a qualified sensor report

P0BA2 is the high-side block 21 voltage-measurement code in the cited GM 2009 hybrid diagnostic. Its explicit comparison is a block 21 report above 20 volts. The controller is assessing the reported measurement, so the code does not independently verify that the physical block is overcharged.

## Preserve magnitude and persistence

The source requires eight failing observations in a ten-sample window, with 100 milliseconds between evaluations. A single displayed spike and the controller's qualified fault are not equivalent. Capture the time history when suitable vehicle diagnostic data are available.

The battery controller's RUN state and a 9–18 volt low-voltage supply are enabling conditions. An abnormal support supply deserves attention when interpreting whether the measurement and its retest are valid.

## Do not substitute a neighboring diagnostic

The adjacent P0BA0 entry is a scaled block-to-pack rationality test; P0BA2 is an upper-limit test. A block can disagree with the pack calculation without exceeding this high threshold, and those findings should not be described as interchangeable. Use the actual stored code and recorded values to frame the workshop investigation.

These limits belong to the historical monitor and do not define every system using the U sense-channel label. The document supplies no universal cell location or battery replacement instruction. Investigation of the high-voltage pack and its measuring connections requires the correct model-specific service precautions.

## Source and applicability

09OBDG13 2-Mode Hybrid Diagnostics — 2009 Diagnostic Parameters, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 269](https://gsi.ext.gm.com/gmspo/mode6/pdf/2009/09OBDG13%202-Mode%20Hybrid%20Diagnostics.pdf#page=269).
