---
{"entryId": "generic-p24cd", "code": "P24CD", "title": "P24CD: Audi identifies the reductant-cap switch’s low electrical extreme", "description": "The CNRB P24CD row describes a tank-cap switch short-to-ground category below 0.65 V.", "status": "draft", "sourceReview": "checked", "scope": "2014 Audi Q7 Quick Reference Specification Book, CNRB 3.0L TDI DTC chapter, September 2013. Reducing-agent tank-cap switch monitoring; the source does not provide a complete cap-switch test procedure.", "sourceIds": ["audi-q7-2014-qrsb"], "sourcePages": [{"sourceId": "audi-q7-2014-qrsb", "pages": [172]}], "authoringBatch": "batch-43"}
---

# P24CD: Audi identifies the reductant-cap switch’s low electrical extreme

For P24CD, Audi’s CNRB table identifies the reducing-agent tank-cap switch circuit and labels the condition a short to ground. The numerical criterion is signal voltage below 0.65 V. It concerns the switch’s electrical information, not a direct finding that the tank cap is physically open.

## An electrical fault does not establish cap position

The summary does not publish the normal voltage corresponding to each cap state. Consequently, the low-fault threshold cannot be used to label an observed reading as “cap removed” or “cap fitted” without the correct service information. It also does not identify the measurement terminal or detection duration.

The corresponding high fault, P24CE, is above 1.2 V and is categorized as short to battery voltage. Those fault boundaries are not a complete switch truth table. Values between them cannot automatically be declared valid for every operating state.

## Preserve the distinction from the functional check

P24CC uses dosed reducing-agent mass plus an offset rather than this voltage threshold. A functional-check fault and a circuit-low fault therefore ask different diagnostic questions, even though both mention the cap switch.

Qualified fault isolation should establish the exact switch circuit and compare the stored condition with the matching CNRB procedure. The source does not justify replacing the complete reductant tank from this code alone. Verification needs credible cap-switch electrical behavior under the required checks, rather than assuming that reseating the cap or clearing memory resolves a short-to-ground classification.

## Source and scope

[2014 Audi Q7 Quick Reference Specification Book, September 2013, physical PDF 172](https://static.nhtsa.gov/odi/tsbs/2013/MC-10073844-2280.pdf#page=172). 2014 Audi Q7 Quick Reference Specification Book, CNRB 3.0L TDI DTC chapter, September 2013. Reducing-agent tank-cap switch monitoring; the source does not provide a complete cap-switch test procedure.
