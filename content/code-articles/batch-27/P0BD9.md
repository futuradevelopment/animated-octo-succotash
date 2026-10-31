---
{"entryId":"generic-p0bd9","code":"P0BD9","title":"P0BD9: inverter B sensor 2 high voltage uses a startup warm-up condition","description":"GM P0BD9 is a high-voltage sensing fault associated with an implausibly cold PIM Temp 1 value in the cited controller.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[301,302]}],"authoringBatch":"batch-27"}
---

# P0BD9: inverter B sensor 2 high voltage uses a startup warm-up condition

GM identifies P0BD9 as inverter B temperature sensor 2 circuit high. A generic reader labels that channel inverter temperature sensor D. In this table, high means electrical signal voltage near five volts, associated with PIM Temp 1 below −40°C.

## A cold-looking value can be an electrical fault

The inverse signal relationship means that this code should not be interpreted as a high-temperature warning merely from its title. Compare the affected channel with the other temperature reports and retain its circuit-fault status when judging whether the displayed value is physically credible.

For a malfunction already present at trip start, the source requires at least 1.5 minutes of accumulated inverter warm-up above its absolute-torque threshold. The continuation appears on the next physical page. Ignoring it can lead to an incorrect expectation that the monitor always completes immediately after wakeup.

## Retest under the actual prerequisites

The wakeup signal must be on, and the row uses a repeated-count filter at a 10.4 ms rate. These are calibration conditions, not an invitation to create torque or heat without the proper service procedure.

The summary does not identify a particular connector defect or require replacing the inverter. Vehicle-specific circuit information and trained high-voltage personnel are needed for physical diagnosis. Verify credible sensor behavior during eligible operation rather than treating cleared memory as repair confirmation.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 301](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=301) · [GM PDF, physical page 302](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=302).
