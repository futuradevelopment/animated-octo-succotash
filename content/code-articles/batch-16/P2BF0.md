---
{"entryId": "generic-p2bf0", "code": "P2BF0", "title": "P2BF0: Excessive positive adaptation on bank 1 port injection", "description": "P2BF0 concerns the multiplicative correction of the bank 1 port-fuel-injection path after its adaptation has stabilized.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [209, 210, 211]}], "authoringBatch": "batch-16"}
---

# P2BF0: Excessive positive adaptation on bank 1 port injection

P2BF0 is the lean-direction limit for bank 1's port-fuel-injection adaptation in this source. The documented quantity is a multiplicative mixture-correction factor. It is not simply the instantaneous oxygen-sensor voltage or every fuel-trim value a generic scan tool may display.

## The injection path must be active

The failure threshold is a correction factor above 1.27. The local port-injection adaptation integrator must be stable, and pure port injection must have been active for more than two seconds. The supporting conditions include a warmed engine, sufficient injection events and active closed-loop control.

A stability check of at least six seconds and a limited change in the adaptation value help prevent an arbitrary transient from being treated as the learned condition. Wide-open throttle and catalyst-heating operation are among the excluded circumstances. The full enable expression contains further calibration-dependent conditions.

## Interpret the right correction value

Record bank 1's port-injection operating state and the relevant multiplicative adaptation together. A correction captured while another injection strategy is active cannot automatically explain this monitor. Comparing banks is useful context only if the same operating and learning conditions are represented.

The result shows that the permitted positive adaptation was exceeded; it does not distinguish air measurement, fuel delivery or sensor causes by itself. Verification requires the relevant injection path and adaptation monitor to run again. Clearing learned values without resolving the reason for correction can remove evidence while leaving the underlying problem untested.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 209](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=209). [GM PDF, page 210](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=210). [GM PDF, page 211](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=211).
