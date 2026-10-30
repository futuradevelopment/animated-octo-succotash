---
{"entryId":"generic-p0bc3","code":"P0BC3","title":"P0BC3: Sensor E is compared with other battery temperatures","description":"GM P0BC3 uses a temperature-deviation comparison for sensor E, distinct from its low- and high-circuit diagnostics.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[586]}],"authoringBatch":"batch-28"}
---

# P0BC3: Sensor E is compared with other battery temperatures

P0BC3 is the battery-temperature sensor E performance monitor in this GM table. It compares the sensor's reported temperature with the average temperature reported by other module groups. The problem is disagreement, not simply a temperature above a universal overheating limit.

## Interpret the difference correctly

The failure boundary is an absolute deviation greater than 20°C. Either a higher or lower report can exceed that difference. The criterion must not be translated into “the battery is 20 degrees too hot,” because the comparison is between sensor reports and a reference average.

GM specifies 50 failing observations out of 67 at 100-millisecond intervals. The result describes repeated disagreement, rather than one isolated temperature sample captured during a changing operating condition.

## Establish that the reference is usable

The temperature-rationality fault bundle must be false. That eligibility condition matters when other temperature-circuit or communication concerns affect the available measurements. Preserve the E reading, the comparison temperatures and relevant fault status for the diagnostic technician.

The table does not prove whether the difference is a real thermal condition or a sensor/reporting problem. Nor does the letter E identify a universal physical sensor location. A qualified high-voltage workshop must match the actual battery and its service information before inspecting components. The useful verification is a supported comparison under valid monitoring conditions, not simply clearing the code and watching the dashboard.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 586](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=586).
