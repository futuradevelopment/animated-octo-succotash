---
{"entryId":"generic-p21ab","code":"P21AB","title":"P21AB: level-channel-two circuit-high covers two reported fault types","description":"GM P21AB includes open-load and short-to-battery status paths, which must be distinguished before choosing a reductant level-sensor circuit test.","status":"draft","sourceReview":"checked","scope":"GM 2015 15OBDG04 Engine Diagnostics, cited reductant level-channel-two high circuit example only. Per-code vehicle, engine and calibration applicability has not been established; use the matching vehicle procedure.","sourceIds":["gm-2015-15obdg04-engine-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg04-engine-diagnostics","pages":[208,209]}],"authoringBatch":"batch-29"}
---

# P21AB: level-channel-two circuit-high covers two reported fault types

P21AB is the high-circuit record for reductant level channel 2 in this GM table. Its useful distinction is that two different communicated error statuses can produce the code. The title alone does not tell the technician which electrical condition was detected.

## Read the reported error status

The open-load path uses status 3. The source associates it with a sensor response between 3.56 and 4.74 V measured 1.5 milliseconds after a test impulse. A separate short-to-battery path uses status 2 and a response above 4.74 V at that same specified delay.

Both paths require ignition on, battery voltage above 8 V and the general enabling conditions. The error must exist for more than three seconds, with the ECM's stated one-second monitoring rate. The impulse response and the ECM's monitoring interval describe different stages of the diagnosis.

## Do not collapse open and short conditions

Retain the channel-two error status with the code. An open-load classification and a short-to-battery classification lead to different circuit questions even though they share P21AB. Neither is equivalent to a simple low reductant level.

The parameter table supplies no connector pinout or mandatory sensor replacement. The appropriate vehicle procedure must determine whether the fault lies in a connection, wiring or internal electronics. A steady meter reading at an unidentified point cannot recreate the specified impulse test. Verification should establish valid electrical status reporting, not merely a cleared record or a refilled tank.

## Source and applicability

GM 2015 15OBDG04 Engine Diagnostics, cited reductant level-channel-two high circuit example only. Per-code vehicle, engine and calibration applicability has not been established; use the matching vehicle procedure.

[General Motors source, physical page 208](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG04%20Engine%20Diagnostics.pdf#page=208) · [General Motors source, physical page 209](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG04%20Engine%20Diagnostics.pdf#page=209)
