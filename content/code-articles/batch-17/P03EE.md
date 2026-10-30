---
{"entryId": "generic-p03ee", "code": "P03EE", "title": "P03EE: A high intake profile-C circuit result needs the on/off conflict resolved", "description": "Understand the supported meaning of GM P03EE and the source inconsistency that prevents assuming one reproduction command state.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 03B documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file.", "sourceIds": ["gm-2025-03b"], "sourcePages": [{"sourceId": "gm-2025-03b", "pages": [440]}], "authoringBatch": "batch-17"}
---

# P03EE: A high intake profile-C circuit result needs the on/off conflict resolved

P03EE identifies a high electrical condition on bank 1 intake profile actuator C. The GM table names the output intake profile actuator 3 and describes a connection toward controller power. That is a circuit classification rather than a finding that the actuator moved farther than requested.

## The strategy contains two different command descriptions

Both the monitoring narrative and malfunction description place the assessment in the driver's off state. The enable column, however, calls for an on command. A technician cannot reproduce both as one simultaneous state, and this article does not silently pick whichever seems more plausible.

The row consistently lists a signal-to-controller-power impedance below 0.5 Ω as the electrical specification, supply above 11 V, crank/run ignition and four failures in five samples. Those details describe the cited calibration, not a generic connector testing procedure.

## Resolve state before interpreting the voltage

Capture the actual command and feedback for intake profile actuator 3 when the event occurs. The matching service procedure must establish which state is intended for the high-circuit test. Without that confirmation, comparing the trace with the wrong expected behavior could misclassify a normal commanded voltage.

The available evidence still distinguishes a power-directed failure from the neighboring open and ground-directed classifications. It cannot identify the failed component or locate the physical actuator on an unspecified engine. Keep those questions separate until the correct circuit and controller information is available.

## Source and applicability

2025 GM 03B documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file. [GM PDF, physical page 440](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=440).
