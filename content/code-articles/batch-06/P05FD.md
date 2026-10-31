---
{"entryId":"generic-p05fd","code":"P05FD","title":"P05FD: VGT drive electronics report excessive temperature","description":"The cited P05FD strategy monitors excessive temperature associated with the variable-geometry turbocharger DC motor.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG04B diagnostic parameter tables; the cited monitor only. Vehicle, engine and calibration applicability must be confirmed separately.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[1226]}],"authoringBatch":"batch-06"}
---

# P05FD: VGT drive electronics report excessive temperature

The cited P05FD strategy monitors excessive temperature associated with the variable-geometry turbocharger DC motor. The failure quantity is specifically the H-bridge driver's hardware-reported temperature above 170°C.

## Distinguish drive temperature from exhaust temperature

The generic title says boost-control temperature too high, but this row does not compare exhaust-gas temperature, compressor outlet temperature or engine coolant temperature. Applying the 170°C threshold to one of those other sensors would assess the wrong quantity.

The source mentions internal VGT motor faults as an example of a possible contributor. That example does not establish the cause of every thermal event or prove the turbocharger assembly must be replaced.

## Conditions that make the result comparable

Cranking must have ended, relay supply must exceed 11 V and hardware error status must be determinate. The calibration-enabled test filters 240 failures among 300 samples on a 12.5 ms function task, with Type A, one-trip reporting.

Retain the operating context of the reported heating and confirm that any available temperature channel represents the drive electronics. A cool actuator after shutdown does not invalidate an earlier thermal finding. Verification should follow the correct service procedure to assess normal driver thermal behavior. The table supplies no direct-power test, thermal-protection bypass or universal replacement instruction for single- or two-stage turbocharger systems.

## Source and applicability

2025 GM 25OBDG04B diagnostic parameter tables; the cited monitor only. Vehicle, engine and calibration applicability must be confirmed separately. These tables describe detection logic, not a complete repair procedure or a component replacement verdict. [gm-2025-04b, PDF page 1226](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1226).
