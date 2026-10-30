---
{"entryId":"generic-p0b5b","code":"P0B5B","title":"P0B5B: why a block 7 low reading must be considered with block 8","description":"GM P0B5B uses two adjacent block readings below its low threshold, so one isolated scan value is incomplete evidence.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[225]}],"authoringBatch":"batch-27"}
---

# P0B5B: why a block 7 low reading must be considered with block 8

P0B5B identifies the low-voltage measurement branch for battery block 7 in the cited GM document. Its generic circuit-G label locates a sensing channel; it does not tell an owner that a particular physical cell is empty or that the whole traction battery has failed.

## The neighboring reading matters

GM's failure condition requires both block 7 and block 8 readings below 2 V. That paired requirement is important: a screenshot showing only block 7 omits part of the evidence used by this calibration. Record the two values together and retain the operating state in which they were captured.

The controller counts fifteen failing samples out of twenty, with samples separated by 100 ms. This is a filtered detection rule, not an instruction to interpret every momentary low sample as a stored fault. The published classification is a two-trip Type B diagnosis.

## Check the conditions behind the data

Evaluation requires BPCM RUN mode, a 12 V system supply between 9 and 18 V, and no active P0A1F. Those conditions concern the controller's ability to evaluate the measurement; they are separate from the high-voltage block reading itself.

Compare the paired readings and any companion faults with the vehicle-specific sensing-circuit procedure. The table does not distinguish a damaged block from a sensing connection or controller problem by this code alone. Do not open the battery or probe high-voltage circuits to test the numerical example.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 225](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=225).
