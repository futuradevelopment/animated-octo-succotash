---
{"entryId": "nissan-p1b0c", "code": "P1B0C", "title": "P1B0C: The temperature suffix changes both restrictions and the diagnostic path", "description": "Nissan P1B0C-98 and P1B0C-FB have different battery-temperature responses and must not be treated as interchangeable.", "status": "draft", "sourceReview": "checked", "scope": "Nissan Ariya FE0 factory-manual 91 kWh battery LBC procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.", "sourceIds": ["nissan-ariya-fe0-battery91-20261102"], "sourceLocators": [{"sourceId": "nissan-ariya-fe0-battery91-20261102", "locator": "P1b0c-98 Battery Pack Temperature > DTC Description, Confirmation Procedure and DTC Diagnosis Procedure; P1b0c-Fb Battery Pack Temperature > DTC Description, Confirmation Procedure and DTC Diagnosis Procedure"}], "authoringBatch": "batch-50"}
---

# P1B0C: The temperature suffix changes both restrictions and the diagnostic path

## Two thermal findings have different consequences

In the Ariya 91 kWh battery procedure, P1B0C-98 describes abnormally high pack temperature. P1B0C-FB describes a module-temperature reading outside its available range. Both use a condition lasting more than two seconds, but the source assigns different protective patterns: -98 stops driving and charging, while -FB limits output and charging.

The table does not disclose numerical temperature thresholds. Those limits should not be guessed, and the less restrictive -FB description should not be used to dismiss an actual -98 event.

## Historical -98 evidence matters to the -FB branch

The -FB procedure explicitly checks for current or past P1B0C-98. That history changes the factory route. Without it, the flow repeats confirmation and conditionally moves to the battery controller; with it, the battery-assembly branch applies in the cited procedure.

Preserve the complete scan before erasure, including past thermal events. Do not continue charging or deliberately load the vehicle to reproduce a suspected battery-temperature problem. A qualified EV workshop must assess the condition using the complete vehicle-matched instructions. The article reports the documented branch distinction without turning an abbreviated scan result into an independent diagnosis that a pack must be replaced.

The -FB branch examines past -98 abnormalities as well as current ones. Erasing historical information before documenting it could therefore remove evidence that the source explicitly uses to choose its diagnostic path.

## Source and scope

[Nissan factory procedure, reproduced by niariya.com](https://www.niariya.com/high_voltage_battery_high_voltage_battery_2_lbc_-1197.html#p1b0c_98_battery_pack_temperature). Exact section: P1b0c-98 Battery Pack Temperature, P1b0c-Fb Battery Pack Temperature.

Nissan Ariya FE0 factory-manual 91 kWh battery LBC procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.
