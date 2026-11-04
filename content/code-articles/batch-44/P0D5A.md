---
{"entryId": "generic-p0d5a", "code": "P0D5A", "title": "P0D5A: MX-30 charging-connection detection circuit fault", "description": "Mazda describes an open connection-detection path, while the generic title says proximity intermittency.", "status": "draft", "sourceReview": "needs-review", "scope": "Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0D5A:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV (E))]. Verify exact vehicle specification.", "sourceIds": ["mazda-mx30-ev-id300204057312"], "authoringBatch": "batch-44", "sourceLocators": [{"sourceId": "mazda-mx30-ev-id300204057312", "locator": "id300204057312; DTC P0D5A:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV (E))]; Outline and Diagnostic Procedure"}]}
---

# P0D5A: MX-30 charging-connection detection circuit fault

The generic P0D5A description is proximity-detection circuit A intermittent or erratic. Mazda's MX-30 electric chart instead identifies an open circuit in the connection-detection path between charging equipment and the onboard charger. This implementation difference is retained explicitly. The source does not define an intermittency counter, voltage band, or terminal-level waveform.

## Connection detection and source terminology

The stated fail-safe stops charging. That makes the connection-detection information relevant even when the charging plug appears physically seated: visible insertion does not prove that the electronic detection path is intact. The code does not, by itself, establish a stuck connector lock.

Mazda first preserves the snapshot and compares behavior with different charging equipment. A current fault proceeds to inspection of the charge-port assembly connection, onboard-charger connection, connection-detection circuit, and charge port. A historical-only result after the comparison can support a problem with the original equipment. The chart's quick-charging wording should be checked against the applicable complete procedure before selecting a test setup.

After the path checks, continuing recurrence leads to CAN diagnosis and another diagnostic pass before the onboard-charger replacement branch. Other DTCs are reviewed at completion. This order avoids treating a broken detection path as an automatic charger failure.

Record equipment identity, current fault status, connector findings, and the location of any verified open circuit. Charge-port access requires the manufacturer's high-voltage precautions. Do not bridge proximity or connection-detection terminals to convince the vehicle that a connection is safe; supervised diagnosis should establish why the intended signal is missing.

## Source and applicability

[Mazda factory procedure, P0D5A](https://charm.li/Mazda/MX-30%20%28DR%29%20Electric%20%28d9p9-1a-22c_ver5%29/esicont/srvc/html/id300204057312.html). id300204057312; DTC P0D5A:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV (E))]; Outline and Diagnostic Procedure. Mazda MX-30 (DR) Electric, e-SKYACTIV workshop manual d9p9-1a-22c_ver5, Mazda Australia edition; DTC P0D5A:00 [BATTERY CHARGE CONTROL MODULE (e-SKYACTIV (E))]. Verify exact vehicle specification. This explains the documented monitor; it does not establish applicability to other vehicles.
