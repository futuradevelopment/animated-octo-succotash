---
{"entryId": "generic-p2dc7", "code": "P2DC7", "title": "P2DC7: Excitation-current diagnosis through rotor resistance evidence", "description": "P2DC7 includes a rotor-coil resistance check, but the published row leaves part of its criterion unspecified.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [553]}], "authoringBatch": "batch-16"}
---

# P2DC7: Excitation-current diagnosis through rotor resistance evidence

P2DC7 appears under alternator control as a starter/generator excitation-current diagnosis. The source associates it with rotor-coil resistance, rather than simply comparing the battery terminal voltage with a charging target. That distinction helps prevent a charging complaint from being reduced to one battery-voltage reading.

## What is documented and what is missing

The row prints a lower resistance comparison of 0.51, followed by an alternative rotor-resistance condition with no visible limit. The units and the second threshold are not supplied in the rendered primary page. It would therefore be unsafe to publish 0.51 as a complete external resistance specification or invent the missing upper bound.

The source does clearly list ignition on, basic enabling conditions, a 1,000-event qualification and a two-trip response. An event count is not a test duration in seconds. These details establish the monitor's broad evaluation context without supplying an approved coil-measurement procedure.

## Focus the next evidence request

Obtain the exact controller's excitation diagnostic and service specification before measuring or condemning the rotor. Preserve any available excitation-current, charging-request and related fault information so that the circuit concern can be distinguished from a simple output-voltage complaint.

Verification must use the completed applicable monitor and its actual calibrated limits. A battery voltage that looks normal briefly does not independently validate rotor resistance, while this incomplete summary does not justify replacing the alternator. Electrical access and disconnection must follow the vehicle procedure.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 553](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=553).
