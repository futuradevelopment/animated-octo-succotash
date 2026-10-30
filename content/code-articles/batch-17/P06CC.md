---
{"entryId": "generic-p06cc", "code": "P06CC", "title": "P06CC: Cylinder 8 glow-plug rationality depends on both voltage and current feedback", "description": "Understand the calculated-resistance evidence behind GM P06CC and the channel-label limitation that must be resolved before selecting hardware.", "status": "draft", "sourceReview": "needs-review", "scope": "2025 GM 04A documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file.", "sourceIds": ["gm-2025-04a"], "sourcePages": [{"sourceId": "gm-2025-04a", "pages": [1005]}], "authoringBatch": "batch-17"}
---

# P06CC: Cylinder 8 glow-plug rationality depends on both voltage and current feedback

P06CC carries the generic description of an incorrect cylinder 8 glow plug. In the cited GM table, the controller assesses whether the plug's calculated electrical resistance remains inside its allowed range. That is a performance finding based on measured voltage divided by measured current, rather than proof of an incorrect replacement part.

## Command and feedback validity precede the comparison

The system requires an enabled glow function, an on command for a calibration-defined period and no relevant individual electrical fault. Its voltage-feedback circuitry must also be free of the specified fault. The engine must be running outside cranking, with supply in range and diagnostics enabled.

A resistance value derived while those prerequisites are missing is not equivalent to the monitor's eligible calculation. In particular, feedback problems can change the estimate even when the plug's actual characteristic has not been established.

## Resolve channel identity before physical testing

The row heading names cylinder 8, while its malfunction sentence says glow plug 4. That difference is retained as an unresolved source mapping. It must not become an instruction to test or replace a particular physical plug on an unspecified engine.

The documented confirmation is fifteen failures within twenty-five samples, evaluated on a 100-millisecond task, with two-trip reporting. Preserve the measurement and enable states alongside that result. Determining whether the plug characteristic, connection or measurement path is responsible still requires the appropriate vehicle-specific diagnostic procedure.

## Source and applicability

2025 GM 04A documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file. [GM PDF, physical page 1005](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04A.pdf#page=1005).
