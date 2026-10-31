---
{"entryId":"generic-p0bbd","code":"P0BBD","title":"P0BBD: neighboring battery-block deviation is measured under load conditions","description":"GM P0BBD checks the largest adjacent-block voltage difference with valid sensing, temperature and current prerequisites.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[242,243]}],"authoringBatch":"batch-27"}
---

# P0BBD: neighboring battery-block deviation is measured under load conditions

P0BBD is the battery-block voltage-deviation monitor in this GM source. It does not compare one selected block with a universal state-of-charge target. Instead, the controller evaluates differences between adjacent block measurements across the battery.

## The maximum adjacent difference matters

The published criterion is the largest absolute difference between a block and its next neighbor exceeding 1.5 V. GM requires three failures out of three samples at a one-second interval. A useful record therefore preserves the block array and identifies which neighboring pair produced the maximum difference.

The test is enabled with battery current greater than 0.2 A and minimum battery temperature at least −7°C. The table does not define the sign convention here, so this summary does not label that current as charging or discharging. Those conditions should be matched before comparing an event with a later resting-battery scan.

## Valid sensing is a prerequisite

RUN mode and the specified low-voltage supply window are required. The long inhibit list spans two physical pages and includes block low, high and rationality faults. This makes measurement integrity important before interpreting voltage variation as an actual battery imbalance.

The monitor does not identify a mandatory replacement or supply a battery-reconditioning procedure. A trained hybrid technician should establish the relevant block pair, valid measurements and eligible operating conditions using the correct vehicle documentation. Do not infer a component's remaining life solely from this diagnostic code.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 242](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=242) · [GM PDF, physical page 243](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=243).
