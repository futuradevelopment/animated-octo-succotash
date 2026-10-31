---
{"entryId":"generic-p0bc5","code":"P0BC5","title":"P0BC5: Sensor E circuit high can look extremely cold","description":"GM’s P0BC5 high-circuit threshold corresponds to a reported temperature below −40°C, so electrical direction and temperature must be separated.","status":"draft","sourceReview":"needs-review","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[639,640]}],"authoringBatch":"batch-28"}
---

# P0BC5: Sensor E circuit high can look extremely cold

P0BC5 names the high-circuit diagnostic for battery-temperature sensor E in this GM table. The electrical label does not mean that the battery is hot. Its explicit threshold pairs a reported temperature below −40°C with an ADC count above 3992.

## Distinguish the signal from physical temperature

That extreme converted value can be a symptom of the sensing path. It is not independent confirmation that the battery has reached the displayed temperature. Preserve the signal report and the companion electrical faults before drawing a thermal conclusion.

The criterion must occupy 1.4 seconds of a two-second window, evaluated every 200 milliseconds. The pass row requires at least −40°C and an ADC count no greater than 3992 for two seconds. Failure and recovery therefore both involve qualification time.

## Check the high-circuit prerequisites

The table excludes specified communication, 5-volt-reference and internal-performance faults, as well as the indicated bus-off condition. The secondary protection self-test must be inactive and communication enabled. Those conditions determine whether a retest can provide fresh evidence.

The strategy wording refers to temperature going above a threshold despite the explicit cold-temperature boundary. That discrepancy remains a source-review flag; no missing interpretation is presented as an OEM instruction. Sensor E's physical position and any high-voltage battery inspection require the actual vehicle service information and a suitably trained technician.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 639](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=639) · [GM source, physical page 640](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=640).
