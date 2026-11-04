---
{"entryId": "honda-p16ea", "code": "P16EA", "title": "P16EA: A coolant-pump relay check runs after shutdown", "description": "Honda P16EA is evaluated after the vehicle enters OFF/LOCK mode and the PCM turns off the engine electric-water-pump relay.", "status": "draft", "sourceReview": "checked", "scope": "Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.", "sourceIds": ["honda-insight-gen3-p16ea-factory"], "sourcePages": [{"sourceId": "honda-insight-gen3-p16ea-factory", "pages": [1, 2]}], "authoringBatch": "batch-49"}
---

# P16EA: A coolant-pump relay check runs after shutdown

## An intentional command tests an unpowered relay state

Honda P16EA is evaluated after the vehicle enters OFF/LOCK mode and the PCM turns off the engine electric-water-pump relay. The PCM then issues a pump-operation command as a diagnostic check. If reported pump speed remains at least 600 rpm for five seconds while the relay is off, the monitor identifies a malfunction.

That deliberate shutdown check explains why the presence of an operation command alone is not evidence that the relay should be supplying power. The decisive issue is the relationship between the commanded relay state and the pump-speed feedback under the specified test conditions.

## Do not confuse this code with a cooling-performance diagnosis

The factory possibilities are a relay stuck on and an internal PCM fault. The excerpt does not diagnose a blocked cooling passage, low coolant or a mechanical thermostat problem. Those conditions require their own evidence. Likewise, the code does not supply a universal relay pinout or authorize bypassing the pump's power circuit.

Capture the freeze information and establish which shutdown event produced the record. The source classifies this as a once-per-drive-cycle monitor and a one-drive-cycle DTC with the MIL off. Pending and confirmed records can remain even when the dashboard engine lamp never illuminated.

A technician should use the model-specific circuit and safe service procedure to separate relay behavior from controller behavior. Avoid opening a hot cooling system or assuming that an apparently switched-off vehicle cannot command an electric pump.

## Source and applicability

[Honda factory diagnostic excerpt](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P16EA%207018.pdf), PDF pages 1, 2. Honda factory service-information excerpt mirrored in the third-generation Insight troubleshooting collection. Apply only to the described Honda system; confirm the exact vehicle, software and current service procedure before diagnosis.
