---
{"entryId": "generic-p0cc1", "code": "P0CC1", "title": "P0CC1: Ariya receives a front-motor oil-pump fault report", "description": "Nissan P0CC1-04 uses an oil-pump error signal and checks related oil-temperature faults before the pump circuit.", "status": "draft", "sourceReview": "checked", "scope": "Nissan Ariya FE0 factory service procedures reproduced in NiAriya’s collection labeled 2023–2026; factory document revision is not shown. Confirm the exact drivetrain, detailed DTC suffix and VIN-specific applicability.", "sourceIds": ["nissan-ariya-fe0-front-dtc"], "sourceLocators": [{"sourceId": "nissan-ariya-fe0-front-dtc", "locator": "p0cc1_04_drive_motor_a_coolant_pump; P0cc1-04 Drive Motor a Coolant Pump; DTC detection logic, confirmation and complete displayed diagnosis procedure"}], "authoringBatch": "batch-45"}
---

# P0CC1: Ariya receives a front-motor oil-pump fault report

## The coolant-pump label covers motor oil cooling here

The catalog describes P0CC1 as a drive-motor A coolant-pump control circuit fault. In the cited Ariya procedure, **P0CC1-04** specifically means the front inverter received an error notification from the **front traction-motor oil pump** while in READY. The diagnosis delay is stated as within ten seconds.

That model-specific oil-pump description matters. It should not be silently rewritten as a failure of an unrelated external water pump merely because the generic label says coolant. The monitored evidence is a pump fault message, not a directly measured coolant-flow quantity.

## Oil-temperature faults receive priority

Nissan lists oil-pump and oil-temperature-sensor wiring, associated motor components and the inverter among possible causes. Its repair procedure first checks MOTOR CONTROL for a front-motor oil-temperature-sensor DTC. If present, the temperature-sensor circuit is diagnosed first. If absent, the chart directs inspection of the front-motor oil-pump circuit.

These references establish diagnostic order, but the displayed code section does not reproduce the complete linked circuit tests. It does not support an unconditional pump or motor replacement from P0CC1 alone.

## Limited torque is a documented response

The source limits front-motor driving torque to **30 percent** under this fault. That protective action does not establish that continued driving is suitable in a particular situation. Preserve the detailed suffix, associated temperature codes and operating state for the repair facility.

Confirmation requires the prescribed shutdown and READY sequence, with attention to automatic accessory wake-up. Use VIN-specific Ariya information and a trained EV technician for motor, oil-pump or inverter work. The source collection's year label is broader than a verified factory revision.

## Sources and applicability

[Nissan Ariya factory diagnostic procedure: P0cc1-04 Drive Motor a Coolant Pump](https://www.niariya.com/motor_control_inverter_front_-681.html#p0cc1_04_drive_motor_a_coolant_pump). Nissan Ariya FE0 factory service procedures reproduced in NiAriya’s collection labeled 2023–2026; factory document revision is not shown. Confirm the exact drivetrain, detailed DTC suffix and VIN-specific applicability. These are manufacturer procedures for that documented configuration, not universal repair instructions.
