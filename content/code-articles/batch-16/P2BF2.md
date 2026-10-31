---
{"entryId": "generic-p2bf2", "code": "P2BF2", "title": "P2BF2: Bank 2 port-injection correction above the lean limit", "description": "P2BF2 checks whether stabilized bank 2 port-fuel adaptation needs more positive correction than the documented limit allows.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [204, 205, 206, 207]}], "authoringBatch": "batch-16"}
---

# P2BF2: Bank 2 port-injection correction above the lean limit

P2BF2 applies to the bank 2 port-fuel-injection mixture-adaptation path in this monitor. Its threshold is a multiplicative correction above 1.27. The bank and injection-path identity are essential: a combined trim display or a value from another operating strategy may not be the quantity used for this decision.

## Stability before judgement

The source requires the local adaptation integrator to be stable. Pure port injection must have been active for more than two seconds, and bank 2 closed-loop control must be enabled. The subsequent stability check lasts at least six seconds and constrains the change in the port-injection adaptation value.

Other prerequisites include a warmed engine and sufficient injection events, while wide-open throttle and catalyst-heating lambda operation are excluded. This means an isolated lean excursion during a transition is not equivalent to the established adaptation condition described by the code.

## Use the bank-specific record

Preserve the bank 2 correction alongside its operating mode and compare with bank 1 only under equivalent conditions. If only one bank exceeds its learning limit, that is useful scope information; it still does not independently identify a defective component. A sensor, fuel-system or air-path cause must be established by the matching diagnostic procedure.

Follow-up should show that bank 2's port-injection learning has had another eligible opportunity to evaluate. Resetting adaptation can temporarily remove an excessive learned value without proving that the condition requiring it has gone. The table supports this distinction but does not prescribe an adaptation reset as a repair.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 204](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=204). [GM PDF, page 205](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=205). [GM PDF, page 206](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=206). [GM PDF, page 207](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=207).
