---
{"entryId":"generic-p0cd8","code":"P0CD8","title":"P0CD8: Outlet circuit high can show a temperature below −40°C","description":"GM P0CD8’s explicit threshold pairs a cold outlet-temperature report with a high ADC count, rather than an overheating conclusion.","status":"draft","sourceReview":"needs-review","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[642]}],"authoringBatch":"batch-28"}
---

# P0CD8: Outlet circuit high can show a temperature below −40°C

P0CD8 concerns the battery-coolant outlet-temperature sensor B high circuit in this GM controller. Its explicit threshold is outlet temperature below −40°C with ADC above 3823. The electrical high designation must not be described as proof of high coolant temperature.

## Read the signal relationship and timing

The converted temperature comes from the sensing circuit. An extreme cold report can therefore require electrical diagnosis before it is accepted as actual coolant temperature. Retain the raw diagnostic evidence and related circuit faults for the workshop.

The failure must occupy 1.75 seconds within a 2.5-second observation window, evaluated every 250 milliseconds. The pass criterion returns to at least −40°C and ADC no greater than 3823 for 2.5 seconds. A single normal-looking value does not establish that complete recovery state.

## Confirm monitor support

Diagnostic enable, enabled operating-state communication and controller supply of at least 9 volts are required. These conditions should be documented when deciding whether a repeat test could provide a fresh assessment.

The source's strategy sentence says outlet temperature goes above a threshold, whereas its explicit converted-temperature comparison is cold. That wording conflict remains flagged, with no missing correction invented. The code does not supply a universal sensor location or replacement rule. Physical work on the battery cooling and high-voltage systems requires qualified personnel following the exact vehicle service procedure.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 642](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=642).
