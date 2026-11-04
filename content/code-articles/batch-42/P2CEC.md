---
{"entryId": "generic-p2cec", "code": "P2CEC", "title": "P2CEC: Ford's analog particulate-pressure sensor D signal is too low", "description": "Ford's P2CEC example uses an analog electrical threshold and must be distinguished from digital SENT and pressure-performance reports.", "status": "draft", "sourceReview": "checked", "scope": "Ford gasoline engines, model years 2024–2025. Engine/calibration applicability differs by section; individual vehicles and engines have not been mapped.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [7, 9]}], "authoringBatch": "batch-42"}
---

# P2CEC: Ford's analog particulate-pressure sensor D signal is too low

Ford associates P2CEC with the low electrical signal from analog particulate-filter pressure sensor D. The documented condition is sensor voltage below 0.3 volt for five seconds. This describes an electrical signal boundary, not proof that exhaust pressure itself is unusually low.

## Confirm the analog implementation before using the threshold

The summary lists analog low, high and intermittent checks separately from digital SENT circuit and communication checks. It maps P2CEC to the P2CEA_16 subtype representation. Recording the complete identifier and the actual signal type prevents an analog voltage limit from being applied to a digital sensor's data line.

The continuous electrical check has no preceding monitor sequence in the table. Ford's later range/performance assessment, however, requires the electrical checks to complete first. An invalid low signal can therefore limit the usefulness of a separate pressure-plausibility conclusion.

## A circuit boundary does not identify a blocked filter

Ford's functional sensor checks compare pressure with offset and exhaust-flow expectations, while filter-condition monitors assess other relationships. P2CEC does not substitute for those tests and does not locate a particular wiring failure or justify replacing the filter from the code name.

The OBD summary provides the monitor condition but not the vehicle-specific connector arrangement or a universal sensor-D mounting position. Appropriate diagnosis uses the exact implementation and accompanying faults. Verification should establish valid analog signal behavior over the relevant interval and then confirm that the required functional checks are available. A single later voltage within range or an immediate fault-memory clear does not show that an intermittent low-circuit event has been resolved.

## Source and applicability

Ford Motor Company, [physical page 7](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=7); [physical page 9](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=9). Ford gasoline engines, model years 2024–2025. Engine/calibration applicability differs by section; individual vehicles and engines have not been mapped.
