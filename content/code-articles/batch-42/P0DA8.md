---
{"entryId": "generic-p0da8", "code": "P0DA8", "title": "P0DA8: Ford's battery and inverter voltage observations disagree", "description": "Ford's P0DA8 monitor compares voltage measurements across the hybrid battery and inverter power-electronics path.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [179]}], "authoringBatch": "batch-42"}
---

# P0DA8: Ford's battery and inverter voltage observations disagree

Ford's P0DA8 monitor detects a voltage-correlation problem. The source describes disagreement between the high-voltage battery measurement and the inverter input measurement, or between the inverter's input and output voltage measurements. It is not simply another name for the inverter voltage being too high.

## There are two comparison paths

The documented threshold is a difference above 60 volts for either listed comparison. Ford does not give a separate code-specific confirmation time for this row. It would therefore be inappropriate to borrow the 10 millisecond timing printed for the neighboring P0C79 overvoltage condition.

The monitor's entry conditions include elapsed time after power-up and a valid low-voltage supply. Supporting voltage-sensor and battery-controller communication checks are also named. These conditions help establish whether the compared measurements can be used confidently.

## A mismatch does not identify the inaccurate side

Because P0DA8 is a comparison result, it does not by itself select one sensor or controller as the failed component. The two comparison paths also mean that an acceptable battery-to-input relationship does not automatically rule out an input-to-output discrepancy. The complete event information matters.

A professional assessment should retain the individual measurements, the relevant operating stage and accompanying sensing or communication findings. The threshold is a description of Ford's historical monitor, not an instruction to create a voltage difference or access internal high-voltage nodes. Verification uses the exact vehicle's approved procedure and demonstrates valid, consistent measurements through the relevant sequence. Clearing the code or seeing one apparently normal battery voltage after the event does not show that both correlation paths have been assessed successfully.

## Source and applicability

Ford Motor Company, [physical page 179](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=179). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
