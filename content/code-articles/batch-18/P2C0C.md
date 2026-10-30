---
{"entryId":"generic-p2c0c","code":"P2C0C","title":"P2C0C: Intake channel B retains a power-short indication while commanded off","description":"Learn why P2C0C is interpreted through an off command and a repeated electrical result rather than a single position reading.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-03b"],"sourcePages":[{"sourceId":"gm-2025-03b","pages":[903,904]}],"authoringBatch":"batch-18"}
---

# P2C0C: Intake channel B retains a power-short indication while commanded off

P2C0C is the intake profile-position sensor B circuit-high classification. The GM monitor evaluates voltage after the associated output is commanded off, looking for behavior consistent with a short toward controller power. An energized circuit naturally has a different expected response, so the command cannot be omitted from the diagnosis.

## The power path is the monitored concern

The published classification corresponds to impedance below 0.5 Ω toward controller power, inferred through module-specific voltage thresholds. It does not directly measure profile-pin travel or identify the sensor’s physical location.

The neighboring low-circuit check uses the on state. A trace that contains only powered operation cannot directly demonstrate that the off-state power-short test would pass. Retain the command transition as well as the subsequent electrical response.

## Keep repeated sampling and supply qualification

The source requires supply above 11 V, ignition in crank or run and diagnostic enablement. Four failed reports out of five samples establish the result. A momentary spike outside an eligible state should not be equated with the completed fault.

Useful evidence remains specific to intake channel B. A normal position reported by another channel does not locate this unwanted electrical path. The monitor cannot by itself choose between wiring, a connected component or the controller, nor does it justify replacing the cam-profile mechanism without a matching circuit investigation.

## Source and applicability

2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG03B, PDF page 903](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=903). [25OBDG03B, PDF page 904](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=904).
