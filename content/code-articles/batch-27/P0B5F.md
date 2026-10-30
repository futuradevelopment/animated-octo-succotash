---
{"entryId":"generic-p0b5f","code":"P0B5F","title":"P0B5F: block 8 rationality needs two sustained comparison errors","description":"GM P0B5F checks block 8 and block 9 against pack voltage, with circuit faults able to inhibit the comparison.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[226]}],"authoringBatch":"batch-27"}
---

# P0B5F: block 8 rationality needs two sustained comparison errors

For the documented GM battery controller, P0B5F is a plausibility failure involving block 8. The generic voltage-sense H description should be read as a channel designation. It does not supply a pack layout, connector terminal or universally applicable cell count.

## Reconstruct the calculation

The source compares twenty times the block 8 reading with total pack voltage and repeats that calculation for block 9. Both absolute differences must be greater than 70 V. This paired disagreement is different from merely seeing one low block reading during a transient event.

The persistence requirement is 160 failing samples in a 170-sample window at 100 ms per sample. Record enough data to distinguish a sustained comparison failure from a single snapshot. The table's arithmetic is a controller diagnostic; it should not be repurposed as a workshop battery-loading procedure.

## Respect the prerequisites

The block 8 input must be valid. The controller must be in RUN, the contactors must have been closed for more than 200 ms, and relevant block-circuit or pack-voltage faults must not be active. These dependencies explain why clearing one code or watching the warning lamp cannot establish that the rationality monitor has completed.

Investigate the consistency of block 8, block 9 and pack-voltage reports before attributing the complaint to a battery component. The correct vehicle procedure determines how a trained hybrid technician separates an inaccurate sensing path from an actual battery condition.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 226](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=226).
