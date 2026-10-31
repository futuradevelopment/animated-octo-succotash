---
{"entryId": "generic-p0bcd", "code": "P0BCD", "title": "P0BCD: ISG temperature-sensor faults summarized by the PCM", "description": "The documented Mazda P0BCD procedure covers iSG temperature-sensor faults summarized by the PCM.", "status": "draft", "sourceReview": "checked", "scope": "Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-G (WITH Mazda M Hybrid)). Verify exact vehicle specification; this is a Mazda application example.", "sourceIds": ["mazda3-2019-id0102t46816u2"], "sourceLocators": [{"sourceId": "mazda3-2019-id0102t46816u2", "locator": "DTC P0BCD:00 [PCM (SKYACTIV-G (WITH Mazda M Hybrid))]; id0102t46816u2; detection conditions and diagnostic procedure"}], "authoringBatch": "batch-37"}
---

# P0BCD: ISG temperature-sensor faults summarized by the PCM

P0BCD ordinarily describes generator inverter temperature sensor A range/performance. Mazda's M Hybrid PCM diagnostic page uses this code as an umbrella for temperature-sensor faults stored in the integrated starter generator.

## Do not infer a single overheated phase

The PCM page groups characteristic, low-input and high-input faults for the ISG's internal FET temperature sensors across several phases, together with control-board temperature-sensor faults. Its triggering list contains P0BCD and multiple additional ISG codes. A PCM report alone therefore does not isolate a phase or establish that the generator has actually overheated.

The distinction is between temperature measurement and measured temperature. An unreliable sensor circuit can disable thermal monitoring even when the code provides no evidence of excessive operating temperature. Retrieve the originating ISG code to determine which condition the generator actually recorded.

## Consequences and verification

Mazda inhibits conventional generation, i-stop, regeneration, motor assistance and non-generation control for this PCM summary. Several unavailable functions may reflect that shared protective response.

The diagnostic flow sends the technician to the ISG's own DTC procedure. If only the PCM retains the record, the manual recognizes a past-fault branch; preserve the records before clearing them. Its PCM confirmation includes ignition on with the engine off and a recurrence check. No internal sensor voltage limit is supplied by this summary page. Internal generator work requires the appropriate professional hybrid-system procedure rather than speculative temperature-sensor replacement.

## Documented application

Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-G (WITH Mazda M Hybrid)). Verify exact vehicle specification; this is a Mazda application example. [Mazda factory diagnostic page, mirrored by CHARM](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id0102t46816u2.html).
