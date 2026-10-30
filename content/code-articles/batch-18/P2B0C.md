---
{"entryId":"generic-p2b0c","code":"P2B0C","title":"P2B0C: Cylinder 5 pulse monitoring depends on feedback being ready","description":"Learn what P2B0C establishes during catalyst warm-up and why an unready feedback channel cannot be read as a passed injector test.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG06A documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-06a"],"sourcePages":[{"sourceId":"gm-2025-06a","pages":[562,823,824]}],"authoringBatch":"batch-18"}
---

# P2B0C: Cylinder 5 pulse monitoring depends on feedback being ready

P2B0C addresses cylinder 5 injection-pulse performance during the catalyst warm-up period. The GM monitor looks for coil-voltage behavior associated with injector armature movement. It distinguishes the electrical command to inject from evidence that the commanded opening actually occurred.

## Readiness is part of the diagnostic opportunity

The source requires small-pulse diagnostic enablement, catalyst warm-up enabled and fuel-pulse voltage-feedback data ready. If warm-up has ended or feedback data is not ready, an absent new fault cannot be interpreted as proof that this monitor completed successfully.

The check samples cylinder events rather than using a generic fixed-delay continuity test. Its published monitoring span is 50–100 samples. Two-trip reporting is separate from that event-level evaluation and does not define how quickly an individual injector should open.

## Keep the converted opening metric in its calibration

The supporting material describes an opening-magnitude threshold and multipulse operating limits. Those are controller interpretation data; they are not an instruction to apply a listed value directly at an injector connector. The relevant fuel-pressure and pulse-mode context must remain associated with the feedback.

Record the cylinder-specific result, command opportunity and readiness state together. This code does not directly measure combustion contribution or prove a fuel-volume error. The source supports an investigation of missing opening evidence, while the applicable vehicle procedure is still needed to establish the electrical or mechanical cause.

## Source and applicability

2025 GM 25OBDG06A documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG06A, PDF page 562](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG06A.pdf#page=562). [25OBDG06A, PDF page 823](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG06A.pdf#page=823). [25OBDG06A, PDF page 824](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG06A.pdf#page=824).
