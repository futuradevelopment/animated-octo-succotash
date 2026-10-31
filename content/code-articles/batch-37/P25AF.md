---
{"entryId": "generic-p25af", "code": "P25AF", "title": "P25AF: Coolant switching valve performance inferred from pressure changes", "description": "The documented Mazda P25AF procedure covers coolant switching valve performance inferred from pressure changes.", "status": "draft", "sourceReview": "needs-review", "scope": "Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-X). Verify exact vehicle specification; this is a Mazda application example.", "sourceIds": ["mazda3-2019-id0102u9787700"], "sourceLocators": [{"sourceId": "mazda3-2019-id0102u9787700", "locator": "DTC P25AF:00 [PCM (SKYACTIV-X)]; id0102u9787700; detection conditions and diagnostic procedure"}], "authoringBatch": "batch-37"}
---

# P25AF: Coolant switching valve performance inferred from pressure changes

P25AF is cataloged as coolant temperature control module requested MIL illumination. Mazda's SKYACTIV-X page instead describes coolant switching valve performance; that definition difference remains unresolved. The PCM expects a water-pressure response when it changes coolant flow and detects repeated absence of that response.

## Why a good electrical circuit may not be enough

The detection table describes ten consecutive missing pressure fluctuations during the relevant cold-temperature valve operation. Preconditions include engine speed at least 2,000 rpm and absence of specified valve and water-pressure sensor circuit codes. The source pairs a coolant limit of 65 °C with 140 °F, an inconsistent conversion that needs verification. Its valve open/close wording also differs between sections, so neither a temperature conversion nor a precise command-direction rule should be assumed from this page alone.

The supported principle is that changing flow should change pressure upstream of the switching valve. Trapped air, an electric water pump problem or belt loss, misalignment or wear can prevent the expected response even if the valve's wiring is intact.

## Follow both control and cooling-system branches

Mazda compares requested duty with reported valve behavior, checks connectors and circuit integrity, and then inspects the valve. It also includes coolant bleeding, pump and belt checks. P25AF and P26A3 are reported together in the documented event.

The protective response opens the valve, activates the electric thermostat heater, limits intake air and inhibits EGR. Professional verification must reproduce the specified cooling and engine conditions after a supported repair. A sensor response test alone should not bypass the mechanical flow and trapped-air possibilities.

## Documented application

Mazda3 workshop manual 01/2019 onward, d9n1-1a-22d_ver10; PCM (SKYACTIV-X). Verify exact vehicle specification; this is a Mazda application example. [Mazda factory diagnostic page, mirrored by CHARM](https://charm.li/Mazda/Mazda3%2001%2F2019%20-%3E%20%28d9n1-1a-22d_ver10%29/esicont/srvc/html/id0102u9787700.html).
