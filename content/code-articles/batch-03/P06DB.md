---
{"entryId": "generic-p06db", "code": "P06DB", "title": "P06DB: oil-pump control voltage is low in the off state", "description": "P06DB is the oil-pressure control circuit-low monitor in the cited low-side driver system.", "status": "draft", "sourceReview": "checked", "scope": "Documented monitors in gm-2025-03a, model year 2025. These are module/calibration examples; vehicle, engine and transmission applicability must be confirmed independently.", "sourceIds": ["gm-2025-03a"], "sourcePages": [{"sourceId": "gm-2025-03a", "pages": [428]}], "authoringBatch": "batch-03"}
---

# P06DB: oil-pump control voltage is low in the off state

P06DB is the oil-pressure control circuit-low monitor in the cited low-side driver system. The defining electrical observation is a ground-short signature while the oil-pump control output is off.

## The command state is decisive

A low control voltage is not inherently faulty in every operating state. This diagnostic evaluates it when the driver should be off. Its detection specification is less than 0.5 ohm from output to controller ground, interpreted through controller-specific voltage thresholds.

The controller requires powertrain relay voltage above 11 volts, run/crank active and no cranking. It accumulates at least forty errors out of fifty samples at a one-hundred-millisecond interval. A transient or a reading outside those enabling conditions is not equivalent to a confirmed failure.

## Avoid a mechanical conclusion from an electrical code

This row does not measure oil pressure. It cannot by itself establish excessive pressure, insufficient lubrication or an internally worn pump. GM also warns that P06DA may accompany this code in certain controllers, so the open/low pair can reflect overlapping circuit detection.

Record the command state, driver result and related codes before selecting the specific electrical service procedure. Verification should include a passing off-state circuit diagnostic under the correct supply conditions. Resolve any separate lubrication concern using the prescribed mechanical checks; do not treat clearing this code as proof of adequate oil pressure or bypass the controller to force an operating mode.

## Source and applicability

Documented monitors in gm-2025-03a, model year 2025. These are module/calibration examples; vehicle, engine and transmission applicability must be confirmed independently. [GM 2025-03a, page 428](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=428).
