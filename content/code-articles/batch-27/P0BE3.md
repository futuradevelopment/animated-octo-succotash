---
{"entryId":"generic-p0be3","code":"P0BE3","title":"P0BE3: sensor F high voltage corresponds to a very cold reported value","description":"GM P0BE3 is the high-voltage branch for inverter B temperature sensor 3, with a trip-start warm-up prerequisite.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[302]}],"authoringBatch":"batch-27"}
---

# P0BE3: sensor F high voltage corresponds to a very cold reported value

GM identifies P0BE3 as inverter B temperature sensor 3 circuit high. The generic sensor F label describes the same cited monitor context. Its input is PIM Temp 2, where the table associates a below-−40°C reading with voltage near five volts.

## Interpret high as electrical high

This is not a code declaring that the inverter temperature is high. The signal-to-temperature relationship is inverse, so the high-voltage fault can appear as an implausibly cold scan value. Preserve that circuit diagnosis when assessing whether a temperature report is physically believable.

When the condition exists at trip start, the monitor requires at least 1.5 minutes of accumulated inverter warm-up above its specified absolute-torque threshold. That requirement helps explain why immediate startup observations may differ from an eligible diagnostic result later.

## Confirm meaningful retesting

The wakeup signal must be on, and a repeated-count filter at a 10.4 ms rate applies. The published conditions describe the controller's test; they do not authorize an improvised procedure to create torque or heat.

The table does not prove which connection or component is responsible and supplies no universal resistance test. A qualified hybrid technician must identify the correct signal and follow the applicable vehicle procedure. Verification should include credible sensor behavior and eligible monitor operation, with all physical inverter work performed under the required high-voltage precautions.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 302](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=302).
