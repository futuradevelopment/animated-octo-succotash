---
{"entryId":"generic-p0b8d","code":"P0B8D","title":"P0B8D: block 17 low sensing needs the neighboring reading","description":"GM P0B8D uses low block 17 and block 18 reports plus repeated-sample confirmation in the documented controller.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[231]}],"authoringBatch":"batch-27"}
---

# P0B8D: block 17 low sensing needs the neighboring reading

The GM table identifies P0B8D as block 17 voltage measurement out of range low. The generic circuit Q label identifies the code family, but a complete interpretation requires the source's paired-channel rule and its operating conditions.

## Establish the recorded low pattern

Block 17 must read below 2 V and block 18 must also read below 2 V. Both values should be retained in a diagnostic record. A single-channel screenshot may be useful context, but it cannot establish the complete condition described for this monitor.

Fifteen failures among twenty samples are required, with 100 ms between samples. This is the within-test filter. The separate two-trip Type B classification concerns fault reporting and should not be interpreted as a simple owner-performed reset recipe.

## Separate controller eligibility from battery condition

The BPCM must be in RUN with its low-voltage supply in the 9–18 V range. Active P0A1F inhibits evaluation. If those conditions are absent, a failure that does not immediately return after clearing has not necessarily been resolved.

The code establishes a reported paired low condition rather than a conclusive diagnosis of a particular cell or module. A qualified technician must use the exact vehicle's sensing-circuit information to distinguish actual voltage from inaccurate measurement. This table provides no safe battery-disassembly or direct high-voltage test instructions.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 231](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=231).
