---
{"entryId": "generic-p0df6", "code": "P0DF6", "title": "P0DF6: Mazda ISG V-phase temperature input exceeds its upper boundary", "description": "Mazda P0DF6:00 monitors a high electrical input from the V-phase FET temperature sensor inside the ISG.", "status": "draft", "sourceReview": "checked", "scope": "Mazda3 01/2019 onward workshop edition d9n1-1a-22d_ver10, Mazda M Hybrid integrated starter generator internal FET temperature sensors; source procedure references SKYACTIV-G and SKYACTIV-X 2.0; verify vehicle equipment.", "sourceIds": ["mazda3-2019-id140202300300"], "sourceLocators": [{"sourceId": "mazda3-2019-id140202300300", "locator": "id140202300300, P0DF6:00 system malfunction location and detection condition; common ISG Diagnostic Procedure steps 1–4"}], "authoringBatch": "batch-39"}
---

# P0DF6: Mazda ISG V-phase temperature input exceeds its upper boundary

Mazda P0DF6:00 identifies high input from the integrated starter generator's internal V-phase FET temperature sensor. In generic terminology it is generator-inverter temperature sensor B circuit high. The documented condition is at least 2.95 V for a continuous half-second interval.

## Preserve the channel and fault type

V-phase distinguishes the monitored channel from U- and W-phase. “High” distinguishes this entry from V-phase's low-input and internal-comparison faults. The manual uses the same service flow for those channels, so the phase designation does not imply a different external harness or repair method.

No temperature in degrees is supplied for the voltage boundary. Calling the code proof of inverter overheating would add a conclusion not established by the source.

## The repeatability check controls the next decision

The procedure records the vehicle snapshot and classifies the fault as present or past. It rechecks a present fault after ignition cycling, while a historical entry is evaluated against captured speed and coolant-temperature conditions. CAN diagnosis precedes the eventual ISG replacement branch if the malfunction recurs.

This ordering matters because the source explicitly recognizes communication noise as a reason a DTC may appear without successful reproduction. A cleared entry or one normal displayed value is weaker evidence than the specified repeatability assessment.

The shared fail-safe removes hybrid electrical support and inhibits assistance, regeneration, and i-stop; continued use can drain the 12 V battery. Diagnosis and verification should remain with appropriately equipped technicians. The page provides no external connector test or internal sensor-service instruction for P0DF6.

## Source and applicability

[Mazda diagnostic chart, P0DF6](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id140202300300.html). Mazda3 01/2019 onward workshop edition d9n1-1a-22d_ver10, Mazda M Hybrid integrated starter generator internal FET temperature sensors; source procedure references SKYACTIV-G and SKYACTIV-X 2.0; verify vehicle equipment. These values describe that documented monitor; they are not universal specifications for every vehicle displaying this code.
