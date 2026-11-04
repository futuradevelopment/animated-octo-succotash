---
{"entryId": "generic-p04ef", "code": "P04EF", "title": "P04EF: Ford's small-leak result for the fresh-air side", "description": "Ford qualifies a fresh-air-side EVAP leak result through pump, valve, reference-pressure and vapor-generation checks.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [39, 40, 41, 43, 44]}], "authoringBatch": "batch-42"}
---

# P04EF: Ford's small-leak result for the fresh-air side

P04EF is Ford's documented very-small-leak result for the fresh-air side of its hybrid EVAP system. The controller does not determine that result from a single pressure sample. It first establishes a reference through a calibrated orifice, verifies the pump and switching valve, and then compares the system's vacuum response with that reference.

## The fresh-air side has its own evaluation window

Ford's typical criterion combines normalized pressure below 0.9 with a Phase 2 timeout. The stated fresh-air-side timeout is 100 seconds, whereas the full-system evaluation uses 800 seconds. Applying the longer full-system interval to the fresh-air-side result would mix separate portions of the sequence.

The monitor starts after key-off only when earlier driving conditions qualify it. A temperature-dependent wait of approximately five to seventeen minutes allows the leak-check hardware to cool. Refueling, unsuitable battery voltage or other hardware faults can interrupt the test.

## An early failure indication is not the final verdict

The monitor can initially record a tentative fresh-air-side failure and continue through later qualification steps. Ford compares a second barometric and reference-pressure measurement with the first; unreliable reference results cause an abort rather than confirmation of the inferred leak. Fuel-vapor generation also matters to the broader sealed-system sequence because pressure production can oppose the pump's vacuum.

Diagnostic evidence should identify which phase completed and whether P04EF was confirmed under valid conditions. A zero Mode 06 value may be a default for a phase that never ran. The supported interpretation is a qualified sealing observation for this system, not proof of a particular cap, hose or valve needing replacement.

## Source and applicability

Ford Motor Company, [physical page 39](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=39); [physical page 40](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=40); [physical page 41](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=41); [physical page 43](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=43); [physical page 44](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=44). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
