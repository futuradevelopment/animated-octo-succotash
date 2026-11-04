---
{"entryId": "generic-p0ee7", "code": "P0EE7", "title": "P0EE7: MX-30 negative quick-charge temperature circuit", "description": "The negative QBC temperature-sensor procedure uses circuit checks and staged recurrence decisions.", "status": "draft", "sourceReview": "checked", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0EE7:00 [PCM (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300202035100"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300202035100", "locator": "id300202035100; DTC P0EE7:00 [PCM (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P0EE7: MX-30 negative quick-charge temperature circuit

Mazda identifies P0EE7 as a fault in the negative circuit of the quick-battery-charge temperature sensor. The generic coupler temperature-sensor B title becomes a specific charge-port sensing path in this MX-30 electric manual. No temperature threshold or persistence time appears on the page, so the code alone does not prove excessive connector temperature.

## Negative-terminal temperature signal interpretation

The diagnostic route starts at the charge port-electrical supply unit connector and common connector C-56. It considers a grounded negative signal, a signal or ground-path short to supply, and open circuits. These checks distinguish faulty temperature information from a failed electronic unit. They also show why replacing a charging cable solely from this DTC would be premature.

The later branches are based on recurrence. After the circuit checks, a returning pending code with CAN communication normal leads to the charge port assembly. The chart then reassesses the fault before its charge port-electrical supply unit branch. PCM replacement appears still later, after post-repair recurrence and another diagnostic pass. These sequential decisions should not be presented as three equally supported replacement choices.

Save the snapshot and the original charging conditions. The service report should identify the electrical defect found, the assembly branch reached, and whether the fault remained pending after repair. The manual's negative-sensor procedure should be followed directly rather than assuming it is identical to the positive-sensor test.

Inspection near the charging port requires the applicable high-voltage precautions. Do not bypass temperature monitoring to restore charging or manipulate energized coupler terminals. The diagnostic evidence supports qualified inspection of this particular Mazda system, not a universal coupler pinout.

## Source and applicability

[Mazda factory procedure, P0EE7](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300202035100.html). id300202035100; DTC P0EE7:00 [PCM (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0EE7:00 [PCM (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
