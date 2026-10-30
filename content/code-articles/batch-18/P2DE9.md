---
{"entryId":"generic-p2de9","code":"P2DE9","title":"P2DE9: Cold-start pump underspeed is measured against stable demand","description":"Understand the 200 rpm deficit and warm-up eligibility behind P2DE9 rather than interpreting every low pump speed as a fault.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-03b"],"sourcePages":[{"sourceId":"gm-2025-03b","pages":[931,932]}],"authoringBatch":"batch-18"}
---

# P2DE9: Cold-start pump underspeed is measured against stable demand

P2DE9 evaluates the engine coolant pump during cold-start low-flow operation. The monitored quantity is requested speed minus feedback speed. A pump running slowly is not necessarily failing if its requested speed is also low; the code concerns a sustained deficit relative to demand.

## Establish the requested-speed context

The cited failure comparison is a command-minus-feedback difference above 200 rpm. The strategy describes filtering that difference, and confirmation requires eight seconds of failure in a ten-second window. A single lagging sample during a command change is not equivalent to the completed monitor.

The command must change by less than 50 rpm for at least three seconds. Low Flow or Low Flow Autostop mode and catalyst warm-up must be active. These requirements make the cold-start opportunity different from later high-flow operation.

## Keep feedback validity separate from pump performance

The source includes engine-inlet temperature and pump-speed fault exclusions. If feedback itself is invalid, the speed comparison cannot be accepted as independent proof of actual pump motion. Preserve those statuses with the recorded deficit.

Useful evidence aligns stable demand, feedback, warm-up mode and the failure interval. The code supports investigating a pump that does not follow its request under the specified conditions, but it does not measure coolant flow directly or identify a failed motor. The actual calibration and vehicle procedure are needed to establish cause and repair.

## Source and applicability

2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG03B, PDF page 931](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=931). [25OBDG03B, PDF page 932](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=932).
