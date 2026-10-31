---
{"entryId": "generic-c05cb", "code": "C05CB", "title": "C05CB: A low-range status message from master-cylinder position sensor A", "description": "C05CB reports the sensor’s SENT slow-channel low-range error, which differs from a permanently low communication line.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [78]}], "authoringBatch": "batch-16"}
---

# C05CB: A low-range status message from master-cylinder position sensor A

C05CB is the low-range diagnostic report from master-cylinder piston position sensor A. In the cited strategy, that information arrives in the SENT slow-channel message. A sensor reporting that its measurement is out of range is different from a wire that carries no usable messages.

## What the receiver checks

The monitor accepts the sensor's out-of-range-low error code for 0.960 second with ignition on. A separate communication diagnosis covers line and transmission failures. The C05CB row provides no raw voltage threshold, despite the generic circuit-low wording.

A low displayed piston position is not itself a failure; normal released-pedal operation can involve low travel. The diagnostic status is what distinguishes this fault from a legitimate position near the lower end of movement. Preserve that status instead of judging only the converted travel number.

## A focused service question

Determine whether the sensor sent a low-range error while communication remained valid, or whether additional communication problems were present. That distinction helps select the correct application test and avoids treating every low-related code as a ground short.

The source does not authorize applying voltage to the SENT line or replacing the position sensor without diagnosis. Brake-system sensing requires the exact professional procedure and any prescribed calibration checks. Verification should show the sensor's error status cleared through a valid monitor evaluation, plus the required braking-system assessment. A code erase or a normal-looking position reading alone cannot establish restored accuracy or safe operation.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 78](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=78).
