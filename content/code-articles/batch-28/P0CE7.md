---
{"entryId":"generic-p0ce7","code":"P0CE7","title":"P0CE7: Valve-feedback high is not a coolant-flow percentage","description":"GM P0CE7 compares the coolant-valve position signal with its electrical reference and qualifies an excessive signal over repeated samples.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[560]}],"authoringBatch":"batch-28"}
---

# P0CE7: Valve-feedback high is not a coolant-flow percentage

P0CE7 is the high-range battery coolant-valve position-feedback diagnostic in this GM table. The criterion is feedback voltage greater than 72 percent of reference voltage. The percentage belongs to an electrical signal comparison, not a direct statement of valve opening or coolant circulation.

## Preserve the signal and reference context

A high report does not identify why the feedback is high. The exact sensor and circuit design must be established before interpreting it as a mechanical position. The source provides no universal conversion from that voltage ratio to a valve angle.

The controller requires system voltage above 10.2 volts and 640 failing observations among 800 samples at 6.25-millisecond intervals. The event is therefore qualified over repeated assessments, not by one isolated high display value.

## Keep other valve diagnostics distinct

Command-tracking faults ask whether the requested position was reached. Motor-drive faults evaluate the electrical control state under their own conditions. P0CE7 should not be substituted for either of those diagnoses merely because all name the same coolant valve.

The workshop should retain command, feedback and relevant circuit-fault information, then use the applicable service procedure to establish the source of the high signal. The code alone does not choose a replacement valve, controller or harness. Physical battery-cooling investigation near high-voltage equipment belongs to appropriately trained personnel following the precise vehicle documentation.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 560](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=560).
