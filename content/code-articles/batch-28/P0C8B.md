---
{"entryId":"generic-p0c8b","code":"P0C8B","title":"P0C8B: Sensor I high circuit is the cold end of the conversion","description":"The cited GM P0C8B monitor pairs a high ADC count with a temperature below −40°C and timed recovery criteria.","status":"draft","sourceReview":"needs-review","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[639,640]}],"authoringBatch":"batch-28"}
---

# P0C8B: Sensor I high circuit is the cold end of the conversion

P0C8B identifies battery-temperature sensor I's high-circuit condition in this GM monitor. The explicit comparison uses ADC above 3992 and a converted temperature below −40°C. It is an electrical-range diagnostic, not a direct assertion that the battery is unusually hot.

## Retain the signal and its converted reading

A very cold reported temperature may reflect the sensing path. The code alone does not establish the actual temperature or select a failed sensor. The workshop needs the original ADC-related evidence and the relevant companion faults to interpret it using the correct circuit information.

GM requires 1.4 seconds within a two-second failure window, at 200-millisecond evaluation intervals. Its recovery row requires temperature at least −40°C and ADC no greater than 3992 for two seconds. A momentary acceptable reading does not establish that complete pass state.

## Check that the comparison is available

Specified communication, 5-volt-reference, internal-performance and bus-off faults inhibit the shared diagnostic. Communication must be enabled and the secondary protection self-test inactive. Those prerequisites matter when deciding whether no returning code represents meaningful verification.

The strategy wording about temperature rising conflicts with the explicit cold threshold and remains flagged. No universal physical location for I or replacement instruction is inferred. A qualified high-voltage technician must follow the exact battery and vehicle procedure before any physical electrical investigation.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 639](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=639) · [GM source, physical page 640](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=640).
