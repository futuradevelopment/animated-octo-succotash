---
{"entryId":"generic-p2b2e","code":"P2B2E","title":"P2B2E: A high-resistance coolant fault carries a sensor-mapping caveat","description":"Understand P2B2E’s high-resistance logic and the contradictory logical-sensor wording in the cited GM table.","status":"draft","sourceReview":"needs-review","scope":"2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-03b"],"sourcePages":[{"sourceId":"gm-2025-03b","pages":[868,869]}],"authoringBatch":"batch-18"}
---

# P2B2E: A high-resistance coolant fault carries a sensor-mapping caveat

P2B2E is labeled coolant temperature sensor 5 circuit high, and the GM monitor describes resistance above a configured upper limit. In this sensing arrangement, high circuit resistance can correspond to an open path or a short toward a high potential. It does not mean that the coolant temperature itself is high.

## The source does not resolve the channel cleanly

The row heading names sensor 5, but its configurable-assignment paragraph instead names the radiator-coolant function. The same page lists separate logical functions and hardware input numbers with different resistance limits. This inconsistency prevents selecting one universal resistance value or physical sensor location from the summary alone.

The supported diagnostic distinction is the high-resistance classification. Do not silently substitute the neighboring sensor’s limit to make the table appear complete.

## Apply the documented eligibility and duration

The monitor requires diagnostic enablement and either sufficient engine run time or an intake-temperature condition. The row states more than ten seconds of running or minimum intake-air temperature above −20°C. Failure must persist for five seconds within a six-second window.

Useful verification preserves the actual sensor assignment and the qualified resistance behavior. A very cold displayed temperature may be an interpreted electrical result, rather than proof of unusually cold coolant. The source limitation must be resolved with matching service information before a connector, sensor or numerical threshold is chosen.

## Source and applicability

2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG03B, PDF page 868](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=868). [25OBDG03B, PDF page 869](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=869).
