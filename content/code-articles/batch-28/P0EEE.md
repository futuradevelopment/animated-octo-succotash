---
{"entryId":"generic-p0eee","code":"P0EEE","title":"P0EEE: Ford DC fast-charge interruption with P0EEE:27","description":"Ford SSM 55080 links a specific P0EEE:27 DC fast-charging interruption to SOBDM software on listed electric vehicles.","status":"draft","sourceReview":"checked","scope":"Ford SSM 55080, August 2026: 2021–2023 Mustang Mach-E built through 2023-06-25, 2022–2025 E-Transit, 2022–2023 F-150 Lightning; DC Level 3 interruption with P0EEE:27/P2E53:27 in SOBDM. Planned Q3 2026 software is a historical expectation, not verified availability.","sourceIds":["nhtsa-mc-11036286"],"sourcePages":[{"sourceId":"nhtsa-mc-11036286","pages":[1]}],"authoringBatch":"batch-28"}
---

# P0EEE: Ford DC fast-charge interruption with P0EEE:27

## Match the DC charging case precisely

Ford SSM 55080 describes charging that stops at a Level 3 DC fast charger with P0EEE:27 and/or P2E53:27 identified in the SOBDM. Its listed vehicles are 2021–2023 Mustang Mach-E built on or before June 25, 2023, 2022–2025 E-Transit and 2022–2023 F-150 Lightning. The Mach-E production cutoff is part of the applicability, not an optional detail.

Although the generic P0EEE title refers to coupler temperature B being too high, this communication identifies SOBDM software as a possible cause of the particular interruption. It explicitly says charge-port replacement will not resolve the documented concern. A temperature-related code name alone therefore does not justify ordering a port.

## Distinguish operating mode from an available repair

The August 2026 message says the affected vehicles can still charge using AC Level 1 or Level 2 equipment. That AC/DC distinction is useful when reviewing charging history, but it is not a general assurance for a vehicle with additional faults or a physically damaged connector.

Ford stated that engineering was developing software expected in the third quarter of 2026. This is a dated forecast, not confirmation that the repair has since been released or installed. The service record should establish present software status and any superseding instruction before recommending an update.

Preserve the complete suffixes, companion P2E53 status, charger type and vehicle build date. If those details do not match, investigate the actual thermal or charging-system evidence through the appropriate procedure. This bulletin offers a specific software-related diagnostic lead rather than a universal explanation for every P0EEE fault.

## Source and applicability

Ford SSM 55080, August 2026: 2021–2023 Mustang Mach-E built through 2023-06-25, 2022–2025 E-Transit, 2022–2023 F-150 Lightning; DC Level 3 interruption with P0EEE:27/P2E53:27 in SOBDM. Planned Q3 2026 software is a historical expectation, not verified availability.

[Manufacturer source, physical page 1](https://static.nhtsa.gov/odi/tsbs/2026/MC-11036286-0001.pdf#page=1).
