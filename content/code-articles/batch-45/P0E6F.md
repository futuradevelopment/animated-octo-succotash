---
{"entryId": "generic-p0e6f", "code": "P0E6F", "title": "P0E6F: Prius charging precharge-contactor control circuit low", "description": "P0E6F maps to Toyota P0E6D11 and identifies the CHRP precharge-relay control circuit ground-short condition.", "status": "draft", "sourceReview": "checked", "scope": "Toyota Prius XW60 plug-in hybrid battery-system procedure, hosted in MyToyo’s 2023–2026 service-manual grouping; exact factory revision and VIN applicability must be verified.", "sourceIds": ["toyota-prius-xw60-phev-battery-myt"], "sourceLocators": [{"sourceId": "toyota-prius-xw60-phev-battery-myt", "locator": "HTML #hybrid_ev_battery_charging_system_precharge_contactor_control_circuit_short_to_ground_p0e6d11_; Hybrid/EV Battery Charging System Precharge Contactor Control Circuit Short to Ground (P0E6D11); SAE mapping, monitor and full diagnostic procedure"}], "authoringBatch": "batch-45"}
---

# P0E6F: Prius charging precharge-contactor control circuit low

## Precharge control is separate from the main charge relays

Toyota P0E6D11 maps to SAE P0E6F. The Prius PHEV battery ECU detects a **short to ground in the CHRP charging precharge-contactor control circuit**. CHRP participates in initially connecting the charging system through the precharge resistor; it is distinct from the positive CHRB and negative CHRG charging relays.

The monitor concerns the primary control circuit. It does not prove that the precharge resistor is open or that a high-voltage contact is welded. Toyota uses one-trip logic, with the MIL and master warning commanded, while detailed software thresholds remain unpublished.

## A different circuit has a different resistance specification

The procedure first checks battery-ECU connector security. Its professional CHRP circuit test specifies **140–290 Ω** under the stated isolated conditions. That differs from the positive and negative charging-relay circuit values; using their specification would misinterpret the precharge branch.

A normal initial circuit result leads to battery-ECU replacement. An abnormal result sends the technician to the device-box connector and harness isolation checks. The final outcome can be harness repair or replacement of the No. 1 traction battery device box assembly, depending on those results. The code alone does not establish which component caused it.

## Verification must exercise charging

Toyota's confirmation uses a qualifying plug-in charge with the reported battery SOC at 70% or less before HV Battery All Readiness. INCOMPLETE or N/A is not a pass. This source is reproduced in a Prius XW60 2023–2026 manual grouping; exact revision and VIN applicability should be matched. Precharge components lie within high-voltage equipment, so battery access and circuit testing belong to a qualified hybrid technician.

## Sources and applicability

[Toyota Prius PHEV battery-system repair manual (MyToyo mirror)](https://www.mytoyo.com/hybrid_battery_system_for_phev_model_-2381.html#hybrid_ev_battery_charging_system_precharge_contactor_control_circuit_short_to_ground_p0e6d11_). Toyota Prius XW60 plug-in hybrid battery-system procedure, hosted in MyToyo’s 2023–2026 service-manual grouping; exact factory revision and VIN applicability must be verified. These are manufacturer procedures for that documented configuration, not universal repair instructions.
