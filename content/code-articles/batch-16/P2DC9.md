---
{"entryId": "generic-p2dc9", "code": "P2DC9", "title": "P2DC9: High excitation current is distinct from high charging voltage", "description": "P2DC9 identifies an excitation-current concern, but its numerical threshold must be obtained from application-specific service information.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [553, 554]}], "authoringBatch": "batch-16"}
---

# P2DC9: High excitation current is distinct from high charging voltage

P2DC9 is the starter/generator excitation-current-high entry in this GM document. The monitored quantity is alternator excitation current. The code should not be translated automatically into an overcharged battery diagnosis, because field current and battery voltage are different parts of generator control.

## The source does not publish a complete limit

The row identifies the failure quantity but leaves its threshold blank. Battery-voltage and LIN generator setpoint conditions continue onto the next page without usable numerical limits. The omission is visible in the original PDF. No current value or charging-voltage target is invented here to make the summary appear complete.

The available row lists ignition on, 1,000 events and a two-trip response. Those events are not documented as seconds or a particular number of engine revolutions. The application service diagnostic is necessary to learn how the event qualification and current comparison are actually performed.

## Interpret the stored event with its request

Retain any available excitation-current status, voltage request and related generator communication information. A high field-control demand under one operating condition may have a different meaning from a current report that exceeds its calibrated limit. Without the missing criterion, this source cannot independently classify an external measurement.

The code does not identify a replacement alternator, regulator or battery. Confirmation must show the specified current diagnostic completing successfully in the correct operating state. A single acceptable battery-voltage measurement after clearing is useful context, but is not proof that the high-excitation-current monitor passed.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 553](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=553). [GM PDF, page 554](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=554).
