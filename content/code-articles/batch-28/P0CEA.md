---
{"entryId":"generic-p0cea","code":"P0CEA","title":"P0CEA: Electronics pump performance depends on operating mode and temperature","description":"GM P0CEA uses coolant-to-charger temperature behavior with charge/drive calibration differences and established pump operation.","status":"draft","sourceReview":"checked","scope":"15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[565,566,745]}],"authoringBatch":"batch-28"}
---

# P0CEA: Electronics pump performance depends on operating mode and temperature

P0CEA is the power-electronics coolant-pump performance monitor in this GM controller. It compares coolant-sensor and high-voltage-charger temperatures using operating-state-dependent logic. A pump named in the code is not, by itself, a diagnosed failed part.

## Ambient temperature and mode change the comparison

The source uses different lookup thresholds for charging and driving. At 0°C outside-air temperature, the supporting table gives 15°C for the charging comparison and 20°C for the driving comparison. Those examples show why one fixed temperature difference cannot represent every operating condition.

Other branches consider charger temperature and its duration. This article does not collapse the full logic into a single overtemperature rule. The actual charge/drive state and temperature history must accompany the fault record.

## Established operation is required

Pump speed above 30 percent enables the monitor, while below 25 percent disables it. The pump must have been enabled for more than 300 seconds, and the source requires valid, sufficiently stable outside-air information plus absence of listed circuit and temperature faults. Qualification uses 32 failures among 40 observations at 250-millisecond intervals.

These conditions distinguish a valid performance assessment from a short or inhibited test. A qualified high-voltage technician must determine whether the temperature behavior reflects circulation, sensing or another supported issue using the exact vehicle procedure. The table supplies no universal pump-replacement instruction or safe manual test sequence.

## Source and applicability

15OBDG01 Hybrid Diagnostics, cited controller and monitor only. Historical calibration limits are not universal specifications; per-code vehicle, engine and hardware applicability must be verified.

[GM source, physical page 565](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=565) · [GM source, physical page 566](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=566) · [GM source, physical page 745](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=745).
