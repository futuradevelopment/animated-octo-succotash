---
{"entryId":"generic-p0d6f","code":"P0D6F","title":"P0D6F: compressor DC-link overcurrent is checked during a run request","description":"GM P0D6F monitors DC-link current during a compressor request and adds speed-request and operating conditions to its pass branch.","status":"draft","sourceReview":"checked","scope":"GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[714]}],"authoringBatch":"batch-29"}
---

# P0D6F: compressor DC-link overcurrent is checked during a run request

P0D6F in the cited GM table concerns sustained high DC-link current for the electric A/C compressor. It is different from an individual phase-current range code and from the separate instantaneous-current diagnostic listed nearby.

## Running-state evidence matters

The failure condition is DC-link current above 27 A, with 30 failed samples out of 60 at a 50-millisecond interval. System voltage must exceed 10.25 V, Accessory or Run/Crank must be active, and the compressor speed request must be greater than zero.

The pass branch uses current at or below 27 A and requires the motor to be spinning and reaching its requested speed. After a failure, the speed request must first return to zero before passing is enabled. A quiet current trace after the compressor has stopped therefore does not necessarily establish the specified successful running test.

## Separate a current observation from a cause

Record DC-link current, requested speed and actual operating behavior together. The original demand and recovery sequence help explain whether the controller was observing a running load or an inactive system.

The parameter sheet does not diagnose excess refrigerant, a seized compressor or a failed inverter from this code alone. Those possibilities require the correct vehicle procedure and additional evidence. It also provides no instruction to force the compressor to run. Professional diagnosis must account for both high-voltage electrical hazards and the pressurized refrigerant system before any physical intervention.

## Source and applicability

GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.

[General Motors source, physical page 714](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=714)
