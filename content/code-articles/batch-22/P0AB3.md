---
{"entryId": "generic-p0ab3", "code": "P0AB3", "title": "P0AB3: Battery outlet circuit low includes a cooler-module reference", "description": "Read the GM P0AB3 outlet-sensor criterion and distinguish a high indicated outlet value from an established airflow fault.", "status": "draft", "sourceReview": "checked", "scope": "GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established.", "sourceIds": ["gm-2010-10obdg10-hybrid-diagnostics"], "sourcePages": [{"sourceId": "gm-2010-10obdg10-hybrid-diagnostics", "pages": [238]}], "authoringBatch": "batch-22"}
---

# P0AB3: Battery outlet circuit low includes a cooler-module reference

P0AB3 is the circuit-low fault for battery outlet-air temperature in this GM table. Its thermal representation is outlet temperature above 95°C while at least one of the four module-temperature inputs remains below 70°C.

## The peer condition changes the interpretation

The other module inputs are alternatives, not a requirement that all four be cool. Retaining the full temperature pattern is therefore more useful than saving only the outlet value. The row is enabled in battery-controller run mode with a suitable low-voltage supply and no controller-performance fault.

The monitor uses 30 failing samples out of 40 at 100ms intervals. A brief hot spike and a completed sample decision are different pieces of evidence.

## Do not confuse circuit-low with poor cooling

The code label concerns the sensor circuit, even though its criterion is expressed through a high temperature. It does not independently prove that outlet air was physically that hot or that airflow was restricted. P0AB2 separately checks outlet plausibility with the fan commanded on.

Preserve outlet temperature, all four module readings and their validity at the event. The table provides no sensor mounting location, connector assignment or replacement test. Those details require the correct battery-cooling service information. A trained high-voltage technician must follow the approved isolation and access procedure before investigating the physical sensor or fan area.

## Source and applicability

GM 2010 10OBDG10 Hybrid Diagnostics, only the cited controller and monitor. These are historical calibration examples; individual vehicle, engine and hardware applicability is not established. [GM PDF, page 238](https://gsi.ext.gm.com/gmspo/mode6/pdf/2010/10OBDG10%20Hybrid%20Diagnostics.pdf#page=238).
