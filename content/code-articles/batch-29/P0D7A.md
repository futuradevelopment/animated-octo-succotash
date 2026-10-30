---
{"entryId":"generic-p0d7a","code":"P0D7A","title":"P0D7A: compressor phase-U current needs a polarity-aware interpretation","description":"The GM P0D7A row names phase-U current low, but its printed signed-current comparison requires clarification before being used as a service limit.","status":"draft","sourceReview":"needs-review","scope":"GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[712,713]}],"authoringBatch":"batch-29"}
---

# P0D7A: compressor phase-U current needs a polarity-aware interpretation

P0D7A identifies the phase-U current diagnostic of the electric A/C compressor in this GM table. The specific phase matters: it is not the DC-link current measurement and is not interchangeable with the V- or W-phase records.

## The label does not establish signal polarity

The source labels the fault current low but prints a positive upper-side comparison for its phase-U input. Without the internal sensing and sign convention, that relationship cannot be translated into a universal physical-current rule. This article therefore leaves the exact numerical service interpretation unresolved instead of silently reversing the source's label or inequality.

The operating-state criteria are usable: the compressor speed request must be zero, low-voltage supply must be sufficient, and Accessory or Run/Crank must be active. The monitor counts 30 failures out of 60 samples at a 50-millisecond interval.

## A stopped-command test is a distinct diagnostic event

Record the phase identifier, current report and zero-speed request together. A current value observed during a running request is not the same evidence as the stopped-command evaluation described here. The continuation also records a reset prerequisite before passing is enabled after failure.

Neither the phase label nor that reset prerequisite proves a winding defect or prescribes a repair. The applicable professional procedure must establish signal mapping and component condition. Do not probe or disconnect high-voltage compressor phases using this monitor summary as a test guide.

## Source and applicability

GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.

[General Motors source, physical page 712](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=712) · [General Motors source, physical page 713](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=713)
