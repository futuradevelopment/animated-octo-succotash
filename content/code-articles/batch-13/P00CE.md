---
{"entryId": "generic-p00ce", "code": "P00CE", "title": "P00CE: Why several air temperature readings are compared after a long soak", "description": "Interpret Ford P00CE as a start-up temperature correlation result and account for soak time and block-heater detection.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2024–2025 gasoline OBD operation summary, July 16 2024 revision; only the documented monitor variants. No individual model, engine or calibration fitment inferred.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [118, 119]}], "authoringBatch": "batch-13"}
---
# P00CE: Why several air temperature readings are compared after a long soak

P00CE identifies a multiple-sensor intake air temperature correlation result. In Ford's cited strategy, the comparison occurs at start-up after a long engine-off soak. The controller is evaluating whether the temperature picture is credible, rather than simply whether one sensor wire is electrically open.

## Recreate the relevant thermal state

The key-up correlation table requires six hours of engine-off time. Temperatures observed after a short stop can retain different amounts of engine and intake heat, so they do not reproduce this particular comparison. Preserve the initial readings before the engine changes them.

Ford includes coolant or cylinder-head temperature, intake temperatures, charge-air temperature and transmission fluid temperature among the prerequisites. It also uses the difference between cylinder-head and transmission temperature to infer a block heater: a head temperature at least 10°F higher is identified as the relevant indicator. That distinction matters when interpreting a cold-start mismatch.

## Do not borrow a single-sensor threshold

The following page describes separate out-of-range-hot checks for individual air temperature sensors. Their temperature limits and driving requirements are not presented as P00CE's multiple-sensor failure threshold.

The summary does not publish a complete numeric P00CE correlation decision rule on the cited page. Its useful guidance is the timing and context of the comparison. Record all involved temperatures, soak duration and possible external heating, then use the matching calibration procedure to determine which reading is implausible. The code alone does not identify the sensor to replace.

## Source and applicability

This explanation covers the cited Ford monitor variants, not every vehicle displaying this code. Match the engine, sensor architecture and calibration before applying numerical limits.

[Ford OBD summary, PDF page 118](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=118), [Ford OBD summary, PDF page 119](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=119).
