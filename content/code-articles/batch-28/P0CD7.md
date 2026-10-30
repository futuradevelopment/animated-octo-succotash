---
{"entryId":"generic-p0cd7","code":"P0CD7","title":"P0CD7: Outlet circuit low needs the correct sensor identity","description":"P0CD7 identifies battery coolant sensor B circuit low, but the cited GM threshold column inconsistently names the inlet sensor.","status":"draft","sourceReview":"needs-review","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[641,642]}],"authoringBatch":"batch-28"}
---

# P0CD7: Outlet circuit low needs the correct sensor identity

P0CD7 is labelled battery-coolant temperature sensor B circuit low in the cited GM table. The component and strategy identify the outlet coolant sensor. However, the printed threshold column names inlet temperature, creating a material ambiguity that must not be hidden in a repair article.

## Do not transfer a neighboring sensor's limit

This article does not present the printed inlet-temperature number as a verified outlet-sensor specification. A technician needs the exact vehicle circuit and diagnostic procedure to resolve that identity before applying a numerical limit. The distinction matters because inlet and outlet reports are used separately in the surrounding coolant-plausibility monitors.

The unambiguous timing is 1.75 seconds of failure within a 2.5-second window, with 250-millisecond evaluations. The continuation also lists diagnostic enable, enabled operating-state communication and sensing-controller supply of at least 9 volts. Those prerequisites remain useful when evaluating whether a retest was eligible.

## Preserve the original reports

Record both inlet and outlet readings, their corresponding circuit faults and the controller's operating state. A low-circuit label alone does not establish that coolant is physically cold, nor does it prove that the outlet sensor needs replacement.

The source's inconsistent naming is flagged rather than repaired by assumption. Sensor B's physical location and any high-voltage cooling-system work must follow the actual vehicle service information, performed by appropriately qualified personnel. This monitor summary is not a complete fault-isolation procedure.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 641](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=641) · [GM source, physical page 642](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=642).
