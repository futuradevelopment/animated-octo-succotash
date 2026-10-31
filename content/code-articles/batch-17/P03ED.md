---
{"entryId": "generic-p03ed", "code": "P03ED", "title": "P03ED: The third intake profile output is checked for a ground-directed fault", "description": "Learn why GM P03ED needs a valid on command and channel-specific feedback before it can guide an electrical investigation.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 03B documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file.", "sourceIds": ["gm-2025-03b"], "sourcePages": [{"sourceId": "gm-2025-03b", "pages": [439]}], "authoringBatch": "batch-17"}
---

# P03ED: The third intake profile output is checked for a ground-directed fault

P03ED is the low-circuit diagnostic for bank 1 intake profile actuator C. In the documented GM implementation, intake profile actuator 3 is powered on and its driver feedback is assessed for a short-to-ground condition. The fault identifies an electrical behavior on that output, not an observed mechanical cam-position error.

## Establish the commanded operating window

The driver uses controller-specific voltage thresholds corresponding to a signal-to-ground impedance below 0.5 Ω. This explains the classification without supplying a connector-level test method. An output that is intentionally inactive may have different expected feedback, so its low reading cannot be substituted for an on-state result.

The published enables require a commanded-on driver, supply above 11 V, an enabled diagnostic and crank/run ignition. Four failed samples within five produce the reported condition. The one-trip classification should not be mistaken for evidence that the circuit remained abnormal for the full trip.

## Avoid a bank-wide conclusion

Preserve the command and feedback for actuator 3 specifically, together with supply at the event. A healthy response from another profile channel cannot verify this one. If the evidence appears only during commands, retain that timing relationship for the applicable circuit investigation.

The source supports a ground-directed classification but does not locate its cause inside the actuator, harness or controller. It also gives no basis for replacing mechanical timing parts before resolving the electrical evidence.

## Source and applicability

2025 GM 03B documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file. [GM PDF, physical page 439](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03B.pdf#page=439).
