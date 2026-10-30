---
{"entryId":"generic-p0d3a","code":"P0D3A","title":"P0D3A: Charger input-current sensor reports below its valid threshold","description":"P0D3A detects reported AC input current below 1.65 amps when the cited GM charger monitor sees AC voltage above 80 volts.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[740]}],"authoringBatch":"batch-28"}
---

# P0D3A: Charger input-current sensor reports below its valid threshold

## Reported current is the diagnostic input

GM’s P0D3A table entry is an AC input-current sensor circuit-low monitor, identified as IACS. It sets when reported AC current falls below 1.65 amps with AC voltage above 80 volts. The monitored quantity is the charger’s input-current signal; it is not a direct statement about battery-side output current or the capacity of the high-voltage battery.

The controller requires the low-current condition for 160 milliseconds within a 200-millisecond window. The passing criterion is current at or above 1.65 amps for 200 milliseconds. A single later reading above the threshold does not establish completion of that pass period.

## Separate low signal from an ordinary low-power session

The source characterizes this as a sensor circuit check. It does not provide enough information to diagnose a specific external charger, disconnected wire or internal component from the code alone. In particular, treating every charging session below 1.65 amps as a fault would ignore the operating context and the controller’s own signal handling.

Preserve the reported AC current, AC voltage and code status, then use the applicable service procedure to establish whether the electrical reading is credible. Comparing only DC battery current with the AC input threshold would use the wrong side of the charger.

The neighboring P0D3B high-circuit entry uses a different upper limit, while P0D39 evaluates zero-offset rationality in a separate state. Those monitors answer different questions and should not be merged into one generic charger-failure diagnosis. The historical GM criteria here are not universal specifications or instructions for energized AC/HV probing.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[Manufacturer source, physical page 740](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=740).
