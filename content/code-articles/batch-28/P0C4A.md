---
{"entryId":"generic-p0c4a","code":"P0C4A","title":"P0C4A: Pump performance uses a thermal response sequence","description":"GM P0C4A distinguishes a passive temperature-response pass from an intrusive coolant-pump test before deciding performance.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[561,562]}],"authoringBatch":"batch-28"}
---

# P0C4A: Pump performance uses a thermal response sequence

P0C4A evaluates battery coolant-pump performance in this GM monitor. Its evidence is a temperature response during a controlled sequence, rather than the electrical condition of the pump-command wire. The two kinds of faults should not be treated as interchangeable.

## A passive check can pass without the intrusive test

The source first describes an 81-second passive determination using commanded pump and valve states. An absolute inlet-temperature change rate above 0.2°C per second establishes a pass. If that passive assessment does not pass, the controller proceeds to an intrusive determination instead of treating the first observation as the final failure.

The intrusive stage uses a 24-second pump period and a temperature-decrease-rate boundary below 0.05°C per second. It additionally requires the heater-performance diagnostic to have completed and passed. That prerequisite matters because the pump evaluation depends on a usable thermal response.

## Preserve the complete operating context

The sequence has temperature, thermal-mode, valve-learning, fault and charge/propulsion prerequisites. It is not a direction for an owner to command arbitrary pump speeds or valve positions. A diagnosis should retain which stage ran, whether its prerequisites were met and the observed temperature response.

P0C4A alone does not distinguish every possible hydraulic or sensing cause. The source does not establish universal cooling-system hardware or a mandatory pump replacement. A qualified high-voltage workshop must use the exact vehicle procedure to interpret and safely reproduce the documented assessment.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 561](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=561) · [GM source, physical page 562](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=562).
