---
{"entryId":"generic-p25cc","code":"P25CC","title":"P25CC: Intake camshaft park-lock driver remains high when switched on","description":"Understand the Bank 1 park-lock actuator electrical fault and why a high signal during driver activation differs from incorrect camshaft timing.","status":"draft","sourceReview":"needs-review","scope":"GM 2020 20OBDG07 ECM Summary Tables, electronic intake-camshaft park-lock actuator monitor. The source establishes bank and driver-state logic but does not establish model fitment or a complete external resistance-test specification.","sourceIds":["gm-2020-20obdg07-diagnostics"],"sourcePages":[{"sourceId":"gm-2020-20obdg07-diagnostics","pages":[453,571]}],"authoringBatch":"batch-29"}
---

# P25CC: Intake camshaft park-lock driver remains high when switched on

P25CC identifies a high electrical condition in the Bank 1 intake-camshaft park-lock actuator circuit. The cited GM monitor watches a low-side driver: voltage remaining high while that driver is on indicates the short-to-power branch. This is an electrical state comparison, not a measurement that the camshaft has rotated too far.

## Driver command changes the meaning of voltage

The commanded state is essential. The source separately assigns the low or ground-side branch to P25CB and the open-circuit branch to P25CA, using observations with the driver off. A high reading considered without its command state cannot reproduce the P25CC decision.

The failure must persist for one second, with the ECU in drive state, engine speed at least 80 rpm and battery voltage above 10.9 V and below 25.5 V. Additional basic conditions exclude starting mode and battery-saver operation. A static key-on observation therefore is not automatically a completed monitor.

## Preserve electrical and mechanical findings separately

Record the exact Bank 1 code, driver command and companion camshaft faults. The park-lock circuit result does not by itself prove a mechanical locking-pin failure, an incorrect timing chain position or a need to replace the actuator assembly.

The threshold cell contains an incomplete external-test notation, so this article supplies no resistance value for probing the circuit. Use vehicle-specific wiring information to isolate the power-side fault and confirm the electrical monitor passes. The two-trip strategy and the required operating conditions should be retained when judging whether a repair has been meaningfully verified.

## Source and applicability

GM 2020 20OBDG07 ECM Summary Tables, electronic intake-camshaft park-lock actuator monitor. The source establishes bank and driver-state logic but does not establish model fitment or a complete external resistance-test specification.

[General Motors source, physical page 453](https://gsi.ext.gm.com/gmspo/mode6/pdf/2020/20OBDG07%20Diagnostics.pdf#page=453) · [General Motors source, physical page 571](https://gsi.ext.gm.com/gmspo/mode6/pdf/2020/20OBDG07%20Diagnostics.pdf#page=571)
