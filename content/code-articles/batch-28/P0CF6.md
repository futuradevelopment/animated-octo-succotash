---
{"entryId":"generic-p0cf6","code":"P0CF6","title":"P0CF6: High control-pilot percentage with no charge cord connected","description":"GM’s cited P0CF6 monitor detects a control-pilot signal above 58% while the charge cord is reported disconnected.","status":"draft","sourceReview":"needs-review","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[596]}],"authoringBatch":"batch-28"}
---

# P0CF6: High control-pilot percentage with no charge cord connected

## What the controller is checking

The P0CF6 row in GM’s 2015 hybrid diagnostic tables concerns an unexpectedly high control-pilot percentage when the charge cord is not connected. Its printed threshold is greater than 58%, with system voltage above 9 volts. This is an electrical interface check under a disconnected-cord condition, not a measurement of battery charging speed.

The percentage describes the pilot signal relative to system voltage. A high percentage does not mean the battery is overcharged, nor does this row establish that a public charging station delivered excessive current. Those interpretations confuse the pilot measurement with the power delivered through the charging circuit.

## What to preserve for diagnosis

The monitor counts 30 failures among 50 samples and lists a five-second passing period. However, the original row truncates its strategy and timing details: it does not provide a readable sampling interval. The 100-millisecond interval printed for adjacent P0CF5 must not be silently assigned to P0CF6.

A useful diagnostic comparison therefore includes the recorded pilot percentage, low-voltage supply and cord-connection status, with the failure identified as current or historical. Reproducing only the numerical threshold while a cord is connected would miss an explicit condition of this monitor. Similarly, an unplugged vehicle with no recorded passing run is not proof that a previous failure has been repaired.

This historical table establishes the supported high-signal condition but does not identify a failed component. The incomplete timing text requires confirmation in applicable service information before relying on a precise test duration or replacement decision.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 596](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=596).
