---
{"entryId": "generic-p2b5c", "code": "P2B5C", "title": "P2B5C: low supply at the coolant valve motor driver", "description": "P2B5C detects low voltage at the coolant flow valve motor driver despite qualified powertrain relay voltage.", "status": "draft", "sourceReview": "checked", "scope": "Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [854]}], "authoringBatch": "batch-09"}
---

# P2B5C: low supply at the coolant valve motor driver

The documented P2B5C monitor checks supply voltage at the engine coolant flow control valve's DC motor driver. It fails when that local supply is below 6 volts. The separate enable condition requires powertrain relay voltage above 11 volts, making the relationship between the two readings particularly useful.

## Compare local and upstream supply

A low motor-driver supply is not automatically the same as a low vehicle battery. In this calibration, the controller expects an adequately powered relay circuit while evaluating the local driver supply. If the event record supports that combination, investigation should account for the difference between those electrical points rather than assume a battery replacement resolves it.

The hardware input/output error indication must be determinate. The engine must be out of cranking and the diagnostic enabled. Confirmation is based on 80 failures out of 100 samples at 12.5 milliseconds per sample, so a brief isolated reading is not the complete diagnostic history.

## Interpreting valve behavior

Inadequate driver supply can make movement evidence difficult to interpret. Establish the supply condition before concluding that failure to reach a commanded position proves a mechanical valve problem. The source does not identify a universal fuse, connector or internal component responsible for the voltage loss.

Verification needs a satisfactory local supply while the relevant motor operation is requested and the monitor completes. Measuring healthy voltage elsewhere in the vehicle, or observing the valve at rest, does not demonstrate that the driver's own supply remains adequate during the monitored operation.

## Source and applicability

Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately. [GM monitor table, PDF page 854](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=854).
