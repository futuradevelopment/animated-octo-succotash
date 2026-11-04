---
{"entryId": "generic-p0d0c", "code": "P0D0C", "title": "P0D0C: Prius plug-in positive charge-contactor circuit low", "description": "Toyota P0D0A11 maps to P0D0C and distinguishes the positive charging-relay control circuit from a stuck power contact.", "status": "draft", "sourceReview": "checked", "scope": "Toyota Prius XW60 plug-in hybrid battery-system procedure, hosted in MyToyo’s 2023–2026 service-manual grouping; exact factory revision and VIN applicability must be verified.", "sourceIds": ["toyota-prius-xw60-phev-battery-myt"], "sourceLocators": [{"sourceId": "toyota-prius-xw60-phev-battery-myt", "locator": "HTML #hybrid_ev_battery_charging_system_positive_contactor_control_circuit_short_to_ground_p0d0a11_; Hybrid/EV Battery Charging System Positive Contactor Control Circuit Short to Ground (P0D0A11); SAE mapping, monitor and full diagnostic procedure"}], "authoringBatch": "batch-45"}
---

# P0D0C: Prius plug-in positive charge-contactor circuit low

## The positive charging-relay control circuit

The cited Prius PHEV procedure maps Toyota P0D0A11 to SAE P0D0C. It detects a **short to ground in the CHRB positive charging-contactor control circuit**. The battery ECU controls three charge relays in the No. 1 traction battery device box. During charging connection, CHRP and CHRB initially work through the precharge resistor before the normal relay state is established.

This code concerns the relay's primary control circuit. It does not by itself prove that the high-voltage contacts are welded shut or that the complete traction battery has failed. One-trip detection commands the MIL and master warning; the exact software threshold is not published.

## The resistance branch separates the repair outcomes

Toyota checks battery-ECU connector security first. Its professional circuit test specifies 20.6–40.8 Ω for the CHRB path under the stated isolated test conditions. A normal result directs diagnosis to battery-ECU replacement. An abnormal result leads onward to the device-box connector and harness checks.

The later harness check determines whether wiring repair is required or whether the device-box assembly is the replacement outcome. Consequently, seeing P0D0C alone cannot select between the ECU, relay-containing device box and harness. The test conditions and connector identity are essential to interpreting the resistance value.

## Charging conditions are part of confirmation

Toyota's normal-judgment sequence requires battery SOC at or below 70% and a qualifying plug-in charge before HV Battery All Readiness is assessed. NORMAL is a completed pass; INCOMPLETE or N/A requires another valid judgment sequence. This mirror groups the manual under Prius XW60 2023–2026, so revision and VIN applicability need verification. Battery enclosure access and contactor diagnosis require a trained high-voltage technician.

## Sources and applicability

[Toyota Prius PHEV battery-system repair manual (MyToyo mirror)](https://www.mytoyo.com/hybrid_battery_system_for_phev_model_-2381.html#hybrid_ev_battery_charging_system_positive_contactor_control_circuit_short_to_ground_p0d0a11_). Toyota Prius XW60 plug-in hybrid battery-system procedure, hosted in MyToyo’s 2023–2026 service-manual grouping; exact factory revision and VIN applicability must be verified. These are manufacturer procedures for that documented configuration, not universal repair instructions.
