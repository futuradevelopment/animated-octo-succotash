---
{"entryId": "generic-p2e2d", "code": "P2E2D", "title": "P2E2D: MX-30 onboard-charger 12-volt supply too low", "description": "Mazda distinguishes the charger's low-voltage operating supply from its AC input and high-voltage charging output.", "status": "draft", "sourceReview": "checked", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P2E2D:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300204060300"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300204060300", "locator": "id300204060300; DTC P2E2D:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P2E2D: MX-30 onboard-charger 12-volt supply too low

P2E2D concerns the onboard charger's 12-volt power supply in the cited MX-30 electric manual. The charger detects supply voltage at or below a specified value and stops charging. The page does not disclose that limit or a timer. This is distinct from low AC input voltage and from the traction battery's high-voltage state.

## The charger's low-voltage supply under load

Mazda first checks PCM DTCs and handles those faults before continuing. It then assesses the charger relay, the relay supply path, the onboard-charger connector, and the charger supply circuit for an open or short to ground. The lead-acid auxiliary battery is checked after those circuit branches.

This order is useful when a vehicle cannot charge despite having traction-battery capacity available. The charger still depends on its operating supply, and a missing feed or connection can produce this code without an internal power-conversion failure. Conversely, the title alone does not prove the auxiliary battery needs replacement; the actual supply-path and battery findings matter.

After correction, Mazda checks recurrence using a controlled charging assessment. A current or pending return leads through CAN diagnosis and repetition of the diagnostic sequence before onboard-charger replacement. The source's quick-charging terminology must be applied through the complete relevant service procedure, not a guessed setup. Other DTCs are reviewed at completion.

Preserve the snapshot, relay and wiring results, and the auxiliary-battery test outcome. Do not bypass the relay or feed external power into charger terminals. Although the monitored supply is nominally 12 volts, access is within an EV charging system and requires appropriate professional isolation and safety precautions.

## Source and applicability

[Mazda factory procedure, P2E2D](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300204060300.html). id300204060300; DTC P2E2D:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P2E2D:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
