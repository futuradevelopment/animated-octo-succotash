---
{"entryId":"generic-p0d2b","code":"P0D2B","title":"P0D2B: Control-pilot indicator driver tested in on and off states","description":"P0D2B checks the control-pilot indicator output driver, using different conditions and sample counts for its two electrical fault branches.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[587]}],"authoringBatch":"batch-28"}
---

# P0D2B: Control-pilot indicator driver tested in on and off states

## An indicator circuit can have a charging-system code

In the cited GM table, P0D2B identifies the control-pilot LED output-driver circuit. The word “pilot” does not make this a measurement of traction-battery current or proof of a failed charger. The controller is assessing the electrical behavior of an indicator output.

The short-to-ground branch runs with the LED commanded on and the charge cord plugged in. It requires 12 failures within 15 samples, with one sample every 100 milliseconds. The other branch, covering short-to-battery or open-circuit detection, runs with the LED commanded off and the cord unplugged. That branch uses 40 failures within 50 samples at the same interval.

## Two distinctions that prevent misdiagnosis

First, the expected electrical response changes with the LED command. A dark indicator without its commanded state is incomplete evidence: it may be requested off or may have failed to follow an on command. Cord status is also a formal prerequisite, not just background information about the charging session.

Second, the branches do not use the same failure count. Assuming that every indicator test completes after the shorter window could misclassify an incomplete off-state test as a pass. The source labels this a one-trip Type A monitor but does not give a lamp appearance or confirmed failed part for every occurrence.

Use indicator command, cord status and code status to select the appropriate vehicle-specific electrical checks. The table supplies no connector pinout or replacement decision. Do not substitute charging-power-circuit work for diagnosis of the particular LED driver named by P0D2B.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[Manufacturer source, physical page 587](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=587).
