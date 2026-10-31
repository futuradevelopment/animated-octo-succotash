---
{"entryId": "generic-p2c1e", "code": "P2C1E", "title": "P2C1E: high-pressure pump control reaches its cold-start limits", "description": "Understand P2C1E: high-pressure pump control reaches its cold-start limits, with documented GM monitor criteria and diagnostic limits.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 03A diagnostic parameter document; the cited module and monitor only. Per-code vehicle, engine and calibration applicability is not established.", "sourceIds": ["gm-2025-03a"], "sourcePages": [{"sourceId": "gm-2025-03a", "pages": [685, 686]}], "authoringBatch": "batch-05"}
---

# P2C1E: high-pressure pump control reaches its cold-start limits

P2C1E identifies a limit in high-pressure fuel-pump control during catalyst warm-up in this GM ECM table. The controller checks pump delivery angle: reaching at least 134 degrees or falling to 0 degrees or below satisfies the stated malfunction criterion. It is a control-authority monitor, not a direct instruction to replace a fuel-pressure regulator.

## Why the operating phase matters

The test requires catalyst warm-up to be enabled and the engine not to be cranking. Battery voltage must be at least 11 V and low-side fuel pressure must exceed 0.275 MPa. The table also specifies atmospheric and temperature conditions. A pressure check on a fully warm engine therefore does not recreate the documented event.

The failure window is 10 seconds of failures within 12.5 seconds of samples, with Type B, two-trip reporting. A momentary approach to a delivery-angle limit is not equivalent to that accumulated result.

## Diagnostic interpretation

Preserve the pump command, desired and measured rail pressure, and warm-up state together. An angle at its limit describes the controller's exhausted adjustment range; it does not establish why that limit was reached. The source excludes relevant pressure-sensor and pump-circuit faults and several active service controls. Confirm those prerequisites before interpreting a successful retest. High-pressure fuel-system testing requires the vehicle-specific professional procedure; this table supplies no safe disassembly method.

## Source and applicability

[GM 03A, PDF page 685](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=685); [GM 03A, PDF page 686](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=686). This explanation covers the documented 2025 monitor. Confirm the vehicle's module, engine and calibration before applying these criteria; the document's vehicle list does not establish this code's applicability to every listed model.
