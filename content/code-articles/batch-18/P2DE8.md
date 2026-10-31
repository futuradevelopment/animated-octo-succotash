---
{"entryId":"generic-p2de8","code":"P2DE8","title":"P2DE8: Cold-start valve D is on the open side while missing its target","description":"Learn why P2DE8 requires both position error and a high feedback angle during a specific warm-up mode.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-03b"],"sourcePages":[{"sourceId":"gm-2025-03b","pages":[929,930]}],"authoringBatch":"batch-18"}
---

# P2DE8: Cold-start valve D is on the open side while missing its target

P2DE8 classifies engine-block coolant valve D as stuck open during the documented cold-start strategy. GM needs a target error and a position-side condition together. A large angle alone is not a failure if that is where the controller requested the valve to be.

## Combine the error with the feedback side

The absolute requested-versus-measured angle difference must exceed five degrees, and feedback must exceed 50 degrees. The fault pattern must persist for four seconds within five seconds. This is different from a transient crossing of the position boundary while the valve follows a normal command.

The system must be in Low Flow or Low Flow Autostop with catalyst warm-up enabled. Relevant feedback circuit faults and powertrain-relay faults must not invalidate the comparison. The continuation also separates ordinary operation from calibration/endstop-learning movements.

## Reproduce the actual warm-up opportunity

Command changes are constrained in the published enable logic, including a stable-request interval. A trace captured during a calibration sweep or after warm-up has ended should not be treated as the same test.

Preserve the requested angle, feedback, control mode and relay state through the failure window. The result identifies open-side tracking behavior in this calibration; it does not directly measure coolant circulation or locate a mechanical obstruction. The applicable vehicle procedure must determine whether the discrepancy originates in the mechanism, its drive or the feedback path.

## Source and applicability

2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG03B, PDF page 929](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=929). [25OBDG03B, PDF page 930](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=930).
