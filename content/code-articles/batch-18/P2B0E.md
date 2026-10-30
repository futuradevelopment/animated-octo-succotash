---
{"entryId":"generic-p2b0e","code":"P2B0E","title":"P2B0E: Cylinder 7’s missing pulse signature needs the catalyst warm-up context","description":"See how P2B0E separates a cold-start injector response from later normal running behavior.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG06A documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-06a"],"sourcePages":[{"sourceId":"gm-2025-06a","pages":[564,823,824]}],"authoringBatch":"batch-18"}
---

# P2B0E: Cylinder 7’s missing pulse signature needs the catalyst warm-up context

P2B0E describes cylinder 7 injection-pulse performance during catalyst warm-up. The cited GM controller relies on the electrical signature produced by movement within the injector. Its concern is a commanded pulse without adequate opening evidence, rather than a generic statement that every injection from that cylinder failed.

## Preserve the event that made the check possible

Catalyst warm-up must be enabled, the small-pulse diagnostic active and voltage-feedback data ready. These are explicit prerequisites. A later clean scan after the engine has warmed does not, by itself, show that the same diagnostic opportunity was repeated.

The source lists cylinder-event sampling over 50–100 samples. That monitoring span differs from the two-trip reporting classification, and neither should be treated as a universal injector-opening time.

## Interpret the feedback through its supporting data

GM uses an opening-magnitude metric, with supporting calibration data indexed by fuel-rail pressure and separate multipulse operating limits. The metric is part of the controller’s signal interpretation. It is not a stand-alone harness-voltage specification or direct fuel-flow measurement.

Useful verification aligns the cylinder 7 command, operating mode and feedback readiness with the recorded result. A pulse that was commanded but lacks movement evidence requires a different investigation from a combustion imbalance inferred elsewhere. The summary does not decide whether the cause is inside the injector, in its drive path or in signal interpretation; a matching diagnostic procedure must resolve that.

## Source and applicability

2025 GM 25OBDG06A documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG06A, PDF page 564](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG06A.pdf#page=564). [25OBDG06A, PDF page 823](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG06A.pdf#page=823). [25OBDG06A, PDF page 824](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG06A.pdf#page=824).
