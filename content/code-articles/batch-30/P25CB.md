---
{"entryId":"generic-p25cb","code":"P25CB","title":"P25CB: bank-one cam lock-pin short-to-ground is an electrical branch","description":"GM P25CB is the bank-one camshaft lock-pin driver short-to-ground branch, distinct from mechanical locking-position performance.","status":"draft","sourceReview":"needs-review","scope":"GM 2020 20OBDG07 intake bank-one camshaft park-lock electrical monitor. Only the cited monitor and calibration are described; per-code vehicle and engine applicability has not been established.","sourceIds":["gm-2020-20obdg07-diagnostics"],"sourcePages":[{"sourceId":"gm-2020-20obdg07-diagnostics","pages":[453]}],"authoringBatch":"batch-30"}
---

# P25CB: bank-one cam lock-pin short-to-ground is an electrical branch

P25CB is the intake bank-one camshaft lock-pin actuator's low-circuit diagnosis in this GM implementation. The table describes a short-to-ground branch detected when feedback remains low during a commanded-off driver state. The code concerns the electrical control path, not a measured camshaft timing error.

## Retain the distinction from an open circuit

The neighboring P25CA branch also describes low feedback while the driver is off, but identifies an open circuit. This means that the complete driver diagnostic and the exact service test are important. Selecting a repair from a single low reading would skip the distinction the controller makes between these two fault categories.

The original threshold field for P25CB is visibly incomplete. No resistance limit can responsibly be reconstructed from that cell. The stated circuit category and command state can guide the appropriate procedure without pretending that the table supplies a complete workshop measurement specification.

## Evaluate it in the enabled state

The documented check requires controller drive state, sufficient engine speed and a valid battery-voltage window. It uses a one-second evaluation and is separate from the adjacent cam locking-position offset test.

Identify the actual bank-one lock-pin circuit before investigating wiring, load or controller output. The source does not identify a failed timing chain or automatically condemn the actuator assembly. After an evidence-based repair, verify the driver feedback under the proper command and operating conditions, and then evaluate any remaining cam-position complaints using their own diagnostic criteria.

## Source and applicability

GM 2020 20OBDG07 intake bank-one camshaft park-lock electrical monitor. Only the cited monitor and calibration are described; per-code vehicle and engine applicability has not been established.

[20OBDG07 Diagnostics](https://gsi.ext.gm.com/gmspo/mode6/pdf/2020/20OBDG07%20Diagnostics.pdf#page=453), physical PDF page 453.
