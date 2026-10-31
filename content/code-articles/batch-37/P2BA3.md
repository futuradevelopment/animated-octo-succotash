---
{"entryId": "generic-p2ba3", "code": "P2BA3", "title": "P2BA3: Starter-generator belt performance inferred from speed ratio", "description": "The documented Mazda P2BA3 procedure covers starter-generator belt performance inferred from speed ratio.", "status": "draft", "sourceReview": "checked", "scope": "Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-G (WITH Mazda M Hybrid)). Verify exact vehicle specification; this is a Mazda application example.", "sourceIds": ["mazda3-2019-id0102t40111u2"], "sourceLocators": [{"sourceId": "mazda3-2019-id0102t40111u2", "locator": "DTC P2BA3:00 [PCM (SKYACTIV-G (WITH Mazda M Hybrid))]; id0102t40111u2; detection conditions and diagnostic procedure"}], "authoringBatch": "batch-37"}
---

# P2BA3: Starter-generator belt performance inferred from speed ratio

P2BA3 concerns starter/generator mechanical performance. Mazda's M Hybrid PCM judges the belt drive by comparing engine speed with integrated starter generator rotation speed.

## A ratio fault needs trustworthy speed inputs

The monitor detects a ratio outside the prescribed standard over five seconds. Its listed preconditions include engine speed at or below 500 rpm and normal receipt of the ISG rotation-speed signal. The page does not publish the allowable ratio, so a guessed pulley ratio is not a valid substitute.

A broken drive belt or malfunctioning decoupling ring tensioner is possible, but the manual also lists crankshaft-position and ISG rotation-sensor faults. It first checks related P0335, P0A1E, P0A4C and P0A4D records. Those branches matter because incorrect speed information can resemble a mechanical disagreement.

## Inspect the drive after the signal checks

The mechanical branch evaluates the belt assembly and correct installation. This is a source-supported reason to investigate the drive, not evidence that every P2BA3 requires a new generator. Mazda inhibits i-stop, regenerative braking and motor assistance, and warns that loss of electrical replenishment can eventually deplete the battery.

Its repeatability sequence includes starting and at least five seconds of idling, followed by code review. Belt and tensioner inspection should be performed with the proper engine and hybrid-system precautions. Preserve the originating speed-related faults alongside the belt finding so that confirmation addresses both measurement validity and mechanical operation.

## Documented application

Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-G (WITH Mazda M Hybrid)). Verify exact vehicle specification; this is a Mazda application example. [Mazda factory diagnostic page, mirrored by CHARM](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id0102t40111u2.html).
