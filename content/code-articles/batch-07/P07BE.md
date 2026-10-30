---
{"entryId":"generic-p07be","code":"P07BE","title":"P07BE: two valid Park-button channels disagree","description":"P07BE detects sustained disagreement between otherwise valid Park-button switch A and B states.","status":"draft","sourceReview":"checked","scope":"Documented 2025 GM diagnostic parameter monitor in 25OBDG04B.pdf; model, engine and calibration applicability require vehicle-specific confirmation.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[652]}],"authoringBatch":"batch-07"}
---

# P07BE: two valid Park-button channels disagree

P07BE is a correlation diagnosis, not simply another high- or low-signal code. The reviewed GM monitor compares the pressed/released states of two switches behind the Park pushbutton. Both states must be valid, yet disagree, for the documented comparison to fail.

## Validity comes before agreement

The individual A- and B-channel electrical and performance codes must not be active. This includes P07B3, P07B4, P07B5, P07B9, P07BA and P07BB. If a channel is already invalid, that is a different diagnostic situation from two credible signals making conflicting claims about button position.

The monitor accumulates 4,800 failures out of 6,000 samples at a 12.5-millisecond rate. That substantial persistence requirement distinguishes a sustained mismatch from ordinary brief differences around a state transition. Reporting is Type B over two trips.

## The operating window matters

The comparison must be enabled and the overall diagnostic-disable calibration must be false. Vehicle speed must remain within the permitted Park-request range, with a printed hysteresis pair of 8.00 and 7.50. The page does not explicitly provide the speed unit, so those values should not be restated as universal road-speed limits.

Verification needs evidence that both channels are valid and agree while the comparison is eligible. Observing one good channel alone does not answer the correlation question. The monitor concerns the pushbutton's redundant inputs; it is not proof that a parking mechanism will hold the vehicle. Exact vehicle coverage and the controlled functional-check procedure require separate service information.

Source: [GM monitor, PDF page 652](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=652).
