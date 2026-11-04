---
{"entryId": "generic-p0ec3", "code": "P0EC3", "title": "P0EC3: two ways Mazda detects the refrigerant outlet sensor fault", "description": "P0EC3:00 can result from repeated low A/D input readings or a persistently excessive reported outlet refrigerant temperature.", "status": "draft", "sourceReview": "checked", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0EC3:00 [BECM (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300201014400"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300201014400", "locator": "id300201014400; DTC P0EC3:00 [BECM (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P0EC3: two ways Mazda detects the refrigerant outlet sensor fault

Mazda’s P0EC3:00 procedure covers the outlet temperature sensor in the high-voltage battery refrigerant line. It identifies an A/D input-circuit malfunction and provides two alternative detection paths.

## An electrical counter and a temperature timer

One path is an A/D converter input at terminal CTH2 below 0.05 V on three successive observations. The other is a reported outlet refrigerant temperature above 128 °C for 0.5 seconds. Either condition can satisfy the chart.

The three-observation rule is not stated as three seconds. Similarly, the half-second value belongs to the temperature condition, not automatically to the electrical condition. Combining them into one generic low-signal threshold would lose information needed to interpret captured data.

## A code label is not a diagnosis of overheating

The generic description is sensor-B circuit low. Mazda’s temperature branch shows why a high reported temperature can accompany that electrical label. The DTC alone does not prove that the refrigerant physically reached the displayed temperature; the sensor/input evidence must be evaluated.

The factory flow preserves the snapshot and checks for the same pending BECM code after clearing. If it returns, CAN communication is assessed before the high-voltage battery replacement branch. The source lists an internal battery malfunction and does not offer an external connector diagram for this entry.

## Verification scope

The technician must distinguish which detection path was supported, while observing all applicable EV precautions. Mazda also requires a final check for other DTCs. A later plausible temperature reading is useful context, but it does not replace the recurrence decision or resolve accompanying communication faults.

## Source and applicability

[Mazda factory procedure, P0EC3](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300201014400.html). id300201014400; DTC P0EC3:00 [BECM (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0EC3:00 [BECM (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
