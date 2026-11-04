---
{"entryId": "generic-p0ca7", "code": "P0CA7", "title": "P0CA7: why the discharge-current sign matters on the MX-30", "description": "The MX-30 EV sets P0CA7:00 for a sufficiently negative current reading before noise removal, rather than for low charging current.", "status": "draft", "sourceReview": "checked", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0CA7:00 [BECM (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300201010100"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300201010100", "locator": "id300201010100; DTC P0CA7:00 [BECM (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P0CA7: why the discharge-current sign matters on the MX-30

P0CA7:00 describes discharging over-current in Mazda’s MX-30 Electric battery-control procedure. Its threshold is less than −450 A for one second, using the high-voltage power-supply current value before noise removal.

## A negative number can represent excessive current

The sign identifies the direction used by this monitor. Reading −450 A as simply a low current would reverse the diagnostic meaning: Mazda classifies the condition as excessive discharge. It is also a strict less-than comparison, not a statement that exactly −450 A triggers the entry.

The persistence requirement separates a qualifying observation from a single instantaneous sample. In addition, the chart explicitly names the pre-filtered value. Neither an isolated spike nor a smoothed reading taken after the event reproduces all the evidence used by the controller.

## Follow the battery-control evidence

Mazda first saves the snapshot associated with the fault. The subsequent professional confirmation checks for the same pending BECM entry when the recorded conditions are reproduced. This is an evidence-driven workshop step, not a recommendation to subject the vehicle to a high-load road test.

A repeated result leads to CAN communication checks before the factory battery replacement action. The listed cause is an internal high-voltage battery malfunction; the page does not give an external connector or wiring diagram for localizing this condition.

## Limit the conclusion to what was detected

The discharge monitor shares the general recurrence workflow with other internal-battery faults. Its distinguishing information is current direction, raw measurement stage and duration. Those details should remain in the service record alongside any other DTCs. High-voltage handling and the final system check require personnel trained for this vehicle’s EV procedures.

## Source and applicability

[Mazda factory procedure, P0CA7](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300201010100.html). id300201010100; DTC P0CA7:00 [BECM (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0CA7:00 [BECM (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
