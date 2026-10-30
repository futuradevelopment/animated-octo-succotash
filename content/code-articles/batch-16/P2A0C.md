---
{"entryId": "generic-p2a0c", "code": "P2A0C", "title": "P2A0C: A low bank 2 manifold-pressure input", "description": "P2A0C identifies a low raw voltage from the documented bank 2 manifold-pressure sensor, with a separate time qualification.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred.", "sourceIds": ["gm-2025-07a-2"], "sourcePages": [{"sourceId": "gm-2025-07a-2", "pages": [633]}], "authoringBatch": "batch-16"}
---

# P2A0C: A low bank 2 manifold-pressure input

The documented P2A0C test watches raw voltage from the bank 2 intake-manifold pressure sensor. It is an electrical signal-range check. It should not be read as a direct declaration that manifold pressure itself is too low or that the engine has a particular air leak.

## The published failure boundary

In this calibration summary, raw sensor voltage below 0.5 V is the failure criterion and the listed time is 1.5 seconds. The source assigns a one-trip response while referring readers to separate basic-enable and diagnostic-inhibit tables. Those references mean the voltage criterion is only part of the monitor's complete operating context.

A displayed pressure value may be less informative than the raw voltage and signal-status information when the controller has rejected an input. Preserve the event conditions and determine whether the low input persisted through the relevant observation, rather than interpreting one instantaneous reading as the entire fault decision.

## Distinguish range from plausibility

P2A0B on the same page evaluates cross-check and variation faults; P2A0C instead has a stated low electrical limit. This distinction prevents a pressure-comparison test from being treated as conclusive evidence about an out-of-range input.

The table supplies no connector pin assignments, sensor transfer curve or approved replacement diagnosis. Do not apply its voltage number to a different vehicle without matching the controller and calibration. Confirmation requires a valid signal during an enabled monitor evaluation, followed by the specified diagnostic completion check; clearing the code alone does not provide that evidence.

## Source and applicability

2025 GM 07A-2 documented monitor only; module and calibration applicability must be matched to the vehicle. The application-matrix filename join remains unresolved; no model or engine fitment is inferred. [GM PDF, page 633](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=633).
