---
{"entryId": "generic-p0a8d", "code": "P0A8D", "title": "P0A8D: Low electrical supply during starting or i-stop restart", "description": "The documented Mazda P0A8D procedure covers low electrical supply during starting or i-stop restart.", "status": "draft", "sourceReview": "checked", "scope": "Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-G). Verify exact vehicle specification; this is a Mazda application example.", "sourceIds": ["mazda3-2019-id0102t4009400"], "sourceLocators": [{"sourceId": "mazda3-2019-id0102t4009400", "locator": "DTC P0A8D:00 [PCM (SKYACTIV-G)]; id0102t4009400; detection conditions and diagnostic procedure"}], "authoringBatch": "batch-37"}
---

# P0A8D: Low electrical supply during starting or i-stop restart

P0A8D identifies a low-voltage power-module condition. Mazda's SKYACTIV-G procedure evaluates several different starting-related measurements, so the code should not be reduced to one battery voltage taken with the engine stopped.

## Four paths to the same DTC

The page lists battery voltage of 7.25 V or less during i-stop restart, DC-DC converter terminal voltage of 6 V or less during that restart, PCM terminal voltage of 6.2 V or less during engine starting, or excessive calculated battery internal resistance. The resistance limit is not published on this page.

These alternatives explain why the measurement location and timing matter. A battery reading can differ from the supply actually reaching the converter or PCM. Mazda inhibits i-stop engine stopping and identifies possible failure to start, stalling or failure to restart as voltage falls.

## Distinguish a weak battery from bad information

The procedure considers current-sensor fault P058A and communication-related faults before relying on the reported battery condition. It then tests the battery and checks the battery, current-sensor, PCM and converter connections. The converter supply circuit is evaluated for an open or short to ground.

BATT_CUR and VPWR are the listed diagnostic data items. Repair confirmation includes engine starting and the specified battery-condition/i-stop initialization. Keep the captured starting event with the repair record; a healthy-looking voltage after the event does not disprove the original voltage collapse.

## Documented application

Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-G). Verify exact vehicle specification; this is a Mazda application example. [Mazda factory diagnostic page, mirrored by CHARM](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id0102t4009400.html).
