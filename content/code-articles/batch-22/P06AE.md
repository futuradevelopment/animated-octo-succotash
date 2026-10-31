---
{"entryId": "generic-p06ae", "code": "P06AE", "title": "P06AE: An extreme powerup-temperature reading is a circuit diagnosis", "description": "Interpret the GM P06AE high-temperature signal fault without confusing the displayed value with verified physical overheating.", "status": "draft", "sourceReview": "needs-review", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [207]}], "authoringBatch": "batch-22"}
---

# P06AE: An extreme powerup-temperature reading is a circuit diagnosis

P06AE is the high-reading circuit fault for the TCM powerup-temperature sensor in this GM document. The listed failure condition is at least 164°C for 60 seconds, and the strategy describes an open circuit or a short to power. This is a diagnostic interpretation of the signal, not direct proof that the controller physically reached that temperature.

## Identify the correct temperature channel

The powerup-temperature input is distinct from the substrate-temperature sensor addressed by P0669. Recording only a generic transmission-temperature value can conceal which input the controller actually rejected.

Before evaluation, engine speed must remain in its allowed range for five seconds and vehicle speed must satisfy its own five-second condition. Preserve those supporting values when assessing whether the reported failure was eligible to be tested.

## Avoid overreading the recovery line

The source's pass text says “substrate” temperature even though the failure row concerns powerup temperature. That naming mismatch remains unresolved. It would be unsafe editorially to silently replace the name and present the resulting statement as GM's verified repair test.

A useful diagnostic handoff includes the exact powerup-sensor reading, companion temperature faults, module identification and operating state. The table does not prove a defective TCM or supply connector locations. A qualified technician must use the applicable circuit information to separate measurement failure from actual thermal conditions before deciding on repair or further operation.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 207](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=207).
