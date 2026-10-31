---
{"entryId": "generic-c05cd", "code": "C05CD", "title": "C05CD: Master-cylinder position sensor B’s PWM line remains high", "description": "C05CD detects a permanently high PWM signal on position channel B, unlike sensor A’s message-based range reports.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [78]}], "authoringBatch": "batch-16"}
---

# C05CD: Master-cylinder position sensor B’s PWM line remains high

C05CD concerns the PWM line from master-cylinder piston position sensor B. The documented monitor detects a line that remains permanently high and describes this as a short toward supply. It is not a judgement that the piston has physically reached an excessive travel position.

## A missing transition pattern

A normal PWM signal conveys information through changes between electrical states. This code's criterion is a persistent high state instead of the expected switching pattern. The table lists a 0.2-second qualification with ignition on and a one-trip response.

This channel differs from the sensor A entries on the same page, which receive range-error information through SENT. Applying a SENT message test to the PWM channel, or inventing a shared voltage threshold for both, would ignore the documented interface difference.

## Preserve waveform validity, not just travel

Retain the channel-B signal-validity state and any communication or position-correlation faults. A calculated travel value may be substituted or invalid after the PWM input is rejected, so it cannot independently prove that the original signal is healthy.

The summary does not provide pin assignments, input voltage limits or a safe probing arrangement. Follow the exact brake-system diagnostic procedure; do not apply supply voltage to recreate the condition. Verification must show valid switching during an eligible monitor interval and complete the required braking checks. Erasing the code or seeing a plausible pedal-position display does not establish that the electrical feedback needed for brake control has recovered.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 78](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=78).
