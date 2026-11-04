---
{"entryId": "generic-p0eca", "code": "P0ECA", "title": "P0ECA: Ford looks for a pattern of battery-temperature sensor disagreement", "description": "Ford's multi-sensor battery-temperature monitor considers repeated outlier or implausible thermistor observations.", "status": "draft", "sourceReview": "checked", "scope": "Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.", "sourceIds": ["ford-hev-phev-2019-20170512"], "sourcePages": [{"sourceId": "ford-hev-phev-2019-20170512", "pages": [154, 157]}], "authoringBatch": "batch-42"}
---

# P0ECA: Ford looks for a pattern of battery-temperature sensor disagreement

P0ECA is a multiple-sensor temperature-correlation report in Ford's high-voltage battery monitoring. It is broader than one thermistor reading unusually hot. The source describes a pattern involving repeated qualifying observations across the monitored temperature information.

## The average and the extremes both matter

Ford lists three types of qualifying condition: a thermistor differing from the average by more than 25°C, a thermistor reporting above 95°C, or one reporting below−50°C. The wording requires three or more occurrences of these conditions for five seconds. It should not be simplified into a claim that any one momentary temperature excursion automatically sets P0ECA.

The source's wording also does not justify inventing an exact physical map of the affected sensors. The applicable battery procedure is needed to establish which sensor channels and event details are involved on the vehicle.

## Correlation is not proof of uniform pack overheating

A temperature outlier can disagree with the other measurements while the average remains ordinary. Conversely, an extreme value may be inconsistent with the actual thermal state. The code identifies confidence problems in the set of readings; it does not independently determine whether the cause is genuine heat, a sensing circuit or internal electronics.

The BECM uses temperature information when managing the battery and its cooling. Reliable interpretation therefore requires the related temperature-sensor and electrical faults, rather than substituting a cabin-temperature observation or one scan-tool average.

Professional verification should demonstrate credible, appropriately correlated readings through the required checks. The monitor is not an instruction to open or heat the battery pack. A cleared code or a later moderate average temperature cannot by itself show that the multi-sensor disagreement has been resolved.

## Source and applicability

Ford Motor Company, [physical page 154](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=154); [physical page 157](https://www.fordservicecontent.com/ford_content/catalog/motorcraft/OBDSM1901_HEV.pdf#page=157). Ford/Lincoln 2019 MY HEV/PHEV OBD System Operation Summary, printed revision May 12, 2017; historical monitor-specific example, not universal vehicle or calibration applicability.
