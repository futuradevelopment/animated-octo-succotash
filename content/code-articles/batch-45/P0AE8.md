---
{"entryId": "generic-p0ae8", "code": "P0AE8", "title": "P0AE8: Honda high-voltage battery temperature sensor 4 circuit", "description": "Honda P0AE8 monitors the fourth battery temperature signal and checks P0AE9/P0AEA/P0AEB before a pack decision.", "status": "draft", "sourceReview": "checked", "scope": "Honda Insight third-generation factory diagnostic procedures hosted in LaboratoryB’s gen3 collection; individual extracts do not identify an exact model year or revision, so confirm VIN-specific service applicability.", "sourceIds": ["honda-insight-gen3-dtc-5849", "honda-insight-gen3-dtc-5634"], "sourceLocators": [{"sourceId": "honda-insight-gen3-dtc-5849", "locator": "PDF physical page 1–4; DTC Troubleshooting: P0A9B (972), P0AC5 (973), P0ACA (974), P0AE8 (975), P0BC2 (976); P0AE8 detection or complete troubleshooting branch"}, {"sourceId": "honda-insight-gen3-dtc-5634", "locator": "PDF physical page 1–2; DTC Advanced Diagnostics: P0AE8; P0AE8 detection or complete troubleshooting branch"}], "authoringBatch": "batch-45", "sourcePages": [{"sourceId": "honda-insight-gen3-dtc-5849", "pages": [1, 2, 3, 4]}, {"sourceId": "honda-insight-gen3-dtc-5634", "pages": [1, 2]}]}
---

# P0AE8: Honda high-voltage battery temperature sensor 4 circuit

## Sensor 4 is a battery input, not an inverter sensor

Honda's Insight documents identify P0AE8 as **high-voltage battery temperature sensor 4 circuit**. The battery condition monitor module evaluates this channel among five module-temperature sensors. The fault threshold is a signal of 4.83 V or more, or 0.72 V or less, sustained for at least three seconds under the stated enable conditions.

The code therefore reports an electrical input outside its expected range. It does not directly establish the battery's true temperature or identify a traction-inverter temperature sensor. Two-drive-cycle logic applies: an initial pending event can become a confirmed event with freeze data and MIL/POWER SYSTEM indications after a qualifying repeat.

## The follow-up codes belong to sensor 4

Honda verifies the original conditions before choosing a repair and cautions that detection may take ten minutes or more. If P0AE8 repeats, the sensor-4 branch checks P0AE9, P0AEA and P0AEB. Those more specific range, low and high faults take priority through their own troubleshooting pages.

When the repeated P0AE8 has none of those companions, the cited branch identifies the fourth sensor as faulty and directs battery-pack replacement. If the initial verification does not reproduce the code, the procedure treats it as intermittent and returns to the recorded snapshot. A parts recommendation should explain which of those outcomes actually occurred.

## Verification and applicability

Preserve the complete fault report and sensor-4 data before clearing. The common five-sensor procedure does not make the numbered channels interchangeable. These third-generation Insight extracts have no exact model-year revision printed individually, so match them to the vehicle's service information. Any battery enclosure inspection or replacement is professional high-voltage work.

## Sources and applicability

[DTC Troubleshooting: P0A9B (972), P0AC5 (973), P0ACA (974), P0AE8 (975), P0BC2 (976) (Honda manual extract 5849)](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Troubleshooting_%20P0A9B%20(972),%20P0AC5%20(973),%20P0ACA%20(974),%20P0AE8%20(975),%20P0BC2%20(976)%205849.pdf#page=1); [DTC Advanced Diagnostics: P0AE8 (Honda manual extract 5634)](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P0AE8%205634.pdf#page=1). Honda Insight third-generation factory diagnostic procedures hosted in LaboratoryB’s gen3 collection; individual extracts do not identify an exact model year or revision, so confirm VIN-specific service applicability. These are manufacturer procedures for that documented configuration, not universal repair instructions.
