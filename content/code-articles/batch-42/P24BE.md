---
{"entryId": "generic-p24be", "code": "P24BE", "title": "P24BE: Ford's leak-check switching-valve circuit reports low", "description": "Ford separates the changeover valve's electrical-driver check from its pressure-based stuck-position tests.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [39, 47]}], "authoringBatch": "batch-42"}
---

# P24BE: Ford's leak-check switching-valve circuit reports low

The changeover valve in Ford's evaporative leak-check module directs the pump's flow through different paths during testing. P24BE is the low-circuit member of the valve's electrical diagnostic pair. It should not be read as a measured low fuel-tank pressure or an automatic verdict that the valve is mechanically stuck.

## Electrical diagnosis precedes the functional interpretation

Ford checks the output driver continuously and allows five seconds for its status. The summary groups open and shorted output-driver conditions under P24BE and P24BF without providing separate pin-voltage limits for every failure mode. A code-specific workshop procedure is therefore needed before assigning a particular wire or resistance value to the low-circuit report.

The distinction from P24C0 and P24C1 is important. Those codes evaluate pressure response at different phases to infer a switching valve that remains energized or fails to change state. An electrical driver problem can prevent that functional sequence from being meaningful.

## Keep the component identity intact

This switching valve belongs to the leak-detection-pump assembly's test path. It is separate from the tank-pressure control valve and the refueling vapor valve in the sealed Ford hybrid fuel arrangement. Similar wording on a generic scan report can otherwise lead attention toward the wrong actuator.

A useful assessment records the exact controller code, driver status and whether the after-run leak monitor completed or aborted. The source supplies monitor logic rather than a replacement instruction. Following the correct vehicle-specific electrical procedure and confirming subsequent valve-test completion provides stronger evidence than assuming that an audible pump or a cleared warning proves the switching circuit is healthy.

## Source and applicability

Ford Motor Company, [physical page 39](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=39); [physical page 47](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=47). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
