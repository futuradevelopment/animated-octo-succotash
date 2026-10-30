---
{"entryId":"generic-p0ce6","code":"P0CE6","title":"P0CE6: Valve-position feedback low uses a reference percentage","description":"P0CE6 evaluates battery coolant-valve feedback below 28 percent of reference voltage, separately from the valve motor’s control-circuit faults.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[560]}],"authoringBatch":"batch-28"}
---

# P0CE6: Valve-position feedback low uses a reference percentage

P0CE6 identifies the low electrical range of the battery coolant-valve position feedback in this GM monitor. The reported feedback voltage must be below 28 percent of its reference voltage. That percentage is not a statement that the valve is 28 percent open.

## Use the correct measurement

The controller compares an electrical feedback signal with a reference. Its result should not be converted directly into a physical valve angle or coolant-flow percentage without the applicable sensor calibration. The source does not supply that universal conversion.

System voltage must exceed 10.2 volts. Qualification requires 640 failures in 800 observations at 6.25-millisecond intervals. A single low scanner sample does not establish the full qualifying sequence.

## Distinguish feedback from motor drive

The neighboring motor-control codes evaluate drive-circuit states and have motion-direction prerequisites. P0CE6 concerns the position-feedback range. Combining those descriptions into a generic stuck-valve diagnosis can obscure which electrical evidence is actually present.

A technician should preserve the feedback reading, reference information, commanded valve state and relevant driver faults before selecting the vehicle-specific test. The monitor does not determine whether the cause is a sensor, connection or controller path, nor does it require valve replacement by itself. Work around the battery cooling system and high-voltage components requires the proper service procedure and qualified personnel.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 560](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=560).
