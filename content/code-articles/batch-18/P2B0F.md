---
{"entryId":"generic-p2b0f","code":"P2B0F","title":"P2B0F: Cylinder 8 cold-start pulse thresholds belong to the actual calibration","description":"Understand P2B0F’s injector-opening evidence and why another GM file’s pulse threshold cannot simply be substituted.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG06A, 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-06a","gm-2025-03b"],"sourcePages":[{"sourceId":"gm-2025-06a","pages":[565,824]},{"sourceId":"gm-2025-03b","pages":[1372]}],"authoringBatch":"batch-18"}
---

# P2B0F: Cylinder 8 cold-start pulse thresholds belong to the actual calibration

P2B0F identifies cylinder 8 injection-pulse performance during catalyst warm-up in the cited GM monitor. The controller expects coil-voltage feedback associated with armature movement after a pulse is commanded. Missing opening evidence is distinct from a conventional combustion-balance or crankshaft-misfire result.

## The opening metric is calibration data

The supporting table in 25OBDG06A shows one opening-magnitude value across its listed fuel-pressure entries. The corresponding family table in 25OBDG03B varies with pressure. That difference is a concrete reason not to import a threshold from another file merely because it mentions the same code family.

These tables concern a controller-derived opening metric. They should not be interpreted as universal injector-terminal voltages or as instructions for directly energizing an injector.

## Establish that the cold-start test actually ran

The cylinder 8 row requires catalyst warm-up enabled, small-pulse diagnostics active and voltage-feedback data ready. Sampling follows cylinder events, with a stated 50–100 sample span. A clean observation after the warm-up period does not recreate that opportunity.

Useful evidence preserves cylinder identity, pulse command, feedback readiness and the applicable calibration. The code indicates that the expected movement evidence was missing or unacceptable in the documented test; it does not measure fuel mass directly or identify a failed part. Cause and repair decisions need the matching vehicle procedure and additional electrical or mechanical evidence.

## Source and applicability

2025 GM 25OBDG06A, 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG06A, PDF page 565](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG06A.pdf#page=565). [25OBDG06A, PDF page 824](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG06A.pdf#page=824). [25OBDG03B, PDF page 1372](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=1372).
