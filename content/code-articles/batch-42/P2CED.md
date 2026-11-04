---
{"entryId": "generic-p2ced", "code": "P2CED", "title": "P2CED: Ford's analog sensor-D pressure signal exceeds its electrical limit", "description": "Ford defines the analog particulate-pressure sensor D high-circuit result separately from a physical exhaust-pressure or filter-restriction conclusion.", "status": "draft", "sourceReview": "checked", "scope": "Ford gasoline engines, model years 2024–2025. Engine/calibration applicability differs by section; individual vehicles and engines have not been mapped.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [7, 9]}], "authoringBatch": "batch-42"}
---

# P2CED: Ford's analog sensor-D pressure signal exceeds its electrical limit

P2CED is the high-circuit result for analog particulate-filter pressure sensor D in Ford's gasoline summary. The stated electrical condition is sensor voltage above 4.73 volts for five seconds. The code does not, by itself, establish that a particulate filter is blocked or that exhaust pressure is physically excessive.

## The reported subtype identifies the test family

Ford also represents this condition as P2CEA_17. The same base identifier has other subtypes for low and intermittent analog faults, while the digital SENT sensor uses separate circuit and communication categories. The complete code and sensor implementation should therefore be retained instead of reducing every report to sensor D fault.

The monitor evaluates the electrical signal continuously. Ford's functional pressure checks run after electrical checking has completed, so a failed high-circuit check can affect the validity or availability of later plausibility results. An apparently large pressure value derived from an invalid electrical input should not be treated as unquestionable hydraulic or exhaust evidence.

## Establish the signal's cause through the correct procedure

The summary does not prescribe a particular wire repair, sensor replacement or physical sensor-D location across all engines. Those details require the actual vehicle's service information. Related circuit and functional codes can help describe the event, but they do not eliminate the need to identify the implementation.

Verification should confirm valid analog signal behavior during the appropriate interval and the required subsequent monitoring. A cleared code or one ordinary pressure reading after the event does not demonstrate that the timed high-signal condition has been corrected. The published voltage is a diagnostic threshold, not a value to force onto a circuit during testing.

## Source and applicability

Ford Motor Company, [physical page 7](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=7); [physical page 9](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=9). Ford gasoline engines, model years 2024–2025. Engine/calibration applicability differs by section; individual vehicles and engines have not been mapped.
