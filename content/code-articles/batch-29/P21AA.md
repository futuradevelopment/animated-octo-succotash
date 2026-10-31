---
{"entryId":"generic-p21aa","code":"P21AA","title":"P21AA: reductant level channel two reports a short-to-ground status","description":"GM P21AA uses a communicated level-sensor error status generated after a test impulse; it does not mean the reductant tank is simply low.","status":"draft","sourceReview":"checked","scope":"GM 2015 15OBDG04 Engine Diagnostics, cited reductant level-channel-two low circuit example only. Per-code vehicle, engine and calibration applicability has not been established; use the matching vehicle procedure.","sourceIds":["gm-2015-15obdg04-engine-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg04-engine-diagnostics","pages":[208]}],"authoringBatch":"batch-29"}
---

# P21AA: reductant level channel two reports a short-to-ground status

P21AA is the low-circuit diagnostic for reductant level channel 2 in this GM example. The ECM receives a discrete level-sensor error status over CAN. The source identifies status 1 as a short-to-ground error, rather than interpreting the code as a direct statement of how much fluid remains in the tank.

## The sensor test has a defined timing context

The table associates that status with a voltage below 0.17 V measured directly after a test impulse. Ignition must be on, battery voltage above 8 V and the general enabling conditions satisfied. The error must persist for more than three seconds; the ECM monitor runs at a 0.01-second rate.

That impulse-based measurement is not equivalent to an arbitrary steady voltage measured at an unspecified connector. The correct vehicle procedure must identify the actual sensor, controller and test representation.

## Separate communication from fluid level

Preserve the reported channel-two status and the relevant supply information. A low-circuit error may invalidate level information, but adding reductant does not by itself verify that the electrical reporting path is healthy.

The parameter row does not isolate wiring from an internal sensor or module defect, and it gives no universal replacement instruction. A technician needs the applicable circuit and communication diagnostics to establish the cause. Verification should demonstrate valid channel-two reporting under the qualified test conditions, rather than relying only on a changed dashboard level indication or an erased code.

## Source and applicability

GM 2015 15OBDG04 Engine Diagnostics, cited reductant level-channel-two low circuit example only. Per-code vehicle, engine and calibration applicability has not been established; use the matching vehicle procedure.

[General Motors source, physical page 208](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG04%20Engine%20Diagnostics.pdf#page=208)
