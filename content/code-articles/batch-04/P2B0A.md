---
{"entryId": "generic-p2b0a", "code": "P2B0A", "title": "P2B0A: Cylinder 3 injector opening is not confirmed in the warm-up sequence", "description": "P2B0A is the cylinder 3 cold-start injection-pulse performance diagnosis in the reviewed GM table.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 25OBDG03A diagnostic monitor only; exact vehicle, engine and calibration applicability is not established.", "sourceIds": ["gm-2025-03a"], "sourcePages": [{"sourceId": "gm-2025-03a", "pages": [673]}], "authoringBatch": "batch-04"}
---

# P2B0A: Cylinder 3 injector opening is not confirmed in the warm-up sequence

P2B0A is the cylinder 3 cold-start injection-pulse performance diagnosis in the reviewed GM table. The stated enable is catalyst warm-up, so an ordinary cold temperature reading alone does not show that the relevant diagnostic sequence was active.

## Three prerequisites qualify the evidence

Catalyst warm-up must be enabled, the small-pulse general monitor must be enabled, and fuel-pulse voltage feedback must be ready. The source evaluates 50–100 samples at cylinder events. A missing result outside that combination cannot be treated as a successful test.

Preserving these states is especially useful when a fault occurs only near startup and cannot be reproduced later at idle. A later normal command trace may belong to a different fueling mode.

## Opening is inferred from the coil response

The ECM measures voltage-flux feedback between injector enable and command wires. Pintle or armature motion produces the signature used to calculate opening magnitude. The monitor detects absent opening evidence or a metric failing the calibrated missing-pulse criterion.

This is more specific than a general cylinder-balance complaint, but it is not a direct test of delivered fuel quantity. It also does not locate cylinder 3 physically; that mapping depends on the actual engine.

Verification should show the required opening feedback during the eligible warm-up sequence and no returning fault after completion. The source gives Type B, two-trip behavior without establishing the mechanical cause, a universal test voltage or a required injector replacement.

## Source and applicability

This description is limited to the stated monitor; vehicle, engine and calibration matching remain necessary. [GM diagnostic table, PDF page 673](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=673).
