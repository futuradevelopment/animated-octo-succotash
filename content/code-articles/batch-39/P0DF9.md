---
{"entryId": "generic-p0df9", "code": "P0DF9", "title": "P0DF9: Mazda ISG W-phase temperature-sensor input is high", "description": "Mazda P0DF9:00 concerns an excessive electrical input from the W-phase temperature sensor inside the ISG.", "status": "draft", "sourceReview": "checked", "scope": "Mazda3 01/2019 onward workshop edition d9n1-1a-22d_ver10, Mazda M Hybrid integrated starter generator internal FET temperature sensors; source procedure references SKYACTIV-G and SKYACTIV-X 2.0; verify vehicle equipment.", "sourceIds": ["mazda3-2019-id140202300300"], "sourceLocators": [{"sourceId": "mazda3-2019-id140202300300", "locator": "id140202300300, P0DF9:00 system malfunction location and detection condition; common ISG Diagnostic Procedure steps 1–4"}], "authoringBatch": "batch-39"}
---

# P0DF9: Mazda ISG W-phase temperature-sensor input is high

Mazda's P0DF9:00 entry identifies the high-input branch for the ISG's W-phase internal FET temperature sensor. It corresponds to generic generator-inverter temperature sensor C circuit high. Input at least 2.95 V for a continuous 0.5 second satisfies the published detection condition.

## The threshold describes voltage, not proven overheating

No temperature conversion accompanies the threshold. The code therefore records an invalid electrical input without supplying a physical temperature diagnosis. It also differs from P0DF7, which compares two internal receiving circuits, and P0DF8, which checks the lower boundary.

All three W-phase entries use the same manufacturer service flow. The manual does not create a distinct sensor-replacement procedure for the high-input variant.

## Retain the snapshot before clearing information

Mazda uses the original operating data to distinguish a persistent fault from a past event and to reproduce the relevant engine-speed, vehicle-speed, and coolant-temperature conditions. Present faults are rechecked after ignition cycling; communication diagnosis comes before replacement when the malfunction recurs.

The source also notes that communication noise can cause a displayed DTC. An isolated entry and a reproducible high-input condition therefore carry different diagnostic weight.

The common fail-safe disables hybrid assistance, regeneration, and i-stop and leaves electrical supply dependent on the 12 V battery. Continued use can exhaust it. Professional diagnosis should follow the shared recurrence and CAN checks, then verify other faults are resolved. This page supplies no external connector pinout or authorization to probe the ISG's internal temperature-sensing electronics.

## Source and applicability

[Mazda diagnostic chart, P0DF9](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id140202300300.html). Mazda3 01/2019 onward workshop edition d9n1-1a-22d_ver10, Mazda M Hybrid integrated starter generator internal FET temperature sensors; source procedure references SKYACTIV-G and SKYACTIV-X 2.0; verify vehicle equipment. These values describe that documented monitor; they are not universal specifications for every vehicle displaying this code.
