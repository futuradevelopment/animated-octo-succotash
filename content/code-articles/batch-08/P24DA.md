---
{"entryId":"generic-p24da","code":"P24DA","title":"P24DA: particulate sensor heater response suggests an exhaust-sample problem","description":"P24DA uses filtered heater behavior during qualified heating phases to detect an absent or obstructed exhaust sample.","status":"draft","sourceReview":"needs-review","scope":"2025 GM 25OBDG04B diagnostic parameter file; the cited monitor is documented, but individual vehicle, engine and calibration applicability has not been established.","sourceIds":["gm-2025-04b"],"sourcePages":[{"sourceId":"gm-2025-04b","pages":[1502,1503]}],"authoringBatch":"batch-08"}
---

# P24DA: particulate sensor heater response suggests an exhaust-sample problem

P24DA is an exhaust-sample error for the particulate sensor. The GM strategy is intended to detect a sensor removed from the exhaust stream or clogged. Its diagnostic evidence is filtered heater behavior, not simply a high soot reading.

## Qualification is unusually specific

The table compares an exponentially weighted heater-power quantity with a 1.04 threshold, but does not clearly state that quantity's unit. Monitoring is limited to specified sensor protection-heating or regeneration phases. Valid exhaust pressure, temperature and flow estimates are required, along with healthy supply, communication and sensor electronics.

The continuation includes an engine-off interval above 21,600 seconds, closed-loop heater operation for more than 47 seconds, suitable exhaust temperature and a qualified flow transient. Those prerequisites matter more than the entry's “no debounce” wording: the final comparison is not always available immediately. Reporting is Type A, one trip.

## What the result means

Review sensor state and the thermal response under the actual qualified flow conditions. A low particulate reading cannot confirm that exhaust is reaching the sensing element. Conversely, failure to run this narrowly enabled monitor does not prove the sample path is clear.

Use the exact service procedure to investigate the documented removed-or-clogged possibilities. The source includes a communication-condition notation inconsistency and lacks clear heater-metric units, so its table should not be converted into an external wattage test.

## Source and application limits

This explanation covers the cited 2025 GM monitor. Confirm the vehicle and calibration in its service information before applying these limits; inclusion in this file does not establish model compatibility. [GM diagnostic parameters, PDF page 1502](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1502). [GM diagnostic parameters, PDF page 1503](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG04B.pdf#page=1503).
