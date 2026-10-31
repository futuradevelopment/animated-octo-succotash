---
{"entryId":"generic-p0b9c","code":"P0B9C","title":"P0B9C: block 20 low sensing does not require another block","description":"GM P0B9C checks the final block measurement directly, unlike earlier paired low-voltage monitors in the same table.","status":"draft","sourceReview":"checked","scope":"GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established.","sourceIds":["gm-2010-10obdg10-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2010-10obdg10-hybrid-diagnostics","pages":[233]}],"authoringBatch":"batch-27"}
---

# P0B9C: block 20 low sensing does not require another block

P0B9C is the low-range code for block 20 voltage sensing in the cited GM controller. Generic readers call this voltage-sense circuit T low. The final-block row differs from earlier rows that use two neighboring measurements.

## Use the final-block rule as printed

The published failure condition is block 20 below 2 V. No block 21 condition is present. Adding one by extending the pattern of earlier rows would invent a requirement and could mislead a diagnosis.

GM still confirms the event through fifteen failures among twenty samples at 100 ms intervals. The source also lists two-trip Type B reporting. These are controller detection and reporting details, not instructions for resetting a warning by repeatedly cycling the vehicle.

## Confirm the conditions behind the report

The BPCM must be in RUN with its low-voltage supply between 9 and 18 V, and P0A1F must be inactive. If an attempted retest lacks those prerequisites, the absence of an immediate return cannot establish that the low-range monitor passed.

Retain the block 20 reading and other relevant battery data before clearing faults. The source does not determine whether the reading reflects actual battery voltage or a sensing-path defect, and it does not prescribe replacing the final block. The applicable hybrid diagnostic procedure must establish that distinction. Physical battery access and high-voltage testing require trained service personnel and the correct isolation precautions.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, cited BPCM or hybrid-controller monitor only. Historical calibration values are not universal specifications; no per-code model, engine or hardware fitment has been established. [GM PDF, physical page 233](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=233).
