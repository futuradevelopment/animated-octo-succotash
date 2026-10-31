---
{"entryId":"generic-p2b4f","code":"P2B4F","title":"P2B4F: GM’s profile-performance row describes uncommanded pin movement","description":"Understand the specific GM monitor behind P2B4F and why its behavior cannot be equated blindly with the generic stuck-off wording.","status":"draft","sourceReview":"needs-review","scope":"2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-03b"],"sourcePages":[{"sourceId":"gm-2025-03b","pages":[876]}],"authoringBatch":"batch-18"}
---

# P2B4F: GM’s profile-performance row describes uncommanded pin movement

P2B4F has generic performance/stuck-off wording, but the cited GM row specifically describes intake profile-actuator 2 firing a pin without a controller command. That is a material distinction in the documented behavior. The article therefore follows the actual monitor while preserving the limitation in how the broad label maps to it.

## Movement without a request is the key contradiction

The controller recognizes extending, extended and retracted feedback states. The failing condition is feedback crossing the extending boundary when there was no command to fire the pin. It is not simply an actuator that remains still after a request.

The table prints internal feedback boundaries without a clear physical unit. They should not be converted into travel, voltage or a connector specification. The supported interpretation is the disagreement between the command history and the recognized movement state.

## Verify the event sequence

The engine must be running, system supply above 11 V and the diagnostic enabled. Four incorrect positions out of five cylinder-event reads produce the recorded result. A normal final retracted position does not necessarily disprove an earlier uncommanded extension event.

Useful evidence retains the command and feedback sequence at cylinder-event resolution. The summary does not identify why the pin appeared to move or prove a failed actuator. Resolve the generic-label difference and actual hardware mapping before choosing a vehicle-specific test.

## Source and applicability

2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG03B, PDF page 876](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=876).
