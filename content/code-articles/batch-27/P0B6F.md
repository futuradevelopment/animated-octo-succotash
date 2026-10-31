---
{"entryId":"generic-p0b6f","code":"P0B6F","title":"P0B6F: block 11 low voltage is evaluated with the next block","description":"GM P0B6F requires low block 11 and block 12 measurements in the documented BPCM test.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[228]}],"authoringBatch":"batch-27"}
---

# P0B6F: block 11 low voltage is evaluated with the next block

P0B6F denotes a low measurement in the block 11 sensing circuit of the cited GM hybrid system. The code's circuit K label identifies the diagnostic channel. It does not, by itself, identify a physical cell location or tell a workshop which battery part to order.

## The decision uses a pair

GM's row requires block 11 below 2 V and block 12 below 2 V. That paired condition makes neighboring-channel data important. A report containing only the lowest number visible on a scanner is less useful than a time-aligned record of the two monitored values.

The low condition is filtered through fifteen failures among twenty samples, spaced 100 ms apart. The source therefore describes repeated low evidence, rather than treating one noisy or transient reading as sufficient.

## Use the enable state to interpret an intermittent complaint

The BPCM must be in RUN, the 12 V system supply must be between 9 and 18 V, and P0A1F must not be active. If the code is absent after a reset, first establish that those conditions were available for evaluation.

The monitor cannot distinguish every real-voltage problem from every sensing-path defect on its own. A trained hybrid technician needs the exact vehicle procedure and wiring identification to make that distinction. The table contains no authorization for opening the battery, bypassing contactors or applying a test voltage to the sensing circuit.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 228](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=228).
