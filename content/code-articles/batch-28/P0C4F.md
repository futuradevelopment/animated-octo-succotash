---
{"entryId":"generic-p0c4f","code":"P0C4F","title":"P0C4F: Motor B learning can fail by range or by a sudden change","description":"P0C4F has two documented completed-learn branches: excessive absolute offset and excessive change from the stored value.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[687]}],"authoringBatch":"batch-28"}
---

# P0C4F: Motor B learning can fail by range or by a sudden change

P0C4F checks the result of motor-B resolver-offset learning in this GM table. A completed learn can fail in two ways: its absolute correction exceeds 30 degrees, or its correction differs from the previously stored value by more than 10 degrees. The second branch makes prior learning history diagnostically important.

## Keep the previous value when available

A correction may remain inside the absolute 30-degree limit yet still differ too much from the earlier stored result. Treating the code only as an absolute-angle failure can therefore overlook the branch that actually explains the event.

Both comparisons require a completed learn. The listed conditions include motor speed below 20 rpm and high-voltage supply above 192 volts, with a 300-millisecond learn time. An aborted or never-completed procedure is a different kind of evidence.

## Do not turn the result into a parts diagnosis

Retain the prior correction, new correction, completion status and relevant position-sensing faults for the trained technician. The monitor does not by itself identify an incorrect mechanical assembly, a failed sensor or a required replacement motor.

This is a historical motor-B controller calibration. The table does not map B to a universal physical drive unit or establish a safe manual learning method. The exact vehicle service procedure must control resolver learning and high-voltage work. Verification should explain which of the two documented branches was resolved, rather than merely note that memory was cleared.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 687](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=687).
