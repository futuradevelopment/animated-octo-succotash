---
{"entryId": "generic-p2e2e", "code": "P2E2E", "title": "P2E2E: MX-30 onboard-charger 12-volt supply reads high", "description": "Mazda checks the charger supply and ground paths before treating a high operating-voltage report as an internal charger failure.", "status": "draft", "sourceReview": "checked", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P2E2E:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV)]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300204060400"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300204060400", "locator": "id300204060400; DTC P2E2E:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV)]; Outline and Diagnostic Procedure"}]}
---

# P2E2E: MX-30 onboard-charger 12-volt supply reads high

The MX-30 electric P2E2E monitor detects an onboard-charger operating-supply voltage at or above its specified limit. Mazda identifies this as the 12-volt supply and stops charging when the fault is detected. The page gives no actual threshold or duration. It does not describe excessive traction-battery voltage or excessive incoming AC voltage.

## The charger's high supply-voltage indication

The high-supply procedure specifically includes an open charger ground circuit as well as a short to supply in the power circuit. That distinction matters: an abnormal voltage report can depend on the reference path, so checking only the positive feed can miss the cause. Charger relay condition, connector terminals, the auxiliary lead-acid battery, and the charger itself also appear in the diagnostic scope.

PCM DTCs are assessed first. The workshop then follows the relay, connector, supply, ground, and battery branches before evaluating charger recurrence. A battery inspection result, rather than the generic word high, determines whether the auxiliary battery requires service.

Persistent recurrence during the controlled charging check leads to CAN diagnosis and a repeated sequence. Onboard-charger replacement is conditional on communication being normal and the fault continuing to return. The complete service information must define the applicable charging setup, and other DTCs are reviewed at completion.

Useful records include the snapshot, the actual supply and ground defect if found, and current-versus-historical status after repair. Do not improvise an external ground or power feed to force charging. Work at the charger requires the correct EV safety procedures even when the monitored circuit is a low-voltage operating supply.

## Source and applicability

[Mazda factory procedure, P2E2E](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300204060400.html). id300204060400; DTC P2E2E:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV)]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P2E2E:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV)]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
