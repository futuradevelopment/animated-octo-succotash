---
{"entryId": "generic-p05db", "code": "P05DB", "title": "P05DB: Ford's second brake-pedal signal has an invalid frequency result", "description": "Ford's P05DB example concerns the circuit-2 signal path and must be interpreted with the companion pedal-monitor results.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [194, 195, 196, 205]}], "authoringBatch": "batch-42"}
---

# P05DB: Ford's second brake-pedal signal has an invalid frequency result

P05DB identifies the B-side brake-pedal position circuit in the generic catalog. Ford's documented PHEV mapping is more specific: it associates the HPCM's P05DB report with an incorrect frequency on the brake module's second pedal-angle signal path. That is useful detail when a scan description simply says circuit/open.

## Redundancy does not make the two paths interchangeable

The pedal sensor supports the driver's braking-torque request, while the controller separately checks the agreement of its two tracks. A fault on circuit 2 should not automatically be treated as an equivalent fault on circuit 1, or as proof that the physical pedal has moved unexpectedly.

Ford's shared circuit monitor assesses extreme angle values and invalid pulse characteristics. Its signal-format window is 8.3 to 91.7 percent duty cycle with a period between 1735 and 2358 microseconds. The entry table also lists the P05E0 plausibility result, which relates angle information to the brake on/off switch. Retaining those associated observations is important to understanding the event.

## Use the reporting module to retain the diagnosis

The ABS module's C100E family maps to P05DB for this frequency case. A general OBD reader and a brake-module scan can consequently show different identifiers for the same underlying condition. Recording both views can avoid a false impression that unrelated components failed simultaneously.

The summary does not provide connector assignments or authorize substituting one sensor track for another. The appropriate procedure must assess the correct signal path and complete the required brake verification. A plausible pedal value after the event is only one observation; it does not establish that the second track's timing, supply and correlation checks have all passed.

## Source and applicability

Ford Motor Company, [physical page 194](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=194); [physical page 195](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=195); [physical page 196](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=196); [physical page 205](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=205). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
