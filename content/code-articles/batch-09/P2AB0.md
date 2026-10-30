---
{"entryId": "generic-p2ab0", "code": "P2AB0", "title": "P2AB0: particulate sensor internal current-range checking", "description": "P2AB0 concerns an internal particulate sensor current-measurement check during the documented regeneration phase.", "status": "draft", "sourceReview": "needs-review", "scope": "Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [1530]}], "authoringBatch": "batch-09"}
---

# P2AB0: particulate sensor internal current-range checking

P2AB0 is called particulate matter sensor processor performance. The cited strategy narrows that description to internal errors in the sensor control unit's current switcher. It examines electrode-current measurements across small and large measurement ranges rather than directly judging how much particulate matter the vehicle emits.

## When the self-check is meaningful

The source enables the check during the soot sensor's regeneration phase, with the sensor bus relay commanded on and electrode-current measurement enabled. It also requires no relay electrical fault, no CAN communication loss, no sensor electrical fault and no transmission fault with the sensor control unit. Those prerequisites separate an internal measurement test from a sensor that is simply unavailable.

A useful first distinction is therefore whether the sensor was communicating and participating in regeneration when the event occurred. If a related supply or communication fault is active, resolve its effect on the measurement state before interpreting an internal-performance result. The monitor depends on operating phase, so a normal-looking current value outside regeneration may not exercise it.

## Limits of the published criteria

The extracted table does not preserve a complete, unambiguous numeric expression for every current-range bound. No substitute thresholds are invented here. The supported conclusion is an internal range-consistency diagnosis under the listed prerequisites, not a universal current specification or automatic replacement instruction.

Verification should establish valid sensor supply, communication and measurement state, then obtain a completed internal check during its enabled phase. A particulate-filter efficiency judgment requires separate evidence; this processor code does not supply it.

## Source and applicability

Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately. [GM monitor table, PDF page 1530](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1530).
