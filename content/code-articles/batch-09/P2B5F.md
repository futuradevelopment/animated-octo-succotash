---
{"entryId": "generic-p2b5f", "code": "P2B5F", "title": "P2B5F: coolant valve position data above its SENT range", "description": "P2B5F detects an excessively high raw position value from the coolant flow control valve sensor.", "status": "draft", "sourceReview": "checked", "scope": "Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [856]}], "authoringBatch": "batch-09"}
---

# P2B5F: coolant valve position data above its SENT range

P2B5F is the upper-range diagnosis for the coolant flow control valve position sensor in this GM table. The controller compares the SENT raw position value with a limit above 98% on the published “%5V” scale. It does not directly diagnose excessive coolant pressure or temperature.

## A high data value needs an intact communication path

The listed prerequisites require no SENT communication-loss fault. This means the monitor distinguishes an out-of-range reported position from a sensor that has stopped communicating. Preserve that distinction when interpreting a scan tool: substituted values or stale displays during a communication fault are not necessarily the original raw input.

The table uses 80 failures out of 100 samples at a 6.25-millisecond rate. Powertrain relay voltage must exceed 11 volts, the engine must not be cranking and the diagnostic system must be enabled.

## Separate range from physical travel

A value at the top of a data range does not, by itself, prove that the valve physically reached its open stop. Compare the raw position channel with commanded operation and the applicable learned endpoints before treating the code as a stuck-valve diagnosis. The source supplies no connector pinout or universal voltage test for this digitally communicated measurement.

Verification should exercise the position signal while SENT communication remains valid and confirm that the upper-range monitor passes. If the data returns to range but valve tracking remains incorrect, the remaining discrepancy requires its own evidence. Clearing P2B5F without observing a completed range check leaves that distinction unresolved.

## Source and applicability

Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately. [GM monitor table, PDF page 856](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=856).
