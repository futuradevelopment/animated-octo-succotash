---
{"entryId": "generic-p24cc", "code": "P24CC", "title": "P24CC: Audi’s reductant-cap check uses accumulated reducing-agent mass", "description": "The CNRB P24CC functional-check row uses dosed reducing-agent mass plus an offset reaching at least 27.2 kg.", "status": "draft", "sourceReview": "checked", "scope": "2014 Audi Q7 Quick Reference Specification Book, CNRB 3.0L TDI DTC chapter, September 2013. Reducing-agent tank-cap switch monitoring; the source does not provide a complete cap-switch test procedure.", "sourceIds": ["audi-q7-2014-qrsb"], "sourcePages": [{"sourceId": "audi-q7-2014-qrsb", "pages": [172]}], "authoringBatch": "batch-43"}
---

# P24CC: Audi’s reductant-cap check uses accumulated reducing-agent mass

Audi’s CNRB diesel table describes P24CC as a reducing-agent tank-cap switch functional check. Its listed criterion is dosed reducing-agent mass plus an offset reaching at least 27.2 kg. This is different from the voltage thresholds used by the adjacent cap-switch electrical faults.

## Do not read accumulated mass as tank capacity

The source refers to a dosed amount plus an offset, not the quantity presently inside the tank. The 27.2 kg figure therefore should not be presented as a refill volume, a tank-capacity specification or a direct measurement of how much fluid remains.

The summary also does not define the offset, identify a required cap-opening event or state a deadline after refilling. Those missing details prevent the brief row from supporting a complete explanation of the controller’s functional-check sequence.

## Separate functional monitoring from circuit extremes

P24CD is the cap-switch short-to-ground category with signal voltage below 0.65 V. P24CE is the short-to-battery-voltage category above 1.2 V. P24CC’s accumulated-mass criterion must not be replaced by either electrical limit simply because all three refer to the same switch.

A useful diagnostic record retains the exact functional-check code and the vehicle’s relevant service history without assuming a particular refill mistake. The matching CNRB procedure is needed to evaluate the switch and the monitor’s stored state. Verification must address that functional check; clearing the DTC or adding fluid alone does not demonstrate that the underlying criterion has been resolved.

## Source and scope

[2014 Audi Q7 Quick Reference Specification Book, September 2013, physical PDF 172](https://static.nhtsa.gov/odi/tsbs/2013/MC-10073844-2280.pdf#page=172). 2014 Audi Q7 Quick Reference Specification Book, CNRB 3.0L TDI DTC chapter, September 2013. Reducing-agent tank-cap switch monitoring; the source does not provide a complete cap-switch test procedure.
