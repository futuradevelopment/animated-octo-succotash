---
{"entryId":"generic-p2de7","code":"P2DE7","title":"P2DE7: Cold-start coolant valve C misses a settled position request","description":"Understand how P2DE7 combines a position error with catalyst warm-up and low-flow operating conditions.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-03b"],"sourcePages":[{"sourceId":"gm-2025-03b","pages":[928]}],"authoringBatch":"batch-18"}
---

# P2DE7: Cold-start coolant valve C misses a settled position request

P2DE7 evaluates coolant bypass valve C during cold-start thermal management. The GM monitor compares target and actual angle after the target has stabilized or is changing slowly enough for the response assessment. It is not simply a check that the valve ever moves.

## A qualified position deficit

The failure criterion is absolute target-versus-actual deviation above 12 degrees for four seconds within a five-second window. A brief error during a fast target change is different from the sustained eligible discrepancy described in the strategy.

Coolant-system mode must be Low Flow or Low Flow Autostop, with catalyst warm-up enabled. Closed-loop position control must be active, while soft opening, soft closing and the anti-sticking routine are inactive. Those operating modes can otherwise explain movement that does not resemble an ordinary tracking test.

## Preserve warm-up and control-state evidence

The source also requires usable communication and position feedback, no cranking and appropriate ignition and coolant eligibility. A clean result during fully warm normal-flow operation does not necessarily repeat this cold-start test opportunity.

Useful verification aligns target angle, measured angle, warm-up state and the enabled control mode. The monitor supports investigating a slow or stuck response under those conditions, but it does not prove which component caused it or directly measure coolant flow. Vehicle-specific electrical and mechanical checks are needed before a valve or related cooling part is selected for replacement.

## Source and applicability

2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG03B, PDF page 928](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=928).
