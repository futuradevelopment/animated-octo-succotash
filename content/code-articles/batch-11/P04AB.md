---
{"entryId":"generic-p04ab","code":"P04AB","title":"P04AB: Purge valve B open-load detection uses a voltage window","description":"P04AB evaluates purge-driver feedback with the output off and the supply within a defined range in this GM calibration.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG07A Part 2, specific documented monitor only. Vehicle, engine and calibration applicability require confirmation; application-matrix filename join is unresolved.","sourceIds":["gm-2025-07a-2"],"sourcePages":[{"sourceId":"gm-2025-07a-2","pages":[749]}],"authoringBatch":"batch-11"}
---

# P04AB: Purge valve B open-load detection uses a voltage window

P04AB is the open-circuit code for EVAP purge valve B. GM’s cited section is labelled purge valve B2 and describes an open-load check of the low-side driver. It assesses electrical feedback rather than measuring whether the valve seals vapor flow.

## The off-state voltage window

The documented output window is above 3.26 volts and at or below 4.7 volts while the power stage is switched off. The battery must be between 10 and 17 volts, and the condition uses a one-second interval with two-trip reporting.

Those details explain why a voltage reading without the driver command is incomplete. An energized purge output is a different electrical state, and a supply outside the permitted range does not reproduce the qualified monitor.

## Keep electrical continuity separate from flow

Preserve the valve-B driver command and feedback at the failure event. A purge-flow complaint or an EVAP leak-test result may concern the same system, but it does not independently confirm an open electrical load.

The source does not identify which connector or component causes the open-load signature. The B2 section label also must be mapped through the actual vehicle information instead of assumed to locate a physical valve. Use the appropriate circuit procedure to distinguish wiring, load and driver possibilities. The table supplies a diagnostic voltage window, not instructions to apply an external voltage or replace the purge valve automatically.

## Source and applicability

This explanation covers the cited GM monitor, not every vehicle carrying this code. The application-matrix filename does not resolve cleanly to this file, so no model or engine fitment is assigned. [GM diagnostic table, PDF page 749](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=749).
