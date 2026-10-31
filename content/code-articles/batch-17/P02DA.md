---
{"entryId": "generic-p02da", "code": "P02DA", "title": "P02DA: Cylinder 8 minimum offset is more than the latest correction number", "description": "Understand how GM P02DA retains lower-limit learning results by rail pressure and what a meaningful verification needs to establish.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 04A documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file.", "sourceIds": ["gm-2025-04a"], "sourcePages": [{"sourceId": "gm-2025-04a", "pages": [927, 928]}], "authoringBatch": "batch-17"}
---

# P02DA: Cylinder 8 minimum offset is more than the latest correction number

P02DA concerns the minimum offset-learning limit for cylinder 8's injector. The GM monitor evaluates the amount of energizing-time adjustment learned for small injections. A lower-limit result is evidence that the adaptation has reached a calibrated boundary, not a standalone diagnosis of a broken injector circuit.

## Learning history is part of the diagnostic evidence

Under the documented fuel-cut learning conditions, a known small injection produces a rail-pressure drop from which quantity is estimated. A newly learned correction is compared with the minimum allowed value, and its saturation state is saved for the applicable rail-pressure level.

The controller keeps multiple such states in nonvolatile memory. A single true saturation flag is sufficient for the minimum-authority condition, while all entries must be false for the source's stated unset condition. The stored map therefore matters even when the presently displayed correction appears acceptable.

## What a later check must demonstrate

Determine whether the pressure region associated with the failed learning result has received another valid learning opportunity. Merely watching a different region during ordinary running cannot establish that its saved boundary condition has changed.

The authority diagnostic and small-injection management are explicit enables. The source provides a calibratable lower limit rather than a common numeric value for every engine. Use that distinction when reviewing scan information: identify valid learning completion and the correct map state before drawing hardware conclusions. Any injector isolation or relearning action still needs vehicle-specific service instructions.

## Source and applicability

2025 GM 04A documented monitor only. Vehicle, engine and controller calibration applicability must be established separately; no model fitment is inferred from the file. [GM PDF, physical page 927](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04A.pdf#page=927); [GM PDF, physical page 928](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04A.pdf#page=928).
