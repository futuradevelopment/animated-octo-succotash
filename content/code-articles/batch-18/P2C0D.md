---
{"entryId":"generic-p2c0d","code":"P2C0D","title":"P2C0D: Intake profile channel C is electrically open under its on command","description":"See how P2C0D’s channel-specific driver check differs from failure of the profile-position sequence.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-03b"],"sourcePages":[{"sourceId":"gm-2025-03b","pages":[905,906]}],"authoringBatch":"batch-18"}
---

# P2C0D: Intake profile channel C is electrically open under its on command

P2C0D concerns an open electrical classification for intake profile-position sensor C. The GM row evaluates a driver-level voltage response with the output powered on. It does not directly observe whether the cam-profile pin reached its intended mechanical endpoint.

## Keep the channel identity distinct

The open-load classification represents impedance above 200 kΩ toward controller ground in this implementation. The source names channel C, while the adjacent performance row describes intake Hall sensor 3. Those document labels help identify the monitored function but are not a physical cylinder or connector map.

An absent electrical path and an unexpected Hall-state sequence are separate findings. A mechanism that does not move cannot be conclusively called jammed while the associated energized circuit is failing its own integrity check.

## Use the actual powered test window

Diagnostic enablement, supply above 11 V, ignition in crank or run and an on command are required. Four failures among five samples produce the row’s result. A reading gathered when the driver is off does not repeat the same diagnostic condition.

Preserve the C-channel command and electrical status together with the supply state. The monitor does not localize a disconnection or identify which component is defective. The vehicle’s circuit information must establish the hardware mapping and distinguish wiring, a connected load and the controller before a replacement decision is made.

## Source and applicability

2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG03B, PDF page 905](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=905). [25OBDG03B, PDF page 906](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=906).
