---
{"entryId":"generic-p25ca","code":"P25CA","title":"P25CA: bank-one cam lock-pin open-circuit feedback needs command context","description":"The GM P25CA monitor checks the intake bank-one camshaft lock-pin driver for an open-circuit pattern during its off state.","status":"draft","sourceReview":"needs-review","scope":"GM 2020 20OBDG07 intake bank-one camshaft park-lock electrical monitor. Only the cited monitor and calibration are described; per-code vehicle and engine applicability has not been established.","sourceIds":["gm-2020-20obdg07-diagnostics"],"sourcePages":[{"sourceId":"gm-2020-20obdg07-diagnostics","pages":[453]}],"authoringBatch":"batch-30"}
---

# P25CA: bank-one cam lock-pin open-circuit feedback needs command context

P25CA concerns the intake bank-one camshaft lock-pin actuator control circuit. In this GM table, its open-circuit diagnosis uses the low-side driver's feedback while the driver is off. That electrical result is separate from proving that the camshaft cannot reach a particular timing angle.

## Low feedback is not a complete diagnosis by itself

The source also assigns low off-state feedback to a separate short-to-ground code. P25CA identifies the open-circuit branch; the vehicle-specific driver diagnostic distinguishes the underlying electrical conditions. A single observed low voltage should therefore not be treated as sufficient proof of either branch.

The table's printed resistance-limit cell is incomplete, so this article does not invent an ohmic test value from the truncated text. The clearly stated driver state and fault category remain useful, but exact circuit testing requires the applicable service information.

## Check eligibility and the correct actuator

The monitor requires the controller's drive state, engine speed at least 80 rpm and battery voltage within its documented operating window. Its listed evaluation duration is one second. These conditions distinguish it from a parked-engine resistance measurement and from a mechanical park-position check performed during startup.

Confirm bank identification and the lock-pin actuator circuit on the actual engine. The source does not justify replacing the entire camshaft actuator, timing chain or controller from P25CA alone. Verification should include credible command/feedback behavior during an enabled test, with related circuit faults considered before interpreting any cam-position complaint.

## Source and applicability

GM 2020 20OBDG07 intake bank-one camshaft park-lock electrical monitor. Only the cited monitor and calibration are described; per-code vehicle and engine applicability has not been established.

[20OBDG07 Diagnostics](https://gsi.ext.gm.com/gmspo/mode6/pdf/2020/20OBDG07%20Diagnostics.pdf#page=453), physical PDF page 453.
