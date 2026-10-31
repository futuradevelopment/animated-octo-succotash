---
{"entryId": "generic-p2b5b", "code": "P2B5B", "title": "P2B5B: coolant valve motor circuit classified as shorted to power", "description": "P2B5B identifies a power-side fault classification in the engine coolant flow control valve motor circuit.", "status": "draft", "sourceReview": "checked", "scope": "Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [853]}], "authoringBatch": "batch-09"}
---

# P2B5B: coolant valve motor circuit classified as shorted to power

P2B5B checks whether a wire in the coolant flow control valve's DC motor circuit is shorted to power. The source describes hardware-supplied error information and motor-driver current exceeding 9 amperes. It does not describe an excessive coolant-temperature threshold.

## The hardware classification supplies the direction

High driver current by itself is not enough to distinguish every electrical fault. In this row, the hardware indication classifies the power-side condition, and the monitor requires that indication to be determinate. A scan tool reporting only current, without driver fault state or commanded operation, therefore shows an incomplete picture.

The decision uses 80 failed observations from 100 samples at 12.5 milliseconds per sample. It is enabled outside engine cranking with powertrain relay voltage above 11 volts and the diagnostic system active. Conditions recorded during cranking should not be treated as a direct reproduction of this enabled test.

## A targeted interpretation

Use the correct motor circuit and its controller-specific diagnosis to determine why the electrical response is classified as connected to power. The monitor does not establish whether the unwanted path lies in wiring, the actuator assembly or the controlling electronics. It also does not show whether the valve's hydraulic position is correct.

Verification should include commanded valve operation, a valid hardware error status and completion of the electrical monitor. If circuit behavior passes but position tracking remains poor, that remaining evidence belongs to a separate movement diagnosis. An apparently normal cooling-system temperature does not by itself close a motor-circuit-high investigation.

## Source and applicability

Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately. [GM monitor table, PDF page 853](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=853).
