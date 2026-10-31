---
{"entryId":"generic-p04ca","code":"P04CA","title":"P04CA: a low refuel-request signal is different from a stuck fuel door","description":"The GM P04CA monitor detects a low electrical reading from the fuel-fill door request switch, using a defined sample count.","status":"draft","sourceReview":"checked","scope":"GM 2015 15OBDG01 HCP2/VICM hybrid-control summary. Only the cited monitor and calibration are described; per-code vehicle and engine applicability has not been established.","sourceIds":["gm-2015-15obdg01-hybrid-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg01-hybrid-diagnostics","pages":[595]}],"authoringBatch":"batch-30"}
---

# P04CA: a low refuel-request signal is different from a stuck fuel door

P04CA in this GM hybrid table is an electrical diagnosis of the fuel-fill door open-request switch circuit. The monitor looks for a low reported signal that indicates a short-to-ground condition. It is not a direct measurement of whether the fuel door physically opened.

## The request signal and the door mechanism are different

The table expresses the switch reading as a normalized reported position. A value below 22.9 percent is the documented low-signal criterion. That percentage is the controller's signal representation; the source does not describe it as the physical opening angle of the fuel door.

The diagnostic must be enabled by its calibration and requires six failing samples out of eight, sampled every 500 milliseconds. An isolated reading outside the range does not reproduce the complete sample-based decision. Preserve the request-switch data and the associated fault status rather than relying only on whether a release button appears to work.

## Separate neighboring refueling checks

The same page treats a high switch reading, a wake-up circuit mismatch and incorrect tank pressure during a refueling request as separate diagnoses. A P04CA finding should not be converted into a tank-pressure or mechanical latch repair without further evidence.

Use the matching vehicle procedure to identify the switch, its supply and return paths and the actual refueling system. The table provides no connector pinout or instruction to bypass the pressure-management sequence. After correction, verify a credible request signal and proper operation under the applicable refueling procedure; clearing the code alone does not prove either.

## Source and applicability

GM 2015 15OBDG01 HCP2/VICM hybrid-control summary. Only the cited monitor and calibration are described; per-code vehicle and engine applicability has not been established.

[15OBDG01 Hybrid Diagnostics](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG01%20Hybrid%20Diagnostics.pdf#page=595), physical PDF page 595.
