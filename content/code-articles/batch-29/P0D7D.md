---
{"entryId":"generic-p0d7d","code":"P0D7D","title":"P0D7D: phase-V current-high requires its own signal convention","description":"The GM P0D7D row identifies phase-V feedback, but its negative signed-current failure expression should not be interpreted from the word high alone.","status":"draft","sourceReview":"needs-review","scope":"GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[713]}],"authoringBatch":"batch-29"}
---

# P0D7D: phase-V current-high requires its own signal convention

P0D7D addresses the high-designated phase-V current feedback of the electric A/C compressor in this GM calibration. The code names a phase measurement, not the combined DC supply current. Preserving that channel identity is essential when interpreting several compressor codes together.

## Do not translate the title directly into amperage

The original table pairs the high title with a negative-side failure comparison. Without the controller's internal signal convention, that does not establish a universal physical-current direction or an external meter limit. The exact numerical interpretation remains an explicit source-review item.

The documented operating prerequisites are more straightforward: the compressor speed request is zero, low-voltage supply is sufficient, and Accessory or Run/Crank is active. A failure requires 30 failing samples out of 60 at a 50-millisecond rate. The row is classified as two-trip Type B.

## Recovery is a separate observation

The pass branch has its own comparison and a reset prerequisite after failure. A reset alone does not verify the phase-V sensing path, and a normal current report while the motor is requested to run is not the same operating event as the stopped-command test.

Record the original signal and state before vehicle-specific verification. The source gives no component-isolation sequence or evidence that compressor replacement is mandatory. High-voltage phase testing requires trained personnel and the correct service procedure; these parameter-table observations are not instructions for disconnecting or probing the motor phases.

## Source and applicability

GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.

[General Motors source, physical page 713](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=713)
