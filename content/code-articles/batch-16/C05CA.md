---
{"entryId": "generic-c05ca", "code": "C05CA", "title": "C05CA: Master-cylinder position sensor A reports a high-range SENT error", "description": "C05CA is transmitted as a diagnostic status in the position sensor’s SENT slow channel, rather than defined here by a pin-voltage threshold.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [78]}], "authoringBatch": "batch-16"}
---

# C05CA: Master-cylinder position sensor A reports a high-range SENT error

C05CA concerns a high-range report from master-cylinder piston position sensor A in this source. The sensor communicates the fault through the slow channel of the SENT protocol. The controller is receiving a diagnostic status, not merely comparing a connector voltage with a threshold published in this row.

## Status is distinct from communication loss

The failure condition is the slow-channel error code reporting out-of-range high. It is qualified for 0.960 second with ignition on. The source gives separate communication-failure entries for absent or faulty SENT traffic, so a received range-error message and no message are different observations.

That distinction changes interpretation of scan data. A displayed position may not remain trustworthy when the sensor has reported its own range error. Equally, the high-voltage wording in the generic title does not supply a numerical voltage at which a technician should condemn the circuit.

## Keep diagnostic status with the position value

Preserve the slow-channel error, position validity and communication state if the tool provides them. Establish the sensor and channel identity using the application documentation before electrical testing. The table does not locate the sensor or identify whether the fault originates inside it or elsewhere in the signal path.

Brake-pedal and master-cylinder sensing require the prescribed professional diagnostic procedure. Do not substitute a guessed voltage or simulated position to silence the error. Verification should confirm valid sensor status and the relevant monitor completion, followed by the required braking checks. Erasing C05CA alone does not establish accurate pedal interpretation or safe brake assistance.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 78](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=78).
