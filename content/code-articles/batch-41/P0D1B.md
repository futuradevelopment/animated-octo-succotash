---
{"entryId": "generic-p0d1b", "code": "P0D1B", "title": "P0D1B: Battery cooling-valve performance depends on refrigerant response", "description": "The Prius PHEV procedure checks cooling conditions and related systems before the magnet-valve decision.", "status": "draft", "sourceReview": "needs-review", "scope": "Toyota Prius XW60 plug-in hybrid battery-system procedure, hosted in MyToyo’s 2023–2026 service-manual grouping; exact factory revision and VIN applicability must be verified.", "sourceIds": ["toyota-prius-xw60-phev-battery-myt"], "sourceLocators": [{"sourceId": "toyota-prius-xw60-phev-battery-myt", "locator": "HTML #hybrid_ev_battery_pack_coolant_control_valve_b_performance_stuck_off_actuator_stuck_p0d1a71_; Hybrid/EV Battery Pack Coolant Control Valve \"B\" Performance/Stuck Off Actuator Stuck (P0D1A71); SAE mapping, monitor tables, complete diagnostic procedure"}], "authoringBatch": "batch-41"}
---

# P0D1B: Battery cooling-valve performance depends on refrigerant response

## The generic coolant label refers to refrigerant cooling here

The cited Prius PHEV manual maps SAE P0D1B to P0D1A71. It concerns the magnet valve incorporated in the No. 1 traction-battery cooler tube. The battery ECU compares valve commands with refrigerant inlet/outlet temperature behavior, so this application should not be diagnosed as a conventional engine-coolant valve simply from the generic description.

Toyota's procedure starts with related battery, hybrid-control and air-conditioning faults. It then checks whether the front grille is or was obstructed, cooling-fan operation and refrigerant shortage before progressing to the valve circuit and component. A thermal response problem can therefore originate outside the valve itself.

## Verification needs established temperature conditions

The normal-judgment procedure requires minimum battery and refrigerant temperatures, controlled air-conditioning settings and two prescribed cooling active-test periods. A cold vehicle on which the test cannot run has not demonstrated a successful repair. Use the factory All Readiness result to distinguish normal, abnormal and incomplete judgments.

The monitor uses two driving cycles, while its exact malfunction limits and duration are not published. The active-test preparation temperatures are not replacements for those hidden detection thresholds.

## A source conflict limits the monitor explanation

For the closed/minimum-command branch, the detection table describes a refrigerant temperature difference below its limit, while the narrative describes a change above its limit. This article remains marked for review and does not select one inequality as authoritative. Confirm the current Toyota definition before interpreting that branch quantitatively.

Refrigerant and traction-battery work belongs to appropriately qualified technicians. Preserve temperature trends and companion codes, and establish the actual cooling or control defect before replacing a battery cooler tube or ECU.

## Source and applicability

[Toyota factory diagnostic procedure, reproduced by MyToyo](https://www.mytoyo.com/hybrid_battery_system_for_phev_model_-2381.html). Locator: HTML #hybrid_ev_battery_pack_coolant_control_valve_b_performance_stuck_off_actuator_stuck_p0d1a71_; Hybrid/EV Battery Pack Coolant Control Valve "B" Performance/Stuck Off Actuator Stuck (P0D1A71); SAE mapping, monitor tables, complete diagnostic procedure. Toyota Prius XW60 plug-in hybrid battery-system procedure, hosted in MyToyo’s 2023–2026 service-manual grouping; exact factory revision and VIN applicability must be verified.
