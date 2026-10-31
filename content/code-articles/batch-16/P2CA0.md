---
{"entryId": "generic-p2ca0", "code": "P2CA0", "title": "P2CA0: Regulator D low-pressure control error and fuel-reserve context", "description": "P2CA0 monitors positive filtered rail-pressure deviation and includes separate branches for normal and reserve fuel-tank states.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [728, 729, 730]}], "authoringBatch": "batch-16"}
---

# P2CA0: Regulator D low-pressure control error and fuel-reserve context

P2CA0 is the regulator D pressure-too-low control-limit code in this application. The published failure quantity is a filtered rail-pressure control deviation greater than 3 MPa. It is a signed difference within regulation, not a fixed minimum rail-pressure specification for every engine condition.

## A persistent error with operating prerequisites

The main branch lists a five-second qualification and a one-trip response. A further branch covers the fuel tank empty or reserve state and uses the same displayed deviation threshold and duration. Tank state therefore remains relevant context even though these particular numerical limits match.

The common conditions require the rail-pressure signal to be plausible and regulation to be in an eligible operating state. Pump activity, injection readiness, synchronization and cold-start diagnostic restrictions all appear in the continuation. Pressure data from an inhibited state cannot by itself demonstrate a completed pass.

## What a useful record contains

Capture desired pressure, actual pressure, control-deviation value and tank-state information together. Verify the sign convention of the reported error before concluding that a positive number means pressure itself is high. The generic low-pressure description and the positive error can describe the same event under the controller's convention.

The monitor does not isolate a fuel pump, regulator or leak as the cause. Use the matching high-pressure system procedure for any physical investigation. Verification should include an eligible regulation interval with the required comparison completed; filling the tank, clearing the code or observing normal idle pressure alone does not establish which original branch failed or why.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 728](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=728). [GM PDF, page 729](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=729). [GM PDF, page 730](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=730).
