---
{"entryId": "generic-p24ba", "code": "P24BA", "title": "P24BA: Leak-detection pressure sensor voltage is below its electrical range", "description": "P24BA is the low-voltage diagnosis for the EVAP leak-detection pressure sensor in the reviewed GM fuel-tank-zone-module system.", "status": "draft", "sourceReview": "checked", "scope": "2025 GM 25OBDG03A diagnostic monitor only; exact vehicle, engine and calibration applicability is not established.", "sourceIds": ["gm-2025-03a"], "sourcePages": [{"sourceId": "gm-2025-03a", "pages": [656]}], "authoringBatch": "batch-04"}
---

# P24BA: Leak-detection pressure sensor voltage is below its electrical range

P24BA is the low-voltage diagnosis for the EVAP leak-detection pressure sensor in the reviewed GM fuel-tank-zone-module system. It assesses the raw signal's electrical range rather than directly determining whether the fuel-vapor system leaks.

## The lower boundary

The source gives a threshold below 0.70 V, equivalent to 14% of reference voltage and approximately 47 kPa for the documented sensor scaling. The pressure equivalent is not a universal sensor specification; it belongs to this particular implementation.

A low raw voltage is the monitored evidence. Calling it excessive vacuum or a ground short without further testing would add conclusions the row does not establish.

## The controller can test while awake

Unlike scheduled off-state EVAP performance checks, this circuit-range diagnostic runs continuously whenever the controller is awake. It requires the EVAP sensor communication fault to be absent and counts 640 failures out of 800 samples at 12.5 milliseconds per sample.

That distinction matters when planning verification: waiting hours for a full leak test is not the defining requirement of this electrical monitor. Conversely, one normal reading is insufficient to show that an intermittent signal remains within range throughout the evaluation.

Follow the applicable sensor-circuit procedure, retaining raw voltage, reference interpretation and communication status. A successful repair should restore a plausible signal and allow the range diagnostic to complete without recurrence. The source lists Type B, two-trip behavior, but provides no pinout and does not require replacing the complete leak-detection pump.

## Source and applicability

Confirm the reporting module, system and calibration before applying these diagnostic limits. [GM diagnostic table, PDF page 656](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG03A.pdf#page=656).
