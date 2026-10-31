---
{"entryId":"generic-p2b3a","code":"P2B3A","title":"P2B3A: Exhaust profile-actuator circuit low is an on-state electrical finding","description":"Learn how P2B3A’s driver feedback differs from a low mechanical position or a failed profile transition.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-03b"],"sourcePages":[{"sourceId":"gm-2025-03b","pages":[873,874,875]}],"authoringBatch":"batch-18"}
---

# P2B3A: Exhaust profile-actuator circuit low is an on-state electrical finding

P2B3A concerns the exhaust profile-actuator output being electrically low while commanded on. The GM monitor describes a short-to-ground classification for exhaust actuator 2. The low label does not describe exhaust cam angle, valve lift or where the profile pin physically rests.

## Read the electrical classification in context

Controller-specific voltage limits are calibrated to an impedance below 0.5 Ω toward controller ground. This information explains the classification but does not define a universal connector test. The actual output command must be known before a low signal can be interpreted.

The related open-circuit row also examines the energized output, but represents a different electrical path condition. Recording the exact subtype avoids reducing every nonresponsive actuator to the same mechanical explanation.

## Establish an eligible repeated result

The source requires system voltage above 11 V, diagnostic enablement, a commanded-on output and ignition in crank or run. Four failed samples out of five are needed for the stated result. The one-trip reporting class should not be confused with the number of individual samples.

Preserve the channel identity, command and driver evidence together. The generic actuator-B designation must be mapped through vehicle-specific information before locating the circuit described as actuator 2 in this file. P2B3A does not establish where a ground path lies or prove that the actuator itself is the failed component.

## Source and applicability

2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG03B, PDF page 873](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=873). [25OBDG03B, PDF page 874](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=874). [25OBDG03B, PDF page 875](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=875).
