---
{"entryId": "generic-p2b5e", "code": "P2B5E", "title": "P2B5E: coolant valve position data below its SENT range", "description": "P2B5E identifies a low raw position value received from the coolant flow control valve over SENT.", "status": "draft", "sourceReview": "checked", "scope": "Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [855]}], "authoringBatch": "batch-09"}
---

# P2B5E: coolant valve position data below its SENT range

P2B5E checks the lower range of the engine coolant flow control valve position signal. The cited strategy evaluates a SENT raw position value below 2% on the table's “%5V” scale. This is a received position-data limit; the source does not provide a universal analog connector test voltage.

## Range failure versus lost communication

The monitor requires the SENT communication-loss fault to be false. That is a crucial distinction: this code evaluates data that the position-sensor interface is still delivering, while a missing communication stream is a different condition. A scan-tool display of zero after a communication failure is therefore not enough to reproduce this range monitor.

Its failure decision uses 80 observations out of 100 at a 6.25-millisecond interval. The test is enabled with powertrain relay voltage above 11 volts, no engine cranking and the diagnostic system active.

## Read raw data before interpreting movement

Determine whether the received raw value is truly below its permitted range under valid communication conditions. Do not immediately equate it with a physically fully closed valve: the monitor labels the electrical/data range, not a verified mechanical endpoint. Commanded position, learned travel information and received raw feedback can answer different questions.

The table does not establish whether the sensor element, its supply or another part of the signal path caused the out-of-range value. Follow the exact sensor architecture's procedure to isolate that cause. Verification should show valid SENT communication and raw position remaining in range while the relevant operation exercises the sensor.

## Source and applicability

Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately. [GM monitor table, PDF page 855](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=855).
