---
{"entryId": "generic-p0aa3", "code": "P0AA3", "title": "P0AA3: Honda high-voltage sub-contactor does not release correctly", "description": "Honda P0AA3 uses shutdown voltage behavior to distinguish a sub-contactor, control-wire or battery-monitor fault.", "status": "draft", "sourceReview": "checked", "scope": "Honda Insight third-generation factory diagnostic procedures hosted in LaboratoryB’s gen3 collection; individual extracts do not identify an exact model year or revision, so confirm VIN-specific service applicability.", "sourceIds": ["honda-insight-gen3-dtc-5854", "honda-insight-gen3-dtc-5617"], "sourceLocators": [{"sourceId": "honda-insight-gen3-dtc-5854", "locator": "PDF physical page 1–3; DTC Troubleshooting: P0AA3 (128); P0AA3 detection or complete troubleshooting branch"}, {"sourceId": "honda-insight-gen3-dtc-5617", "locator": "PDF physical page 1–2; DTC Advanced Diagnostics: P0AA3; P0AA3 detection or complete troubleshooting branch"}], "authoringBatch": "batch-45", "sourcePages": [{"sourceId": "honda-insight-gen3-dtc-5854", "pages": [1, 2, 3]}, {"sourceId": "honda-insight-gen3-dtc-5617", "pages": [1, 2]}]}
---

# P0AA3: Honda high-voltage sub-contactor does not release correctly

## Honda checks the sub-contactor after shutdown

Honda identifies P0AA3 as **HV battery sub-contactor circuit**. In the cited Insight monitor, the battery condition monitor module examines how inverter-capacitor voltage changes after the bypass contactor is commanded on during shutdown diagnosis. A sub-contactor that remains on can allow the capacitor voltage to rise when it should not.

The malfunction criterion is a voltage difference greater than 48 V lasting at least 100 milliseconds after the specified timing conditions. The monitor operates after OFF mode, with one-drive-cycle detection. Honda states that the POWER SYSTEM indicator illuminates while the MIL remains off. These software observations are not instructions to energize or probe contactors manually.

## The circuit and the contactor are separated by testing

The troubleshooting procedure first verifies recurrence after a 120-second OFF interval. If P0AA3 does not repeat, Honda follows the intermittent-fault route using the saved snapshot.

For a repeated fault, the professional diagnostic branches distinguish a short in the CNTN control wire, a junction-board/sub-contactor fault and a battery condition monitor module fault. The junction board is replaced if the specified checks demonstrate the sub-contactor failure; the module is a different final branch. The code by itself does not identify which component must be replaced.

## Why a shutdown fault needs careful records

Preserve the initial fault set and operating history before clearing, because a problem detected after OFF mode can be missed by a quick running check. The source collection identifies third-generation Insight procedures without a model-year revision on each extract. Confirm applicability and use a qualified high-voltage workshop; the actual tests require battery enclosure and contactor access under Honda's electric-powertrain precautions.

## Sources and applicability

[DTC Troubleshooting: P0AA3 (128) (Honda manual extract 5854)](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Troubleshooting_%20P0AA3%20(128)%205854.pdf#page=1); [DTC Advanced Diagnostics: P0AA3 (Honda manual extract 5617)](https://downloads.laboratoryb.org/insight/gen3/Troubleshooting/DTC%20Advanced%20Diagnostics_%20P0AA3%205617.pdf#page=1). Honda Insight third-generation factory diagnostic procedures hosted in LaboratoryB’s gen3 collection; individual extracts do not identify an exact model year or revision, so confirm VIN-specific service applicability. These are manufacturer procedures for that documented configuration, not universal repair instructions.
