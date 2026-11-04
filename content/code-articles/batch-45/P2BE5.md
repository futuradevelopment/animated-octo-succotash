---
{"entryId": "generic-p2be5", "code": "P2BE5", "title": "P2BE5: Prius current-sensor C comparison or zero-offset fault", "description": "Toyota P2BE41C and P2BE428 share P2BE5 but require different current-sensor checks and confirmation conditions.", "status": "draft", "sourceReview": "checked", "scope": "Toyota Prius XW60 plug-in hybrid battery-system procedure, hosted in MyToyo’s 2023–2026 service-manual grouping; exact factory revision and VIN applicability must be verified.", "sourceIds": ["toyota-prius-xw60-phev-battery-myt"], "sourceLocators": [{"sourceId": "toyota-prius-xw60-phev-battery-myt", "locator": "HTML #hybrid_ev_battery_pack_current_sensor_c_circuit_range_performance_circuit_voltage_out_of_range_p2be41c_; Hybrid/EV Battery Pack Current Sensor \"C\" Circuit Range/Performance Circuit Voltage Out of Range (P2BE41C); SAE mapping, monitor and full diagnostic procedure"}, {"sourceId": "toyota-prius-xw60-phev-battery-myt", "locator": "HTML #hybrid_ev_battery_pack_current_sensor_c_circuit_range_performance_signal_bias_level_out_of_range_zero_adjustment_failure_p2be428_; Hybrid/EV Battery Pack Current Sensor \"C\" Circuit Range/Performance Signal Bias Level Out of Range / Zero Adjustment Failure (P2BE428); SAE mapping, monitor and full diagnostic procedure"}], "authoringBatch": "batch-45"}
---

# P2BE5: Prius current-sensor C comparison or zero-offset fault

## Two detailed faults share the same generic code

Toyota maps both **P2BE41C and P2BE428** to SAE P2BE5. In the cited Prius PHEV battery procedure, suffix 1C detects excessive disagreement between the main and low battery-current sensor outputs. Suffix 28 detects an excessive zero offset when battery current normally should not flow with ignition ON. The detailed suffix is therefore necessary to select the diagnosis.

Both variants use one-trip detection and command the MIL and master warning. Exact software thresholds are not published. The source also warns that P2BE428 can occur when Current Sensor Offset Learning has not been completed after sensor replacement.

## The factory repair branches are different

Both procedures first check related battery-controller and hybrid-control faults, then the wiring between the battery ECU and No. 1 traction battery device box. A harness defect is repaired before an assembly decision.

For P2BE41C, a normal harness leads to device-box replacement and a road-test recheck; recurring P2BE41C then leads to battery-ECU replacement. For P2BE428, the technician instead compares the low-current signal with half its supply voltage under the specified professional setup. An out-of-range relationship points to the device box. A normal relationship takes the ECU-replacement and simulation-test branch, with a recurring fault leading back to the device box.

## Verification must preserve the suffix

The offset variant adds ignition-off and ignition-on observations after its operating test, unlike the comparison variant. HV Battery All Readiness must complete normally; INCOMPLETE or N/A is not a pass. Match the mirror's manual revision to the vehicle and document whether offset learning was completed. Battery-enclosure access and live measurements require a trained high-voltage technician.

## Sources and applicability

[Toyota Prius PHEV battery-system repair manual (MyToyo mirror)](https://www.mytoyo.com/hybrid_battery_system_for_phev_model_-2381.html#hybrid_ev_battery_pack_current_sensor_c_circuit_range_performance_circuit_voltage_out_of_range_p2be41c_); [Toyota Prius PHEV battery-system repair manual (MyToyo mirror)](https://www.mytoyo.com/hybrid_battery_system_for_phev_model_-2381.html#hybrid_ev_battery_pack_current_sensor_c_circuit_range_performance_signal_bias_level_out_of_range_zero_adjustment_failure_p2be428_). Toyota Prius XW60 plug-in hybrid battery-system procedure, hosted in MyToyo’s 2023–2026 service-manual grouping; exact factory revision and VIN applicability must be verified. These are manufacturer procedures for that documented configuration, not universal repair instructions.
