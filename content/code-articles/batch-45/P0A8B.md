---
{"entryId": "generic-p0a8b", "code": "P0A8B", "title": "P0A8B: Ariya front-inverter startup supply fell below nine volts", "description": "Nissan P0A8B-A2 distinguishes a low 12-volt supply or installation-related history from a confirmed inverter fault.", "status": "draft", "sourceReview": "checked", "scope": "Nissan Ariya FE0 factory service procedures reproduced in NiAriya’s collection labeled 2023–2026; factory document revision is not shown. Confirm the exact drivetrain, detailed DTC suffix and VIN-specific applicability.", "sourceIds": ["nissan-ariya-fe0-front-dtc"], "sourceLocators": [{"sourceId": "nissan-ariya-fe0-front-dtc", "locator": "p0a8b_a2_14_volt_power_module_system_voltage; P0a8b-A2 14 Volt Power Module System Voltage; DTC detection logic, confirmation and complete displayed diagnosis procedure"}], "authoringBatch": "batch-45"}
---

# P0A8B: Ariya front-inverter startup supply fell below nine volts

## The inverter monitors its low-voltage supply

In the Ariya front-inverter procedure, **P0A8B-A2** is set when the 12-volt battery supply reaching the inverter drops below **9 V** during startup. Startup can occur with the power switch on, in READY or through automatic accessory operation. The specified diagnosis delay is within one second.

The documented response stops control of the front traction motor. Despite the power-module wording, the monitored input is the low-voltage supply to the inverter; this code does not establish that the high-voltage traction battery is discharged.

## Battery-installation history can explain an old event

Nissan explicitly warns that voltage fluctuations while installing the 12-volt battery can store this code. For a past malfunction, it asks the technician to check battery removal and installation history. That distinction matters before treating a historical entry as a current inverter defect.

The repair chart starts with the 12-volt battery, then checks the affected supply fuse, connector engagement and terminal condition. Its inverter supply check expects **9–16 V**. An incorrect supply leads to ground and feed-circuit diagnosis. The inverter replacement branch is reached when the specified supply checks are normal, rather than immediately after reading the code.

## Repeat the intended startup

This procedure uses a ten-minute undisturbed shutdown interval before confirmation. Door or lock activity can wake accessory power and interfere with the required state. Preserve the original event, battery-service history and measured supply conditions before clearing.

The article covers the front-inverter version of this Ariya fault. A technician should verify the exact circuit and VIN applicability, repair the cause of any blown fuse, and follow EV precautions for inverter access.

## Sources and applicability

[Nissan Ariya factory diagnostic procedure: P0a8b-A2 14 Volt Power Module System Voltage](https://www.niariya.com/motor_control_inverter_front_-681.html#p0a8b_a2_14_volt_power_module_system_voltage). Nissan Ariya FE0 factory service procedures reproduced in NiAriya’s collection labeled 2023–2026; factory document revision is not shown. Confirm the exact drivetrain, detailed DTC suffix and VIN-specific applicability. These are manufacturer procedures for that documented configuration, not universal repair instructions.
