---
{"entryId":"generic-p04ac","code":"P04AC","title":"P04AC: Purge valve B low is an off-state driver-voltage fault","description":"P04AC checks low feedback on the purge valve B driver while that output is off, with explicit supply eligibility.","status":"draft","sourceReview":"checked","scope":"2025 GM 25OBDG07A Part 2, specific documented monitor only. Vehicle, engine and calibration applicability require confirmation; application-matrix filename join is unresolved.","sourceIds":["gm-2025-07a-2"],"sourcePages":[{"sourceId":"gm-2025-07a-2","pages":[749]}],"authoringBatch":"batch-11"}
---

# P04AC: Purge valve B low is an off-state driver-voltage fault

P04AC concerns a low circuit condition on EVAP purge valve B. In the GM monitor, the relevant measurement is the output of the low-side driver when the power stage is off. It is not a statement that purge flow or fuel-tank pressure is low.

## Command and supply qualify the number

The row specifies output voltage at or below 2.74 volts. The driver must be switched off, and battery voltage must lie between 10 and 17 volts. Detection uses a one-second interval and two-trip reporting, together with other enable and inhibit conditions.

This makes an unlabeled low-voltage reading poor evidence. The same circuit can have different expected behavior under an ON command; the monitor’s off-state condition needs to be preserved.

## Select the circuit investigation

Record the actual purge-B output assignment and its control state. The surrounding source calls the section B2, which needs to be reconciled with the vehicle’s component naming before a connector is selected.

The code does not locate a grounding condition or establish whether the load, harness or driver is responsible. A flow or sealing test addresses another aspect of purge operation and cannot replace the applicable electrical procedure. Use the documented feedback condition to choose the correct service branch, then confirm monitor completion under eligible conditions rather than assuming a cleared code demonstrates a repair.

## Source and applicability

This explanation covers the cited GM monitor, not every vehicle carrying this code. The application-matrix filename does not resolve cleanly to this file, so no model or engine fitment is assigned. [GM diagnostic table, PDF page 749](https://gsi.ext.gm.com/gmspo/mode6/pdf/2025/25OBDG07A%20Part%202.pdf#page=749).
