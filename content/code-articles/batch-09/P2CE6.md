---
{"entryId": "generic-p2ce6", "code": "P2CE6", "title": "P2CE6: a downstream pressure signal that does not react to transients", "description": "P2CE6 detects insufficient downstream particulate-filter pressure signal variation when engine conditions should change it.", "status": "draft", "sourceReview": "checked", "scope": "Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately.", "sourceIds": ["gm-2025-04b"], "sourcePages": [{"sourceId": "gm-2025-04b", "pages": [885]}], "authoringBatch": "batch-09"}
---

# P2CE6: a downstream pressure signal that does not react to transients

P2CE6 checks whether the downstream relative-pressure sensor is stuck within its normal range. A numerically plausible pressure can still fail this monitor if it does not change when the engine's transient operation should produce a response.

## The controller needs an excitation event

The documented failing pressure variation is at or below 0.14% on the raw signal scale. The monitor qualifies engine movement and requires changes in engine speed, fueling and airflow, together with permission from the pipe-temperature model. The listed engine-speed variation exceeds 150 rpm per second.

These conditions are central to interpretation: a flat pressure trace at steady idle is not equivalent to a flat trace during a sufficiently large enabled transient. The decision uses 40 failed samples out of 50 at a 12.5-millisecond task interval. Electrical, offset and quick-change faults affecting the pressure and temperature information are excluded.

## Evaluate response, not just plausibility

Capture pressure together with the engine variables that should stimulate it. If those variables barely move, the test may not have had an opportunity to judge the sensor. If they change substantially while pressure remains fixed, the absence of response is the relevant observation.

The table does not prove whether the lack of response originates in the sensing element or the pressure path. Verification should show an appropriate responsive signal and a completed monitor under qualified transients. A static in-range voltage or pressure reading cannot by itself close a stuck-in-range diagnosis.

## Source and applicability

Documented 2025 GM gm-2025-04b monitor only; vehicle, engine and controller applicability must be established separately. [GM monitor table, PDF page 885](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=885).
