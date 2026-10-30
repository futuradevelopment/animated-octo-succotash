---
{"entryId":"generic-p0bd4","code":"P0BD4","title":"P0BD4: sensor C high voltage corresponds to an implausibly cold report","description":"GM P0BD4 monitors inverter A temperature sensor 2 high voltage, with a warm-up prerequisite for faults present at trip start.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[290]}],"authoringBatch":"batch-27"}
---

# P0BD4: sensor C high voltage corresponds to an implausibly cold report

The GM monitor for P0BD4 concerns inverter A temperature sensor 2 out of range high in voltage. A generic reader calls this inverter temperature sensor C circuit high. The source maps it to PIM Temp 1 and an indicated temperature below −40°C, near a five-volt signal.

## High voltage does not mean high temperature

That inverse relationship matters when interpreting a scan. The code does not describe an overheating inverter simply because its title contains high. An implausibly cold temperature report can be the electrical high-range condition under investigation.

When the malfunction is present at the start of a trip, GM requires accumulated inverter warm-up time of at least 1.5 minutes above the stated absolute-torque threshold. This explains why immediate detection after startup may differ from detection after qualified operation. It is a monitor prerequisite, not an instruction to perform an improvised driving test.

## Verify the sensing branch

The wakeup signal must be on, and the table supplies a 250-of-350 count filter at a 10.4 ms rate. Compare the affected reading with the other inverter and motor temperature information before selecting the applicable electrical diagnosis.

The summary does not prove a particular open connection or prescribe replacing a sensor. The actual vehicle procedure determines the measurement points and safe method. Physical inverter access requires trained high-voltage personnel, and repair verification should demonstrate credible readings during an eligible monitor state.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 290](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=290).
