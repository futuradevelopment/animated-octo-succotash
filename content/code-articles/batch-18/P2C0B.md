---
{"entryId":"generic-p2c0b","code":"P2C0B","title":"P2C0B: The intake B-channel low fault requires an energized output","description":"Understand P2C0B’s electrical conditions before treating a low feedback value as a mechanically stuck profile pin.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred.","sourceIds":["gm-2025-03b"],"sourcePages":[{"sourceId":"gm-2025-03b","pages":[901,903,904]}],"authoringBatch":"batch-18"}
---

# P2C0B: The intake B-channel low fault requires an energized output

P2C0B concerns the intake profile-position sensor B circuit’s low electrical result. GM describes a ground-short classification detected with the associated output powered on. The word low identifies the driver’s electrical behavior, not a lower camshaft profile or a pin that must be retracted.

## The command separates this fault from circuit high

The voltage comparison represents impedance below 0.5 Ω toward controller ground in the documented implementation. P2C0C uses an off command to evaluate a power-short classification. Mixing those command states would make the same voltage observation answer the wrong diagnostic question.

P2C09 is the separate B-channel open-circuit result. Keeping all three electrical labels distinct avoids attributing every inactive profile mechanism to one presumed hardware failure.

## Reproduce a qualified on-state check

The source requires supply above 11 V, ignition in crank or run, diagnostic enablement and an on command. Four failed samples out of five establish the result. The one-trip reporting class is not a replacement for that sampling requirement.

Preserve the B-channel command, electrical status and supply conditions. These monitor limits are not a connector pinout or instructions to load an unknown circuit. The summary does not identify the grounded path or establish whether wiring, a connected component or the output stage is at fault. Appropriate circuit information is needed for localization.

## Source and applicability

2025 GM 25OBDG03B documented monitor only. Vehicle, engine and calibration applicability must be confirmed from the matching service information; no model fitment is inferred. These criteria explain controller logic, not a complete repair procedure. [25OBDG03B, PDF page 901](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=901). [25OBDG03B, PDF page 903](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=903). [25OBDG03B, PDF page 904](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=904).
