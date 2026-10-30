---
{"entryId":"generic-p2c0f","code":"P2C0F","title":"P2C0F: Intake channel C circuit low is evaluated with drive applied","description":"Learn how P2C0F’s powered-output electrical classification differs from an unexpected Hall movement sequence.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-03b"],"sourcePages":[{"sourceId":"gm-2025-03b","pages":[906,907,908]}],"authoringBatch":"batch-18"}
---

# P2C0F: Intake channel C circuit low is evaluated with drive applied

P2C0F is the low electrical result for intake profile-position sensor C. The GM table describes a short-to-ground classification with the associated output commanded on. The same low signal observed after switch-off does not automatically have the same diagnostic meaning.

## Separate the electrical branch from performance

The voltage limits are controller-specific and correspond to impedance below 0.5 Ω toward controller ground. P2C0E instead evaluates the timing and legitimacy of Hall-state transitions, while P2C10 assesses high electrical behavior with the driver off. Those are different branches despite their shared C-channel designation.

A profile pin that appears inactive can be a consequence of an electrical drive problem. The low-circuit result does not independently establish that the mechanism is physically seized.

## Preserve the qualified on command

Supply above 11 V, diagnostic enablement and ignition in crank or run are required. Four failed samples among five establish the fault result. One-trip reporting refers to the reporting strategy, not proof that one voltage sample is sufficient.

Useful verification aligns the C-channel command, driver status and supply state. The published impedance is not an instruction to test resistance on a powered unknown connector. Hardware identification and safe circuit localization require the correct service procedure; the code alone cannot distinguish a wiring ground path from a connected component or controller defect.

## Source and applicability

2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG03B, PDF page 906](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=906). [25OBDG03B, PDF page 907](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=907). [25OBDG03B, PDF page 908](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=908).
