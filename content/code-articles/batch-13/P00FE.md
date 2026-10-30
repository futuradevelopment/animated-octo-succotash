---
{"entryId": "generic-p00fe", "code": "P00FE", "title": "P00FE: A restricted EVAP vapor line is evaluated in two stages", "description": "Understand Ford P00FE blocked-line screening, intrusive confirmation and why an uncompleted Mode $06 result can show zero.", "status": "draft", "sourceReview": "checked", "scope": "Ford 2024–2025 gasoline OBD operation summary, July 16 2024 revision; only the documented monitor variants. No individual model, engine or calibration fitment inferred.", "sourceIds": ["ford-gasoline-2024-2025-v2"], "sourcePages": [{"sourceId": "ford-gasoline-2024-2025-v2", "pages": [20]}], "authoringBatch": "batch-13"}
---
# P00FE: A restricted EVAP vapor line is evaluated in two stages

P00FE identifies an EVAP tank vapor line restriction or blockage in Ford's documented strategy. The summary notes that it replaces the older P144A designation. It is a pressure-response diagnosis, not simply a synonym for an evaporative-system leak.

## Screening and confirmation are different tests

The monitor begins screening in phase 0 of the 0.040-inch cruise EVAP test. It then uses an intrusive check in phases 3 and 4 to confirm the fault. A preliminary pressure observation therefore should not be treated as equivalent to a completed confirmation.

For the intrusive portion, Ford requires sufficient airflow and manifold vacuum, closed-loop fueling and active canister purge. The listed minima include 1.5 pounds per minute of airflow and five inches of mercury of manifold vacuum. Those conditions explain why a parked engine or a disabled purge command may not reproduce the test.

## Interpret the recorded response correctly

The source lists a negative pressure-response threshold, but exposes two different diagnostic results: screening rate in Pa/sec and confirmation pressure in Pa. Their units describe different quantities, so the values cannot be compared as though they were interchangeable.

Ford explicitly warns that default zero values can appear when an EVAP phase has never completed. Check completion and the correct phase before calling zero a pass. The monitor summary establishes a restriction-related pressure pattern; it does not identify which hose, valve or canister passage requires repair on a particular vehicle.

## Source and applicability

This explanation covers the cited Ford monitor variants, not every vehicle displaying this code. Match the engine, sensor architecture and calibration before applying numerical limits.

[Ford OBD summary, PDF page 20](https://www.fordservicecontent.com/Ford_Content/catalog/motorcraft/OBDSM2400OUTPUT_16Jul2024_WSM_final_V2_MCS7001.pdf#page=20).
