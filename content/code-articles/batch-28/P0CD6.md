---
{"entryId":"generic-p0cd6","code":"P0CD6","title":"P0CD6: Outlet coolant temperature must disagree with both references","description":"GM P0CD6 compares battery coolant outlet temperature with inlet and cell-average temperatures under established pump operation.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[561]}],"authoringBatch":"batch-28"}
---

# P0CD6: Outlet coolant temperature must disagree with both references

P0CD6 is the battery-coolant outlet-temperature plausibility monitor in this GM table. The source identifies sensor 2 and compares its report with both inlet coolant temperature and average battery-cell temperature. The two comparisons must not be reduced to a single generic overheating limit.

## Two reference differences are required

The documented failure combines an absolute outlet-to-inlet difference of at least 20°C with an absolute outlet-to-cell-average difference of at least 20°C. Either side of the temperature scale can create an absolute deviation. Retain all three temperature reports so the actual condition can be assessed.

Qualification uses 32 failures among 40 samples at 250-millisecond intervals. The controller is observing repeated disagreement, not merely one transient reading.

## Established circulation is a prerequisite

Pump speed must be at least 20 percent for more than one minute, system voltage above 10.2 volts, and the listed temperature, pump and communication faults absent. These conditions explain why an immediate comparison before the cooling system is in the required state is not a valid reproduction of the monitor.

P0CD6 does not determine whether the difference is actual coolant behavior or an inaccurate sensor report. A qualified technician must use the correct cooling-system and high-voltage service procedure to make that distinction. The table supplies no universal sensor location or automatic replacement decision. Verification should include the reference values and valid pump-operation context.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 561](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=561).
