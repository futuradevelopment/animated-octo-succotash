---
{"entryId":"generic-p0bde","code":"P0BDE","title":"P0BDE: sensor E high voltage is an implausibly cold sensing condition","description":"GM P0BDE monitors inverter A temperature sensor 3 high voltage and includes a qualified warm-up condition at trip start.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[290]}],"authoringBatch":"batch-27"}
---

# P0BDE: sensor E high voltage is an implausibly cold sensing condition

The GM table describes P0BDE as inverter A temperature sensor 3 circuit high. Its generic name uses sensor E. The monitored signal is PIM Temp 2, where a temperature below −40°C corresponds to the high-voltage sensing condition near five volts.

## Separate voltage wording from temperature wording

High in this code is not an overheating diagnosis. The inverse signal relationship is why a very cold displayed value can accompany an electrical high-range fault. Compare the channel with the other inverter and motor temperatures before trusting the displayed number as physical temperature.

If the malfunction is present at trip start, the source adds at least 1.5 minutes of accumulated inverter warm-up above its stated absolute-torque threshold. That prerequisite can explain delayed detection and must not be converted into an improvised road-test instruction.

## Verify the branch under eligible operation

The wakeup signal must be on, and GM uses a repeated-count filter at a 10.4 ms rate. Preserve the operating history and related circuit faults when comparing the original event with a later scan.

The document does not prove an open wire or prescribe sensor replacement. Exact circuit identification and safe test points come from the vehicle's hybrid service information. Physical inverter work requires qualified high-voltage personnel, and repair confirmation should show a credible temperature signal during eligible testing rather than merely cleared fault memory.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 290](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=290).
