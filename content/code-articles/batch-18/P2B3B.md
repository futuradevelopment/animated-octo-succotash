---
{"entryId":"generic-p2b3b","code":"P2B3B","title":"P2B3B: Resolve the exhaust actuator’s command-state conflict before testing high voltage","description":"Understand P2B3B’s power-short classification and the contradictory enable wording in the published monitor.","status":"draft","sourceReview":"needs-review","scope":"2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-03b"],"sourcePages":[{"sourceId":"gm-2025-03b","pages":[875]}],"authoringBatch":"batch-18"}
---

# P2B3B: Resolve the exhaust actuator’s command-state conflict before testing high voltage

P2B3B is the high electrical classification for the exhaust profile-actuator drive circuit. The GM description says the output is powered off when the controller checks for a short toward power. Yet its enable column says the driver is commanded on. A reliable circuit test cannot assume that these opposing statements are interchangeable.

## What remains supported by the row

The monitor concerns driver-level voltage outside an acceptable range, with the classification associated with low impedance toward controller power. It is not direct evidence of excess camshaft travel or a profile pin staying extended.

The controller-specific voltage thresholds are not supplied as a universal connector waveform. The conflicting command-state wording must be resolved for the actual module before expected electrical behavior is assigned to a test point.

## Keep the confirmation conditions with the record

The table requires supply above 11 V, ignition in crank or run and diagnostic enablement. Four failures among five samples establish its stated result, and reporting is classified separately as one trip. These facts provide useful context even though the on/off instruction remains unresolved.

Preserve the precise exhaust-channel designation, command history and fault subtype. The source does not identify which component provides the unintended power path or justify replacing an actuator or controller. Vehicle-specific wiring and service information must resolve both the circuit location and the command-state ambiguity.

## Source and applicability

2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG03B, PDF page 875](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=875).
