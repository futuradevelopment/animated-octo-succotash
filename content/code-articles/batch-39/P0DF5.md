---
{"entryId": "generic-p0df5", "code": "P0DF5", "title": "P0DF5: Mazda ISG V-phase temperature-sensor voltage is low", "description": "Mazda P0DF5:00 identifies a low-input condition in the ISG’s V-phase internal temperature-sensor channel.", "status": "draft", "sourceReview": "checked", "scope": "Mazda3 01/2019 onward workshop edition d9n1-1a-22d_ver10, Mazda M Hybrid integrated starter generator internal FET temperature sensors; source procedure references SKYACTIV-G and SKYACTIV-X 2.0; verify vehicle equipment.", "sourceIds": ["mazda3-2019-id140202300300"], "sourceLocators": [{"sourceId": "mazda3-2019-id140202300300", "locator": "id140202300300, P0DF5:00 system malfunction location and detection condition; common ISG Diagnostic Procedure steps 1–4"}], "authoringBatch": "batch-39"}
---

# P0DF5: Mazda ISG V-phase temperature-sensor voltage is low

P0DF5:00 is Mazda's V-phase internal FET temperature-sensor low-input entry. It corresponds to generic generator-inverter temperature sensor B circuit low. Mazda specifies input at or below 1.44 V continuously for 0.5 second.

## Low input does not mean a cold generator

The code is based on electrical input, and the procedure gives no temperature conversion for that voltage. It therefore cannot establish a particular low or high physical temperature. Its listed possible cause is an ISG malfunction, with no external sensor wiring or connector diagram supplied.

The neighboring characteristic code P0DF4 evaluates disagreement between two internal readings; P0DF5 instead evaluates the lower absolute signal boundary. That distinction should remain visible in the complete fault record.

## A past fault and a present fault receive different checks

Mazda first preserves snapshot data and determines whether the entry is current. A present fault is rechecked after ignition cycling and at least ten seconds on. A past fault is assessed for repeatability using the captured operating conditions and recorded ISG/engine speed information.

The shared procedure considers CAN errors before ISG replacement and notes that communication noise can produce a displayed code. A one-time historical entry is therefore not the same evidence as a recurring internal low-input fault.

Hybrid power support, regeneration, assistance, and i-stop can be inhibited by the common fail-safe. Continued running can deplete the 12 V supply. A qualified technician should complete the source's recurrence and communication checks; this page does not authorize internal ISG probing or a separate V-phase sensor replacement.

## Source and applicability

[Mazda diagnostic chart, P0DF5](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id140202300300.html). Mazda3 01/2019 onward workshop edition d9n1-1a-22d_ver10, Mazda M Hybrid integrated starter generator internal FET temperature sensors; source procedure references SKYACTIV-G and SKYACTIV-X 2.0; verify vehicle equipment. These values describe that documented monitor; they are not universal specifications for every vehicle displaying this code.
