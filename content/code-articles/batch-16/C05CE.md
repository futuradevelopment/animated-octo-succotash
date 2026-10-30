---
{"entryId": "generic-c05ce", "code": "C05CE", "title": "C05CE: Position sensor B’s PWM input remains low", "description": "C05CE is a persistent-low PWM signal diagnosis for master-cylinder position sensor B, not a direct low-travel measurement.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [78]}], "authoringBatch": "batch-16"}
---

# C05CE: Position sensor B’s PWM input remains low

C05CE belongs to the master-cylinder piston position sensor B PWM interface. The source detects a permanently low line and describes the condition as shorted toward ground. The fault concerns loss of the expected switching signal, not simply the piston being near its released position.

## A continuous low state is the evidence

The listed qualification is 0.2 second with ignition on. A normal low portion within a PWM cycle is not the same as the permanent-low condition described by this row. Signal timing and validity therefore matter when interpreting an electrical measurement.

The source separately monitors PWM frequency and duty-cycle faults. Those diagnoses can involve a signal that still switches but has invalid timing; C05CE concerns the low state persisting. The summary does not give a universal terminal voltage that substitutes for this distinction.

## Match the interface before testing

Confirm that the application uses the documented PWM channel B, and preserve its validity state together with any position-correlation or communication faults. A converted travel reading after input rejection may not represent the live signal accurately enough to verify the circuit.

Brake-position feedback testing requires the vehicle's professional service procedure and correct connector information. Do not short the signal or bypass its diagnostic to imitate a released pedal. Confirmation should establish valid waveform behaviour during the monitor and the prescribed braking-system checks. A code erase or one apparently normal pedal reading does not prove restored feedback integrity or safe braking assistance.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 78](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=78).
