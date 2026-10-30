---
{"entryId":"generic-p25ce","code":"P25CE","title":"P25CE: Bank 2 camshaft park-lock circuit reads low with the driver off","description":"Understand the ground-side electrical branch of this GM intake-camshaft park-lock monitor and why it differs from an actuator position fault.","status":"draft","sourceReview":"needs-review","scope":"GM 2020 20OBDG07 ECM Summary Tables, electronic intake-camshaft park-lock actuator monitor. The source establishes bank and driver-state logic but does not establish model fitment or a complete external resistance-test specification.","sourceIds":["gm-2020-20obdg07-diagnostics"],"sourcePages":[{"sourceId":"gm-2020-20obdg07-diagnostics","pages":[453,454,571]}],"authoringBatch":"batch-29"}
---

# P25CE: Bank 2 camshaft park-lock circuit reads low with the driver off

P25CE identifies a low electrical condition in the Bank 2 intake-camshaft park-lock actuator circuit. In the cited GM monitor, the controller detects low voltage while the low-side driver is off and classifies that observation as a short toward ground. The code concerns control-circuit behavior, not a low camshaft angle.

## Retain the bank and command state

Bank 2 is part of the diagnostic identity. A normal reading on the other bank does not verify this circuit, and the high-side partner P25CF evaluates a different condition: voltage high while the driver is on. Command state therefore belongs alongside the observed voltage in any useful event record.

GM also lists P25CD as a Bank 2 open-circuit branch. Its abbreviated row likewise describes low voltage during the off state. The summary does not expose all internal driver logic needed to distinguish those outcomes, so a single voltage observation cannot replace the controller's fault classification and vehicle-specific circuit tests.

## What qualifies the monitor

The failure interval is one continuous second, with ECU drive state, engine speed at least 80 rpm and battery voltage above 10.9 V and below 25.5 V. The basic enable table excludes starting mode and battery-saver operation; the entry uses a two-trip strategy.

The ground-fault threshold cell is incomplete, so this article does not invent an external resistance limit. Verify the circuit with the applicable service procedure and confirm the qualified monitor passes. An electrical fault alone does not establish a failed locking pin, incorrect mechanical timing or a required actuator replacement.

## Source and applicability

GM 2020 20OBDG07 ECM Summary Tables, electronic intake-camshaft park-lock actuator monitor. The source establishes bank and driver-state logic but does not establish model fitment or a complete external resistance-test specification.

[General Motors source, physical page 453](https://gsi.ext.gm.com/gmspo/mode6/pdf/2020/20OBDG07%20Diagnostics.pdf#page=453) · [General Motors source, physical page 454](https://gsi.ext.gm.com/gmspo/mode6/pdf/2020/20OBDG07%20Diagnostics.pdf#page=454) · [General Motors source, physical page 571](https://gsi.ext.gm.com/gmspo/mode6/pdf/2020/20OBDG07%20Diagnostics.pdf#page=571)
