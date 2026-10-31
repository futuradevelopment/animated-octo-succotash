---
{"entryId":"generic-p0bc1","code":"P0BC1","title":"P0BC1: fan feedback remains high when the battery fan is commanded off","description":"GM P0BC1 uses an off-command feedback test labelled fan relay welded in the cited calibration.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[239]}],"authoringBatch":"batch-27"}
---

# P0BC1: fan feedback remains high when the battery fan is commanded off

P0BC1 has a generic battery cooling-fan supply-high description. In the cited GM table, the monitor is specifically labelled fan relay welded and evaluates the fan control-signal feedback while the fan is commanded off. That application detail is more useful than assuming every occurrence proves a failed relay.

## Command and feedback must be compared

The documented threshold is feedback at or above 0.9 V with the fan command OFF. Ten failures among twenty samples at 100 ms intervals are required. A voltage observed while the fan is intentionally commanded on does not reproduce this particular decision.

The adjacent P0A81 row contains other feedback thresholds and command states. Those values should not be borrowed for P0BC1. Keeping the requested state and monitored response together helps distinguish the off-state complaint from a different fan-unit diagnostic.

## Establish the monitor's operating conditions

The BPCM must be in RUN, low-voltage supply must be between 9 and 18 V, and neither P0A1F nor P0A81 may be active. These prerequisites affect whether a later absence of P0BC1 is a meaningful retest.

The table provides no terminal identification or universal relay-replacement instruction. A technician should use the applicable fan-control circuit procedure to establish why feedback persists in the off state. Battery-area access still requires the vehicle's hybrid safety precautions; the numerical feedback limit is not permission to bypass the fan circuit.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 239](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=239).
