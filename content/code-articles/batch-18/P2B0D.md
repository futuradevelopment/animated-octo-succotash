---
{"entryId":"generic-p2b0d","code":"P2B0D","title":"P2B0D: Cylinder 6 cold-start pulse evidence is not a fuel-balance measurement","description":"Understand why P2B0D evaluates injector movement feedback and cannot by itself quantify cylinder fueling.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG06A documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-06a"],"sourcePages":[{"sourceId":"gm-2025-06a","pages":[563,824]}],"authoringBatch":"batch-18"}
---

# P2B0D: Cylinder 6 cold-start pulse evidence is not a fuel-balance measurement

P2B0D concerns cylinder 6 pulses commanded during catalyst warm-up. In the documented GM strategy, the engine controller measures voltage feedback across injector enable and command paths, then derives evidence of pintle or armature movement. The diagnostic does not directly collect the amount of fuel entering the cylinder.

## Separate opening evidence from combustion outcome

A missing opening magnitude can establish the monitored concern. The row also references converted opening-magnitude calibration data. A commanded injection and a valid movement signature answer different questions; neither alone is a complete measurement of combustion quality or delivered fuel mass.

The supporting threshold belongs to the specified controller’s metric and fuel-pressure indexing. An apparently similar raw voltage from another setup cannot be assumed to have the same scaling or meaning.

## Reproduce the eligible operating context

The monitor requires catalyst warm-up, small-pulse diagnosis and ready voltage-feedback data. Its samples are tied to cylinder events, with a listed 50–100 sample span. Looking only at warmed-up steady operation may miss the specific opportunity under which the cold-start result was recorded.

A useful record preserves cylinder identity, pulse mode, warm-up state and feedback availability. The code directs attention to the gap between a requested pulse and opening evidence; it does not justify an injector replacement or a fuel-balancing adjustment by itself. Those decisions need the appropriate vehicle-specific procedure and additional measurements.

## Source and applicability

2025 GM 25OBDG06A documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG06A, PDF page 563](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG06A.pdf#page=563). [25OBDG06A, PDF page 824](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG06A.pdf#page=824).
