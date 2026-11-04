---
{"entryId": "generic-p0ca4", "code": "P0CA4", "title": "P0CA4: Mazda MX-30 quick-charge overvoltage evidence", "description": "How the MX-30 EV procedure separates charging-equipment overvoltage from a recurring vehicle-side fault.", "status": "draft", "sourceReview": "checked", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0CA4:00 [PCM (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300202032200"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300202032200", "locator": "id300202032200; DTC P0CA4:00 [PCM (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P0CA4: Mazda MX-30 quick-charge overvoltage evidence

P0CA4 describes excessive battery-charging voltage. In the cited MX-30 electric manual, the PCM sets it when quick-charging voltage is abnormally high. The page does not publish a voltage threshold or detection timer, so neither a normal pack-voltage range nor a charger nameplate rating supplies the missing limit.

## Quick-charge conditions and voltage interpretation

The useful distinction is where the abnormal charging event originated. Mazda lists both charging equipment and the PCM as possible causes. Its procedure preserves snapshot data, then compares behavior using different quick-charging equipment. That comparison belongs in a controlled service assessment after the vehicle and charging connection have been judged safe; repeatedly reconnecting a suspect charger is not a repair.

Fault status matters during the comparison. A historical P0CA4 after changing equipment can support the possibility of a fault in the original equipment. A current P0CA4 requires further vehicle-side investigation. The chart directs the technician to check CAN communication and repeat the diagnostic sequence before considering PCM replacement when communication is normal and the fault recurs. A single stored event therefore does not justify a controller order.

Useful evidence includes the original charging location, whether the fault is current or historical, the snapshot, and the result of the supervised comparison. These facts distinguish an equipment-dependent event from a repeatable vehicle fault more effectively than the code label alone. Completion includes checking other DTCs, which may need their own procedures. This chart does not identify an internal battery component or authorize high-voltage probing, pack opening, or owner attempts to reproduce an overvoltage event.

## Source and applicability

[Mazda factory procedure, P0CA4](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300202032200.html). id300202032200; DTC P0CA4:00 [PCM (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0CA4:00 [PCM (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
