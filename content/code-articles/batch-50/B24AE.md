---
{"entryId": "nissan-b24ae", "code": "B24AE", "title": "B24AE: A very low heater-outlet reading stops the PTC heater", "description": "Nissan B24AE-15 distinguishes the driver-side heater-outlet sensor signal from actual cabin heating performance.", "status": "draft", "sourceReview": "checked", "scope": "Nissan Ariya FE0 factory-manual thermal management procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.", "sourceIds": ["nissan-ariya-fe0-thermal-20261102"], "sourceLocators": [{"sourceId": "nissan-ariya-fe0-thermal-20261102", "locator": "B24ae-15 Ptc Heater Outlet Air Temperature Sensor Lh > DTC Description, Confirmation Procedure and DTC Diagnosis Procedure"}], "authoringBatch": "batch-50"}
---

# B24AE: A very low heater-outlet reading stops the PTC heater

## An implausibly cold reading is the monitored condition

The Ariya B24AE-15 entry concerns the driver-side PTC heater outlet-air temperature sensor recognizing less than -42°C for at least two seconds with power on. Heater operation stops as the response. The source lists the sensor, A/C auto amplifier and an open or supply-short condition in the circuit.

A lack of cabin heat can therefore be a consequence of the controller withholding heater operation because its outlet-temperature information is unreliable. It is not independent proof that the high-voltage heating element has failed.

## Check the sensing path before the heater assembly

The procedure examines the signal at the auto amplifier, sensor supply and ground continuity, then the sensor itself. Other branches address an open supply path or unintended voltage. These distinctions separate the thermistor's behavior from the wiring that carries its signal.

Nissan supplies a temperature-dependent resistance table for this outlet sensor. It is not identical to the intake-sensor table, so a technician should not substitute a convenient thermistor specification from another HVAC code. The cited left/driver-side identification must also be verified against the vehicle's equipment layout.

Retain the original temperature reading and complete HVAC result. Sensor circuit diagnosis and access near the PTC heater require the correct service precautions; the five-character code does not justify replacing the entire heater without checking the input that caused it to stop.

## Source and scope

[Nissan factory procedure, reproduced by niariya.com](https://www.niariya.com/dtc_diagnosis-3171.html#b24ae_15_ptc_heater_outlet_air_temperature_sensor_lh). Exact section: B24ae-15 Ptc Heater Outlet Air Temperature Sensor Lh.

Nissan Ariya FE0 factory-manual thermal management procedure as reproduced by niariya.com; limited to the cited DTC suffixes and equipment. Confirm the matching vehicle manual before applying diagnostic specifications.
