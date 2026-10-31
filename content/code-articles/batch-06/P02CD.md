---
{"entryId":"generic-p02cd","code":"P02CD","title":"P02CD: cylinder 1 exceeds its upper injector-learning boundary","description":"The P02CD row describes a cylinder-1 SQP correction that is greater than its calibrated maximum.","status":"draft","sourceReview":"needs-review","scope":"2025 GM 25OBDG04B diagnostic parameter tables; the cited monitor only. Vehicle, engine and calibration applicability must be confirmed separately.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[1139]}],"authoringBatch":"batch-06"}
---

# P02CD: cylinder 1 exceeds its upper injector-learning boundary

The P02CD row describes a cylinder-1 SQP correction that is greater than its calibrated maximum. SQP estimates small injected quantities from rail-pressure changes during diesel fuel cut-off and learns the required energizing-time adjustment.

## An adaptation result, not a direct flow measurement

The monitor evaluates a new map entry, then stores a saturated/not-saturated result for each relevant rail-pressure level. An upper-limit failure can remain represented by one pressure cell even if other cells look acceptable. Reviewing only one live correction value can therefore miss the condition represented in fault memory.

The source labels the threshold in microseconds without giving a numeric calibration. It also lists SQP authority diagnosis and injection management as prerequisites, with Type B, two-trip reporting. Lack of a new learning event is not equivalent to a passing result.

## Source wording and verification

Some sentences in this maximum-limit row mistakenly refer to “minimum” authority. The heading, greater-than comparison and maximum-threshold name agree on the upper-limit interpretation; this article follows those consistent fields.

Verification should establish that the applicable SQP learning completed and that no relevant pressure-level entry remains saturated. The table does not identify a failed part or prescribe a rail-pressure repair. Vehicle-specific data and safe professional fuel-system procedures are needed before deciding on hardware work.

## Source and applicability

2025 GM 25OBDG04B diagnostic parameter tables; the cited monitor only. Vehicle, engine and calibration applicability must be confirmed separately. These tables describe detection logic, not a complete repair procedure or a component replacement verdict. [gm-2025-04b, PDF page 1139](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1139).
