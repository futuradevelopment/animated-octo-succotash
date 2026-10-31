---
{"entryId": "generic-p2b5a", "code": "P2B5A", "title": "P2B5A: coolant valve motor circuit classified as shorted to ground", "description": "P2B5A uses motor-driver hardware feedback to identify a ground-side fault in the coolant flow control valve circuit.", "status": "draft", "sourceReview": "checked", "scope": "Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [852]}], "authoringBatch": "batch-09"}
---

# P2B5A: coolant valve motor circuit classified as shorted to ground

The P2B5A strategy checks whether a DC motor wire for the engine coolant flow control valve is shorted to ground. The table describes a driver-current threshold above 9 amperes and an error classification supplied by hardware input/output circuitry.

## Why “circuit low” does not mean low coolant flow

The code's low designation concerns the electrical fault classification. It does not mean that coolant flow was measured below a target. Nor does the overcurrent threshold alone determine the fault direction: the controller also relies on the hardware error indication. Applying the title to a coolant-temperature complaint without electrical evidence would misread the monitor.

The hardware indication must be determinate. The engine must not be cranking, relay voltage must exceed 11 volts and the diagnostic must be enabled. The listed decision requires 80 failures in 100 samples at a 12.5-millisecond interval.

## Distinguish the event from a damaged component

Review the driver's reported error state together with its command and supply conditions. A ground-side circuit classification points toward the appropriate electrical diagnosis, but it does not independently identify an external wire or an internal driver as the cause. The exact circuit drawing and approved isolation procedure are needed to make that distinction.

After correction, confirm that the driver operates without the ground-short classification while the monitor runs. Valve-position performance may need separate verification if movement remains abnormal. Replacing a valve merely because its position is stationary would not establish which part of the electrical path produced P2B5A.

## Source and applicability

Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately. [GM monitor table, PDF page 852](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=852).
