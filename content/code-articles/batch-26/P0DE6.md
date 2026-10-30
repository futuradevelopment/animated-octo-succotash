---
{"entryId": "generic-p0de6", "code": "P0DE6", "title": "P0DE6: Cherokee hybrid low-cell-voltage fault after extreme-cold cranking", "description": "P0DE6-00 is hybrid or electric battery-pack cell voltage low.", "status": "draft", "sourceReview": "checked", "scope": "FCA bulletin 08-186-26, May 2026: North American 2026 Jeep Cherokee KM with 1.6 L EJN turbo hybrid engine, built December 15, 2025–April 24, 2026.", "sourceIds": ["nhtsa-mc-11032836"], "sourcePages": [{"sourceId": "nhtsa-mc-11032836", "pages": [1, 3, 4]}], "authoringBatch": "batch-26"}
---

# P0DE6: Cherokee hybrid low-cell-voltage fault after extreme-cold cranking

## The update changes confirmation during cold cranking

P0DE6-00 is hybrid or electric battery-pack cell voltage low. This bulletin increases the fault’s maturation time to cover an extreme-cold start in which high-voltage state of charge drops during cranking. It also addresses a possible no-start condition where the vehicle cannot be switched off while the 12-volt system remains powered. The calibration explanation is specific; it does not establish that every genuinely low battery-cell reading is harmless.

## Battery and vehicle-control software must be considered together

The repair checks or updates the battery controller, drive-motor inverter, electric-vehicle controller and PCM. One stated improvement coordinates the battery and vehicle controllers to prevent high-voltage battery drain during programming events. Ask the workshop to record the ambient conditions, complete scan, starting behavior and all four software levels. A battery-code-only repair order could miss the coordinated nature of the manufacturer correction.

## Completion steps prevent a misleading second failure

The prescribed process includes a vehicle sleep cycle after programming; the bulletin warns that omitting it can leave a shutdown message and an engine that will not remain running. It provides a technical-assistance recovery path for a battery-controller security-access failure, and a separate contactor routine when a service replacement controller has been installed. These tasks require the correct hybrid service equipment. After completion, verify normal shutdown and starting, then reassess any returning voltage fault through the vehicle’s diagnostic procedure rather than repeatedly clearing it.

## Source and applicability

FCA bulletin 08-186-26, May 2026: North American 2026 Jeep Cherokee KM with 1.6 L EJN turbo hybrid engine, built December 15, 2025–April 24, 2026.

[Manufacturer bulletin, page 1](https://static.nhtsa.gov/odi/tsbs/2026/MC-11032836-0001.pdf#page=1) · [Manufacturer bulletin, page 3](https://static.nhtsa.gov/odi/tsbs/2026/MC-11032836-0001.pdf#page=3) · [Manufacturer bulletin, page 4](https://static.nhtsa.gov/odi/tsbs/2026/MC-11032836-0001.pdf#page=4)
