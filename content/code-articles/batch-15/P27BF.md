---
{"entryId":"generic-p27bf","code":"P27BF","title":"P27BF: Shift valve two circuit-low concerns driver feedback during switching","description":"P27BF describes a short-to-ground classification for synchronizer valve two, separate from its hydraulic performance monitor.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG07A Part 2 documented monitor only; its application-matrix filename join is unresolved. No model, engine or universal calibration applicability is inferred.","sourceIds":["gm-2025-07a-2"],"sourcePages":[{"sourceId":"gm-2025-07a-2","pages":[927]}],"authoringBatch":"batch-15"}
---

# P27BF: Shift valve two circuit-low concerns driver feedback during switching

P27BF maps to the electrical low check for synchronizer actuation valve two in this GM transmission. The driver reports a short-to-ground state after evaluating its monitored output node. The fault therefore concerns electrical behavior, not direct proof that the valve is hydraulically stuck off.

## Why command state belongs in the record

The source describes the check during solenoid actuation and includes switching-timing qualifications. A static voltage sampled without its output command cannot reproduce that full evaluation. The listed DTC confirmation period is at least 150 ms.

The system must be outside safe state, with battery voltage above 8.75 V and below 18 V. Cranking and stop-key states are excluded; P0882 and P0883 disable the routine. A controller supply problem can therefore change which checks are eligible.

## Separate the two diagnostic questions

First establish the driver’s reported electrical failure and the circumstances in which it returned. Hydraulic response and rod movement are assessed by other monitors and require their own evidence. Applicable service information must define the physical valve-two circuit and allowed measurement method. The source supplies no universal pinout and does not prove that replacing the valve coil, wiring or controller will repair the fault.

## Document scope and source

2025 GM 25OBDG07A Part 2 documented monitor only; its application-matrix filename join is unresolved. No model, engine or universal calibration applicability is inferred. These figures explain the cited controller logic, not a vehicle-specific repair instruction. Match the vehicle’s service information before applying them.

[GM physical PDF page 927](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=927).
