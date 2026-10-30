---
{"entryId":"generic-p24af","code":"P24AF","title":"P24AF: particulate sensor state feedback disagrees with its command","description":"P24AF detects a mismatch between the commanded soot-sensor state and the sensor control unit feedback.","status":"draft","sourceReview":"needs-review","scope":"2025 GM 25OBDG04B diagnostic parameter file; the cited monitor is documented, but individual vehicle, engine and calibration applicability has not been established.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[1491]}],"authoringBatch":"batch-08"}
---

# P24AF: particulate sensor state feedback disagrees with its command

The P24AF range/performance title covers a specific command-feedback check in this GM source. The ECM's soot-sensor state-machine command must agree with the state reported by the sensor control unit. The strategy associates disagreement with sensor memory corruption, but the code alone does not establish a particular memory component failure.

## State transitions need time

The bus relay must have been commanded on for more than five seconds. Relay electrical faults, lost sensor communication and transmission faults with the sensor control unit must be absent. Initialization and error states are excluded, and a transition-time condition also applies.

The monitor counts 200 failures out of 250 samples at 100 ms intervals. It is Type B, two trips. Those qualifications distinguish a sustained operational mismatch from a normal brief transition between states.

## Evidence to preserve

Record the commanded and reported sensor operating states together. A particulate measurement alone cannot reproduce this monitor, because its subject is whether the control unit accepted the requested state. If communication is unavailable, the mismatch check may not be eligible at all.

Verification should establish that the state transition finishes and the qualified comparison passes. The summary does not provide a reprogramming procedure, authorize memory resets or prove that replacing the sensor is the only remedy. Its transition-time cell also lacks a clearly stated unit, so no universal delay is prescribed here.

## Source and application limits

This explanation covers the cited 2025 GM monitor. Confirm the vehicle and calibration in its service information before applying these limits; inclusion in this file does not establish model compatibility. [GM diagnostic parameters, PDF page 1491](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1491).
