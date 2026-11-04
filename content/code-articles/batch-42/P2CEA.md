---
{"entryId": "generic-p2cea", "code": "P2CEA", "title": "P2CEA: identify Ford's particulate-pressure sensor D signal type first", "description": "Ford distinguishes the digital sensor-D circuit code from analog low/high codes and pressure-performance checks.", "status": "draft", "sourceReview": "checked", "scope": "Ford gasoline engines, model years 2024–2025. Engine/calibration applicability differs by section; individual vehicles and engines have not been mapped.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [7, 8, 9]}], "authoringBatch": "batch-42"}
---

# P2CEA: identify Ford's particulate-pressure sensor D signal type first

Ford lists P2CEA as particulate-filter pressure sensor D circuit in the digital SENT-sensor portion of its gasoline OBD summary. The signal type is a useful starting distinction. The same document assigns separate codes to analog sensor-D low, high and intermittent electrical conditions.

## The base code and subtype preserve different detail

For the digital circuit category, Ford shows the P2CEA_01 representation and a five-second monitoring duration. It separately lists U0697 for lost communication with sensor D. A circuit result and a missing-communication result should therefore remain distinct in the diagnostic record even when a generic scanner shortens both descriptions.

The analog low and high codes are also mapped to P2CEA subtypes in the summary. Those mappings do not mean an analog voltage threshold can be applied automatically to a digital SENT signal. The actual sensor implementation and the complete reported identifier matter.

## Electrical validity precedes pressure plausibility

Ford's range/performance check runs after the pressure-sensor electrical checks complete. That later monitor compares pressure behavior with offset, flow and derivative expectations. P2CEA's circuit category does not itself establish that the particulate filter is physically restricted or missing.

The source does not provide a complete code-specific connector test or assign sensor D a universal location for every Ford engine. The applicable vehicle procedure is required for those details. Useful verification confirms valid signal operation and then the availability of the relevant functional checks. Clearing P2CEA, seeing a plausible single pressure value or treating the sensor letter as a guaranteed bank/location assignment would not demonstrate that the original electrical problem has been resolved.

## Source and applicability

Ford Motor Company, [physical page 7](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=7); [physical page 8](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=8); [physical page 9](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=9). Ford gasoline engines, model years 2024–2025. Engine/calibration applicability differs by section; individual vehicles and engines have not been mapped.
