---
{"entryId":"generic-p27bd","code":"P27BD","title":"P27BD: Shift valve two open-load is assessed with the output off","description":"P27BD uses an off-state electrical load check, so a stationary solenoid command does not establish a hydraulic stuck fault.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG07A Part 2 documented monitor only; its application-matrix filename join is unresolved. No model, engine or universal calibration applicability is inferred.","sourceIds":["gm-2025-07a-2"],"sourcePages":[{"sourceId":"gm-2025-07a-2","pages":[926]}],"authoringBatch":"batch-15"}
---

# P27BD: Shift valve two open-load is assessed with the output off

The P27BD implementation here is the open-load check for synchronizer actuation valve two. With its low-side output switched off, the connected load should pull the monitored driver node toward the supply. The driver applies a small diagnostic current; being able to hold that node in its low diagnostic window indicates an open load.

## Off-state evidence differs from failed movement

This check concerns an electrical path, not whether a shift rod moved after a hydraulic command. The table requires more than 5 ms of output-off time and at least 150 ms fault confirmation. It also excludes controller safe state and supply faults P0882 or P0883.

A normal-looking current while the valve is actively commanded does not directly repeat the off-state test. Likewise, a rod that fails to move does not by itself prove P27BD’s electrical finding.

## What to retain for diagnosis

Preserve the driver’s open-load status, output command and controller voltage together. Use vehicle-specific circuit information to identify the node and load rather than treating the generic solenoid letter as a terminal map. The summary identifies a circuit classification; it cannot distinguish an internal coil opening from a connection, harness or driver problem by itself.

## Document scope and source

2025 GM 25OBDG07A Part 2 documented monitor only; its application-matrix filename join is unresolved. No model, engine or universal calibration applicability is inferred. These figures explain the cited controller logic, not a vehicle-specific repair instruction. Match the vehicle’s service information before applying them.

[GM physical PDF page 926](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=926).
