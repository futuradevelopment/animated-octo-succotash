---
{"entryId": "generic-p0cee", "code": "P0CEE", "title": "P0CEE: Honda PCU coolant temperature fails a cold comparison", "description": "Honda P0CEE compares coolant and reactor temperatures after a long shutdown, with a sensor-specific repair branch.", "status": "draft", "sourceReview": "checked", "scope": "Honda Insight third-generation factory diagnostic procedures hosted in LaboratoryB’s gen3 collection; individual extracts do not identify an exact model year or revision, so confirm VIN-specific service applicability.", "sourceIds": ["honda-insight-gen3-dtc-5761", "honda-insight-gen3-dtc-5519"], "sourceLocators": [{"sourceId": "honda-insight-gen3-dtc-5761", "locator": "PDF physical page 1; DTC Troubleshooting: P0CEE (1064); P0CEE detection or complete troubleshooting branch"}, {"sourceId": "honda-insight-gen3-dtc-5519", "locator": "PDF physical page 1–2; DTC Advanced Diagnostics: P0CEE; P0CEE detection or complete troubleshooting branch"}], "authoringBatch": "batch-45", "sourcePages": [{"sourceId": "honda-insight-gen3-dtc-5761", "pages": [1]}, {"sourceId": "honda-insight-gen3-dtc-5519", "pages": [1, 2]}]}
---

# P0CEE: Honda PCU coolant temperature fails a cold comparison

## A cold comparison tests the temperature signal

Honda's P0CEE monitor compares **PCU coolant temperature with reactor temperature** after sufficient cooling. The source explains that those temperatures should be nearly alike after a long shutdown. A difference greater than 45°C triggers the documented plausibility condition; it does not mean coolant has exceeded a universal maximum operating temperature.

The enable table requires at least five hours and fifty minutes since OFF mode, together with very small traction- and generator-motor torque. The troubleshooting procedure rounds the wait to about six hours. Skipping that soak would undermine the comparison on which the diagnosis depends.

## Warning behavior and the repair branch

The advanced page specifies two-drive-cycle detection. The POWER SYSTEM indicator can illuminate, while the MIL remains off for this monitor. Possible causes include the coolant temperature sensor and an internal PCU fault.

The actual troubleshooting page clears the code, applies its long shutdown wait, and rechecks pending or confirmed P0CEE. A repeat result directs replacement of the **PCU coolant temperature sensor**. A non-repeat result is treated as intermittent, with the original freeze data or onboard snapshot used to investigate the conditions. The specific sensor-replacement branch should not be converted into automatic replacement of the entire PCU.

## Verification needs the original context

Record the relevant temperatures, elapsed shutdown time and original fault status before clearing. These are third-generation Insight extracts without an exact model-year edition printed in the individual files, so verify service applicability. Honda's electric-powertrain precautions still apply around the coolant sensor and PCU; diagnosis and physical service should be performed by qualified personnel.

## Sources and applicability

[DTC Troubleshooting: P0CEE (1064) (Honda manual extract 5761)](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Troubleshooting_%20P0CEE%20(1064)%205761.pdf#page=1); [DTC Advanced Diagnostics: P0CEE (Honda manual extract 5519)](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P0CEE%205519.pdf#page=1). Honda Insight third-generation factory diagnostic procedures hosted in LaboratoryB’s gen3 collection; individual extracts do not identify an exact model year or revision, so confirm VIN-specific service applicability. These are manufacturer procedures for that documented configuration, not universal repair instructions.
