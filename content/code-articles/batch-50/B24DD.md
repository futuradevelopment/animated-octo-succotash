---
{"entryId": "nissan-b24dd", "code": "B24DD", "title": "B24DD: A battery-heater interlock fault is distinct from heater overheating", "description": "Nissan B24DD-19 monitors the battery coolant heater high-voltage interlock and directs its connector-circuit inspection.", "status": "draft", "sourceReview": "checked", "scope": "Nissan Ariya FE0 factory-manual thermal management procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.", "sourceIds": ["nissan-ariya-fe0-thermal-20261102"], "sourceLocators": [{"sourceId": "nissan-ariya-fe0-thermal-20261102", "locator": "B24dd-19 Battery Coolant Heater > DTC Description, Confirmation Procedure and DTC Diagnosis Procedure"}], "authoringBatch": "batch-50"}
---

# B24DD: A battery-heater interlock fault is distinct from heater overheating

## The heater stops because its interlock path is open

The Ariya HVAC entry B24DD-19 describes an open high-voltage interlock circuit in the battery coolant heater system. It is monitored in READY with diagnosis listed as less than one second. Battery-heater operation stops as the protective response.

The source names connector engagement, the high-voltage harness connector and the heater as possibilities. This is not the same evidence as an internal heater transistor fault or excessive heater temperature. Keeping those categories separate prevents a stopped heater from being treated as one undifferentiated replacement diagnosis.

## Follow the connector's detection circuit

The diagnostic direction checks continuity through the heater harness connector's interlock terminals using the referenced procedure. The short entry does not provide a numerical resistance limit or a complete connector map, and neither should be invented from another heater or compressor interlock code.

Recent battery-heater or related high-voltage service is useful history for the workshop, but does not prove that a connection was left loose. The actual engagement and electrical path still require inspection under the correct isolation conditions.

Do not bridge the interlock or reseat high-voltage connections as a trial repair. Qualified EV personnel must use the complete battery-specific precautions and verify that the system is safe before access. Preserve the full HVAC result and any battery-controller codes so the investigation retains both the protective event and its related evidence.

## Source and scope

[Nissan factory procedure, reproduced by niariya.com](https://www.niariya.com/dtc_diagnosis-3171.html#b24dd_19_battery_coolant_heater). Exact section: B24dd-19 Battery Coolant Heater.

Nissan Ariya FE0 factory-manual thermal management procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.
