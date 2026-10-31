---
{"entryId":"generic-p0c0e","code":"P0C0E","title":"P0C0E: motor B inverter power-supply faults use an internal status indication","description":"GM P0C0E checks a failed inverter bias-supply status and must not be interpreted as a universal battery-voltage test.","status":"draft","sourceReview":"needs-review","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[297]}],"authoringBatch":"batch-27"}
---

# P0C0E: motor B inverter power-supply faults use an internal status indication

GM identifies P0C0E as motor B inverter power-supply circuit/open. The described diagnostic detects IGBT bias faults through a phase power-supply status flag. The code does not establish that total battery voltage is low or that the complete inverter must be replaced.

## Distinguish the status flag from other inverter faults

The published failure criterion is a FAILED indication for a phase A, B or C power supply. The adjacent inverter-performance monitor uses a different overdriven/desaturation flag. Keep the original status and companion codes so a technician can select the appropriate diagnostic path.

The source lists one qualifying count at a 2.08 ms rate and one-trip reporting. These are internal detection details; they are not a procedure for energizing or probing the inverter's bias supplies.

## Preserve the source limitation

The enable column includes initialization and supply-voltage wording whose comparisons are joined by OR. That text does not provide a clear conventional voltage window. This article therefore does not substitute an assumed corrected limit or use it as a universal service specification.

The actual vehicle's circuit information must determine safe signal identification, physical diagnosis and verification. A trained hybrid technician must establish high-voltage isolation independently before access. After repair, normal relevant status under eligible operation is more informative than simply deleting the fault record.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 297](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=297).
