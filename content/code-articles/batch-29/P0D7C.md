---
{"entryId":"generic-p0d7c","code":"P0D7C","title":"P0D7C: phase-V current-low belongs to the stopped-compressor check","description":"GM P0D7C evaluates phase-V current feedback at zero requested speed; the printed signal direction needs calibration-specific interpretation.","status":"draft","sourceReview":"needs-review","scope":"GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[713]}],"authoringBatch":"batch-29"}
---

# P0D7C: phase-V current-low belongs to the stopped-compressor check

P0D7C is the phase-V current-low diagnostic in this GM electric-compressor table. Its named phase distinguishes it from P0D7A on phase U and from the DC-link current monitor. A generic statement about total compressor current would omit that distinction.

## Zero requested speed is part of the evidence

The failure evaluation requires a compressor speed request of zero, sufficient low-voltage supply and Accessory or Run/Crank hardware state. It counts 30 failed samples out of 60, sampled every 50 milliseconds. Those conditions describe a stopped-command current-feedback check, not a running-load assessment.

The printed comparison uses a positive upper-side phase-V input boundary despite the current-low title. The internal signal and sign convention is not established by this parameter page. The article therefore does not turn the numerical expression into an external current-test limit or silently rename the code.

## Keep phase identity through verification

A technician should retain the exact controller, phase-V report and request state from the event. An observation on another phase can supply context but cannot automatically substitute for the signal this monitor evaluates. The source also records a reset prerequisite before passing is enabled after failure.

The fault does not establish which winding, semiconductor or connection is defective. Appropriate vehicle-specific diagnostics must resolve signal mapping and hardware condition. No safe access, phase-disconnection or live-probing procedure is supplied here; electric-compressor high-voltage and refrigerant precautions still apply.

## Source and applicability

GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.

[General Motors source, physical page 713](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=713)
