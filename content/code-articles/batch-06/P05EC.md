---
{"entryId":"generic-p05ec","code":"P05EC","title":"P05EC: cold-start injection request and scheduling disagree","description":"P05EC checks agreement between the application's requested start of injection and the hardware-interface software's scheduled start of injection during the cold-start strategy.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG04B diagnostic parameter tables; the cited monitor only. Vehicle, engine and calibration applicability must be confirmed separately.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[1224,1225]}],"authoringBatch":"batch-06"}
---

# P05EC: cold-start injection request and scheduling disagree

P05EC checks agreement between the application's requested start of injection and the hardware-interface software's scheduled start of injection during the cold-start strategy. The documented comparison covers all cylinders.

## A scheduling comparison is not a direct combustion measurement

The table compares two control-system representations of injection timing. It does not directly measure fuel spray, cylinder pressure or mechanical camshaft timing. A timing-performance label alone is therefore insufficient reason to alter mechanical timing or replace injectors.

Engine speed must be above 400 and below 3,000 rpm. Injection commands must have existed in the preceding engine cycle, and the continuation requires no dropped-pulse indication, no injector electrical or injection-controller fault, valid crankshaft sensing for the entire driving cycle and cold-start strategy enabled.

## Preserve the prerequisites

Those gates distinguish a valid requested-versus-scheduled mismatch from a pulse that was dropped or a reference signal that was already faulty. A warm-engine test with the cold-start strategy inactive cannot reproduce this monitor.

The filter uses eight failures among sixteen samples, once per engine revolution, with Type A reporting. The extracted threshold column gives signed limits without a clearly stated unit, so no universal degree specification is asserted here. Verification should establish agreement under a valid cold-start assessment using the exact service definition. The summary supplies neither a physical cause nor a repair sequence.

## Source and applicability

2025 GM 25OBDG04B diagnostic parameter tables; the cited monitor only. Vehicle, engine and calibration applicability must be confirmed separately. These tables describe detection logic, not a complete repair procedure or a component replacement verdict. [gm-2025-04b, PDF page 1224](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1224); [gm-2025-04b, PDF page 1225](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1225).
