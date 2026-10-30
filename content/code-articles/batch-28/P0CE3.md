---
{"entryId":"generic-p0ce3","code":"P0CE3","title":"P0CE3: Valve drive 1 high is evaluated in a different motion state","description":"P0CE3 checks the coolant-valve driver high state while the valve is stopped or moving forward in the cited GM monitor.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[559,560]}],"authoringBatch":"batch-28"}
---

# P0CE3: Valve drive 1 high is evaluated in a different motion state

P0CE3 is the high-circuit diagnostic for battery coolant-valve motor drive 1 in this GM table. The monitor observes the driver's HIGH electrical state. It does not directly measure coolant flow or prove that the valve is mechanically stuck.

## Retain the commanded motion state

The continuation specifies that the valve must be stopped or moving forward, with system voltage above 10.2 volts. This differs from the reverse-motion condition used by the low-circuit P0CE2 check. Applying one assumed operating state to both codes would lose an actual diagnostic distinction.

The high-state condition requires 90 failures out of 100 samples at 6.25-millisecond intervals. The useful record therefore includes the driver status and the commanded valve state across the monitoring period.

## Keep feedback faults separate

Position-sensor and command-tracking diagnostics use other comparisons in the same table. They should not be treated as evidence that every P0CE3 requires a new valve. The exact vehicle procedure must establish whether the electrical report arises in the control path, wiring or another supported cause.

The source does not provide a universal pinout, wire color or resistance test. A qualified technician must identify the actual valve architecture and service information before further work. Battery cooling-system investigation near high-voltage equipment requires the appropriate professional precautions, with the original command and feedback evidence retained for verification.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 559](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=559) · [GM source, physical page 560](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=560).
