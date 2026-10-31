---
{"entryId":"generic-p0cf5","code":"P0CF5","title":"P0CF5: Control pilot low during GM’s disconnected-cord test","description":"P0CF5 identifies a low normalized control-pilot signal during the documented GM diagnostic-switch test.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[596]}],"authoringBatch":"batch-28"}
---

# P0CF5: Control pilot low during GM’s disconnected-cord test

## Why the unplugged state matters

P0CF5 in GM’s 2015 hybrid diagnostic table is a control-pilot circuit-low result obtained under a particular self-test state. The charge cord must be reported not connected, the control-pilot diagnostic switch must be on, and system voltage must exceed 9 volts. It is therefore misleading to describe this monitor simply as insufficient current coming from a charging station.

The controller evaluates the pilot signal as a percentage of system voltage. A value below 3% meets the electrical failure criterion. This normalization matters: the percentage is a relationship between two voltages, not the charging station’s advertised amperage or the traction battery’s state of charge.

## Evidence that separates the fault paths

The table requires 30 failed observations within 50 samples taken at 100-millisecond intervals. An isolated low reading cannot be equated with the complete detection sequence. It also specifies a five-second passing period, so one satisfactory snapshot does not establish that the diagnostic has passed.

For a technician, the useful record contains pilot percentage, system voltage, cord-detection state and diagnostic-switch state together. A low reading while the switch is not commanded into the documented test state does not reproduce this particular monitor. Conversely, a scan report showing an unplugged-cord state deserves comparison with the actual connection history before blaming external charging equipment.

This source describes detection logic, not an approved pin-probing or component-replacement procedure. Matching vehicle service information is needed before diagnosing the charging interface; the percentage threshold is not a specification for every vehicle using P0CF5.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 596](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=596).
