---
{"entryId":"generic-p21af","code":"P21AF","title":"P21AF: level-channel-three low circuit is a discrete error report","description":"GM P21AF evaluates a short-to-ground status for reductant level channel three, separately from the actual fluid-level interpretation.","status":"draft","sourceReview":"checked","scope":"GM 2015 15OBDG04 Engine Diagnostics, cited reductant level-channel-three low circuit example only. Per-code vehicle, engine and calibration applicability has not been established; use the matching vehicle procedure.","sourceIds":["gm-2015-15obdg04-engine-diagnostics"],"sourcePages":[{"sourceId":"gm-2015-15obdg04-engine-diagnostics","pages":[209]}],"authoringBatch":"batch-29"}
---

# P21AF: level-channel-three low circuit is a discrete error report

P21AF addresses reductant level channel 3 in the cited GM diagnostic table. The ECM monitors a CAN-reported discrete sensor status. Status 1 is identified as the channel-three short-to-ground error; it is not a direct numerical measurement of the tank's remaining fluid.

## Keep the channel and test response together

The source associates the low-circuit status with a sensor voltage below 0.17 V directly after a test impulse. The ECM evaluation requires ignition on, battery voltage above 8 V and the stated general enabling conditions. The error must last more than three seconds while the monitor runs at a 0.01-second rate.

The same electrical error class exists for other level channels, but that does not make their data interchangeable. The actual channel-three status must remain attached to the diagnostic record and be mapped through the vehicle's service information.

## Electrical validity comes before level conclusions

A technician should preserve the error status, power conditions and any related reporting faults. A changed fluid-level display after refilling does not, by itself, verify the channel-three circuit or the impulse-response test.

The document does not identify the faulty wire, connector or internal sensor element, and it contains no component replacement rule. Use the matching circuit and communication procedure to locate the cause. The printed impulse-response voltage is a controller diagnostic criterion, not permission to apply a test voltage or probe an unspecified reductant sensor connection.

## Source and applicability

GM 2015 15OBDG04 Engine Diagnostics, cited reductant level-channel-three low circuit example only. Per-code vehicle, engine and calibration applicability has not been established; use the matching vehicle procedure.

[General Motors source, physical page 209](https://gsi.ext.gm.com/gmspo/mode6/pdf/2015/15OBDG04%20Engine%20Diagnostics.pdf#page=209)
