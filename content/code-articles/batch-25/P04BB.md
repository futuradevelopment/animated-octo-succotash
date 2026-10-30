---
{"entryId":"generic-p04bb","code":"P04BB","title":"P04BB: fuel-door lock driver reports an electrical fault","description":"The GM hybrid P04BB row uses hardware fault feedback and command-state qualification for the fuel-door lock driver.","status":"draft","sourceReview":"needs-review","scope":"Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[593,594]}],"authoringBatch":"batch-25"}
---

# P04BB: fuel-door lock driver reports an electrical fault

P04BB in the cited GM hybrid table concerns electrical fault reporting from the fuel-fill door lock control driver. The result is based on hardware diagnostic feedback, rather than solely on whether the door visibly reached the locked position.

## Driver feedback and movement are different evidence

A lock mechanism can fail to move for mechanical reasons while its electrical driver reports no circuit fault. Conversely, a driver can report an electrical problem even before a person has tried the door. The neighboring P04BC performance monitor evaluates the actual unlocked-to-locked transition separately.

The P04BB row contains hardware fault flags and command-state qualifications. It distinguishes a valid hardware test result from an indeterminate result, so a missing or undecided driver test should not be treated as a demonstrated electrical pass.

## Do not simplify the printed logic into a wiring instruction

The source spans a page boundary and combines open/short feedback with several driver states. Its exact Boolean grouping is not clear enough here to turn into a standalone terminal test. This draft preserves the supported hardware-feedback interpretation and leaves the complete enable logic for confirmation against the applicable service diagnostic.

The row also uses a repeated-sample requirement, making a single switch operation insufficient to reconstruct the entire monitor decision.

Record the hardware diagnostic state, lock command and observed movement separately. Do not bypass the driver or force the fuel door to infer circuit health; the summary is a monitor description, not a repair procedure.

## Application limits

Document-level 2015 GM diagnostic table; per-code vehicle/engine/calibration applicability not established.

## Source

[15OBDG01 Hybrid Diagnostics](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=593), physical PDF pages 593, 594.
