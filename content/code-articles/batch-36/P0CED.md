---
{"entryId": "generic-p0ced", "code": "P0CED", "title": "P0CED: Electronics coolant-pump enable circuit is open", "description": "The documented GM P0CED test detects an open output-enable circuit while the electronics coolant pump is enabled.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [946]}], "authoringBatch": "batch-36"}
---

# P0CED: Electronics coolant-pump enable circuit is open

P0CED names the hybrid/EV electronics coolant pump A enable circuit. In the 2018 GM monitor, the fault of interest is an open in the output-enable path, detected from its feedback voltage while pump enable is true.

## An intermediate voltage can be the fault evidence

The listed open-circuit band is 1.14–2.81 V. This is not a universal “good” low-voltage signal merely because it sits between ground and supply. Its meaning depends on the circuit design and the enabled command state in this table.

The monitor also needs system voltage above 10.2 V. It evaluates 20 samples at 250-millisecond intervals and fails with 16 bad samples. Reporting is Type B, two trips. These details describe an electrical assessment, not a measured coolant-flow deficiency.

## Keep enable separate from speed control

An enable line and a pump's speed-control signal serve different functions. Diagnosis should establish which line the reporting controller is evaluating rather than treating all pump-related codes as the same fault. Record enable command, feedback and the applicable low-voltage supply during the event.

A technician should verify the correct wiring and load using the vehicle-specific procedure before identifying a failed component. Pump replacement is not implied by an open-circuit label alone. Repair confirmation requires the enable-circuit test to execute successfully and the prescribed cooling checks to be completed. Access around hybrid electronics and high-voltage cooling components belongs to qualified service; no manual energization or connector probing method is provided here.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 946](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=946).
