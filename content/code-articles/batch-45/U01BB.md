---
{"entryId": "generic-u01bb", "code": "U01BB", "title": "U01BB: Prius loses communication with charger control module B", "description": "Toyota U01BB87 identifies the plug-in ECU-to-charger CAN link and checks supply, case ground and wiring before replacement.", "status": "draft", "sourceReview": "checked", "scope": "Toyota Prius XW60 plug-in hybrid charging-control procedure, hosted in MyToyo’s 2023–2026 service-manual grouping; exact factory revision and VIN applicability must be verified.", "sourceIds": ["toyota-prius-xw60-phev-charge-myt"], "sourceLocators": [{"sourceId": "toyota-prius-xw60-phev-charge-myt", "locator": "HTML #lost_communication_with_battery_charger_control_module_b_missing_message_u01bb87_; Lost Communication with Battery Charger Control Module \"B\" Missing Message (U01BB87); SAE mapping, monitor and full diagnostic procedure"}], "authoringBatch": "batch-45"}
---

# U01BB: Prius loses communication with charger control module B

## The missing messages come from the onboard charger

Toyota maps U01BB87 to SAE U01BB. In this Prius PHEV procedure, the plug-in charge control ECU loses CAN communication with the **electric vehicle charger assembly**. That is an onboard module link; the code does not identify a fault in the public charging station or prove that the whole charger has failed.

Toyota lists the plug-in ECU, charger assembly, AMD2 CHG fuse and wiring/connectors as possible areas. One-trip detection commands the MIL and master warning. The exact message timeout is not published.

## Power and grounding precede a module decision

The procedure reviews plug-in-control faults, then checks the charger's AMD2 supply. The published supply specification is 11–14 V at the identified terminal under the factory test conditions. A missing supply sends diagnosis toward the fuse and its wiring rather than immediate charger replacement.

With supply present, Toyota checks the charger's case-to-body ground. The case provides grounding through its installation, so bolt condition matters. The next stage checks the CAN pair for continuity and unwanted shorts. Only after those checks does the specified 108–132 Ω communication-circuit measurement distinguish the plug-in ECU replacement branch from the charger replacement branch. That resistance is configuration-specific, not a universal CAN-bus standard.

## A completed communication monitor

Toyota verifies repair after the prescribed ignition-off interval and at least two minutes with ignition ON, then reads Plug-in Control All Readiness. NORMAL confirms a completed pass; INCOMPLETE or N/A needs another valid judgment. Preserve the original network fault set and confirm the manual mirror's revision/VIN applicability. Charger connectors remain part of high-voltage equipment, so physical testing and installation checks require qualified service precautions.

## Sources and applicability

[Toyota Prius PHEV charging-control repair manual (MyToyo mirror)](https://www.mytoyo.com/plug_in_charge_control_system_for_phev_model_-2489.html#lost_communication_with_battery_charger_control_module_b_missing_message_u01bb87_). Toyota Prius XW60 plug-in hybrid charging-control procedure, hosted in MyToyo’s 2023–2026 service-manual grouping; exact factory revision and VIN applicability must be verified. These are manufacturer procedures for that documented configuration, not universal repair instructions.
