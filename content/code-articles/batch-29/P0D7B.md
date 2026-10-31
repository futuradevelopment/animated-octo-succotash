---
{"entryId":"generic-p0d7b","code":"P0D7B","title":"P0D7B: phase-U current-high is not a DC-link overcurrent diagnosis","description":"The GM P0D7B example checks phase-U feedback at a zero-speed request; its signed-current direction cannot be inferred from the code title alone.","status":"draft","sourceReview":"needs-review","scope":"GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[713]}],"authoringBatch":"batch-29"}
---

# P0D7B: phase-U current-high is not a DC-link overcurrent diagnosis

P0D7B is the phase-U current-high record in the cited GM electric-compressor table. It should not be expanded into a general statement that the compressor's total supply current was excessive. The source evaluates an individual phase input under a stopped-command condition.

## Retain the signed-signal ambiguity

The printed failure comparison is on the negative side of the phase-U signal, although the row title says current high. The document does not resolve the internal signal convention sufficiently to convert that expression into a universal clamp-meter limit. The exact numerical interpretation remains flagged for review.

The row does clearly require a zero compressor-speed request, adequate low-voltage supply and Accessory or Run/Crank state. It uses 30 failed samples out of 60 at a 50-millisecond rate and assigns two-trip Type B classification.

## Capture the state that qualified the fault

A technician needs the phase-U report and speed request from the event, not simply a later total-current measurement. The table also requires a controller reset before the pass branch is enabled after failure. This describes diagnostic recovery logic and does not establish a reset as the corrective action.

The parameter page provides no evidence that a particular winding, power switch or harness section must be replaced. Those decisions need the actual vehicle's signal mapping and professional service procedure. High-voltage compressor phase circuits must not be exposed or tested from these summary criteria alone.

## Source and applicability

GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.

[General Motors source, physical page 713](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=713)
