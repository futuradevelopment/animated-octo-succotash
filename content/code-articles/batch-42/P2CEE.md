---
{"entryId": "generic-p2cee", "code": "P2CEE", "title": "P2CEE: Ford's particulate-pressure sensor D signal is intermittent or erratic", "description": "Ford separates analog sensor-D signal instability from steady low/high electrical faults and digital communication loss.", "status": "draft", "sourceReview": "checked", "scope": "Ford gasoline engines, model years 2024–2025. Engine/calibration applicability differs by section; individual vehicles and engines have not been mapped.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [7, 8, 9]}], "authoringBatch": "batch-42"}
---

# P2CEE: Ford's particulate-pressure sensor D signal is intermittent or erratic

Ford's P2CEE category identifies intermittent or erratic behavior from analog particulate-filter pressure sensor D. That description is distinct from a signal that stays below the low boundary or above the high boundary. It is also separate from the lost-communication code used for a digital SENT version of the sensor.

## Preserve the instability classification

The summary maps P2CEE to P2CEA_1F and places it in the continuous analog electrical-check family with a five-second monitoring duration. It does not give a separate numerical jump size or frequency-of-dropout threshold for the intermittent row. Those missing criteria should not be invented by combining the published low and high voltage limits.

This limitation still leaves useful diagnostic meaning: the controller reported signal reliability, not a direct measurement of a particular exhaust restriction. A normal reading after the event cannot, by itself, disprove a previous intermittent fault.

## Signal validity affects later pressure interpretation

Ford runs pressure range/performance checks after the electrical checks. Those functional tests examine offset and response to inferred exhaust flow. If the electrical input is unstable, the availability and validity of a later functional result need to be established rather than assumed.

A useful assessment retains the complete subtype, the analog sensor configuration and related circuit or functional findings. The source supplies no universal physical location for sensor D or connector-level repair instruction. Verification follows the exact vehicle procedure and confirms stable information through the relevant checks. Clearing P2CEE or seeing one plausible pressure value does not establish that the original intermittent pattern has been explained or that the filter itself was the failed component.

## Source and applicability

Ford Motor Company, [physical page 7](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=7); [physical page 8](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=8); [physical page 9](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=9). Ford gasoline engines, model years 2024–2025. Engine/calibration applicability differs by section; individual vehicles and engines have not been mapped.
