---
{"entryId":"generic-p2c0e","code":"P2C0E","title":"P2C0E: Intake Hall sensor C reports movement without a requested shift","description":"Understand P2C0E’s command-to-feedback consistency check and the need for valid camshaft and crankshaft references.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-03b"],"sourcePages":[{"sourceId":"gm-2025-03b","pages":[906]}],"authoringBatch":"batch-18"}
---

# P2C0E: Intake Hall sensor C reports movement without a requested shift

P2C0E is the performance check for intake profile-position sensor C, called Hall sensor 3 in the GM monitor. The controller recognizes feedback consistent with a profile-pin shift even though no shift request was issued. This is a disagreement about the event’s legitimacy, not simply an electrical signal outside its range.

## Capture more than the final position

The described sequence includes extending, extended and retracted states. A final return to the retracted state does not disprove that an uncommanded sequence occurred beforehand. The useful evidence therefore spans the command history and the full set of recognized transitions.

The printed state boundaries are internal feedback values with no clear physical unit on the page. They must not be turned into universal sensor voltages or actuator travel measurements.

## Verify eligibility of the event interpretation

The engine must be running, system supply above 11 V and the diagnostic enabled. The source also excludes relevant active crankshaft and intake/exhaust cam-sensor faults. Those references support interpretation of the profile event within the engine cycle.

The row calls for four failure readings out of five. Retain C-channel transitions and reference status rather than substituting evidence from another channel. The monitor does not establish whether unexpected physical pin movement or misleading feedback created the sequence. A matching diagnostic procedure is needed to separate those possibilities before assigning a component cause.

## Source and applicability

2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG03B, PDF page 906](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=906).
