---
{"entryId":"generic-p0b7e","code":"P0B7E","title":"P0B7E: block 14 low sensing includes the block 15 report","description":"GM P0B7E is a paired low-voltage measurement check, not a stand-alone conclusion about battery capacity.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[229]}],"authoringBatch":"batch-27"}
---

# P0B7E: block 14 low sensing includes the block 15 report

P0B7E identifies the block 14 low-range sensing diagnosis in this GM controller. Generic descriptions refer to voltage-sense circuit N. The numbered block in the source is the diagnostic channel for this calibration, not a universally applicable pack-location guide.

## Preserve both low readings

The row requires block 14 below 2 V and block 15 below 2 V. The adjacent measurement is therefore evidence, not background information. Ask for a record that captures both channels and their operating context rather than only the minimum value seen on a scanner.

GM confirms the condition using fifteen failures among twenty samples at 100 ms intervals. That rule distinguishes a repeatedly detected condition from an isolated display update. The listed two-trip Type B reporting classification does not replace this within-test requirement.

## Understand what the code leaves open

The test runs in BPCM RUN mode with a low-voltage supply between 9 and 18 V and no active P0A1F. A fault that fails to return while those conditions are absent has not demonstrated a passing monitor.

The table does not decide whether the low pair reflects battery voltage, a sensing connection or controller measurement behavior. That separation requires the correct hybrid circuit information. Do not use the threshold as permission to probe inside the battery or bypass its isolation provisions; physical work belongs with trained hybrid-service personnel.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 229](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=229).
