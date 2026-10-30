---
{"entryId":"generic-p0c4e","code":"P0C4E","title":"P0C4E: Motor A learned offset exceeded the accepted angle","description":"GM P0C4E requires a completed motor-A resolver learn with an excessive correction angle, which differs from an unfinished learn.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[665]}],"authoringBatch":"batch-28"}
---

# P0C4E: Motor A learned offset exceeded the accepted angle

P0C4E is the motor-A position-learning limit diagnostic in the cited GM controller. The key condition is that offset learning completes, but the absolute correction angle is greater than 30 degrees. This is different from a procedure that never produces a valid learned result.

## Completion and acceptability are separate

The neighboring not-learned diagnostic addresses an unsuccessful learn without a previously valid value. P0C4E instead evaluates the value obtained after completion. A workshop should retain both the completion status and the learned correction rather than describe every learning-related code as a need to repeat the same procedure.

The listed learning conditions include absolute motor speed below 20 rpm and high-voltage supply above 192 volts. The table records a 300-millisecond learn time. These are historical monitor parameters, not instructions to energize or position a motor manually.

## Use the stored result as evidence

An excessive learned angle does not identify a failed resolver, wiring connection or mechanical part by itself. The actual vehicle procedure must determine why the completed result is outside its accepted range and whether other position-sensing faults affect interpretation.

The motor-A designation requires the correct propulsion-system mapping. The source supplies no universal physical location or replacement instruction. Resolver learning and high-voltage motor work belong with qualified personnel using the applicable diagnostic routine, with the original correction value and operating conditions preserved for verification.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 665](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=665).
