---
{"entryId": "generic-p0ef9", "code": "P0EF9", "title": "P0EF9: repeated A/D lows versus Mazda’s low sensor-voltage timer", "description": "The MX-30’s P0EF9:00 has distinct repeated-input and sustained-voltage conditions; its external charger-sensor mapping needs review.", "status": "draft", "sourceReview": "needs-review", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0EF9:00 [BECM (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300201015600"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300201015600", "locator": "id300201015600; DTC P0EF9:00 [BECM (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P0EF9: repeated A/D lows versus Mazda’s low sensor-voltage timer

Mazda’s BECM chart for P0EF9:00 identifies an A/D input malfunction or low voltage from a monitored sensor. The generic catalog names charger-A input voltage sensor B, but the factory page does not establish that external sensor location. The article therefore keeps that applicability gap explicit.

## Two different low-voltage observations

One condition is the A/D input WD_IN falling below 0.05 V on three consecutive observations. The second is the voltage sensor measuring less than 0.94 V for 0.5 seconds. These alternatives use different limits and different persistence rules.

Three observations must not be converted into an invented three-second delay. Nor is 0.94 V a minimum permitted voltage for the vehicle’s mains supply or high-voltage battery: it is the sensor reading used by this documented monitor.

## Follow the source’s actual diagnostic context

The procedure records snapshot data, clears the stored entry and checks for the same pending BECM fault. A recurring result routes through CAN communication diagnosis before its high-voltage battery replacement branch. Internal battery malfunction is the listed possible cause.

No external wiring or connector diagram is provided. WD_IN is therefore evidence about the controller’s monitored input, not a safe external test point identified by this page.

## Preserve both limits in the repair record

Qualified EV diagnosis should retain which low-voltage path was supported and resolve the generic charger-sensor mapping with applicable service information. The final DTC inspection checks for additional faults. A normal value after code clearing does not by itself establish that either qualifying low-input event has been eliminated.

## Source and applicability

[Mazda factory procedure, P0EF9](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300201015600.html). id300201015600; DTC P0EF9:00 [BECM (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0EF9:00 [BECM (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
