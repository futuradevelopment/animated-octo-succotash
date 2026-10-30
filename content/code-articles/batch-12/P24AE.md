---
{"entryId": "generic-p24ae", "code": "P24AE", "title": "P24AE: Particulate-sensor current stays too high after sensor regeneration", "description": "Ford diesel P24AE assesses electrode current after the sensor’s cleaning phase, within a defined measuring-temperature window.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2023–2024 diesel OBD summary, revised August 25, 2023; these are documented monitor examples, not confirmed fitment or universal thresholds for every vehicle carrying this generic code.", "sourceIds": ["ford-diesel-2023-2024"], "sourcePages": [{"sourceId": "ford-diesel-2023-2024", "pages": [31]}], "authoringBatch": "batch-12"}
---

# P24AE: Particulate-sensor current stays too high after sensor regeneration

P24AE is particulate-matter sensor circuit in Ford’s diesel summary. The documented check looks for **sensor current above 5 microamps after particulate-sensor regeneration**. The operating sequence matters: this is an electrode-current assessment after the sensor’s own regeneration, not a direct estimate of DPF soot mass.

## The post-regeneration state provides the test context

Ford lists a 120-second typical monitoring duration. The entry table requires key-on, battery voltage from 11 to 16 V, sensor state set to measurement, and particulate-sensor temperature between 200 and 425°C.

Those conditions distinguish the check from nearby P24AF, which evaluates very low current during the sensor regeneration phase at a much higher listed temperature. A current value cannot be interpreted correctly without knowing whether the sensor was cleaning itself or measuring exhaust particulate afterward.

## What the result can support

A useful diagnostic record preserves regeneration completion, the sensor’s subsequent state, temperature, and current evidence. An isolated current reading captured during the wrong phase does not reproduce the monitor defined for P24AE.

Ford requires valid exhaust-temperature information for the electrode checks. Supporting temperature or operating-state faults should therefore remain visible in the investigation. The summary does not identify a specific contamination source, prove the DPF is damaged, or prescribe cleaning or replacement of the sensor. It establishes an abnormal post-regeneration electrical response that must be followed using the correct vehicle’s particulate-sensor diagnostic procedure.

## Source and applicability

This explanation follows Ford’s 2023–2024 diesel OBD summary. Match the vehicle’s engine and calibration before applying these monitor values; a generic code alone does not establish fitment. [Ford PDF, page 31](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/DOBDSM2300_2_MCS6938.pdf#page=31).
