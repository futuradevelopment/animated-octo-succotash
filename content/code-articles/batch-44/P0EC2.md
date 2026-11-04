---
{"entryId": "generic-p0ec2", "code": "P0EC2", "title": "P0EC2: a very low refrigerant-temperature reading on the MX-30", "description": "Mazda’s P0EC2:00 concerns the battery-cooling refrigerant outlet temperature, despite the generic circuit-high wording.", "status": "draft", "sourceReview": "checked", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0EC2:00 [BECM (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300201014300"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300201014300", "locator": "id300201014300; DTC P0EC2:00 [BECM (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P0EC2: a very low refrigerant-temperature reading on the MX-30

On the Mazda MX-30 Electric, P0EC2:00 names a low-temperature malfunction in the refrigerant line serving the high-voltage battery. The BECM sets it when the battery-cooling refrigerant outlet sensor reports less than −60 °C for 0.5 seconds.

## Circuit high does not mean refrigerant overheating

The catalog’s sensor-B circuit-high description should not be translated into a high fluid temperature. The vehicle-specific criterion is explicitly a very low measured temperature at the outlet. Keeping the electrical code label separate from the physical quantity avoids reversing the meaning of the fault.

The half-second persistence requirement is part of that criterion. A temperature value captured later, once the fault has stopped recurring, cannot alone explain what the BECM observed during the qualifying interval.

## What the factory checks next

Mazda saves the snapshot before clearing the recorded entry. Its subsequent BECM inspection asks whether the same pending DTC is still present. A returning fault leads through CAN communication diagnosis before the procedure’s high-voltage battery replacement action.

The possible-cause field identifies internal battery malfunction. Wiring and connector diagrams are not supplied for this entry, so the page does not justify selecting an exposed pin for a voltage test.

## Retain the sensor’s actual location in the record

This is the battery-cooling refrigerant outlet measurement, not cabin air temperature or a traction-battery cell temperature. Qualified EV diagnosis should preserve that distinction, review the saved conditions and inspect other DTCs at completion. The shared internal-battery workflow does not make all temperature-related codes interchangeable.

## Source and applicability

[Mazda factory procedure, P0EC2](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300201014300.html). id300201014300; DTC P0EC2:00 [BECM (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0EC2:00 [BECM (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
