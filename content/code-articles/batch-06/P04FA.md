---
{"entryId":"generic-p04fa","code":"P04FA","title":"P04FA: high-pressure EGR drive electronics overtemperature","description":"P04FA checks excessive temperature associated with the high-pressure EGR motor drive.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG04B diagnostic parameter tables; the cited monitor only. Vehicle, engine and calibration applicability must be confirmed separately.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[1214]}],"authoringBatch":"batch-06"}
---

# P04FA: high-pressure EGR drive electronics overtemperature

P04FA checks excessive temperature associated with the high-pressure EGR motor drive. The measured failure quantity in the cited table is the H-bridge driver's temperature, reported by the hardware interface.

## Which temperature is being monitored

The threshold is above 170°C. It is not an EGR gas-temperature limit and should not be applied to an exhaust temperature sensor reading. The strategy mentions internal motor faults as an example of an excessive-temperature cause, but that example is not a proof that the motor has failed.

Monitoring requires relay supply above 11 V, completion of cranking, enabled diagnostics and determinate hardware status. The source uses 240 failed counts among 300 samples on a 12.5 ms task, with Type A reporting.

## Two useful distinctions

First identify whether available temperature data represents the drive electronics or the exhaust stream. Second retain the operating conditions associated with the thermal event; a cold component after shutdown cannot establish what temperature the driver reached during operation.

Verification should use the applicable service procedure to establish normal driver thermal behavior under valid conditions and assess the cause of the reported heating. The table does not specify a cooling repair, motor replacement or permission to bypass thermal protection. It supplies the monitored threshold and enabling logic, while vehicle and calibration applicability remain separate requirements.

## Source and applicability

2025 GM 25OBDG04B diagnostic parameter tables; the cited monitor only. Vehicle, engine and calibration applicability must be confirmed separately. These tables describe detection logic, not a complete repair procedure or a component replacement verdict. [gm-2025-04b, PDF page 1214](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1214).
