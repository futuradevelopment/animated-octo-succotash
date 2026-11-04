---
{"entryId": "generic-p04ed", "code": "P04ED", "title": "P04ED: Ford's fresh-air-side purge-flow test", "description": "Ford can set P04ED when the EVAP leak-check module does not observe the expected vacuum response during commanded purge.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [30, 38]}], "authoringBatch": "batch-42"}
---

# P04ED: Ford's fresh-air-side purge-flow test

Ford's hybrid EVAP monitor uses P04ED for a large-leak result on the fresh-air side, but its explanation is more specific than the label alone. The controller commands purge and the changeover valve, then checks whether the leak-check module sees enough change in vacuum. A purge valve that remains closed can produce this result.

## Pressure response must be read with the commands

The test runs with the engine operating, once per driving cycle, while the excessive-vacuum monitor is not running. Ford's typical entry conditions include closed-loop fueling, adequate manifold vacuum, a specified purge-flow command and a valid pressure baseline. These conditions are part of why an idle pressure reading outside a completed monitor cannot reproduce its conclusion.

The summary describes a four-second check and gives a typical fresh-air-side vacuum criterion of less than 8.0 inches of water, approximately 1,993 Pa. These values apply to this documented calibration example; they are not a universal smoke-test pressure or a specification for every hybrid vehicle.

## A leak label does not identify a leak location

A missing response can involve the purge-flow path as well as system sealing. Ford explicitly separates a purge valve's electrical circuit fault, P0443, from this functional observation. Reviewing the requested purge state and supporting circuit or pressure-sensor faults helps prevent a functional failure from being mistaken for proof of one damaged hose.

The related Mode 06 result is also meaningful only after the monitor has run. Ford warns that default zero values can remain for incomplete phases. Successful verification requires a valid completed flow check, not simply a plausible sensor display or a deleted stored code.

## Source and applicability

Ford Motor Company, [physical page 30](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=30); [physical page 38](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=38). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
