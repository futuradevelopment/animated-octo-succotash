---
{"entryId": "generic-p0cb1", "code": "P0CB1", "title": "P0CB1: Battery temperature sensor N fails its stability monitor", "description": "GM documents P0CB1 as accumulated erratic signal changes at sensor N, with communication and supply prerequisites.", "status": "draft", "sourceReview": "checked", "scope": "2018 GM 18OBDG02 HPC2 / BSM diagnostic monitor; per-vehicle and calibration applicability not established.", "sourceIds": ["gm-2018-18obdg02-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2018-18obdg02-hybrid-diagnostics", "pages": [936]}], "authoringBatch": "batch-36"}
---

# P0CB1: Battery temperature sensor N fails its stability monitor

P0CB1 concerns hybrid/EV battery temperature sensor N circuit intermittent/erratic. In the 2018 GM implementation, the diagnostic tracks the total magnitude of changes in N's signal during a ten-sample window.

## A temporary return to normal does not erase the evidence

The algorithm accumulates absolute differences. A signal that jumps upward and then falls back can cross the failure threshold despite ending near its starting value. GM lists a threshold above 10 for the integrated quantity and requires four failures among five evaluations at 100-millisecond intervals.

System voltage must exceed 10.2 V, and the defined battery-interface communication faults must be absent. The monitor's reporting category is Type B, two trips. These conditions do not define a universal permissible battery temperature.

## Follow the instability, not a guessed part

GM describes an intermittent connection as a potential cause. The DTC does not identify a sensor position inside every pack or establish that the thermistor itself is defective. Retain N's time trace and the state of the data source to guide the vehicle-specific diagnostic procedure.

If a communication repair was also necessary, verify that the stability monitor now runs before claiming the absence of P0CB1 proves a repair. A completed evaluation with credible stable data is stronger evidence than a cleared history. Access to internal battery sensing circuits requires qualified high-voltage personnel and the applicable safety process.

## Source and applicability

This explanation follows the documented GM monitor, not a verified application to every vehicle with this code. Confirm the vehicle, reporting module and calibration in current service information. [GM diagnostic table, physical page 936](https://gsi.ext.gm.com/gmspo/mode6/pdf/2018/18OBDG02%20Hybrid%20Diagnostics.pdf#page=936).
