---
{"entryId": "nissan-u1cb0", "code": "U1CB0", "title": "U1CB0: Battery-heater communication depends on the pack connection and low-voltage supply", "description": "Nissan U1CB0-02 checks the shared LIN path and battery-side supply before judging battery coolant heater operation.", "status": "draft", "sourceReview": "checked", "scope": "Nissan Ariya FE0 factory-manual thermal management procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.", "sourceIds": ["nissan-ariya-fe0-thermal-20261102"], "sourceLocators": [{"sourceId": "nissan-ariya-fe0-thermal-20261102", "locator": "U1cb0-02 Battery Coolant Heater > DTC Description, Confirmation Procedure and DTC Diagnosis Procedure"}], "authoringBatch": "batch-50"}
---

# U1CB0: Battery-heater communication depends on the pack connection and low-voltage supply

## The HVAC controller receives abnormal heater information

The Ariya U1CB0-02 entry concerns abnormal LIN information transmitted from the battery coolant heater. It is monitored with power on for at least two seconds, and heater operation stops. Possible causes include the heater, A/C auto amplifier, communication wiring and battery-side heater system.

This is distinct from a direct heater-temperature or transistor-short finding. The absence of reliable communication can stop heater operation even when the initial fault lies in the low-voltage path supporting the component.

## Inspect the shared path and its electrical support

Nissan follows the LIN connection between the battery harness and auto amplifier, then checks for an unwanted ground connection with other specified thermal-system participants isolated. It next checks battery-side low-voltage supply and ground before observing heater operation.

The procedure reconnects the disconnected harnesses before the operating evaluation and repeat confirmation. That step matters because a deliberately isolated device cannot be judged as if the complete shared network were connected normally.

Preserve whether other thermal LIN devices also stored faults, together with battery-heater service history. The information can help a technician distinguish a shared-line problem from one component's failure. Access around the traction battery and heater requires qualified EV personnel and the appropriate isolation precautions, even though some diagnostic measurements concern low-voltage communication and supply circuits.

## Source and scope

[Nissan factory procedure, reproduced by niariya.com](https://www.niariya.com/dtc_diagnosis-3171.html#u1cb0_02_battery_coolant_heater). Exact section: U1cb0-02 Battery Coolant Heater.

Nissan Ariya FE0 factory-manual thermal management procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.
