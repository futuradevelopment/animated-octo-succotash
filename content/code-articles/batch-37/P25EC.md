---
{"entryId": "generic-p25ec", "code": "P25EC", "title": "P25EC: Supercharger clutch control circuit low", "description": "The documented Mazda P25EC procedure covers supercharger clutch control circuit low.", "status": "draft", "sourceReview": "needs-review", "scope": "Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-X). Verify exact vehicle specification; this is a Mazda application example.", "sourceIds": ["mazda3-2019-id0102u9361900"], "sourceLocators": [{"sourceId": "mazda3-2019-id0102u9361900", "locator": "DTC P25EC:00 [PCM (SKYACTIV-X)]; id0102u9361900; detection conditions and diagnostic procedure"}], "authoringBatch": "batch-37"}
---

# P25EC: Supercharger clutch control circuit low

P25EC is the low-input code for the supercharger clutch control circuit in Mazda's SKYACTIV-X engine. The PCM detects voltage that is too low while it controls the clutch.

## Supply failure and control failure are separate

The source does not publish a numerical voltage threshold or duration for this page. Its cause list includes the F12 15 A fuse, grounded or open clutch supply wiring, grounded or open control wiring, connector faults, clutch malfunction and a PCM fault.

This is why a low result should not be translated immediately into a shorted control wire. If the clutch lacks its proper supply, the observed response can also be incorrect. Mazda first checks the clutch connector and fuse, then the supply circuit, PCM connection and control circuit.

## What confirmation needs to show

Boost operation is inhibited and EGR control stops as the listed fail-safe. Those disabled functions can be downstream responses to the clutch fault rather than separate component failures.

The factory procedure evaluates clutch function after the external electrical paths. It then uses a running self-test and checks whether the same pending DTC returns. The page contains an assembly-replacement reference that should be verified in the exact current parts and repair information; this article does not turn that reference into a universal replacement recommendation. Use professional precautions around the belt drive and supercharger, and retain the proven circuit finding with the repair record.

## Documented application

Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-X). Verify exact vehicle specification; this is a Mazda application example. [Mazda factory diagnostic page, mirrored by CHARM](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id0102u9361900.html).
