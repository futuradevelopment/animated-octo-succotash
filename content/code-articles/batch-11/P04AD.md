---
{"entryId":"generic-p04ad","code":"P04AD","title":"P04AD: Purge valve B high is detected from energized-driver current","description":"P04AD uses output current with purge valve B switched on in the cited GM strategy, rather than a generic high-voltage rule.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG07A Part 2, specific documented monitor only. Vehicle, engine and calibration applicability require confirmation; application-matrix filename join is unresolved.","sourceIds":["gm-2025-07a-2"],"sourcePages":[{"sourceId":"gm-2025-07a-2","pages":[749]}],"authoringBatch":"batch-11"}
---

# P04AD: Purge valve B high is detected from energized-driver current

P04AD is the high-circuit code for EVAP purge valve B. The GM example detects this condition using driver current while the power stage is ON. Its measurement is therefore different from the voltage-based low and open-load checks in the same section.

## Current is the important signal

The listed boundary is at least 5.6 amperes, with a one-second detection interval and two-trip reporting. Battery voltage must be between 10 and 17 volts, and the general enable and inhibit requirements apply.

That number describes the controller’s internal diagnostic decision. It is not an instruction to force 5.6 amperes through a valve or to power the circuit with an external supply. The ON-state requirement is essential to interpreting the feedback.

## Do not substitute an EVAP flow diagnosis

Preserve the purge driver’s energized state and the current-related fault information. A successful vapor-flow test does not independently show that the output-current problem is absent, and a leak code does not explain the electrical condition by itself.

The source’s B2 section label needs vehicle-specific component mapping. Its summary does not locate the fault within the connected load, harness or power stage and does not prescribe a replacement part. Use the appropriate circuit procedure to distinguish those possibilities. P04AD narrows the issue to an energized electrical output assessment; it is not a general diagnosis of the entire EVAP system.

## Source and applicability

This explanation covers the cited GM monitor, not every vehicle carrying this code. The application-matrix filename does not resolve cleanly to this file, so no model or engine fitment is assigned. [GM diagnostic table, PDF page 749](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=749).
