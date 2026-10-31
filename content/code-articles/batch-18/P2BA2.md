---
{"entryId":"generic-p2ba2","code":"P2BA2","title":"P2BA2: The cited pump-stalled row actually checks speed while commanded off","description":"Understand the off-state running indication described for P2BA2 and why it differs from a conventional zero-speed stall diagnosis.","status":"draft","sourceReview":"needs-review","scope":"2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-03b"],"sourcePages":[{"sourceId":"gm-2025-03b","pages":[888]}],"authoringBatch":"batch-18"}
---

# P2BA2: The cited pump-stalled row actually checks speed while commanded off

P2BA2 is headed coolant pump stuck/stalled, but the actual GM algorithm on this page checks the pump while it is commanded off. It looks for reported speed that remains characteristic of operation. That explicit behavior must not be rewritten as a test for zero speed under an on command.

## The off-state qualification is decisive

The monitor requires pump disablement or a command between zero and four rpm for at least three seconds. Its failure criterion is feedback at or above 10 rpm. Thus, the meaningful contradiction in this document is continued speed reporting despite an established off request.

Supply must exceed the documented enable threshold and relevant pump-speed feedback faults must be absent. Invalid feedback would undermine the inference that the pump is actually operating when it should be off.

## Verify persistence before assigning a cause

The table requires eight seconds of failure within a ten-second window. A short coast-down indication immediately after switch-off is not the same as the qualified persistent result. Preserve command history and reported speed through both the initial off interval and the failure window.

The source does not resolve why its stuck/stalled heading differs from this off-state algorithm. It also does not prove whether the pump keeps turning or the feedback incorrectly reports speed. Those distinctions require matching service information; the code alone does not justify a pump replacement.

## Source and applicability

2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG03B, PDF page 888](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=888).
