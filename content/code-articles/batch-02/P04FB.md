---
{"entryId":"generic-p04fb","code":"P04FB","title":"P04FB: PCV pressure should approach atmosphere after engine rotation stops","description":"P04FB explained through the documented GM monitor: pCV pressure should approach atmosphere after engine rotation stops. Diagnostic distinctions, verification and applicability limits.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG03A ECM monitor at the cited physical PDF pages only. Vehicle, engine and calibration applicability is not established by the file-level application matrix.","sourceIds":["gm-2025-03a"],"sourcePages":[{"sourceId":"gm-2025-03a","pages":[314]}],"authoringBatch":"batch-02"}
---

# P04FB: PCV pressure should approach atmosphere after engine rotation stops

P04FB checks the performance of the crankcase ventilation hose-connection pressure sensor. The cited GM diagnostic can detect a value stuck within the electrical range by testing its plausibility when the engine is no longer rotating.

## Atmospheric pressure supplies a reference

The strategy expects the PCV system to equalize with atmosphere after an appropriate engine-off condition. Because the transducer reports gauge pressure, its expected value is near zero kPa. The printed failure boundaries are at or above 0.63 kPa or at or below −0.63 kPa.

This differs from a circuit-high or circuit-low test. A sensor can remain electrically in range while maintaining an implausible offset from atmosphere. Conversely, a pressure observation immediately after stopping should not be judged without the applicable equalization and temperature criteria.

## Retain stopped-engine context

The page references a calibrated equalization time and temperature-related enabling logic, requires coolant at least 55°C, and lists sensor-circuit and engine-not-running timer errors among the inhibiting conditions. It uses 128 failures out of 160 samples at 3.125 milliseconds each.

Record pressure, engine movement status, elapsed stop time and temperature together. Use the applicable service procedure to distinguish a biased measurement from an unresolved physical pressure condition. Verification requires an eligible stopped-engine rationality test, not just a plausible running pressure. The source does not provide a universal soak duration or sensor replacement instruction.

## Source and applicability

This explanation is limited to the 2025 GM 25OBDG03A monitor on [page 314](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=314). Its thresholds are calibration examples, not universal specifications. Confirm the vehicle, engine and controller procedure before applying them.
