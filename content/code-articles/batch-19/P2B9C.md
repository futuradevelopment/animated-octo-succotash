---
{"entryId": "generic-p2b9c", "code": "P2B9C", "title": "P2B9C: Pump A actuator-stuck status is narrower than a cooling-system diagnosis", "description": "Understand Ford P2B9C, its cabin-heating pump scope and its distinction from generic performance and electrical faults.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2024–2025 gasoline OBD summary, July 16, 2024 revision; only the described monitor and architecture. Model, engine and calibration fitment are not inferred.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [144]}], "authoringBatch": "batch-19"}
---

# P2B9C: Pump A actuator-stuck status is narrower than a cooling-system diagnosis

P2B9C is the actuator-stuck classification for coolant pump A in Ford’s example. The detailed representation is P2600_71, and A is defined as the high-temperature-loop auxiliary pump for cabin heating. This ties the code to a specific documented function rather than every water pump on a vehicle.

## Stuck and performance are separate categories

The table distinguishes P2B9C from P2601’s performance/stuck-off classification and from open, low and high electrical-circuit entries. Those distinctions should remain visible even when the immediate observation is simply that a pump does not appear to operate.

The common monitor runs continuously, lists five seconds and requires battery voltage of at least 11 V. A low-supply observation or an uncommanded stationary pump is not an equivalent reconstruction of the documented eligible check.

## Preserve command and status before inferring a cause

Record the complete subtype, requested operation, available feedback and any separate supply or temperature classifications. A reported actuator-stuck state does not establish which physical mechanism caused it.

Ford does not publish a stall-current value, rotor-motion tolerance or manual actuation test for this code in the summary. The applicable pump and circuit procedure is needed to determine whether the reported state is reproducible and what explains it. The code alone does not justify replacing the main engine pump, forcing the auxiliary rotor or assigning a cooling-system mechanical fault.

## Source and applicability

Ford 2024–2025 gasoline OBD summary, July 16, 2024 revision; only the described monitor and architecture. Model, engine and calibration fitment are not inferred. The monitor explanation does not identify a failed part or replace the applicable service procedure. [Ford PDF, page 144](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=144).
