---
{"entryId": "generic-p0d3d", "code": "P0D3D", "title": "P0D3D: MX-30 charger and battery voltage disagreement", "description": "The Mazda monitor compares high-voltage readings from two modules before the charger replacement branch.", "status": "draft", "sourceReview": "checked", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0D3D:00 [PCM (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300202033600"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300202033600", "locator": "id300202033600; DTC P0D3D:00 [PCM (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P0D3D: MX-30 charger and battery voltage disagreement

P0D3D has a generic battery-charger input-voltage sensor circuit title. Mazda's MX-30 electric chart supplies a more specific monitor: the PCM detects excessive disagreement between the voltage reported by the battery energy control module, or BECM, and the battery charge control module. Both modules must be monitoring the high-voltage circuit. The page says the difference reaches a specified value but does not publish that value or a persistence timer.

## Comparing charger and battery readings

A disagreement does not, by itself, identify which reading is wrong. It also differs from a simple assertion that the entire traction battery is overcharged or depleted. Preserve the snapshot and the two modules' diagnostic context before interpreting a single displayed voltage as authoritative.

Mazda first gives priority to U0337 and then to other BECM faults. Those dependencies matter because a charger-versus-battery comparison should not be judged while a related module already reports a fault that requires its own diagnosis. The chart's controller wording around the U0337 scan is awkward, so the exact vehicle scan topology should be checked in the complete manual.

Only after those branches does the chart clear and reassess P0D3D as a current malfunction. A current recurrence leads to the onboard charger branch; a further current recurrence after that work leads to PCM replacement. This sequence does not make the PCM and charger equally likely starting points.

High-voltage component work requires the manufacturer's isolation and safety procedures. An owner-facing explanation should concentrate on the reported values, associated codes, and recurrence evidence. The source does not provide an external test pin, a universal allowable voltage difference, or a basis for opening the battery.

## Source and applicability

[Mazda factory procedure, P0D3D](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300202033600.html). id300202033600; DTC P0D3D:00 [PCM (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0D3D:00 [PCM (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
