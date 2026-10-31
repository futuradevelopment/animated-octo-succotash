---
{"entryId":"generic-p0d7e","code":"P0D7E","title":"P0D7E: phase-W current-low must remain a phase-specific finding","description":"GM P0D7E describes a stopped-command phase-W current check; the title and printed signal direction cannot be converted into a universal meter test.","status":"draft","sourceReview":"needs-review","scope":"GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[713]}],"authoringBatch":"batch-29"}
---

# P0D7E: phase-W current-low must remain a phase-specific finding

P0D7E is the phase-W current-low record in this GM electric-compressor monitor set. It identifies the W measurement channel specifically. It is not evidence that all three phases failed, and it should not be reported merely as a generic compressor overcurrent condition.

## Check whether the documented test could run

The row requires zero requested compressor speed, adequate low-voltage supply and Accessory or Run/Crank hardware state. The controller samples every 50 milliseconds and requires 30 failures out of 60 samples. Capturing the request state therefore matters as much as recording a phase-current value.

The source prints an upper-side positive comparison while naming the condition current low. The internal signal encoding is not explained sufficiently here to treat that expression as a direct physical-current test. Its exact interpretation is retained as unresolved rather than converted into a guessed repair limit.

## Keep the diagnostic sequence intact

The source lists a reset prerequisite before the pass comparison becomes eligible after a failure. A later code-free scan after a reset is not, by itself, proof that the stopped-command phase-W check ran successfully.

A technician needs the original phase identity, signal report and controller state, followed by the applicable vehicle procedure. The table does not isolate a winding, power device or connector. It also supplies no high-voltage access method. Physical investigation of the compressor requires the appropriate electrical and refrigerant safety procedures, not an improvised test based on the code title.

## Source and applicability

GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.

[General Motors source, physical page 713](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=713)
