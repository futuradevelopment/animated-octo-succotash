---
{"entryId":"generic-p0d6a","code":"P0D6A","title":"P0D6A: high compressor voltage includes a recovery-state requirement","description":"GM P0D6A uses separate high-voltage failure and recovery boundaries and requires the compressor speed request to return to zero before passing.","status":"draft","sourceReview":"checked","scope":"GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[712]}],"authoringBatch":"batch-29"}
---

# P0D6A: high compressor voltage includes a recovery-state requirement

P0D6A is the high-range voltage check for the electric A/C compressor in this GM calibration. Its prerequisite comparison with battery-voltage information helps distinguish the documented evaluation from a free-standing sensor reading taken in an arbitrary operating state.

## Failure and recovery are not identical

The failure boundary is at least 450 V, with 30 failures out of 60 samples at a 50-millisecond interval. System voltage must exceed 10.25 V and the hardware state must indicate Accessory or Run/Crank. The listed battery-voltage fault must be inactive, and the compressor reading must be within 15 V of the battery reference.

The pass boundary is 440 V or less. After a failure, the compressor speed request must also go to zero before passing is enabled. Thus, merely seeing voltage drop below the failure boundary does not establish that the stated recovery requirements were met.

## Interpret a qualified high-voltage report

Capture the compressor reading, battery reference, hardware state and speed request together. Their relationship explains which diagnostic branch could run and whether a later normal-looking value represented an eligible pass.

The table does not prove a failed compressor, nor does it specify a universal battery charging limit. It supplies monitor criteria for a historical system. Physical diagnosis belongs to qualified high-voltage personnel using the matching service information. The thresholds are not instructions to apply voltage, bypass controls or access energized compressor wiring.

## Source and applicability

GM 2015 15OBDG01 Hybrid Diagnostics, only the cited EACCM monitor and calibration. Per-code vehicle and engine applicability has not been established; these historical thresholds are not universal service specifications.

[General Motors source, physical page 712](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=712)
