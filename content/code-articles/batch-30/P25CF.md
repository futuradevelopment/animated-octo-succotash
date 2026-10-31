---
{"entryId":"generic-p25cf","code":"P25CF","title":"P25CF: bank-two cam lock-pin feedback stays high when commanded on","description":"GM P25CF evaluates a high feedback state during a bank-two lock-pin driver on command, consistent with its short-to-power branch.","status":"draft","sourceReview":"needs-review","scope":"GM 2020 20OBDG07 intake bank-two camshaft park-lock electrical monitor. Only the cited monitor and calibration are described; per-code vehicle and engine applicability has not been established.","sourceIds":["gm-2020-20obdg07-diagnostics"],"sourcePages":[{"sourceId":"gm-2020-20obdg07-diagnostics","pages":[453,454]}],"authoringBatch":"batch-30"}
---

# P25CF: bank-two cam lock-pin feedback stays high when commanded on

P25CF identifies the high-circuit branch for the intake bank-two camshaft lock-pin actuator in this GM table. The key relationship is high feedback while the low-side driver is commanded on. The source classifies that pattern as short to power.

## The commanded state changes the interpretation

A powered actuator circuit is not abnormal under every condition. The monitor's diagnosis depends on what the driver is being told to do. Preserve the command and feedback together; a voltage value recorded without the command state cannot demonstrate the published failure condition.

The bank-two designation also matters. The page contains a similar bank-one circuit family and separate mechanical locking-position checks. Their presence does not make the components, wiring or tests interchangeable on the actual engine.

## Use the clear criteria without inventing the missing ones

The table lists a one-second evaluation in controller drive state, with engine-speed and battery-voltage prerequisites continued onto the next physical page. Its resistance-limit wording is incomplete in the original PDF, so the exact resistance specification must come from the matching service procedure.

P25CF alone does not establish that the camshaft is stuck, that its timing chain is incorrect or that the whole actuator needs replacement. A technician should determine why the specific control path does not show the expected on-state response. Confirmation should address that electrical relationship during an enabled evaluation, then treat any remaining mechanical-position faults as separate evidence.

## Source and applicability

GM 2020 20OBDG07 intake bank-two camshaft park-lock electrical monitor. Only the cited monitor and calibration are described; per-code vehicle and engine applicability has not been established.

[20OBDG07 Diagnostics](https://gsi.ext.gm.com/gmspo/mode6/pdf/2020/20OBDG07%20Diagnostics.pdf#page=453), physical PDF pages 453, 454.
